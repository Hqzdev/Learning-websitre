import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Lock, 
  Bell, 
  Shield, 
  Globe, 
  Key, 
  Smartphone,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [profileData, setProfileData] = useState({
    name: 'Иван Петров',
    email: 'ivan@example.com',
    company: 'TechCorp',
    position: 'CTO',
    phone: '+7 (999) 123-45-67',
    timezone: 'Europe/Moscow',
    language: 'ru'
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [notifications, setNotifications] = useState({
    email: {
      trainingComplete: true,
      modelErrors: true,
      billingUpdates: true,
      productUpdates: false,
      marketing: false
    },
    push: {
      trainingComplete: true,
      modelErrors: true,
      billingUpdates: false
    }
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: 30,
    apiAccess: true,
    dataRetention: 365
  })

  const tabs = [
    { id: 'profile', name: 'Профиль', icon: User },
    { id: 'security', name: 'Безопасность', icon: Shield },
    { id: 'notifications', name: 'Уведомления', icon: Bell },
    { id: 'preferences', name: 'Настройки', icon: Globe }
  ]

  const handleSave = () => {
    // Handle save logic here
    console.log('Settings saved')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Настройки</h1>
        <p className="text-gray-300">Управляйте настройками вашего аккаунта</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-4"
          >
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Личная информация</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Компания</label>
                    <input
                      type="text"
                      value={profileData.company}
                      onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Должность</label>
                    <input
                      type="text"
                      value={profileData.position}
                      onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Часовой пояс</label>
                    <select
                      value={profileData.timezone}
                      onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="Europe/Moscow">Москва (UTC+3)</option>
                      <option value="Europe/London">Лондон (UTC+0)</option>
                      <option value="America/New_York">Нью-Йорк (UTC-5)</option>
                      <option value="Asia/Tokyo">Токио (UTC+9)</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Password Change */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Смена пароля</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Текущий пароль</label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                        className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Новый пароль</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Подтвердите пароль</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Двухфакторная аутентификация</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">SMS аутентификация</h3>
                    <p className="text-gray-400 text-sm">Дополнительная защита вашего аккаунта</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={security.twoFactor}
                      onChange={(e) => setSecurity({...security, twoFactor: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>

              {/* Security Settings */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Настройки безопасности</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Таймаут сессии (минуты)</label>
                    <input
                      type="number"
                      min="5"
                      max="480"
                      value={security.sessionTimeout}
                      onChange={(e) => setSecurity({...security, sessionTimeout: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Хранение данных (дни)</label>
                    <input
                      type="number"
                      min="30"
                      max="3650"
                      value={security.dataRetention}
                      onChange={(e) => setSecurity({...security, dataRetention: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Email уведомления</h2>
                <div className="space-y-4">
                  {Object.entries(notifications.email).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {key === 'trainingComplete' && 'Уведомления о завершении обучения'}
                          {key === 'modelErrors' && 'Уведомления об ошибках модели'}
                          {key === 'billingUpdates' && 'Уведомления о биллинге'}
                          {key === 'productUpdates' && 'Уведомления об обновлениях продукта'}
                          {key === 'marketing' && 'Маркетинговые уведомления'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNotifications({
                            ...notifications,
                            email: {...notifications.email, [key]: e.target.checked}
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Push уведомления</h2>
                <div className="space-y-4">
                  {Object.entries(notifications.push).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {key === 'trainingComplete' && 'Уведомления о завершении обучения'}
                          {key === 'modelErrors' && 'Уведомления об ошибках модели'}
                          {key === 'billingUpdates' && 'Уведомления о биллинге'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNotifications({
                            ...notifications,
                            push: {...notifications.push, [key]: e.target.checked}
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Язык и регион</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Язык интерфейса</label>
                    <select
                      value={profileData.language}
                      onChange={(e) => setProfileData({...profileData, language: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="ru">Русский</option>
                      <option value="en">English</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Формат даты</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="DD.MM.YYYY">DD.MM.YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">API настройки</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">API доступ</h3>
                      <p className="text-gray-400 text-sm">Разрешить доступ к API</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={security.apiAccess}
                        onChange={(e) => setSecurity({...security, apiAccess: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="button-primary flex items-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Сохранить изменения</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Settings
