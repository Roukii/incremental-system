import {IgtGame} from "incremental-game-template";
import {feature} from "./feature";

export class incrementalGod extends IgtGame {
    protected readonly SAVE_KEY: string = 'igt-vue';
    protected readonly TICK_DURATION: number = 0.01;
    features: feature;

    constructor(features: feature) {
        super();
        this.features = features;
    }
}

