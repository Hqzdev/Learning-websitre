import { motion } from 'framer-motion'
import { 
  Check, 
  Star, 
  CreditCard, 
  Download, 
  Calendar,
  TrendingUp,
  AlertCircle,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Subscription = () => {
  const currentPlan = {
    name: 'Pro',
    price: 29,
    period: 'месяц',
    features: [
      'Модель 7B параметров',
      '20 часов обучения в месяц',
      '50 ГБ данных',
      'Полный API доступ',
      'Приоритетная поддержка',
      'До 10,000 запросов/месяц',
      'Расширенная аналитика',
      'Интеграции с внешними сервисами'
    ],
    nextBilling: '2024-02-15',
    usage: {
      trainingHours: 12.5,
      trainingLimit: 20,
      dataUsed: 25.4,
      dataLimit: 50,
      requests: 3247,
      requestsLimit: 10000
    }
  }

  const plans = [
    {
      name: 'Basic',
      price: 0,
      period: 'навсегда',
      description: 'Идеально для экспериментов',
      features: [
        'Модель 2B параметров',
        '5 часов обучения в месяц',
        '5 ГБ данных',
        'Базовый API доступ',
        'Email поддержка',
        'До 1000 запросов/месяц'
      ],
      current: false,
      popular: false
    },
    {
      name: 'Pro',
      price: 29,
      period: 'в месяц',
      description: 'Для растущего бизнеса',
      features: [
        'Модель 7B параметров',
        '20 часов обучения в месяц',
        '50 ГБ данных',
        'Полный API доступ',
        'Приоритетная поддержка',
        'До 10,000 запросов/месяц',
        'Расширенная аналитика',
        'Интеграции с внешними сервисами'
      ],
      current: true,
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'в месяц',
      description: 'Для крупных организаций',
      features: [
        'Модель 16B параметров',
        '100 часов обучения в месяц',
        '200 ГБ данных',
        'Неограниченный API доступ',
        'Персональный менеджер',
        'Неограниченные запросы',
        'Расширенная аналитика',
        'Кастомные интеграции',
        'SLA 99.9%',
        'Обучение команды'
      ],
      current: false,
      popular: false
    }
  ]

  const usagePercentage = (used: number, limit: number) => {
    return Math.min((used / limit) * 100, 100)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Подписка</h1>
        <p className="text-gray-300">Управляйте вашим тарифным планом и использованием</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Plan */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Текущий план</h2>
                <p className="text-gray-400">Ваша активная подписка</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold gradient-text">${currentPlan.price}</div>
                <div className="text-gray-400">/{currentPlan.period}</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                {currentPlan.name}
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                Активен
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="text-sm text-gray-400">
                Следующее списание: {new Date(currentPlan.nextBilling).toLocaleDateString('ru-RU')}
              </div>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary text-sm px-4 py-2"
                >
                  Изменить план
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Отменить подписку
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Usage Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Использование ресурсов</h2>
            <div className="space-y-6">
              {/* Training Hours */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Часы обучения</span>
                  <span className="text-gray-400 text-sm">
                    {currentPlan.usage.trainingHours} / {currentPlan.usage.trainingLimit} часов
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${usagePercentage(currentPlan.usage.trainingHours, currentPlan.usage.trainingLimit)}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>

              {/* Data Usage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Использование данных</span>
                  <span className="text-gray-400 text-sm">
                    {currentPlan.usage.dataUsed} / {currentPlan.usage.dataLimit} ГБ
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${usagePercentage(currentPlan.usage.dataUsed, currentPlan.usage.dataLimit)}%` }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>

              {/* API Requests */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">API запросы</span>
                  <span className="text-gray-400 text-sm">
                    {currentPlan.usage.requests.toLocaleString()} / {currentPlan.usage.requestsLimit.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${usagePercentage(currentPlan.usage.requests, currentPlan.usage.requestsLimit)}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Billing Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Информация о биллинге</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Способ оплаты</span>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <span className="text-white text-sm">•••• 4242</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Следующее списание</span>
                <span className="text-white text-sm">15 фев 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Сумма</span>
                <span className="text-white text-sm">$29.00</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 button-secondary text-sm py-2"
            >
              Управление оплатой
            </motion.button>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Быстрые действия</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 flex items-center space-x-3"
              >
                <Download className="w-4 h-4" />
                <span>Скачать счет</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 flex items-center space-x-3"
              >
                <Calendar className="w-4 h-4" />
                <span>История платежей</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 flex items-center space-x-3"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Аналитика использования</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Upgrade Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-effect rounded-2xl p-6 border border-primary-500/20"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Обновите план</h3>
                <p className="text-gray-400 text-sm">Получите больше возможностей</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Вы используете 62% от лимита обучения. Обновитесь до Enterprise для неограниченного доступа.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full button-primary text-sm py-2"
            >
              Обновить до Enterprise
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Available Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Доступные планы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className={`p-6 rounded-xl border-2 ${
                plan.current
                  ? 'border-primary-500 bg-primary-500/10'
                  : plan.popular
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.current
                    ? 'bg-primary-500/20 text-primary-400 cursor-not-allowed'
                    : plan.popular
                    ? 'button-primary'
                    : 'button-secondary'
                }`}
                disabled={plan.current}
              >
                {plan.current ? 'Текущий план' : 'Выбрать план'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Subscription
