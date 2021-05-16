import {IgtAction, Requirement, NoRequirement} from "incremental-game-template";

export class ContinuousAction extends IgtAction {

    constructor(description: string, duration: number, requirement: Requirement = new NoRequirement()) {
        super(description, duration, Infinity, requirement);
    }

    gainReward(): boolean {
        return true;
    }
}