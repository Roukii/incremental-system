import {IgtGame} from "incremental-game-template";
import { Features } from "game/Features";

export class IncrementalGod extends IgtGame {
    protected readonly SAVE_KEY: string = 'incremental-system';
    protected readonly TICK_DURATION: number = 0.1;
    features: Features;

    constructor(features: Features) {
        super();
        this.features = features;
    }
}

