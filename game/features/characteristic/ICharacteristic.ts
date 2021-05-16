import { CharacteristicId } from "./CharacteristicId";

export abstract class ICharacteristic {
    protected value: number;
    protected limit: number;

    constructor(val: number = 0, lim: number = 0) {
        this.value = val;
        this.limit = lim;
    }

    public Get() {
        return this.value;
    }

    public Set(val: number) {
        if (this.limit > 0 && val > this.limit) {
            console.log("Cannot be larger than limit");
            this.value = this.limit;
        } else {
            this.value = val;
        }
    }

    public Add(val: number) {
        if (this.limit > 0 && val > this.limit) {
            console.log("Cannot be larger than limit");
            this.value = this.limit;
        } else {
            this.value += val;
        }
    }

    public Reduce(val: number) {
        this.value -= val;
        if (this.value < 0) {
            console.log("Cannot be less than 0")
            this.value = 0;
        }
    }
}   
