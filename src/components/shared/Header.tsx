import React from 'react'
import Logo from './Logo'
import { Switch } from '../ui/switch'

export default function Header() {
  return (
    <header className="w-full flex justify-between px-10 h-24 items-center bg-gray-950 border-b-2 border-green-350">
      <Logo />

      <Switch />

    </header>
  )
}
