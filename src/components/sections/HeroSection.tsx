import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-primary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Новая версия 2.0 доступна</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Создай свою</span>
            <br />
            <span className="gradient-text">ИИ за 5 минут</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Обучайте персональные AI модели на ваших данных. 
            Анализ текстов, поиск, генерация ответов и автоматизация — всё в одном месте.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/register"
              className="button-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>Создать модель</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <button className="button-secondary text-lg px-8 py-4 flex items-center space-x-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Попробовать демо</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <div className="text-gray-400 text-sm">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-gray-400 text-sm">Обученных моделей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400 text-sm">Время работы</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
