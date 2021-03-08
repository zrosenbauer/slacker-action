"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const slack = __importStar(require("./lib/slack"));
const availableInputs = [
    'username',
    'text',
    'icon_emoji',
    'icon_url'
];
(async function () {
    try {
        const webhookUrl = process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : core.getInput('webhook_url');
        if (!webhookUrl) {
            throw new Error('"webhook_url" input must be set');
        }
        const config = {};
        availableInputs.forEach((availableInput) => {
            config[availableInput] = core.getInput(availableInput);
        });
        await slack.sendMessage(webhookUrl, config);
    }
    catch (err) {
        core.setFailed(err.message);
    }
})();
//# sourceMappingURL=main.js.map