
import {SaveData} from "incremental-game-template";
import { BarCharacteristicId } from "./BarCharacteristicId";

export interface BarCharacteristicsSaveData extends SaveData {
    characteristics: {
        id: BarCharacteristicId;
        value: number;
    }[];
}