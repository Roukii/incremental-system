import { AbstractConsumable, AbstractItem } from "incremental-game-template";
import { ItemId } from "../../ItemId";
import { ItemType } from "../../ItemType";

export class Stone extends AbstractConsumable {
    consumeLabel: string;
    
    consume(): void {
        throw new Error("Method not implemented.");
    }
    canConsume(): boolean {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super('Stone', "Might be useful", ItemId.Stone, ItemType.Consumable);
    }
}