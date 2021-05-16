import { Features } from "game/Features";
import {IgtFeature, IgtAction, SaveData} from "incremental-game-template";
import {clone} from "lodash-es";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";

export class ActionQueue extends IgtFeature {
    actionQueue: IgtAction[] = [];
    maxActions: number = 10;

    private _onActionCompletion = new SimpleEventDispatcher<IgtAction>();

    public get onActionCompletion(): ISimpleEvent<IgtAction> {
        return this._onActionCompletion.asEvent();
    }

    constructor() {
        super('adventurer');
    }

    update(delta: number) {
        if (this.actionQueue.length > 0) {
            if (!this.actionQueue[0].isStarted) {
                const couldStart = this.actionQueue[0].start();
                if (!couldStart) {
                    this.removeFirstAction();
                }
            }
        }
        if (this.actionQueue.length > 0) {
            if (this.actionQueue[0].getProgress().actual > this.actionQueue[0].getProgress().target) {
                this.removeFirstAction();
            }
        }

        // Check again in case first action is removed
        if (this.actionQueue.length > 0) {
            this.actionQueue[0].perform(delta);
        }
    }

    initialize(features: Features) {
    }

    cancelAction(index: number) {
        const action = this.actionQueue[index];

        if (action == null) {
            console.error(`Could not find and cancel action at index ${index}`);
            return;

        }
        this.cancelActionsFromIndex(index, false);
    }

    cancelActionsFromIndex(index: number, cascade: boolean) {
        if (!cascade) {
            this.actionQueue[index].stop();
            this.actionQueue.splice(index, 1);
            return;
        }
        for (let i = index; i < this.actionQueue.length; i++) {
            this.actionQueue[i].stop();
        }
        this.actionQueue = this.actionQueue.slice(0, index);
    }

    addAction(a: IgtAction, repeat: number = -1) {
        // Unfortunately we cannot clone deep as we would lose features
        const action = clone(a);

        // Reset events to avoid cloning issues
        //action.resetEvents();

        if (repeat !== -1) {
            action.repeat = repeat;
        }

        // No need to schedule an action for now if we can't perform it.
        if (this.actionQueue.length === 0 && !action.canPerform()) {
            return;
        }

        if (this.actionQueue.length >= this.maxActions) {
            console.log(`You already have ${this.maxActions} actions scheduled.`);
            return;
        }

        action.onCompletion.subscribe((action) => {
            this._onActionCompletion.dispatch(action);
        })

        this.actionQueue.push(action);
    }

    // Could be improved to be more bug-safe
    removeFirstAction() {
        this.actionQueue.shift();
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }


}