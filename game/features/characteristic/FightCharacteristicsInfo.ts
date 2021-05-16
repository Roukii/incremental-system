import { Characteristic } from "./Characteristic";
import { CharacteristicId } from "./CharacteristicId";

export class CharacteristicsInfo {
    characteristics: Characteristic[];

    strength: Characteristic; 
    endurance: Characteristic;
    vitality: Characteristic;
    dexterity: Characteristic;
    agility: Characteristic; 
    intelligence: Characteristic;
    willpower: Characteristic;
    perception: Characteristic;
    
    constructor() {
        this.strength = new Characteristic(CharacteristicId.Strength, 0);
        this.vitality = new Characteristic(CharacteristicId.Vitality, 0);
        this.dexterity = new Characteristic(CharacteristicId.Dexterity, 0);
        this.agility = new Characteristic(CharacteristicId.Agility, 0);
        this.intelligence = new Characteristic(CharacteristicId.Intelligence, 0);
        this.willpower = new Characteristic(CharacteristicId.Willpower, 0);
        this.perception = new Characteristic(CharacteristicId.Perception, 0);
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

    getCharacteristic(id: CharacteristicId) {
        return this.characteristics.find(characteristic => {
            return characteristic.id === id;
        })
    }

    addCharacteristic(id: CharacteristicId, value: number) {
        this.getCharacteristic(id).Add(value);
    }

    reduceCharacteristic(id: CharacteristicId, value: number) {
        this.getCharacteristic(id).Reduce(value);
    }
    
}   
