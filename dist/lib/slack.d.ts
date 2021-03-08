export interface Input {
    text: string;
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
export declare function buildConfig(input: Input): Config;
export declare function sendMessage(webhookUrl: string, config: Config): Promise<void>;
