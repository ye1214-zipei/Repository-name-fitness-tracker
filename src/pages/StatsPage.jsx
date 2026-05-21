import React from 'react'
import Logo from '../components/Logo'

const StatsPage = () => {
  const weeklyData = [
    { day: '周一', value: 4500, active: true },
    { day: '周二', value: 6200, active: true },
    { day: '周三', value: 3800, active: true },
    { day: '周四', value: 7800, active: true },
    { day: '周五', value: 5200, active: true },
    { day: '周六', value: 8900, active: true },
    { day: '周日', value: 4200, active: false }
  ]

  const monthlyStats = {
    totalSteps: 156420,
    totalCalories: 8920,
    totalDistance: 98.5,
    activeDays: 24
  }

  const achievements = [
    { icon: '🏆', title: '连续7天达成目标', desc: '保持运动习惯', unlocked: true },
    { icon: '🔥', title: '燃烧10000卡', desc: '本月热量消耗', unlocked: true },
    { icon: '👟', title: '跑步100公里', desc: '累计跑步里程', unlocked: false },
    { icon: '⭐', title: '首次马拉松', desc: '完成42.195公里', unlocked: false }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">运动统计</h1>
          <p className="text-white/80 text-sm mt-1">查看你的运动数据</p>
        </div>
        <div className="w-14 h-14">
          <Logo />
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">本月概览</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-5 text-white">
            <div className="text-3xl font-bold">{monthlyStats.totalSteps.toLocaleString()}</div>
            <div className="text-sm opacity-90 mt-1">本月总步数</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-5 text-white">
            <div className="text-3xl font-bold">{monthlyStats.totalCalories.toLocaleString()}</div>
            <div className="text-sm opacity-90 mt-1">消耗总卡路里</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{monthlyStats.totalDistance}</div>
            <div className="text-sm text-gray-500 mt-1">运动总公里</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{monthlyStats.activeDays}</div>
            <div className="text-sm text-gray-500 mt-1">活跃天数</div>
          </div>
        </div>
      </div>

      {/* Weekly Steps Chart */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">本周步数</h2>
          <span className="text-primary-500 font-medium">平均 5,800步</span>
        </div>
        <div className="flex items-end justify-between h-48 px-2">
          {weeklyData.map((day, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full max-w-10 relative">
                <div 
                  className={`rounded-lg transition-all duration-500 ${
                    day.active ? 'bg-gradient-to-t from-primary-500 to-primary-400' : 'bg-gray-300'
                  }`}
                  style={{ height: `${(day.value / 10000) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 mt-2">{day.day}</span>
              <span className="text-xs font-medium text-gray-700">{day.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">成就徽章</h2>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className={`p-4 rounded-2xl ${
                item.unlocked 
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                  : 'bg-gray-100'
              }`}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className={`font-bold ${item.unlocked ? 'text-white' : 'text-gray-500'}`}>
                {item.title}
              </h3>
              <p className={`text-sm mt-1 ${item.unlocked ? 'text-white/90' : 'text-gray-400'}`}>
                {item.desc}
              </p>
              {!item.unlocked && (
                <div className="mt-2">
                  <span className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-500">
                    未解锁
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Report */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">进度报告</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">周目标 (50公里)</span>
              <span className="text-sm font-medium text-primary-600">78%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" style={{ width: '78%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">月目标 (200公里)</span>
              <span className="text-sm font-medium text-accent-600">49%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full" style={{ width: '49%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">年度挑战 (1000公里)</span>
              <span className="text-sm font-medium text-green-600">9.8%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '9.8%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPage
