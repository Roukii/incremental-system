import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SystemCommand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-neutral">
                <div className="mockup-code flex-none rounded-t-box">
                    <pre data-prefix="$">
                        <code>sudo ./system-Alpha.0.1.exe</code>
                    </pre> 
                    <pre data-prefix=">" className="text-info">
                        <code>Initializing system version Alpha-0.1 ...</code>
                    </pre> 
                    <pre data-prefix=">" className="text-success">
                        <code>System Initalized!</code>
                    </pre>
                </div>
            </div>
        )
    }
}
