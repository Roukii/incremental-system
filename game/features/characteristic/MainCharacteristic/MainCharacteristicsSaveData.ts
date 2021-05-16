
import {SaveData} from "incremental-game-template";
import { MainCharacteristicId } from "./MainCharacteristicId";

export interface MainCharacteristicsSaveData extends SaveData {
    characteristics: {
        id: MainCharacteristicId;
        value: number;
    }[];
}