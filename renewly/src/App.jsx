import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Browse from './pages/Browse'
import PostAd from './pages/PostAd'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import ListingDetail from './pages/ListingDetail'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-dvh bg-white max-w-2xl mx-auto relative">
          <Header />
          <main>
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/browse"      element={<Browse />} />
              <Route path="/post"        element={<PostAd />} />
              <Route path="/chat"        element={<Chat />} />
              <Route path="/profile"     element={<Profile />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
