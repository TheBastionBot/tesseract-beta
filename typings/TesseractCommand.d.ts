import { EventEmitter } from "events";
import { ApplicationCommandOptionChoiceData, ApplicationCommandOptionType, ChatInputCommandInteraction, PermissionResolvable } from "discord.js";
import { ChannelType } from "discord-api-types/v10";
interface TesseractCommandParameter {
    type: ApplicationCommandOptionType;
    name: string;
    description: string;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceData[];
    options?: TesseractCommandParameter[];
    channel_types?: ChannelType[];
    min_value?: number;
    max_value?: number;
    autocomplete?: boolean;
}
interface TesseractCommandOptions {
    name: string;
    description: string;
    enabled?: boolean;
    options?: TesseractCommandParameter[];
    unsafe?: boolean;
    nsfw?: boolean;
    scope?: "guild" | "dm";
    owner?: boolean;
    clientPermissions?: PermissionResolvable[];
    userPermissions?: PermissionResolvable[];
}
declare abstract class TesseractCommand extends EventEmitter {
    group?: string;
    name: string;
    description: string;
    enabled?: boolean;
    options?: TesseractCommandParameter[];
    unsafe?: boolean;
    nsfw?: boolean;
    owner?: boolean;
    clientPermissions?: PermissionResolvable[];
    userPermissions?: PermissionResolvable[];
    constructor(options: TesseractCommandOptions);
    abstract exec(interaction: ChatInputCommandInteraction<"cached">): Promise<unknown> | void;
    toString: () => {
        name: string;
        description: string;
        options: TesseractCommandParameter[];
    };
}
export default TesseractCommand;
