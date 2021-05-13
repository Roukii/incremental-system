import React, { Component } from 'react'
import { useTheme } from 'next-themes'

const ThemeDropdown = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div title="Change Theme" className="dropdown dropdown-end">
            <div tabIndex="0" className="m-1 normal-case btn-ghost btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current md:mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
                <span className="hidden md:inline">
                Change Theme
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="inline-block w-4 h-4 ml-1 fill-current">
                    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
                </svg>
            </div>
            <div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content">
                <ul className="p-4 menu compact">
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('')}>🎨  Auto</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('light')}>🌝  light</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('dark')}>🌚  dark</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('cupcake')}>🧁  cupcake</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('bumblebee')}>🐝  bumblebee</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('emerald')}>✳️  Emerald</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('corporate')}>🏢  Corporate</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('synthwave')}>🌃  synthwave</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('retro')}>👴  retro</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('cyberpunk')}>🤖  cyberpunk</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('valentine')}>🌸  valentine</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('halloween')}>🎃  halloween</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('garden')}>🌷  garden</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('forest')}>🌲  forest</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('aqua')}>🐟  aqua</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('lofi')}>👓  lofi</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('pastel')}>🖍  pastel</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('fantasy')}>🧚‍♀️  fantasy</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('wireframe')}>📝  Wireframe</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('black')}>🏴  black</a>
                    </li>
                    <li>
                        <a tabIndex="0" onClick={() => setTheme('luxury')}>💎  luxury</a>
                    </li>
                    <li>
                        <a onClick={() => setTheme('dracula')}>🧛‍♂️  dracula</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ThemeDropdown
