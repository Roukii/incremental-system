import { CharacteristicId } from "./CharacteristicId";

export class Characteristic {
    public id: CharacteristicId;
    private value: number;

    constructor(givenId: CharacteristicId, givenValue: number = 0) {
        this.id = givenId;
        this.value = givenValue;
    }

    public Get() {
        return this.value;
    }

    public Set(val: number) {
        this.value = val;
    }

    public Add(val: number) {
        this.value += val;
    }

    public Remove(val: number) {
        this.value -= val;
    }

    public Log() {
        console.log(CharacteristicId, ": ", this.value);
    }
}   
