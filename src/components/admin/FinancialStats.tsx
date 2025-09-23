import { motion } from 'framer-motion'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  CreditCard,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react'

const FinancialStats = () => {
  const revenueStats = [
    {
      period: 'Сегодня',
      revenue: 1247,
      change: '+12.5%',
      trend: 'up'
    },
    {
      period: 'Эта неделя',
      revenue: 8945,
      change: '+8.2%',
      trend: 'up'
    },
    {
      period: 'Этот месяц',
      revenue: 45230,
      change: '+15.3%',
      trend: 'up'
    },
    {
      period: 'Этот год',
      revenue: 234567,
      change: '+22.1%',
      trend: 'up'
    }
  ]

  const planStats = [
    {
      plan: 'Basic',
      users: 7234,
      revenue: 0,
      percentage: 70.5,
      color: 'from-gray-500 to-gray-600'
    },
    {
      plan: 'Pro',
      users: 2456,
      revenue: 71224,
      percentage: 24.0,
      color: 'from-primary-500 to-purple-600'
    },
    {
      plan: 'Enterprise',
      users: 557,
      revenue: 55143,
      percentage: 5.5,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      user: 'Александр Петров',
      plan: 'Pro',
      amount: 29,
      date: '2024-01-15 14:30',
      status: 'completed'
    },
    {
      id: 2,
      user: 'Мария Сидорова',
      plan: 'Enterprise',
      amount: 99,
      date: '2024-01-15 12:15',
      status: 'completed'
    },
    {
      id: 3,
      user: 'Дмитрий Козлов',
      plan: 'Pro',
      amount: 29,
      date: '2024-01-15 10:45',
      status: 'pending'
    },
    {
      id: 4,
      user: 'Елена Волкова',
      plan: 'Pro',
      amount: 29,
      date: '2024-01-14 16:20',
      status: 'completed'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400'
      case 'pending':
        return 'text-yellow-400'
      case 'failed':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Финансовая статистика</h1>
        <p className="text-gray-300">Анализ доходов, расходов и финансовых показателей</p>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">${stat.revenue.toLocaleString()}</div>
              <div className="text-sm text-gray-400">{stat.period}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Plan Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Распределение по планам</h2>
          <div className="space-y-4">
            {planStats.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 bg-gradient-to-r ${plan.color} rounded`} />
                    <span className="text-white font-medium">{plan.plan}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{plan.users.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">${plan.revenue.toLocaleString()}</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${plan.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${plan.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>
                <div className="text-xs text-gray-400">{plan.percentage}% от общего числа</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Последние транзакции</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{transaction.user}</div>
                    <div className="text-gray-400 text-xs">{transaction.plan} план</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">${transaction.amount}</div>
                  <div className={`text-xs ${getStatusColor(transaction.status)}`}>
                    {transaction.status === 'completed' ? 'Завершено' :
                     transaction.status === 'pending' ? 'Ожидает' : 'Ошибка'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">$126,367</div>
              <div className="text-sm text-gray-400">Общий доход</div>
            </div>
            <BarChart3 className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">10,247</div>
              <div className="text-sm text-gray-400">Активных пользователей</div>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">$12.33</div>
              <div className="text-sm text-gray-400">ARPU (средний доход с пользователя)</div>
            </div>
            <PieChart className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>
      </div>

      {/* Revenue Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Динамика доходов</h2>
        <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">График доходов будет отображаться здесь</p>
            <p className="text-gray-500 text-sm">Интеграция с Chart.js или аналогичной библиотекой</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FinancialStats
