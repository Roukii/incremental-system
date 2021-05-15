import { App } from 'game/App'
import {IncrementalGod} from "game/IncrementalGod";
import Header from "components/header";
import SystemCommand from "components/systemCommand";
import Canvas from 'components/canvas';
import Settings from "components/settings/settings";
import React, { Component } from 'react'
import {CurrencyType} from "game/wallet/CurrencyType";

export default class Game extends Component {
    incremental : IncrementalGod;

    constructor(props) {
        super(props);
        App.start();
        this.incremental = App.game;
        console.log(this.incremental.features)
    }
    render() {
        return (
            <section className="flex flex-col flex-nowrap items-stretch h-screen">
                <Header/>
                <div className="flex-1">
                {this.incremental.features.settings.saveKey}
                    <Canvas  game={this.incremental}/>
                </div>
                <Settings/>
                <SystemCommand/>
            </section>
        )
    }
}