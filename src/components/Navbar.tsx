import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full shadow-sm bg-indigo-650">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl mr-2">🗺️</span>
              <span className="font-semibold text-xl text-white hover:text-green-400 transition-colors">Roadmap</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
