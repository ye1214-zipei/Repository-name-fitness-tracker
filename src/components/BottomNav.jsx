import React from 'react'

const BottomNav = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: '🏠', label: '首页' },
    { id: 'sports', icon: '🏃', label: '运动' },
    { id: 'stats', icon: '📊', label: '统计' },
    { id: 'profile', icon: '👤', label: '我的' }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-xl transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className={`text-xs font-medium ${
                currentPage === item.id ? 'text-primary-600' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
              {currentPage === item.id && (
                <div className="w-1 h-1 bg-primary-500 rounded-full mt-1" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomNav
