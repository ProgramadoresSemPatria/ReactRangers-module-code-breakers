'use client'
import React from 'react'
import Logo from './Logo'
import { Switch } from '../ui/switch'
import useTheme from '@/data/hooks/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className={`w-full flex justify-between px-10 h-24 items-center border-b-2  ${theme === "dark" ? ' bg-gray-950 text-white border-green-350 ' : 'border-indigo-650 bg-slate-50 '} `}>
      <Logo />
      <abbr className='flex items-center justify-center' title={theme === 'dark'? 'Dark Mode: Active': 'Dark Mode: Disabled'}>
        <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      </abbr>
    </header>
  )
}
