
import {SaveData} from "incremental-game-template";
import { FightCharacteristicId } from "./FightCharacteristicId";

export interface FightCharacteristicsSaveData extends SaveData {
    characteristics: {
        id: FightCharacteristicId;
        value: number;
    }[];
}