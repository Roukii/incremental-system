import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Canvas extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-row flex-nowrap items-stretch p-2 space-x-2 h-full">
                <div className="flex-none w-80 card bordered bg-base-100">
                    <div className="card-body">
                    <h2 className="card-title">
                        Character Sheet
                    </h2>
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
