import { IncrementalGod } from 'game/IncrementalGod'
import React, { Component } from 'react'

export default class DivProgress extends Component<{progress : number}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded">
                <div style={{width : this.props.progress * 100 + '%'}}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
            </div>
        )
    }
}
