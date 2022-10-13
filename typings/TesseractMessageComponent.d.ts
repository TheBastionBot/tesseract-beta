import { EventEmitter } from "events";
import { MessageComponentInteraction, PermissionResolvable } from "discord.js";
interface TesseractMessageComponentOptions {
    id: string;
    scope?: "guild" | "dm";
    owner?: boolean;
    clientPermissions?: PermissionResolvable[];
    userPermissions?: PermissionResolvable[];
}
declare abstract class TesseractMessageComponent extends EventEmitter {
    id: string;
    scope?: "guild" | "dm";
    owner?: boolean;
    clientPermissions?: PermissionResolvable[];
    userPermissions?: PermissionResolvable[];
    constructor(options: TesseractMessageComponentOptions);
    abstract exec(interaction: MessageComponentInteraction<"cached">): Promise<unknown> | void;
    toString: () => string;
}
export default TesseractMessageComponent;
