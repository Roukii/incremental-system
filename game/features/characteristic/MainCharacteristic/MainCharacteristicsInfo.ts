import { MainCharacteristic } from "./MainCharacteristic";
import { MainCharacteristicId } from "./CharacteristicId";
import { MainCharacteristicsSaveData } from "./MainCharacteristicsSaveData"

export class MainCharacteristicsInfo {
    characteristics: MainCharacteristic[];

    strength: MainCharacteristic; 
    endurance: MainCharacteristic;
    vitality: MainCharacteristic;
    dexterity: MainCharacteristic;
    agility: MainCharacteristic; 
    intelligence: MainCharacteristic;
    willpower: MainCharacteristic;
    perception: MainCharacteristic;
    
    constructor() {
        this.strength = new MainCharacteristic(MainCharacteristicId.Strength, 0);
        this.vitality = new MainCharacteristic(MainCharacteristicId.Vitality, 0);
        this.dexterity = new MainCharacteristic(MainCharacteristicId.Dexterity, 0);
        this.agility = new MainCharacteristic(MainCharacteristicId.Agility, 0);
        this.intelligence = new MainCharacteristic(MainCharacteristicId.Intelligence, 0);
        this.willpower = new MainCharacteristic(MainCharacteristicId.Willpower, 0);
        this.perception = new MainCharacteristic(MainCharacteristicId.Perception, 0);
        this.characteristics = [
            this.strength,
            this.endurance,
            this.vitality,
            this.dexterity,
            this.agility,
            this.intelligence,
            this.willpower,
            this.perception,
        ];
    }

    getCharacteristic(id: MainCharacteristicId) {
        return this.characteristics.find(characteristic => {
            return characteristic.id === id;
        })
    }

    addCharacteristic(id: MainCharacteristicId, value: number) {
        this.getCharacteristic(id).Add(value);
    }

    reduceCharacteristic(id: MainCharacteristicId, value: number) {
        this.getCharacteristic(id).Reduce(value);
    }

    load(data: MainCharacteristicsSaveData): void {
        if (data.characteristics) {
            data.characteristics.forEach(savedCharacteristic => {
                const characteristic = this.getCharacteristic(savedCharacteristic.id);
                if (characteristic) {
                    characteristic.Set(savedCharacteristic.value);
                }
            })
        }
    }

    save(): MainCharacteristicsSaveData {
        const characteristics = this.characteristics.map(characteristic => {
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
