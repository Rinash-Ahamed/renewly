import React, { useState, useRef, useEffect } from 'react'
import { MapPin, Search, X, Navigation, ChevronRight } from 'lucide-react'
import { useApp, CITIES } from '../context/AppContext'

export default function LocationSelector({ isOpen, onClose }) {
  const { location, setLocation } = useApp()
  const [query, setQuery] = useState('')
  const [detecting, setDetecting] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const filtered = query.trim()
    ? CITIES.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.state.toLowerCase().includes(query.toLowerCase())
      )
    : CITIES

  const handleSelect = (city) => {
    setLocation(city)
    onClose()
  }

  const handleDetect = () => {
    setDetecting(true)
    // Simulate geolocation detection
    setTimeout(() => {
      setDetecting(false)
      handleSelect(CITIES[12]) // Coimbatore
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />

      {/* Sheet */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-4xl sm:rounded-3xl shadow-modal animate-slide-up overflow-hidden"
           style={{ maxHeight: '85dvh' }}>
        
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <h2 className="font-semibold text-slate-800 text-lg">Select Location</h2>
            <p className="text-slate-500 text-sm">Find items near you</p>
          </div>
          <button onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 py-3">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search city or state..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Detect location */}
        {!query && (
          <div className="px-5 pb-3">
            <button
              onClick={handleDetect}
              disabled={detecting}
              className="w-full flex items-center gap-3 p-3.5 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-colors group"
            >
              <div className={`w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0 ${detecting ? 'animate-pulse-green' : ''}`}>
                <Navigation size={16} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-green-800">
                  {detecting ? 'Detecting your location...' : 'Use current location'}
                </p>
                <p className="text-xs text-green-600">GPS-based detection</p>
              </div>
              <ChevronRight size={16} className="ml-auto text-green-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* City list */}
        <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: '50dvh' }}>
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-slate-500 text-sm">No cities found for "<span className="font-medium">{query}</span>"</p>
            </div>
          ) : (
            <div className="px-5 pb-6">
              {!query && <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Popular Cities</p>}
              <div className="space-y-1">
                {filtered.map(city => (
                  <button
                    key={city.id}
                    onClick={() => handleSelect(city)}
                    className={`w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-green-50 transition-colors group text-left
                      ${location.id === city.id ? 'bg-green-50 border border-green-200' : ''}`}
                  >
                    <span className="text-xl w-8 text-center">{city.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-sm ${location.id === city.id ? 'text-green-700' : 'text-slate-700'}`}>
                        {city.name}
                      </p>
                      <p className="text-xs text-slate-400">{city.state}</p>
                    </div>
                    {location.id === city.id && (
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
