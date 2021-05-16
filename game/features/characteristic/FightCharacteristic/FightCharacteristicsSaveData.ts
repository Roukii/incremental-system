
import {SaveData} from "incremental-game-template";
import { CharacteristicId } from "./CharacteristicId";

export interface CharacteristicsSaveData extends SaveData {
    characteristics: {
        id: CharacteristicId;
        value: number;
    }[];
}