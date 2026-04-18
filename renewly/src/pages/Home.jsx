import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Sparkles, TrendingUp, ChevronRight, Leaf, Info } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { CATEGORIES, getListingsByCity } from '../data/mockData'
import ListingCard from '../components/ListingCard'

const BANNERS = [
  { label: 'Sell in minutes', title: 'Give your things\na second life', subtitle: 'Post a free ad & reach thousands of buyers near you', gradient: 'from-green-700 to-green-500', icon: '♻️', cta: 'Start Selling', link: '/post' },
  { label: 'Verified Sellers', title: 'Shop smarter,\nnot harder', subtitle: 'Browse thousands of deals in your city today', gradient: 'from-emerald-700 to-teal-500', icon: '🛍️', cta: 'Browse Deals', link: '/browse' },
]

export default function Home() {
  const { location } = useApp()
  const [activeBanner, setActiveBanner] = useState(0)
  const banner = BANNERS[activeBanner]

  const cityListings = getListingsByCity(location.id)
  const isFallback   = cityListings.length > 0 && cityListings[0].cityId !== location.id
  const featured     = cityListings.filter(l => l.featured)
  const recent       = cityListings.filter(l => !l.featured)

  return (
    <div className="page-content">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${banner.gradient} mx-3 mt-3 rounded-3xl p-5 relative overflow-hidden animate-fade-in`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, white 0%, transparent 60%)' }} />
        <div className="absolute -right-4 -top-4 text-6xl opacity-20 select-none">{banner.icon}</div>
        <div className="relative">
          <span className="inline-flex items-center gap-1 text-green-200 text-xs font-semibold uppercase tracking-wide mb-2">
            <Leaf size={10} /> {banner.label}
          </span>
          <h1 className="text-white text-2xl font-bold leading-tight whitespace-pre-line mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
            {banner.title}
          </h1>
          <p className="text-green-100 text-xs mb-4 max-w-[200px]">{banner.subtitle}</p>
          <Link to={banner.link} className="inline-flex items-center gap-1.5 bg-white text-green-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-green-50 transition-colors shadow-sm">
            {banner.cta} →
          </Link>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {BANNERS.map((_, i) => (
            <button key={i} onClick={() => setActiveBanner(i)}
              className={`rounded-full transition-all ${i === activeBanner ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-3 mt-3">
        <Link to="/browse"
          className="flex items-center gap-3 bg-white border-2 border-slate-100 rounded-2xl px-4 py-3.5 shadow-card hover:border-green-200 hover:shadow-card-hover transition-all group">
          <Search size={18} className="text-slate-400 group-hover:text-green-500 transition-colors" />
          <span className="text-slate-400 text-sm flex-1">Search in <span className="text-green-600 font-semibold">{location.name}</span>...</span>
          <div className="flex items-center gap-1 text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
            <MapPin size={10} /> {location.name}
          </div>
        </Link>
      </div>

      {/* Fallback notice */}
      {isFallback && (
        <div className="mx-3 mt-3 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
          <Info size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-amber-700">
            No listings yet in <strong>{location.name}</strong>. Showing listings from other cities.{' '}
            <Link to="/post" className="underline font-semibold">Be the first to sell here!</Link>
          </p>
        </div>
      )}

      {/* Location pill */}
      <div className="flex items-center gap-2 px-4 mt-3">
        <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-xl px-3 py-1.5">
          <MapPin size={12} className="text-green-600" />
          <span className="text-green-800 font-semibold text-xs">{location.name}</span>
          <span className="text-green-400 text-xs">·</span>
          <span className="text-green-600 text-xs">{cityListings.length} listings</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="font-bold text-slate-800 text-base">Categories</h2>
          <Link to="/browse" className="text-green-600 text-sm font-semibold flex items-center gap-0.5">All <ChevronRight size={14} /></Link>
        </div>
        <div className="overflow-x-auto scrollbar-hide px-3">
          <div className="flex gap-3 w-max pb-1">
            {CATEGORIES.map((cat, i) => (
              <Link key={cat.id} to={`/browse?category=${cat.id}`}
                className={`flex flex-col items-center gap-2 animate-fade-up stagger-${Math.min(i+1,6)}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform`}>
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-600 text-center w-16 leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-1.5">
              <Sparkles size={15} className="text-amber-500" />
              <h2 className="font-bold text-slate-800 text-base">Featured near you</h2>
            </div>
            <Link to="/browse?filter=featured" className="text-green-600 text-sm font-semibold flex items-center gap-0.5">See all <ChevronRight size={14} /></Link>
          </div>
          <div className="overflow-x-auto scrollbar-hide px-3">
            <div className="flex gap-3 w-max pb-1">
              {featured.map((listing, i) => (
                <div key={listing.id} className={`w-52 animate-fade-up stagger-${Math.min(i+1,4)}`}>
                  <ListingCard listing={listing} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fresh arrivals */}
      {recent.length > 0 && (
        <div className="mt-5 px-3">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5">
              <TrendingUp size={15} className="text-green-500" />
              <h2 className="font-bold text-slate-800 text-base">Fresh in {location.name}</h2>
            </div>
            <Link to="/browse" className="text-green-600 text-sm font-semibold flex items-center gap-0.5">Browse all <ChevronRight size={14} /></Link>
          </div>
          <div className="space-y-3">
            {recent.slice(0, 6).map((listing, i) => (
              <div key={listing.id} className={`animate-fade-up stagger-${Math.min(i+1,4)}`}>
                <ListingCard listing={listing} horizontal />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mx-3 mt-5 p-5 bg-green-950 rounded-3xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-green-800 rounded-full opacity-50" />
        <div className="absolute -right-4 top-4 text-5xl opacity-20">♻️</div>
        <div className="relative">
          <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-1">Got something unused?</p>
          <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Fraunces, serif' }}>Turn clutter into cash</h3>
          <p className="text-green-400 text-xs mb-4">Post your first ad free. Reach buyers in {location.name}.</p>
          <Link to="/post" className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
            Post Free Ad →
          </Link>
        </div>
      </div>
    </div>
  )
}
