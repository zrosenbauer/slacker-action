import * as core from '@actions/core';

import * as slack from './lib/slack';

const availableInputs = [
  'username',
  'channel',
  'text',
  'icon_emoji',
  'icon_url'
];

(async function () {
  try {
    const webhookUrl = process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : core.getInput('webhook_url');

    if (!webhookUrl) {
      throw new Error('"webhook_url" input must be set');
    }

    const config = {} as slack.Config;

    availableInputs.forEach((availableInput) => {
      config[availableInput as keyof slack.Config] = core.getInput(availableInput);
    });

    await slack.sendMessage(webhookUrl, config);
  } catch (err) {
    core.setFailed(err.message);
  }
})();
