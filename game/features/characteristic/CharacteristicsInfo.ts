import { Characteristic } from "./Characteristic";
import { CharacteristicId } from "./CharacteristicId";

export class CharacteristicsInfo {
    public Strength: Characteristic = new Characteristic(CharacteristicId.Strength, 0);
    public Endurance: Characteristic = new Characteristic(CharacteristicId.Endurance, 0);
    public Vitaly: Characteristic = new Characteristic(CharacteristicId.Vitality, 0);
    public Dexterity: Characteristic = new Characteristic(CharacteristicId.Dexterity, 0);
    public Agility: Characteristic = new Characteristic(CharacteristicId.Agility, 0);
    public Intelligence: Characteristic = new Characteristic(CharacteristicId.Intelligence, 0);
    public Willpower: Characteristic = new Characteristic(CharacteristicId.Willpower, 0);
    public Perception: Characteristic = new Characteristic(CharacteristicId.Perception, 0);
    private characteristicDict: Record<CharacteristicId, Characteristic>;//{ [key: CharacteristicId]: Characteristic};

    constructor(chars: Record<CharacteristicId, Characteristic>) {
    }
    
}   
