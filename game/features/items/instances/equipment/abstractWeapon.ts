import { ItemId } from "../../ItemId";
import { ItemType } from "../../ItemType";
import { AbstractEquipment } from "./abstractEquipment";

export class AbstractWeapon extends AbstractEquipment {
    damage: number;
    attackSpeed : number;
    critChance: number;

    constructor(name: string, description: string, itemId: ItemId, itemType: ItemType, damage: number, attackSpeed: number, critChance: number) {
        super(name, description, itemId, itemType);
        this.damage = damage;
        this.attackSpeed = attackSpeed;
        this.critChance = critChance;
    }

    equip(): Boolean {
        return true
    }

    public getDamage() : number {
        return this.damage;
    }

    public getAttackSpeed() : number {
        return this.attackSpeed;
    }

    public getCritChance(): number {
        return this.critChance;
    }
}