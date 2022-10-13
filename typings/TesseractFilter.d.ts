import { EventEmitter } from "events";
import { Message } from "discord.js";
declare abstract class TesseractFilter extends EventEmitter {
    readonly name: string;
    constructor(name: string);
    abstract exec(message: Message<boolean>): Promise<boolean>;
}
export default TesseractFilter;
