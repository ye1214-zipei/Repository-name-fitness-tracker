import React from 'react'
import Logo from '../components/Logo'

const SportsPage = () => {
  const sportsTypes = [
    { name: '户外跑步', icon: '🏃', color: 'from-green-400 to-green-600', desc: '记录你的跑步轨迹' },
    { name: '室内跑步', icon: '🏃‍♀️', color: 'from-emerald-400 to-emerald-600', desc: '跑步机训练' },
    { name: '力量训练', icon: '💪', color: 'from-orange-400 to-orange-600', desc: '无氧运动塑形' },
    { name: '骑行', icon: '🚴', color: 'from-blue-400 to-blue-600', desc: '户外骑行追踪' },
    { name: '游泳', icon: '🏊', color: 'from-cyan-400 to-cyan-600', desc: '泳池训练记录' },
    { name: '瑜伽', icon: '🧘', color: 'from-purple-400 to-purple-600', desc: '身心放松练习' },
    { name: 'HIIT', icon: '⚡', color: 'from-red-400 to-red-600', desc: '高强度间歇训练' },
    { name: '步行', icon: '🚶', color: 'from-teal-400 to-teal-600', desc: '日常步数记录' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">运动记录</h1>
          <p className="text-white/80 text-sm mt-1">选择运动类型开始</p>
        </div>
        <div className="w-14 h-14">
          <Logo />
        </div>
      </div>

      {/* Sports Grid */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">运动类型</h2>
        <div className="grid grid-cols-2 gap-4">
          {sportsTypes.map((sport, index) => (
            <button
              key={index}
              className="relative overflow-hidden rounded-2xl p-4 text-left hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.color} opacity-90`} />
              <div className="relative z-10">
                <span className="text-4xl block mb-2">{sport.icon}</span>
                <h3 className="font-bold text-white text-lg">{sport.name}</h3>
                <p className="text-white/80 text-sm mt-1">{sport.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Session Card */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">进行中的训练</h2>
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">待开始</span>
        </div>
        
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
          <div className="text-center">
            <div className="text-6xl font-bold">00:00:00</div>
            <p className="mt-2 opacity-90">点击开始记录你的运动</p>
          </div>
          <button className="w-full mt-6 bg-white text-primary-600 font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors">
            开始训练
          </button>
        </div>
      </div>

      {/* Workout Templates */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">训练模板</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">燃脂训练</div>
                <div className="text-sm text-gray-500">30分钟 · 消耗350卡</div>
              </div>
            </div>
            <span className="text-primary-500 text-xl">→</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">力量增肌</div>
                <div className="text-sm text-gray-500">45分钟 · 消耗280卡</div>
              </div>
            </div>
            <span className="text-primary-500 text-xl">→</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏃</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">5公里慢跑</div>
                <div className="text-sm text-gray-500">25分钟 · 消耗320卡</div>
              </div>
            </div>
            <span className="text-primary-500 text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsPage
