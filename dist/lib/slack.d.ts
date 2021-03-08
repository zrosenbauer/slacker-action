export interface Input {
    text?: string;
    username?: string;
    icon_emoji?: string;
    icon_url?: string;
}
export declare function sendMessage(webhookUrl: string, input: Input): Promise<void>;
