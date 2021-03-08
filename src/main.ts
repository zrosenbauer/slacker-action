import * as core from '@actions/core';

import * as slack from './lib/slack';

const availableInputs = [
  'username',
  'channel',
  'text',
  'webhook_url'
];

(async function () {
  try {
    const webhookUrl = core.getInput('webhook_url');
    const config = {} as slack.Config;

    availableInputs.forEach((availableInput) => {
      config[availableInput as keyof slack.Config] = core.getInput(availableInput);
    });

    await slack.sendMessage(webhookUrl, config);
  } catch (err) {
    core.setFailed(err.message);
  }
})();
