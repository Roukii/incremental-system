
import {SaveData} from "incremental-game-template";
import { ItemId } from "../items/ItemId";
import {EquipmentSlotId} from "./EquipmentSlotId";

export interface EquipmentSlotsSaveData extends SaveData {
    equipments: {
        equipmentSlotId: EquipmentSlotId;
        itemId: ItemId;
    }[];
}