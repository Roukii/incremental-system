import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { IncrementalGod } from 'game/IncrementalGod';
import { CurrencyType } from 'game/wallet/CurrencyType';
import { Currency } from 'incremental-game-template';

export class Canvas extends Component<{ gameProps: IncrementalGod}, { game: IncrementalGod, exp: number }> {
    game : IncrementalGod;

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
                    </div>
                </div>
                <div className="flex-grow w-40 card bordered bg-base-100">
                    <div className="card-body">
                    <h2 className="card-title">
                        No clue what is it going to be
                    </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Canvas
