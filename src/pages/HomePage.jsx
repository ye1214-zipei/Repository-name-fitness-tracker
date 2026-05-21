import React from 'react'
import Logo from '../components/Logo'

const HomePage = () => {
  const todayStats = {
    steps: 8542,
    calories: 486,
    activeTime: 45,
    distance: 5.2
  }

  const weeklyGoal = {
    current: 65,
    target: 100
  }

  const recentActivities = [
    { type: '跑步', time: '今天 08:30', duration: 32, calories: 280 },
    { type: '健身', time: '昨天 19:00', duration: 45, calories: 320 },
    { type: '骑行', time: '前天 07:00', duration: 60, calories: 450 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">运析</h1>
          <p className="text-white/80 text-sm mt-1">记录每一步</p>
        </div>
        <div className="w-14 h-14">
          <Logo />
        </div>
      </div>

      {/* Today's Summary Card */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">今日运动</h2>
          <span className="text-sm text-primary-500">2026年5月20日</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-4 text-white">
            <div className="text-3xl font-bold">{todayStats.steps}</div>
            <div className="text-sm opacity-90 mt-1">今日步数</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-4 text-white">
            <div className="text-3xl font-bold">{todayStats.calories}</div>
            <div className="text-sm opacity-90 mt-1">消耗热量</div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{todayStats.activeTime}</div>
            <div className="text-sm text-gray-500 mt-1">活跃分钟</div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{todayStats.distance}</div>
            <div className="text-sm text-gray-500 mt-1">运动公里</div>
          </div>
        </div>

        {/* Weekly Goal Progress */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">本周目标进度</span>
            <span className="text-sm text-primary-600 font-semibold">{weeklyGoal.current}%</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
              style={{ width: `${weeklyGoal.current}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">快速开始</h2>
        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl text-white hover:scale-105 transition-transform">
            <span className="text-3xl mb-2">🏃</span>
            <span className="text-sm font-medium">跑步</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl text-white hover:scale-105 transition-transform">
            <span className="text-3xl mb-2">💪</span>
            <span className="text-sm font-medium">健身</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl text-white hover:scale-105 transition-transform">
            <span className="text-3xl mb-2">🚴</span>
            <span className="text-sm font-medium">骑行</span>
          </button>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">最近活动</h2>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">
                    {activity.type === '跑步' ? '🏃' : activity.type === '健身' ? '💪' : '🚴'}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">{activity.type}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-800">{activity.duration}分钟</div>
                <div className="text-xs text-accent-500">{activity.calories}卡</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
