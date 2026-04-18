import React, { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X, MapPin, Check } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { CATEGORIES, getListingsByCity } from '../data/mockData'
import ListingCard from '../components/ListingCard'

const SORT_OPTIONS = [
  { id: 'newest',    label: 'Newest First' },
  { id: 'price_asc', label: 'Price: Low → High' },
  { id: 'price_desc',label: 'Price: High → Low' },
  { id: 'popular',   label: 'Most Viewed' },
]
const CONDITION_OPTS = ['Like New', 'Good', 'Fair']

export default function Browse() {
  const [searchParams] = useSearchParams()
  const { location, recentSearches, addRecentSearch } = useApp()
  const [query,          setQuery]          = useState(searchParams.get('q') || '')
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [sort,           setSort]           = useState('newest')
  const [conditions,     setConditions]     = useState([])
  const [showFilters,    setShowFilters]    = useState(false)
  const [showSuggestions,setShowSuggestions]= useState(false)
  const [maxPrice,       setMaxPrice]       = useState('')
  const inputRef = useRef(null)

  // Re-filter whenever location changes
  const allCityListings = getListingsByCity(location.id)

  const toggleCondition = c =>
    setConditions(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])

  const handleSearch = (term = query) => {
    addRecentSearch(term)
    setShowSuggestions(false)
    setQuery(term)
    inputRef.current?.blur()
  }

  const filtered = allCityListings
    .filter(l => {
      if (activeCategory !== 'all' && l.category !== activeCategory) return false
      if (query && !l.title.toLowerCase().includes(query.toLowerCase()) &&
          !l.description?.toLowerCase().includes(query.toLowerCase())) return false
      if (conditions.length && !conditions.includes(l.condition)) return false
      if (maxPrice && l.price > Number(maxPrice)) return false
      return true
    })
    .sort((a, b) => {
      if (sort === 'price_asc')  return a.price - b.price
      if (sort === 'price_desc') return b.price - a.price
      if (sort === 'popular')    return b.views - a.views
      return b.id - a.id
    })

  const activeFiltersCount = conditions.length + (maxPrice ? 1 : 0)

  return (
    <div className="page-content">
      {/* Search */}
      <div className="sticky top-[61px] z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 px-3 py-3 shadow-sm">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            ref={inputRef}
            type="search"
            placeholder={`Search in ${location.name}...`}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="w-full pl-9 pr-16 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
          />
          {query && (
            <button onClick={() => setQuery('')}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1">
              <X size={14} />
            </button>
          )}
          <button onClick={() => setShowFilters(!showFilters)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors
              ${activeFiltersCount > 0 || showFilters ? 'bg-green-100 text-green-700' : 'text-slate-500 hover:bg-slate-100'}`}>
            <div className="relative">
              <SlidersHorizontal size={16} />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-green-600 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Suggestions */}
        {showSuggestions && recentSearches.length > 0 && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowSuggestions(false)} />
            <div className="absolute left-3 right-3 top-full mt-1 bg-white rounded-2xl shadow-modal border border-slate-100 z-50 overflow-hidden animate-fade-in">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide px-4 pt-3 pb-2">Recent</p>
              {recentSearches.map(s => (
                <button key={s} onClick={() => handleSearch(s)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-left transition-colors">
                  <Search size={13} className="text-slate-400" />
                  <span className="text-sm text-slate-700">{s}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Filters panel */}
        {showFilters && (
          <div className="mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 animate-fade-in">
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Condition</p>
              <div className="flex gap-2 flex-wrap">
                {CONDITION_OPTS.map(c => (
                  <button key={c} onClick={() => toggleCondition(c)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-xl border-2 transition-all
                      ${conditions.includes(c) ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-600 border-slate-200 hover:border-green-300'}`}>
                    {conditions.includes(c) && <Check size={10} className="inline mr-1" />}
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Max Price (₹)</p>
              <input type="number" placeholder="e.g. 50000" value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                className="input-field text-sm py-2 !rounded-xl" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Sort By</p>
              <div className="grid grid-cols-2 gap-2">
                {SORT_OPTIONS.map(opt => (
                  <button key={opt.id} onClick={() => setSort(opt.id)}
                    className={`text-xs font-semibold px-3 py-2 rounded-xl border-2 transition-all text-left
                      ${sort === opt.id ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-600 border-slate-200 hover:border-green-300'}`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => { setConditions([]); setMaxPrice(''); setSort('newest') }}
              className="w-full text-xs text-slate-500 hover:text-red-500 font-medium py-1 transition-colors">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Category tabs */}
      <div className="overflow-x-auto scrollbar-hide border-b border-slate-100">
        <div className="flex gap-0 w-max px-3 py-2">
          {[{ id: 'all', label: 'All', icon: '🏪' }, ...CATEGORIES].map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap mr-1
                ${activeCategory === cat.id ? 'bg-green-600 text-white shadow-btn' : 'text-slate-500 hover:bg-slate-100'}`}>
              <span className="text-sm">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-3 py-3">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="text-xs text-slate-500 font-medium">
            <span className="text-slate-800 font-bold">{filtered.length}</span> results
            {query && <> for "<span className="text-green-700">{query}</span>"</>}
            {' '}in <span className="text-green-700 font-semibold">{location.name}</span>
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <MapPin size={11} className="text-green-500" />
            <span>{location.name}</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-4xl mb-3">🔍</p>
            <h3 className="font-bold text-slate-700 text-lg mb-1">No results found</h3>
            <p className="text-slate-500 text-sm">
              {query ? `No "${query}" listings in ${location.name}` : `No listings in this category in ${location.name}`}
            </p>
            <button onClick={() => { setQuery(''); setConditions([]); setMaxPrice(''); setActiveCategory('all') }}
              className="mt-4 btn-outline text-sm py-2 px-5">
              Reset all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
