"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const webhook_1 = require("@slack/webhook");
async function sendMessage(webhookUrl, config) {
    const webhook = new webhook_1.IncomingWebhook(webhookUrl);
    await webhook.send({
        text: config.text,
        username: config.username,
        icon_emoji: config.icon_emoji,
        icon_url: config.icon_url
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=slack.js.map