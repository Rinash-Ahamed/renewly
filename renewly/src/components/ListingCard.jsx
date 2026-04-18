import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, MapPin, Eye, ShieldCheck } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { formatPrice, formatPriceFull, getSavings, CONDITION_COLORS } from '../data/mockData'

export default function ListingCard({ listing, horizontal = false }) {
  const { wishlist, toggleWishlist } = useApp()
  const saved = wishlist.includes(listing.id)
  const savings = getSavings(listing.price, listing.originalPrice)

  if (horizontal) {
    return (
      <Link to={`/listing/${listing.id}`} className="block">
        <div className="card flex gap-3 p-3">
          <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100">
            <img src={listing.image} alt={listing.title}
              className="w-full h-full object-cover" loading="lazy" />
            {listing.featured && (
              <div className="absolute top-1.5 left-1.5 bg-amber-400 text-amber-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                FEATURED
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0 py-0.5">
            <p className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2">{listing.title}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-green-700 font-bold text-base">{formatPriceFull(listing.price)}</span>
              <span className="text-slate-400 line-through text-xs">{formatPrice(listing.originalPrice)}</span>
              <span className="text-green-600 text-xs font-semibold">{savings}% off</span>
            </div>
            <div className="mt-1.5 flex items-center gap-2 flex-wrap">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CONDITION_COLORS[listing.condition]}`}>
                {listing.condition}
              </span>
              <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                <MapPin size={10} />
                <span>{listing.area}</span>
              </div>
            </div>
          </div>
          <button
            onClick={e => { e.preventDefault(); toggleWishlist(listing.id) }}
            className="flex-shrink-0 self-start p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <Heart size={16}
              className={saved ? 'fill-red-500 text-red-500' : 'text-slate-300 hover:text-slate-500'}
            />
          </button>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/listing/${listing.id}`} className="block">
      <div className="card overflow-hidden group">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img src={listing.image} alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy" />
          
          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
            {listing.featured && (
              <div className="bg-amber-400 text-amber-900 text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                FEATURED
              </div>
            )}
          </div>

          {/* Save button */}
          <button
            onClick={e => { e.preventDefault(); toggleWishlist(listing.id) }}
            className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-xl 
                       flex items-center justify-center shadow hover:bg-white transition-colors"
          >
            <Heart size={15}
              className={saved ? 'fill-red-500 text-red-500' : 'text-slate-400 hover:text-red-400'}
            />
          </button>

          {/* Savings pill */}
          <div className="absolute bottom-2.5 left-2.5 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {savings}% OFF
          </div>
        </div>

        {/* Details */}
        <div className="p-3">
          <p className="text-slate-800 font-semibold text-sm leading-snug line-clamp-2 mb-1.5">
            {listing.title}
          </p>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-green-700 font-bold text-lg leading-none">
              {formatPriceFull(listing.price)}
            </span>
            <span className="text-slate-400 line-through text-xs">
              {formatPrice(listing.originalPrice)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CONDITION_COLORS[listing.condition]}`}>
                {listing.condition}
              </span>
              {listing.verified && (
                <ShieldCheck size={13} className="text-green-500" />
              )}
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-[11px]">
              <Eye size={11} />
              <span>{listing.views}</span>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
            <div className="flex items-center gap-1 text-slate-500 text-[11px]">
              <MapPin size={11} className="text-green-500" />
              <span>{listing.area}</span>
            </div>
            <span className="text-slate-400 text-[11px]">{listing.postedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
