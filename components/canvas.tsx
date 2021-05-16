import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { IncrementalGod } from 'game/IncrementalGod';
import { CurrencyType } from 'game/wallet/CurrencyType';
import { Currency, IgtAction } from 'incremental-game-template';
import { GainItemAction } from 'game/tools/action/GainItemAction';
import { ItemList } from 'game/features/items/ItemList';
import { ItemId } from 'game/features/items/ItemId';

export class Canvas extends Component<{ gameProps: IncrementalGod}, { game: IncrementalGod, exp: number }> {
    game : IncrementalGod;
    grabStone: GainItemAction;
    
    constructor(props) {
        super(props);
        this.game = props.gameProps;
        this.state = {
            game: props.gameProps,
            exp: 0,
        }
        console.log(props);
        this.game.features.wallet.onCurrencyGain.subscribe ((currency: Currency) =>
            this.setState({exp: this.game.features.wallet.getAmount(currency.type)})
        );
        this.grabStone = this.game.features.actions.grabStone
    }

    onClickTest() {
        this.game.features.actionsQueue.addAction(this.grabStone)
        console.log(this.grabStone.isStarted)
        this.grabStone.onCompletion.subscribe ((action: IgtAction) =>
            console.log("stone grabed")
        );        
    }
    render() {

        return (
            <div className="flex flex-row flex-nowrap items-stretch p-2 space-x-2 h-full">
                <div className="flex-none w-80 card bordered bg-base-100">
                    <div className="card-body">
                    <h2 className="card-title">
                        Character Sheet
                    </h2>
                    <p>{this.state.game.features.wallet.getAmount(CurrencyType.Idea)} {CurrencyType.Idea}</p>
                    <p>{this.state.exp} {CurrencyType.Exp}</p>
                    <p>{this.state.game.features.settings.saveKey}</p>
                    </div>
                </div>
                <div className="flex-none w-40 card bordered bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">
                            Action
                        </h2>
                        <p>{ this.game.features.wallet.getAmount(CurrencyType.Stone)} Stone</p>
                        <button className="btn" onClick={() => { this.onClickTest() }}>Grab Stone {this.grabStone.getProgress().actual} / {this.grabStone.getProgress().target}</button>
                    </div>
                </div>
                <div className="flex-grow w-40 card bordered bg-base-100">
                    <div className="card-body">
                    <h2 className="card-title">
                        Inventory
                    </h2>
                    <p>{this.game.features.inventory.slots.length}</p>
                    <p>{this.game.features.wallet.getAmount(CurrencyType.Stone)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Canvas
