import { IncomingWebhook } from '@slack/webhook';

export interface Input {
  text: string;
  channel: string;
}

export interface Config {
  text: string;
  channel?: string;
  username?: string;
  iconEmoji?: string;
  iconUrl?: string;
}

export function buildConfig (input: Input): Config {
  return {
    text: input.text,
    channel: input.channel
  };
}

export async function sendMessage (webhookUrl: string, config: Config): Promise<void> {
  const webhook = new IncomingWebhook(webhookUrl);

  await webhook.send({
    text: config.text,
    channel: config.channel
  });
}
