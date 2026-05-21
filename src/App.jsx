import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import SportsPage from './pages/SportsPage'
import StatsPage from './pages/StatsPage'
import ProfilePage from './pages/ProfilePage'
import BottomNav from './components/BottomNav'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'sports':
        return <SportsPage />
      case 'stats':
        return <StatsPage />
      case 'profile':
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        {renderPage()}
      </div>
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
