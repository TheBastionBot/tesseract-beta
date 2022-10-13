import { Snowflake } from "discord.js";
import { AudioPlayer } from "@discordjs/voice";
export declare namespace tesseract {
    interface Settings {
        owners?: string[];
        token?: string;
        mongoURI?: string;
        safeMode?: boolean;
    }
}
export declare namespace music {
    interface Studio {
        player: AudioPlayer;
        queue: Song[];
    }
    interface Song {
        name: string;
        url: string;
        duration: number;
        user: Snowflake;
    }
}
