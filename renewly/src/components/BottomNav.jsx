import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react'

const TABS = [
  { to: '/',        icon: Home,          label: 'Home'    },
  { to: '/browse',  icon: Search,        label: 'Browse'  },
  { to: '/post',    icon: PlusCircle,    label: 'Sell'    },
  { to: '/chat',    icon: MessageCircle, label: 'Chat'    },
  { to: '/profile', icon: User,          label: 'Profile' },
]

export default function BottomNav() {
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass shadow-nav bottom-nav">
      <div className="max-w-2xl mx-auto flex items-center justify-around px-2 pt-2">
        {TABS.map(({ to, icon: Icon, label }) => {
          const isPost = label === 'Sell'
          return (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isPost
                  ? 'flex flex-col items-center group -mt-5 relative'
                  : `flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl transition-all group
                     ${isActive ? 'text-green-600' : 'text-slate-400 hover:text-slate-600'}`
              }
            >
              {({ isActive }) =>
                isPost ? (
                  <>
                    <div className="w-14 h-14 bg-green-600 rounded-2xl shadow-btn flex items-center justify-center
                                    hover:bg-green-700 active:scale-95 transition-all duration-150 shine">
                      <Icon size={24} className="text-white" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-semibold text-green-600 mt-1">Sell</span>
                  </>
                ) : (
                  <>
                    <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-green-100' : ''}`}>
                      <Icon
                        size={20}
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className={`transition-colors ${isActive ? 'text-green-600' : 'text-slate-400 group-hover:text-slate-600'}`}
                      />
                    </div>
                    <span className={`text-[10px] font-semibold transition-colors
                      ${isActive ? 'text-green-600' : 'text-slate-400 group-hover:text-slate-500'}`}>
                      {label}
                    </span>
                  </>
                )
              }
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
