import { CharacteristicId } from "./CharacteristicId";
import { ICharacteristic } from "./ICharacteristic";

export class Characteristic extends ICharacteristic {
    public id: CharacteristicId;
    
    constructor(givenId: CharacteristicId, givenValue: number = 0, limit: number = 0) {
        super(givenValue, limit);
        this.id = givenId;
    }

    public Log() {
        console.log(this.id, ": ", this.value);
    }
}   
