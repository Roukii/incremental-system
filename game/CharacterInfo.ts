import {Currency, IgtFeature, SaveData, IgtWallet, IgtAction} from "incremental-game-template";
import { Features } from "./Features";
import { MainCharacteristicsInfo } from "./features/characteristic/MainCharacteristic/MainCharacteristicsInfo";
import { FightCharacteristicsInfo } from "./features/characteristic/FightCharacteristic/FightCharacteristicsInfo";
import { BarCharacteristicsInfo } from "./features/characteristic/BarCharacteristic/BarCharacteristicsInfo";
import { CurrencyType } from "./wallet/CurrencyType";

export class CharacterInfo extends IgtFeature {
    wallet : IgtWallet;
    sinceLastUpdate = 1;
    mainCharacteristics: MainCharacteristicsInfo;
    fightCharacteristics: FightCharacteristicsInfo;
    barCharacteristics: BarCharacteristicsInfo;

    constructor() {
        super('character-info')
    }

    initialize(features: Features) {
        super.initialize(features);
        this.wallet = features.wallet;
    }

    update(delta: number) {
        this.sinceLastUpdate -= delta;
        if (this.sinceLastUpdate < 0) {
            this.wallet.gainCurrency(new Currency(10, CurrencyType.Idea));
            this.sinceLastUpdate = 1;
        }
    }
    
    load(data: SaveData): void {
    }

    save(): SaveData {
        return {}
    }

}