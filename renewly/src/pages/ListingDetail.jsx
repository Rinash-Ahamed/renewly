import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft, Heart, Share2, MapPin, Eye, ShieldCheck,
  Star, MessageCircle, Phone, Flag, ChevronRight, Check
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import { LISTINGS, formatPriceFull, formatPrice, getSavings, CONDITION_COLORS } from '../data/mockData'

export default function ListingDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { wishlist, toggleWishlist } = useApp()
  const listing = LISTINGS.find(l => l.id === Number(id))
  const [imgIdx, setImgIdx] = useState(0)
  const [contacted, setContacted] = useState(false)

  if (!listing) return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
      <p className="text-4xl mb-3">😕</p>
      <h2 className="font-bold text-slate-800 text-lg mb-2">Listing not found</h2>
      <button onClick={() => navigate(-1)} className="btn-primary mt-2">Go back</button>
    </div>
  )

  const saved = wishlist.includes(listing.id)
  const savings = getSavings(listing.price, listing.originalPrice)
  const similar = LISTINGS.filter(l => l.category === listing.category && l.id !== listing.id).slice(0, 4)

  return (
    <div className="pb-32">
      {/* Image carousel */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img src={listing.image} alt={listing.title}
          className="w-full h-full object-cover" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-3">
          <button onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow hover:bg-white transition-colors">
            <ArrowLeft size={18} className="text-slate-700" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => navigator.share?.({ title: listing.title, url: window.location.href })}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow hover:bg-white transition-colors">
              <Share2 size={16} className="text-slate-700" />
            </button>
            <button onClick={() => toggleWishlist(listing.id)}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow hover:bg-white transition-colors">
              <Heart size={16} className={saved ? 'fill-red-500 text-red-500' : 'text-slate-600'} />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          {listing.featured && (
            <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
              FEATURED
            </span>
          )}
          <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
            {savings}% OFF
          </span>
        </div>

        {/* Views */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded-full">
          <Eye size={11} />
          <span>{listing.views} views</span>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Title & Price */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-slate-800 font-bold text-xl leading-snug flex-1"
                style={{ fontFamily: 'Fraunces, serif' }}>
              {listing.title}
            </h1>
          </div>
          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-green-700 font-bold text-2xl">{formatPriceFull(listing.price)}</span>
            <span className="text-slate-400 line-through text-sm">{formatPrice(listing.originalPrice)}</span>
            <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-0.5 rounded-lg">
              Save {formatPrice(listing.originalPrice - listing.price)}
            </span>
          </div>
        </div>

        {/* Tags row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${CONDITION_COLORS[listing.condition]}`}>
            {listing.condition}
          </span>
          {listing.verified && (
            <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-green-700">
              <ShieldCheck size={12} /> Verified
            </span>
          )}
          <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
            <MapPin size={11} className="text-green-500" /> {listing.area}, {listing.location}
          </span>
        </div>

        {/* Seller card */}
        <div className="card p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {listing.seller.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm">{listing.seller.name}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10}
                    className={i < Math.floor(listing.seller.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-200'} />
                ))}
              </div>
              <span className="text-xs text-slate-600 font-semibold">{listing.seller.rating}</span>
              <span className="text-slate-400 text-xs">· {listing.seller.deals} deals</span>
            </div>
          </div>
          <Link to="/profile"
            className="text-green-600 text-xs font-semibold hover:underline flex items-center gap-0.5">
            View <ChevronRight size={12} />
          </Link>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-bold text-slate-800 mb-2 text-sm">About this item</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{listing.description}</p>
        </div>

        {/* Location map placeholder */}
        <div className="rounded-2xl overflow-hidden border border-slate-100">
          <div className="bg-green-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
            <MapPin size={14} className="text-green-600" />
            <span className="text-sm font-semibold text-slate-700">{listing.area}, {listing.location}</span>
          </div>
          <div className="h-32 bg-gradient-to-br from-green-50 to-slate-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg mb-2">
                <MapPin size={18} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 font-medium">{listing.area}</p>
            </div>
          </div>
        </div>

        {/* Report */}
        <button className="flex items-center gap-2 text-slate-400 text-xs hover:text-red-400 transition-colors">
          <Flag size={12} />
          Report this listing
        </button>

        {/* Similar */}
        {similar.length > 0 && (
          <div>
            <h3 className="font-bold text-slate-800 mb-3 text-sm">Similar Items</h3>
            <div className="overflow-x-auto scrollbar-hide -mx-4">
              <div className="flex gap-3 px-4 w-max">
                {similar.map(l => (
                  <Link key={l.id} to={`/listing/${l.id}`} className="w-40 flex-shrink-0">
                    <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-square mb-2">
                      <img src={l.image} alt={l.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700 line-clamp-2 leading-snug">{l.title}</p>
                    <p className="text-green-700 font-bold text-sm mt-0.5">{formatPriceFull(l.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-100 px-4 py-3"
           style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
        <div className="max-w-2xl mx-auto flex gap-3">
          <Link to="/chat"
            className="flex-1 flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 font-bold text-sm rounded-2xl py-3 hover:bg-green-50 transition-colors">
            <MessageCircle size={16} />
            Chat
          </Link>
          <button
            onClick={() => setContacted(!contacted)}
            className={`flex-1 flex items-center justify-center gap-2 font-bold text-sm rounded-2xl py-3 transition-all shadow-btn
              ${contacted ? 'bg-green-100 text-green-700 border-2 border-green-200' : 'bg-green-600 hover:bg-green-700 text-white'}`}
          >
            {contacted ? <><Check size={16} /> Saved!</> : <><Phone size={16} /> Show Contact</>}
          </button>
        </div>
      </div>
    </div>
  )
}
