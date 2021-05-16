import { InventorySlot } from 'incremental-game-template'
import React, { Component } from 'react'

export default class PlayerInventorySlot extends Component<{ key: number, inventorySlot: InventorySlot}, {}> {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title">{this.props.inventorySlot.item.name}</h2> 
                    <p>{this.props.inventorySlot.amount} unit</p>
                    <p>{this.props.inventorySlot.item.description}</p>
                </div>
            </div>
        )
    }
}
