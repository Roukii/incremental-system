import {IgtGame} from "incremental-game-template";
import {IgtFeatures} from "incremental-game-template";

export class IncrementalGod extends IgtGame {
    protected readonly SAVE_KEY: string = 'incremental-system';
    protected readonly TICK_DURATION: number = 0.01;
    features: IgtFeatures;

    constructor(features: IgtFeatures) {
        super();
        this.features = features;
    }
}

