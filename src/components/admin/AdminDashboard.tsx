import { motion } from 'framer-motion'
import { 
  Users, 
  Brain, 
  DollarSign, 
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Всего пользователей',
      value: '10,247',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Активных моделей',
      value: '2,156',
      change: '+8.2%',
      changeType: 'positive',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Доход за месяц',
      value: '$45,230',
      change: '+15.3%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Использование GPU',
      value: '78%',
      change: '+5.1%',
      changeType: 'negative',
      icon: Activity,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentActivity = [
    {
      type: 'user',
      message: 'Новый пользователь зарегистрировался',
      user: 'Александр Петров',
      time: '2 минуты назад',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      type: 'training',
      message: 'Обучение модели завершено',
      user: 'Модель "Техническая документация"',
      time: '15 минут назад',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      type: 'payment',
      message: 'Новый платеж получен',
      user: '$29.00 - Pro план',
      time: '1 час назад',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      type: 'error',
      message: 'Ошибка в обучении модели',
      user: 'Модель ID: 12345',
      time: '2 часа назад',
      icon: AlertTriangle,
      color: 'text-red-400'
    }
  ]

  const systemHealth = [
    { name: 'API сервер', status: 'healthy', uptime: '99.9%' },
    { name: 'База данных', status: 'healthy', uptime: '99.8%' },
    { name: 'GPU кластер', status: 'warning', uptime: '95.2%' },
    { name: 'Файловое хранилище', status: 'healthy', uptime: '99.7%' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Панель управления</h1>
        <p className="text-gray-300">Обзор системы и ключевые метрики</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.title}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Последняя активность</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'error' ? 'bg-red-500/20' : 'bg-white/10'
                }`}>
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm">{activity.message}</div>
                  <div className="text-gray-400 text-xs">{activity.user}</div>
                  <div className="text-gray-500 text-xs mt-1">{activity.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Состояние системы</h2>
          <div className="space-y-4">
            {systemHealth.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    service.status === 'healthy' ? 'bg-green-400' :
                    service.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                  }`} />
                  <div>
                    <div className="text-white font-medium text-sm">{service.name}</div>
                    <div className="text-gray-400 text-xs">Uptime: {service.uptime}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {service.status === 'healthy' ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  )}
                  <span className={`text-xs font-medium ${
                    service.status === 'healthy' ? 'text-green-400' :
                    service.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {service.status === 'healthy' ? 'Работает' :
                     service.status === 'warning' ? 'Предупреждение' : 'Ошибка'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Быстрые действия</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-all duration-200"
          >
            <Users className="w-8 h-8 text-blue-400 mb-3" />
            <div className="text-white font-medium mb-1">Управление пользователями</div>
            <div className="text-gray-400 text-sm">Просмотр и управление аккаунтами</div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-all duration-200"
          >
            <Monitor className="w-8 h-8 text-green-400 mb-3" />
            <div className="text-white font-medium mb-1">Мониторинг системы</div>
            <div className="text-gray-400 text-sm">Отслеживание производительности</div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-all duration-200"
          >
            <DollarSign className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-white font-medium mb-1">Финансовая статистика</div>
            <div className="text-gray-400 text-sm">Анализ доходов и расходов</div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminDashboard
