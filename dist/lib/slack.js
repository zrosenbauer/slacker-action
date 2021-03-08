"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.buildConfig = void 0;
const webhook_1 = require("@slack/webhook");
function buildConfig(input) {
    return {
        text: input.text
    };
}
exports.buildConfig = buildConfig;
async function sendMessage(webhookUrl, config) {
    const webhook = new webhook_1.IncomingWebhook(webhookUrl);
    await webhook.send({
        text: config.text
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=slack.js.map