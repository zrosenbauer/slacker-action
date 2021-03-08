"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.buildConfig = void 0;
const webhook_1 = require("@slack/webhook");
function buildConfig(input) {
    return {
        text: input.text,
        username: input.username
    };
}
exports.buildConfig = buildConfig;
async function sendMessage(webhookUrl, config) {
    const webhook = new webhook_1.IncomingWebhook(webhookUrl);
    await webhook.send({
        text: config.text,
        username: config.username
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=slack.js.map