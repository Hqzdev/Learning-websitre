import { motion } from 'framer-motion'
import { Upload, Brain, MessageSquare } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Загрузите данные',
      description: 'Загрузите ваши документы в формате PDF, DOCX, TXT или CSV. Система автоматически обработает и подготовит данные для обучения.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Обучите модель',
      description: 'Выберите размер модели (2B, 7B, 13B, 16B) и настройте параметры обучения. Запустите процесс и дождитесь завершения.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Получайте ответы',
      description: 'Тестируйте вашу модель, задавайте вопросы и получайте точные ответы на основе ваших данных. Интегрируйте через API.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Создание персональной AI модели занимает всего несколько минут. 
            Простой процесс в три шага.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-dark-700 to-dark-600 rounded-full flex items-center justify-center border-2 border-white/10 group-hover:border-primary-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 transform translate-x-6" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Готовы создать свою первую AI модель?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary text-lg px-8 py-4"
          >
            Начать сейчас
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
