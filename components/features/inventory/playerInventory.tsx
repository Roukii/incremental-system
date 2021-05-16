import { Inventory } from 'game/features/inventory/Inventory';
import { AbstractItem, InventorySlot } from 'incremental-game-template'
import React, { Component } from 'react'
import PlayerInventorySlot from './playerInventorySlot';

export class PlayerInventory extends Component<{ inventory: Inventory}, { inventory: Inventory }> {
    inventory: Inventory

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid grid-cols-3 p-1">
                {this.props.inventory.slots.map((slot, i) => {
                    return (<PlayerInventorySlot key={i} inventorySlot={slot}/>) 
                })}
            </div>
        )
    }
}

export default PlayerInventory;