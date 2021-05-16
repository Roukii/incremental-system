import { FightCharacteristic } from "./FightCharacteristic";
import { FightCharacteristicId } from "./FightCharacteristicId";
import { FightCharacteristicsSaveData } from "./FightCharacteristicsSaveData"

export class FightCharacteristicsInfo {
    fightCharacteristics: FightCharacteristic[];

    attackSpeed: FightCharacteristic; 
    physicalDamage: FightCharacteristic;
    spellElementDamage: FightCharacteristic;
    spellSpeed: FightCharacteristic;
    hitChance: FightCharacteristic; 
    criticalChance: FightCharacteristic;
    criticalDamage: FightCharacteristic;
    armor: FightCharacteristic;
    dodge: FightCharacteristic;
    spellDodge: FightCharacteristic;
    regenHP: FightCharacteristic;
    regenSP: FightCharacteristic;
    regenMP: FightCharacteristic;
    escapeChance: FightCharacteristic;
    
    constructor() {
        this.attackSpeed = new FightCharacteristic(FightCharacteristicId.AttackSpeed, 0);
        this.physicalDamage = new FightCharacteristic(FightCharacteristicId.PhysicalDamages, 0);
        this.spellElementDamage = new FightCharacteristic(FightCharacteristicId.SpellElementDamages, 0, 100);
        this.spellSpeed = new FightCharacteristic(FightCharacteristicId.SpellSpeed, 0);
        this.hitChance = new FightCharacteristic(FightCharacteristicId.HitChance, 0, 100);
        this.criticalChance = new FightCharacteristic(FightCharacteristicId.CriticalChance, 0, 100);
        this.criticalDamage = new FightCharacteristic(FightCharacteristicId.CriticalDamage, 0, 100);
        this.armor = new FightCharacteristic(FightCharacteristicId.Armor, 0, 100);
        this.dodge = new FightCharacteristic(FightCharacteristicId.Dodge, 0, 100);
        this.spellDodge = new FightCharacteristic(FightCharacteristicId.SpellDodge, 0, 100);
        this.regenHP = new FightCharacteristic(FightCharacteristicId.RegenHP, 0);
        this.regenSP = new FightCharacteristic(FightCharacteristicId.RegenSP, 0);
        this.regenMP = new FightCharacteristic(FightCharacteristicId.RegenMP, 0, 100);
        this.escapeChance = new FightCharacteristic(FightCharacteristicId.EscapeChance, 0, 100);
        this.fightCharacteristics = [
            this.attackSpeed,
            this.physicalDamage,
            this.spellElementDamage,
            this.spellSpeed,
            this.hitChance,
            this.criticalChance,
            this.criticalDamage,
            this.armor,
            this.dodge,
            this.spellDodge,
            this.regenHP,
            this.regenSP,
            this.regenMP,
            this.escapeChance,
        ];
    }

    getCharacteristic(id: FightCharacteristicId) {
        return this.fightCharacteristics.find(characteristic => {
            return characteristic.id === id;
        })
    }

    addCharacteristic(id: FightCharacteristicId, value: number) {
        this.getCharacteristic(id).Add(value);
    }

    reduceCharacteristic(id: FightCharacteristicId, value: number) {
        this.getCharacteristic(id).Reduce(value);
    }

    getAmount(id: FightCharacteristicId) {
        return this.fightCharacteristics.find(characteristic => {
            return characteristic.id === id;
        }).Get();
    }

    load(data: FightCharacteristicsSaveData): void {
        if (data.characteristics) {
            data.characteristics.forEach(savedCharacteristic => {
                const characteristic = this.getCharacteristic(savedCharacteristic.id);
                if (characteristic) {
                    characteristic.Set(savedCharacteristic.value);
                }
            })
        }
    }

    save(): FightCharacteristicsSaveData {
        const characteristics = this.fightCharacteristics.map(characteristic => {
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
