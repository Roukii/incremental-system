import { MainCharacteristicId } from "./BarCharacteristicId";
import { ICharacteristic } from "../ICharacteristic";

export class BarCharacteristic extends ICharacteristic {
    public id: BarCharacteristicId;
    
    constructor(givenId: BarCharacteristicId, givenValue: number = 0, limit: number = 0) {
        super(givenValue, limit);
        this.id = givenId;
    }

    public Log() {
        console.log(this.id, ": ", this.value);
    }
}   
