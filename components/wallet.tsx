import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { IncrementalGod } from 'game/IncrementalGod';
import { CurrencyType } from 'game/wallet/CurrencyType';

export class Wallet extends Component<{ game: IncrementalGod}, { game: IncrementalGod }> {
game : IncrementalGod;
    constructor(props) {
        super(props);
        this.game = props.game;
        this.state = {
            game: props.game
        }
        console.log(props);
    }

    render() {
        return (
            <div className="flex flex-row flex-nowrap items-stretch p-2 space-x-2 h-full">
                <div className="flex-none w-80 card bordered bg-base-100">
                    <div className="card-body">
                    <h2 className="card-title">
                        Character Sheet
                    </h2>
                    <p>{this.props.game.features.wallet.getAmount(CurrencyType.Idea)} {CurrencyType.Idea.toString}</p>
                    <p>{this.props.game.features.wallet.getAmount(CurrencyType.Exp)} exp</p>
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
