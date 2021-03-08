import {IncomingWebhook} from '@slack/webhook';

export interface Input {
  text: string;
  username: string;
  // eslint-disable-next-line camelcase
  icon_emoji: string;
  // eslint-disable-next-line camelcase
  icon_url: string;
}

export interface Config {
  text: string;
  username?: string;
  iconEmoji?: string;
  iconUrl?: string;
}

export function buildConfig (input: Input): Config {
  return {
    text: input.text,
    username: input.username
  };
}

export async function sendMessage (webhookUrl: string, config: Config): Promise<void> {
  const webhook = new IncomingWebhook(webhookUrl);

  await webhook.send({
    text: config.text,
    username: config.username,
    icon_emoji: config.iconEmoji,
    icon_url: config.iconUrl
  });
}
