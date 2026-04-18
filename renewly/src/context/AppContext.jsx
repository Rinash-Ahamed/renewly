import React, { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export const CITIES = [
  { id: 'mumbai',    name: 'Mumbai',    state: 'Maharashtra', emoji: '🏙️' },
  { id: 'delhi',     name: 'Delhi',     state: 'Delhi',       emoji: '🏛️' },
  { id: 'bangalore', name: 'Bengaluru', state: 'Karnataka',   emoji: '🌳' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana',   emoji: '💎' },
  { id: 'chennai',   name: 'Chennai',   state: 'Tamil Nadu',  emoji: '🌊' },
  { id: 'kolkata',   name: 'Kolkata',   state: 'West Bengal', emoji: '🎨' },
  { id: 'pune',      name: 'Pune',      state: 'Maharashtra', emoji: '🎓' },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat',     emoji: '🏺' },
  { id: 'jaipur',    name: 'Jaipur',    state: 'Rajasthan',   emoji: '🌹' },
  { id: 'surat',     name: 'Surat',     state: 'Gujarat',     emoji: '💠' },
  { id: 'lucknow',   name: 'Lucknow',   state: 'Uttar Pradesh', emoji: '🕌' },
  { id: 'kochi',     name: 'Kochi',     state: 'Kerala',      emoji: '⛵' },
  { id: 'coimbatore',name: 'Coimbatore',state: 'Tamil Nadu',  emoji: '🏭' },
  { id: 'nagpur',    name: 'Nagpur',    state: 'Maharashtra', emoji: '🍊' },
  { id: 'bhopal',    name: 'Bhopal',    state: 'Madhya Pradesh', emoji: '🏞️' },
  { id: 'indore',    name: 'Indore',    state: 'Madhya Pradesh', emoji: '🍽️' },
  { id: 'guwahati',  name: 'Guwahati',  state: 'Assam',       emoji: '🌿' },
  { id: 'chandigarh',name: 'Chandigarh',state: 'Punjab',      emoji: '🌻' },
]

export function AppProvider({ children }) {
  const [location, setLocation] = useState(CITIES[12]) // Coimbatore default
  const [wishlist, setWishlist] = useState([])
  const [recentSearches, setRecentSearches] = useState(['iPhone', 'Sofa', 'Bicycle'])
  const [notifications, setNotifications] = useState(3)

  const toggleWishlist = useCallback((id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }, [])

  const addRecentSearch = useCallback((term) => {
    if (!term.trim()) return
    setRecentSearches(prev => [term, ...prev.filter(s => s !== term)].slice(0, 8))
  }, [])

  return (
    <AppContext.Provider value={{
      location, setLocation,
      wishlist, toggleWishlist,
      recentSearches, addRecentSearch,
      notifications, setNotifications,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
