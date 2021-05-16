import { BarCharacteristic } from "./BarCharacteristic";
import { BarCharacteristicId } from "./BarCharacteristicId";
import { BarCharacteristicsSaveData } from "./BarCharacteristicsSaveData"

export class BarCharacteristicsInfo {
    barCharacteristics: BarCharacteristic[];

    HP: BarCharacteristic; 
    MP: BarCharacteristic;
    SP: BarCharacteristic;
    stress: BarCharacteristic;
    sanity: BarCharacteristic; 
    
    constructor() {
        this.HP = new BarCharacteristic(BarCharacteristicId.HP, 0);
        this.MP = new BarCharacteristic(BarCharacteristicId.MP, 0);
        this.SP = new BarCharacteristic(BarCharacteristicId.SP, 0);
        this.stress = new BarCharacteristic(BarCharacteristicId.Stress, 0);
        this.sanity = new BarCharacteristic(BarCharacteristicId.Sanity, 0);
        this.barCharacteristics = [
            this.HP,
            this.MP,
            this.SP,
            this.stress,
            this.sanity,
        ];
    }

    getCharacteristic(id: BarCharacteristicId) {
        return this.barCharacteristics.find(characteristic => {
            return characteristic.id === id;
        })
    }

    addCharacteristic(id: BarCharacteristicId, value: number) {
        this.getCharacteristic(id).Add(value);
    }

    reduceCharacteristic(id: BarCharacteristicId, value: number) {
        this.getCharacteristic(id).Reduce(value);
    }

    getAmount(id: BarCharacteristicId) {
        return this.barCharacteristics.find(characteristic => {
            return characteristic.id === id;
        }).Get();
    }

    load(data: BarCharacteristicsSaveData): void {
        if (data.characteristics) {
            data.characteristics.forEach(savedCharacteristic => {
                const characteristic = this.getCharacteristic(savedCharacteristic.id);
                if (characteristic) {
                    characteristic.Set(savedCharacteristic.value);
                }
            })
        }
    }

    save(): BarCharacteristicsSaveData {
        const characteristics = this.barCharacteristics.map(characteristic => {
            return {
                id: characteristic.id,
                value: characteristic.Get(),
            }
        });
        return {
            characteristics: characteristics
        }
    }
    
}   
