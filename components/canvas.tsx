import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { IncrementalGod } from 'game/IncrementalGod';
import { CurrencyType } from 'game/wallet/CurrencyType';
import { Currency, IgtAction } from 'incremental-game-template';
import { GainItemAction } from 'game/tools/action/GainItemAction';
import { ItemList } from 'game/features/items/ItemList';
import { ItemId } from 'game/features/items/ItemId';
import PlayerInventory from './features/inventory/playerInventory';
import DivProgress from './progressBar/DivProgress';

export class Canvas extends Component<{ gameProps: IncrementalGod}, { game: IncrementalGod, exp: number }> {
    game : IncrementalGod;
    
    constructor(props) {
        super(props);
        this.game = props.gameProps;
        this.state = {
            game: props.gameProps,
            exp: 0,
        }
        this.game.features.wallet.onCurrencyGain.subscribe ((currency: Currency) =>
            this.setState({exp: this.game.features.wallet.getAmount(currency.type)})
        );
    }

    onClickTest() {
        this.game.features.actionsQueue.addAction(this.game.features.actions.grabStone)
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
                    <p>{this.state.game.features.wallet.getAmount(CurrencyType.Exp)} {CurrencyType.Exp}</p>
                    <p>{this.state.game.features.wallet.getAmount(CurrencyType.Stone)} {CurrencyType.Stone}</p>
                    </div>
                </div>
                <div className="flex-none w-80 card bordered bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">
                            Action
                        </h2>
                        <button className="btn" onClick={() => { this.onClickTest() }}>Grab Stone {this.game.features.actions.grabStone.getProgress().actual} / {this.game.features.actions.grabStone.getProgress().target}</button>
                    </div>
                </div>
                <div className="flex-grow w-40 card bordered bg-base-100">
                    <div className="card-body">
                    <h2 className="card-title">
                        Inventory
                    </h2>
                    <PlayerInventory inventory={this.props.gameProps.features.inventory}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Canvas
