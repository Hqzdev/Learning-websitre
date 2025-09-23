import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-primary-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Начните бесплатно уже сегодня</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-white">Готовы создать</span>
            <br />
            <span className="gradient-text">свою AI модель?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Присоединяйтесь к тысячам разработчиков и компаний, 
            которые уже используют AI Builder для создания умных решений.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/register"
              className="button-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Создать модель бесплатно</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/pricing"
              className="button-secondary text-lg px-8 py-4"
            >
              Посмотреть тарифы
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-sm">Без кредитной карты</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-sm">Настройка за 5 минут</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-sm">24/7 поддержка</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
