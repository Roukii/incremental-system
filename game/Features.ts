import { IgtWallet, IgtSettings, IgtStatistics, IgtAchievements, IgtRedeemableCodes, IgtSpecialEvents,
    IgtInventory, IgtKeyItems, LootTables, IgtItemList } from "incremental-game-template";
import { CharacterInfo } from "./CharacterInfo";

export interface Features {
    wallet?: IgtWallet;
    settings?: IgtSettings;
    codes?: IgtRedeemableCodes;
    inventory?: IgtInventory;
    itemList?: IgtItemList;
    keyItems?: IgtKeyItems;
    lootTables?: LootTables;
    specialEvents?: IgtSpecialEvents;
    statistics?: IgtStatistics;
    achievements?: IgtAchievements;
    characterInfo?: CharacterInfo;
}