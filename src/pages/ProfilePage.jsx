import React from 'react'
import Logo from '../components/Logo'

const ProfilePage = () => {
  const profile = {
    name: '运动达人',
    avatar: '🏃',
    level: 12,
    points: 2850,
    memberSince: '2024年3月'
  }

  const settings = [
    { icon: '🎯', label: '运动目标', value: '每日10000步' },
    { icon: '⚖️', label: '体重管理', value: '目标65kg' },
    { icon: '🔔', label: '提醒设置', value: '每天08:00' },
    { icon: '📊', label: '数据同步', value: '已连接' },
    { icon: '🔐', label: '隐私设置', value: '私密' },
    { icon: '⚙️', label: '通用设置', value: '' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">个人中心</h1>
          <p className="text-white/80 text-sm mt-1">管理你的账户</p>
        </div>
        <div className="w-14 h-14">
          <Logo />
        </div>
      </div>

      {/* Profile Card */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-5xl">
            {profile.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
            <div className="flex items-center mt-2 space-x-2">
              <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                Lv.{profile.level}
              </span>
              <span className="px-3 py-1 bg-accent-100 text-accent-600 rounded-full text-sm font-medium">
                ⭐ {profile.points} 积分
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-500">会员加入时间</p>
          <p className="font-semibold text-gray-800">{profile.memberSince}</p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">累计数据</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">156</div>
            <div className="text-xs text-gray-500 mt-1">训练次数</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-600">486h</div>
            <div className="text-xs text-gray-500 mt-1">运动时长</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">32</div>
            <div className="text-xs text-gray-500 mt-1">连续天数</div>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">设置</h2>
        <div className="space-y-2">
          {settings.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-800">{item.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.value && (
                  <span className="text-gray-500 text-sm">{item.value}</span>
                )}
                <span className="text-gray-400">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className="glass rounded-3xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">关于运析</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">当前版本</span>
            <span className="text-gray-800 font-medium">v2.1.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">检查更新</span>
            <span className="text-primary-500">已是最新版本</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">意见反馈</span>
            <span className="text-gray-400">→</span>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="w-full glass rounded-2xl py-4 text-red-500 font-semibold hover:bg-white/20 transition-colors">
        退出登录
      </button>
    </div>
  )
}

export default ProfilePage
