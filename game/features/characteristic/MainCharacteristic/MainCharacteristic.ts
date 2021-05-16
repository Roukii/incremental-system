import { MainCharacteristicId } from "./MainCharacteristicId";
import { ICharacteristic } from "../ICharacteristic";

export class MainCharacteristic extends ICharacteristic {
    public id: MainCharacteristicId;
    
    constructor(givenId: MainCharacteristicId, givenValue: number = 0, limit: number = 0) {
        super(givenValue, limit);
        this.id = givenId;
    }

    public Log() {
        console.log(this.id, ": ", this.value);
    }
}   
