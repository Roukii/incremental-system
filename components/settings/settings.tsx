import React, { Component } from 'react'
import { useTheme } from 'next-themes'
import ThemeDropdown from './themeDropdown'

const Settings = () => {
    const { theme, setTheme } = useTheme()
  
    return (
      <div className="card shadow-lg compact side bg-primary rounded-box">
      </div>
    )
  }
export default Settings
