import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '0',
      period: 'навсегда',
      description: 'Идеально для экспериментов и небольших проектов',
      features: [
        'Модель 2B параметров',
        '5 часов обучения в месяц',
        '5 ГБ данных',
        'Базовый API доступ',
        'Email поддержка',
        'До 1000 запросов/месяц'
      ],
      buttonText: 'Начать бесплатно',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '29',
      period: 'в месяц',
      description: 'Для растущего бизнеса и профессиональных задач',
      features: [
        'Модель 7B параметров',
        '20 часов обучения в месяц',
        '50 ГБ данных',
        'Полный API доступ',
        'Приоритетная поддержка',
        'До 10,000 запросов/месяц',
        'Аналитика и метрики',
        'Интеграции с внешними сервисами'
      ],
      buttonText: 'Выбрать Pro',
      popular: true,
      color: 'from-primary-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '99',
      period: 'в месяц',
      description: 'Для крупных организаций с высокими требованиями',
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
      buttonText: 'Связаться с нами',
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Тарифные планы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите план, который подходит вашим потребностям. 
            Все планы включают доступ к API и техническую поддержку.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-2xl p-8 card-hover ${
                plan.popular ? 'ring-2 ring-primary-500/50 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold gradient-text">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'button-primary'
                    : plan.name === 'Basic'
                    ? 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
                    : 'button-secondary'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-primary-400" />
              <span className="text-white font-semibold">Гарантия возврата средств</span>
            </div>
            <p className="text-gray-300 text-sm">
              Не удовлетворены результатом? Мы вернем деньги в течение 30 дней без вопросов.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
