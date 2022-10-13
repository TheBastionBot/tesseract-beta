import { CacheType, ChatInputCommandInteraction } from "discord.js";
declare class TesseractLogger {
    static command: (interaction: ChatInputCommandInteraction<CacheType>) => void;
    static error: (...message: unknown[]) => void;
    static ignore: () => void;
    static info: (...message: unknown[]) => void;
    static warn: (...message: unknown[]) => void;
}
export default TesseractLogger;
