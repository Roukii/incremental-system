import {ContinuousExpLevel} from "incremental-game-template";
import {EquipmentSlotId} from "./EquipmentSlotId";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import { ItemId } from "../items/ItemId";

export class EquipmentSlot {
    name: string;
    equipmentSlotId: EquipmentSlotId;
    itemId: ItemId;

    protected _onUnequip = new SimpleEventDispatcher<EquipmentSlot>();
    protected _onEquip = new SimpleEventDispatcher<EquipmentSlot>();

    constructor(name: string, id: EquipmentSlotId) {
        this.name = name;
        this.equipmentSlotId = id;
    }

    public equip(itemId : ItemId) {
        this.itemId = itemId;
    }

    public getItemId(): ItemId {
        return this.itemId
    }

    /**
     * Emitted whenever enough xp is gained to level up
     * @private
     */
    public get onUnequip(): ISimpleEvent<EquipmentSlot> {
        return this._onUnequip.asEvent();
    }
    public get onEquip(): ISimpleEvent<EquipmentSlot> {
        return this._onEquip.asEvent();
    }

}