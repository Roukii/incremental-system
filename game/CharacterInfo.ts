import {Currency, IgtFeature, IgtFeatures, SaveData, IgtWallet} from "incremental-game-template";
import { CurrencyType } from "./wallet/CurrencyType";


export class CharacterInfo extends IgtFeature {
    wallet : IgtWallet;

    constructor(wallet: IgtWallet) {
        super('character-info')
        this.wallet = wallet;
    }
    update(delta: number) {
        this.wallet = new IgtWallet([CurrencyType.Exp]);
        this.wallet.gainCurrency(new Currency(10, CurrencyType.Exp));
        console.log(this.wallet)
    }

    load(data: SaveData): void {
        throw new Error("Method not implemented.");
    }

    save(): SaveData {
        throw new Error("Method not implemented.");
    }

}