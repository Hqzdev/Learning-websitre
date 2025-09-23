import { motion } from 'framer-motion'
import { Zap, Cpu, Database, Rocket } from 'lucide-react'

const ModelSelectionSection = () => {
  const models = [
    {
      name: '2B Model',
      size: '2B параметров',
      description: 'Быстрая и эффективная модель для простых задач',
      features: ['Быстрое обучение', 'Низкое потребление ресурсов', 'Идеально для MVP'],
      price: 'Бесплатно',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      name: '7B Model',
      size: '7B параметров',
      description: 'Оптимальный баланс качества и скорости',
      features: ['Высокое качество ответов', 'Быстрая обработка', 'Подходит для бизнеса'],
      price: 'Pro',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: '13B Model',
      size: '13B параметров',
      description: 'Мощная модель для сложных задач',
      features: ['Превосходное качество', 'Сложная логика', 'Профессиональное использование'],
      price: 'Enterprise',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      popular: false
    },
    {
      name: '16B Model',
      size: '16B параметров',
      description: 'Максимальная производительность',
      features: ['Лучшее качество', 'Сложные рассуждения', 'Корпоративные решения'],
      price: 'Enterprise+',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      popular: false
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
            Выберите модель
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            От быстрых экспериментов до корпоративных решений. 
            Выберите модель, которая подходит вашим задачам.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-2xl p-6 card-hover ${
                model.popular ? 'ring-2 ring-primary-500/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {model.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Популярный выбор
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-2xl flex items-center justify-center`}>
                  <model.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Model Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {model.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {model.size}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {model.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">
                  {model.price}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    model.popular
                      ? 'button-primary'
                      : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {model.price === 'Бесплатно' ? 'Начать' : 'Выбрать'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Все модели поддерживают обучение на ваших данных и интеграцию через API
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ModelSelectionSection
