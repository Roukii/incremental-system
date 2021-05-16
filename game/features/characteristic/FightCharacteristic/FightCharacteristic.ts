import { FightCharacteristicId } from "../fightCharacteristics/FightCharacteristicId";
import { ICharacteristic } from "./ICharacteristic";

export class FightCharacteristic extends ICharacteristic {
    public id: FightCharacteristicId;
    
    constructor(givenId: FightCharacteristicId, givenValue: number = 0, limit: number = 0) {
        super(givenValue, limit)
        this.id = givenId;
    }

    public Log() {
        console.log(this.id, ": ", this.value);
    }
}   
