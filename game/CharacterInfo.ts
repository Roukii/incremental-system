import {Currency, IgtFeature, IgtFeatures, SaveData, IgtWallet} from "incremental-game-template";
import { MainCharacteristicsInfo } from "./features/characteristic/MainCharacteristic/MainCharacteristicsInfo";
import { FightCharacteristicsInfo } from "./features/characteristic/FightCharacteristic/FightCharacteristicsInfo";
import { CurrencyType } from "./wallet/CurrencyType";


export class CharacterInfo extends IgtFeature {
    wallet : IgtWallet;
    sinceLastUpdate = 1;
    mainCharacteristics: MainCharacteristicsInfo;
    fightCharacteristics: FightCharacteristicsInfo;
    constructor() {
        super('character-info')
    }

    initialize(features: IgtFeatures) {
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