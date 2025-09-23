import { motion } from 'framer-motion'
import { Check, Star, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage = () => {
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
        'До 1000 запросов/месяц',
        'Базовые аналитики',
        'Стандартные интеграции'
      ],
      buttonText: 'Начать бесплатно',
      popular: false,
      color: 'from-gray-500 to-gray-600',
      href: '/register'
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
        'Расширенная аналитика',
        'Интеграции с внешними сервисами',
        'Кастомные промпты',
        'Экспорт моделей'
      ],
      buttonText: 'Выбрать Pro',
      popular: true,
      color: 'from-primary-500 to-purple-600',
      href: '/register?plan=pro'
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
        'Обучение команды',
        'Приоритетная обработка',
        '24/7 телефонная поддержка'
      ],
      buttonText: 'Связаться с нами',
      popular: false,
      color: 'from-purple-500 to-pink-500',
      href: '/contact'
    }
  ]

  const faqs = [
    {
      question: 'Можно ли изменить план в любое время?',
      answer: 'Да, вы можете повысить или понизить свой план в любое время. Изменения вступают в силу немедленно, а разница в стоимости будет зачислена или списана с вашего счета.'
    },
    {
      question: 'Что происходит с данными при отмене подписки?',
      answer: 'Ваши данные и обученные модели остаются доступными в течение 30 дней после отмены. После этого они будут удалены, если вы не возобновите подписку.'
    },
    {
      question: 'Есть ли скидки для студентов?',
      answer: 'Да, мы предлагаем скидку 50% для студентов при предъявлении студенческого билета. Свяжитесь с нашей поддержкой для получения скидки.'
    },
    {
      question: 'Можно ли получить индивидуальный тариф?',
      answer: 'Для крупных организаций мы предлагаем индивидуальные тарифы с персональными условиями. Свяжитесь с нами для обсуждения ваших потребностей.'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Выберите свой план
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Начните бесплатно и масштабируйтесь по мере роста ваших потребностей. 
              Все планы включают доступ к API и техническую поддержку.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
                <Link to={plan.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'button-primary'
                        : plan.name === 'Basic'
                        ? 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
                        : 'button-secondary'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-300">
              Ответы на популярные вопросы о тарифах и подписках
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Присоединяйтесь к тысячам разработчиков, которые уже создают AI модели с нами
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary text-lg px-8 py-4"
                >
                  Начать бесплатно
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary text-lg px-8 py-4"
                >
                  Связаться с нами
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
