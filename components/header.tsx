import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import ThemeDropdown from './settings/themeDropdown';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.state = {
            name: "game",
        };
        return (
            <section className="flex-none">
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
                    <div className="flex-none px-2 mx-2">
                        <span className="text-lg font-bold">
                                Incremental System
                            </span>
                    </div> 
                    <div className="font-mono text-xs opacity-50">
                        <span className="hidden lg:inline">version</span>&nbsp;0.26.0
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <div className="items-stretch hidden lg:flex">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                    User
                            </a>
                        </div>
                    </div> 
                    <div className="flex-none">
                        <ThemeDropdown/>
                        <button className="btn btn-square btn-ghost">
                            <FontAwesomeIcon icon={faCog} size="2x"/>
                        </button>
                    </div> 
                </div>
            </section>
        )
    }
}