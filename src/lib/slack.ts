import {IncomingWebhook} from '@slack/webhook';

export interface Input {
  text: string;
  // eslint-disable-next-line camelcase
  webhook_url?: string;
}

export interface Config {
  webhookUrl: string;
  text: string;
  channel?: string;
  username?: string;
  iconEmoji?: string;
  iconUrl?: string;
}

export function buildConfig (input: Input): Config {
  const webhookUrl = process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : input.webhook_url;
  if (!webhookUrl) {
    throw new Error('"webhook_url" input must be set');
  }

  return {
    webhookUrl,
    text: input.text
  };
}

export async function sendMessage (webhookUrl: string, config: Config): Promise<void> {
  const webhook = new IncomingWebhook(config.webhookUrl);

  await webhook.send({
    text: config.text
  });
}
