
import { App } from 'game/App'
import {incrementalGod} from "game/incrementalGod";
import React, { Component } from 'react'

export default class game extends Component {
    realGame : incrementalGod;

    constructor(props) {
        super(props);
    }
    render() {
        this.state = {
            name: "game",
        };
        App.start();
        this.realGame = App.game;
        console.log(this.realGame.features)
        return (
            <div>
                <p>lel</p>
                {this.realGame.features.settings.saveKey}
            </div>
        )
    }
}