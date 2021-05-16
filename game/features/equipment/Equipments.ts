import {IgtFeature} from "incremental-game-template";
import { EquipmentSlotId } from "./EquipmentSlotId";
import { EquipmentSlot } from "./EquipmentSlot";
import { EquipmentSlotsSaveData } from "./EquipmentSlotsSaveData";

export class Equipments extends IgtFeature {

    equipments: EquipmentSlot[];

    mainWeapon : EquipmentSlot;
    sideWeapon : EquipmentSlot;
    helmet : EquipmentSlot;
    chest : EquipmentSlot;
    glove : EquipmentSlot;
    pants : EquipmentSlot;
    boots : EquipmentSlot;
    firstRing : EquipmentSlot;
    secondRing : EquipmentSlot;
    necklace : EquipmentSlot;

    constructor() {
        super('equipments');
        this.mainWeapon = new EquipmentSlot("Main Weapon", EquipmentSlotId.MainWeapon);
        this.sideWeapon = new EquipmentSlot("Side Weapon", EquipmentSlotId.SideWeapon);
        this.helmet = new EquipmentSlot("Helmet", EquipmentSlotId.Helmet);
        this.chest = new EquipmentSlot("Chest", EquipmentSlotId.Chest);
        this.glove = new EquipmentSlot("Glove", EquipmentSlotId.Glove);
        this.pants = new EquipmentSlot("Pants", EquipmentSlotId.Pants);
        this.boots = new EquipmentSlot("Boots", EquipmentSlotId.Boots);
        this.firstRing = new EquipmentSlot("FirstRing", EquipmentSlotId.FirstRing);
        this.secondRing = new EquipmentSlot("SecondRing", EquipmentSlotId.SecondRing);
        this.necklace = new EquipmentSlot("Necklace", EquipmentSlotId.Necklace);

        this.equipments = [
            this.mainWeapon,
            this.sideWeapon,
            this.helmet,
            this.chest,
            this.glove,
            this.pants,
            this.boots,
            this.firstRing,
            this.secondRing,
            this.necklace,
        ];
    }

    getEquipmentSlot(id: EquipmentSlotId) {
        return this.equipments.find(EquipmentSlot => {
            return EquipmentSlot.equipmentSlotId === id;
        })
    }


    load(data: EquipmentSlotsSaveData): void {
        if (data.equipments) {
            data.equipments.forEach(savedEquipmentSlot => {
                const EquipmentSlot = this.getEquipmentSlot(savedEquipmentSlot.equipmentSlotId);
                if (EquipmentSlot) {
                    EquipmentSlot.itemId = savedEquipmentSlot.itemId;
                }
            })
        }
    }

    save(): EquipmentSlotsSaveData {
        const EquipmentSlots = this.equipments.map(EquipmentSlot => {
            return {
                equipmentSlotId: EquipmentSlot.equipmentSlotId,
                itemId: EquipmentSlot.itemId,
            }
        });
        return {
            equipments: EquipmentSlots
        }
    }
}