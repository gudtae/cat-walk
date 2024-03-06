import Phaser from "phaser";
import { config } from "./config";

export const Game = (): Phaser.Game => {
    return new Phaser.Game(config);
}