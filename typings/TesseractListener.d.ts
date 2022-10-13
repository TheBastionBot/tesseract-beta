import { EventEmitter } from "events";
import { ClientEvents } from "discord.js";
declare abstract class TesseractListener<E extends keyof ClientEvents> extends EventEmitter {
    readonly name: E;
    readonly isOnce?: boolean;
    constructor(name: E, once?: boolean);
    abstract exec(...args: ClientEvents[E]): unknown;
}
export default TesseractListener;
