import React, { Component } from 'react'

export default class BaseCard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                                    <div className="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3">
                        <div className="alert col-span-1 xl:col-span-2 alert-info">
                            <div className="flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                            </div>
                        </div>
                        <div className="card shadow-lg compact side bg-base-100 rounded-box">
                            <p>
                            </p>
                            <table className="">
                                <thead>
                                    <tr>
                                        <th>Currency</th>
                                        <th>Amount</th>
                                        <th>Multiplier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Money</td>
                                    </tr>
                                </tbody>
                            </table>
            </div>
            </div>
            </div>
        )
    }
}
