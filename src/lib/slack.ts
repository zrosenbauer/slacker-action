import {IncomingWebhook} from '@slack/webhook';

export interface Input {
  text: string;
  username: string;
  // eslint-disable-next-line camelcase
  icon_emoji: string;
  // eslint-disable-next-line camelcase
  icon_url: string;
}

export async function sendMessage (webhookUrl: string, input: Input): Promise<void> {
  const webhook = new IncomingWebhook(webhookUrl);

  console.log('PAYLOAD');
  console.log({
    text: input.text,
    username: input.username,
    icon_emoji: input.icon_emoji,
    icon_url: input.icon_url
  });

  await webhook.send({
    text: input.text,
    username: input.username,
    icon_emoji: input.icon_emoji,
    icon_url: input.icon_url
  });
}
