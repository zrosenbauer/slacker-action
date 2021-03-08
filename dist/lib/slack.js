"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const webhook_1 = require("@slack/webhook");
async function sendMessage(webhookUrl, input) {
    const webhook = new webhook_1.IncomingWebhook(webhookUrl);
    await webhook.send({
        text: input.text,
        username: input.username,
        icon_emoji: input.icon_emoji,
        icon_url: input.icon_url
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=slack.js.map