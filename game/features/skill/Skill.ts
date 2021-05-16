import {ContinuousExpLevel} from "incremental-game-template";
import {SkillId} from "./SkillId";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";

export class Skill extends ContinuousExpLevel {
    name: string;
    id: SkillId;

    protected _onLevelUp = new SimpleEventDispatcher<Skill>();

    constructor(name: string, id: SkillId) {
        super(99, (level) => {
            return 1 / 8 * (level ** 2 - level + 600 * (2 ** (level / 7) - 2 ** (1 / 7)) / (2 ** (1 / 7) - 1))
        });
        this.name = name;
        this.id = id;
    }


    /**
     * Emitted whenever enough xp is gained to level up
     * @private
     */
    public get onLevelUp(): ISimpleEvent<Skill> {
        return this._onLevelUp.asEvent();
    }
}