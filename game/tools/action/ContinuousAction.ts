import {IgtAction, Requirement, NoRequirement} from "incremental-game-template";

export class ContinuousAction extends IgtAction {

    constructor(description: string, duration: number, requirement: Requirement = new NoRequirement()) {
        super(description, duration, 1, requirement);
    }

    gainReward(): boolean {
        this.repeat += 1;
        return true;
    }
}