import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl mr-2">🗺️</span>
              <span className="font-semibold text-xl text-indigo-650">Roadmap</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link 
              href="/roadmap" 
              className="text-gray-600 hover:text-indigo-650 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
