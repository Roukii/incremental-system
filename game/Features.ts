import { IgtWallet, IgtSettings, IgtStatistics, IgtAchievements, IgtRedeemableCodes, IgtSpecialEvents,
    IgtInventory, IgtKeyItems, LootTables, IgtFeature, IgtFeatures } from "incremental-game-template";
import { CharacterInfo } from "./CharacterInfo";
import { Equipments } from "./features/equipment/Equipments";
import { ItemList } from "./features/items/ItemList";
import { Skills } from "./features/skill/Skills";
import { ActionList } from "./tools/action/ActionList";
import { ActionQueue } from "./tools/action/ActionQueue";

export interface Features extends IgtFeatures {
    itemList?: ItemList;
    characterInfo?: CharacterInfo;
    equipments?: Equipments;
    skills?: Skills;
    actions?: ActionList;
    actionsQueue?: ActionQueue;
}