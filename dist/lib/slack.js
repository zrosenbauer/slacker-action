"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.buildConfig = void 0;
const webhook_1 = require("@slack/webhook");
function buildConfig(input) {
    const webhookUrl = process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : input.webhook_url;
    if (!webhookUrl) {
        throw new Error('"webhook_url" input must be set');
    }
    return {
        webhookUrl,
        text: input.text
    };
}
exports.buildConfig = buildConfig;
async function sendMessage(webhookUrl, config) {
    const webhook = new webhook_1.IncomingWebhook(config.webhookUrl);
    await webhook.send({
        text: config.text
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=slack.js.map