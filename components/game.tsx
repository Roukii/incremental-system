import { App } from 'game/App'
import {IncrementalGod} from "game/IncrementalGod";
import Header from "components/header";
import SystemCommand from "components/systemCommand";
import Canvas from 'components/canvas';
import Settings from "components/settings/settings";
import React, { Component } from 'react'
import {CurrencyType} from "game/wallet/CurrencyType";

export default class game extends Component {
    realGame : IncrementalGod;

    constructor(props) {
        super(props);
        App.start();
        this.realGame = App.game;
        console.log(this.realGame.features)
    }
    render() {
        this.state = {
            name: "game",
        };
        return (
            <section className="flex flex-col flex-nowrap items-stretch h-screen">
                <Header/>
                <div className="flex-1">
                    <Canvas/>
                </div>
                <Settings/>
                <SystemCommand/>
            </section>
        )
    }
}