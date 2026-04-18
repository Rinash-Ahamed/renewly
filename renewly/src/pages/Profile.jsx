import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShieldCheck, ChevronRight, Heart, Package, Settings, HelpCircle, LogOut, Bell, MapPin, Edit3 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { LISTINGS } from '../data/mockData'

const MENU = [
  { icon: Package,  label: 'My Ads',        to: '/browse', badge: '3' },
  { icon: Heart,    label: 'Saved Items',   to: '/browse', badge: '' },
  { icon: Bell,     label: 'Notifications', to: '#',       badge: '3' },
  { icon: Settings, label: 'Settings',      to: '#',       badge: '' },
  { icon: HelpCircle,label:'Help & Support', to: '#',       badge: '' },
]

export default function Profile() {
  const { location, wishlist } = useApp()
  const myListings = LISTINGS.slice(0, 3)
  const savedListings = LISTINGS.filter(l => wishlist.includes(l.id))

  return (
    <div className="page-content">
      {/* Profile header */}
      <div className="bg-gradient-to-br from-green-700 to-green-500 px-5 pt-6 pb-8 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute right-4 top-4">
          <button className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors">
            <Edit3 size={16} className="text-white" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-green-700">R</span>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl" style={{ fontFamily: 'Fraunces, serif' }}>
              Renewly User
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-white text-xs font-semibold">4.8</span>
              </div>
              <span className="text-green-200 text-xs">·</span>
              <ShieldCheck size={13} className="text-green-200" />
              <span className="text-green-200 text-xs font-medium">Verified</span>
              <span className="text-green-200 text-xs">·</span>
              <span className="text-green-200 text-xs">12 deals</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={11} className="text-green-200" />
              <span className="text-green-200 text-xs">{location.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 -mt-4 bg-white rounded-2xl shadow-card p-4 grid grid-cols-3 divide-x divide-slate-100">
        {[
          { label: 'Listings', value: '3' },
          { label: 'Sold',     value: '9' },
          { label: 'Saved',    value: savedListings.length.toString() },
        ].map(stat => (
          <div key={stat.label} className="text-center">
            <p className="font-bold text-xl text-green-700">{stat.value}</p>
            <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Active Listings */}
      {myListings.length > 0 && (
        <div className="mt-5 px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800">Active Listings</h3>
            <Link to="/browse" className="text-green-600 text-sm font-semibold">View all</Link>
          </div>
          <div className="space-y-2">
            {myListings.map(listing => (
              <div key={listing.id} className="card flex items-center gap-3 p-3">
                <img src={listing.image} alt="" className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">{listing.title}</p>
                  <p className="text-green-700 font-bold text-sm">₹{listing.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">{listing.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu */}
      <div className="mt-5 mx-4">
        <div className="card divide-y divide-slate-100 overflow-hidden">
          {MENU.map(({ icon: Icon, label, to, badge }) => (
            <Link key={label} to={to}
              className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-green-600" />
              </div>
              <span className="flex-1 text-sm font-medium text-slate-700">{label}</span>
              {badge && (
                <span className="w-5 h-5 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {badge}
                </span>
              )}
              <ChevronRight size={15} className="text-slate-300" />
            </Link>
          ))}
        </div>
      </div>

      <button className="mx-4 mt-3 w-auto flex items-center gap-2 text-red-500 hover:text-red-600 font-medium text-sm py-3 px-4 transition-colors">
        <LogOut size={16} />
        Sign Out
      </button>

      <div className="text-center mt-4 mb-2">
        <p className="text-xs text-slate-400">Renewly v1.0 · Made with 💚 in India</p>
      </div>
    </div>
  )
}
