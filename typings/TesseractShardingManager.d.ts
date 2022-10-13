import { ShardingManager, ShardingManagerOptions } from "discord.js";
declare class TesseractShardingManager extends ShardingManager {
    constructor(file: string, options?: ShardingManagerOptions);
}
export default TesseractShardingManager;
