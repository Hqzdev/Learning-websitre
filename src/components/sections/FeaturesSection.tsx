import { motion } from 'framer-motion'
import { 
  FileText, 
  Search, 
  MessageSquare, 
  Zap, 
  Shield, 
  Globe,
  BarChart3,
  Code
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'Анализ текстов',
      description: 'Автоматический анализ и обработка больших объемов текстовых данных с извлечением ключевой информации.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Умный поиск',
      description: 'Семантический поиск по вашим документам с пониманием контекста и смысла запросов.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Генерация ответов',
      description: 'Создание точных и релевантных ответов на основе ваших данных с настраиваемым стилем.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Автоматизация',
      description: 'Интеграция с вашими системами для автоматизации рутинных задач и процессов.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Защита ваших данных с помощью шифрования и соответствие стандартам безопасности.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Многоязычность',
      description: 'Поддержка более 50 языков для обучения и работы с многоязычными документами.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Аналитика',
      description: 'Детальная аналитика использования модели с графиками и метриками производительности.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'API интеграция',
      description: 'Простая интеграция через REST API с примерами кода для популярных языков программирования.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Возможности платформы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мощные инструменты для создания, обучения и использования 
            персональных AI моделей в любых сферах деятельности.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 card-hover group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы начать?
            </h3>
            <p className="text-gray-300 mb-6">
              Создайте свою первую AI модель уже сегодня и убедитесь в возможностях платформы.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary text-lg px-8 py-4"
            >
              Попробовать бесплатно
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
