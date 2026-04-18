import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Bell, ChevronDown, Search } from 'lucide-react'
import { useApp } from '../context/AppContext'
import LocationSelector from './LocationSelector'

export default function Header() {
  const { location, notifications } = useApp()
  const [locOpen, setLocOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <header className="sticky top-0 z-40 glass shadow-header safe-top">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-green-800 text-lg tracking-tight hidden sm:block"
                    style={{ fontFamily: 'Fraunces, serif' }}>
                renewly
              </span>
            </div>
          </Link>

          {/* Location Pill */}
          <button
            onClick={() => setLocOpen(true)}
            className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-xl px-3 py-2 hover:bg-green-100 transition-colors flex-shrink-0"
          >
            <MapPin size={13} className="text-green-600 flex-shrink-0" />
            <span className="text-green-800 font-semibold text-sm max-w-[90px] truncate">
              {location.name}
            </span>
            <ChevronDown size={13} className="text-green-600" />
          </button>

          {/* Search bar (tap to go to search) */}
          <button
            onClick={() => navigate('/browse')}
            className="flex-1 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-xl px-3 py-2.5 transition-colors text-left"
          >
            <Search size={15} className="text-slate-400 flex-shrink-0" />
            <span className="text-slate-400 text-sm">Search in {location.name}...</span>
          </button>

          {/* Notification */}
          <Link to="/chat" className="relative p-2 hover:bg-slate-100 rounded-xl transition-colors flex-shrink-0">
            <Bell size={20} className="text-slate-600" />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Link>
        </div>
      </header>

      <LocationSelector isOpen={locOpen} onClose={() => setLocOpen(false)} />
    </>
  )
}
