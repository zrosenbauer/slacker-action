import * as core from '@actions/core';

import * as slack from './lib/slack';

const availableInputs = ['username', 'text', 'icon_emoji', 'icon_url'];

(async function () {
  try {
    const webhookUrl = process.env.WEBHOOK_URL
      ? process.env.WEBHOOK_URL
      : core.getInput('webhook_url');

    if (!webhookUrl) {
      throw new Error('"webhook_url" input must be set');
    }

    const config = {} as slack.Input;

    availableInputs.forEach(availableInput => {
      const value = core.getInput(availableInput);

      if (value) {
        config[availableInput as keyof slack.Input] = value;
      }
    });

    core.info(JSON.stringify(config));
    await slack.sendMessage(webhookUrl, config);
  } catch (err) {
    core.setFailed(err.message);
  }
})();
