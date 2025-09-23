import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Brain, 
  Play, 
  Pause, 
  Settings, 
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react'

const Training = () => {
  const [selectedModel, setSelectedModel] = useState('7B')
  const [trainingParams, setTrainingParams] = useState({
    epochs: 3,
    learningRate: 0.001,
    batchSize: 4,
    maxTokens: 2048,
    language: 'ru',
    theme: 'general'
  })
  const [isTraining, setIsTraining] = useState(false)
  const [trainingProgress, setTrainingProgress] = useState(0)

  const models = [
    { id: '2B', name: '2B Model', description: 'Быстрая модель для простых задач', price: 'Бесплатно' },
    { id: '7B', name: '7B Model', description: 'Оптимальный баланс качества и скорости', price: 'Pro' },
    { id: '13B', name: '13B Model', description: 'Мощная модель для сложных задач', price: 'Enterprise' },
    { id: '16B', name: '16B Model', description: 'Максимальная производительность', price: 'Enterprise+' }
  ]

  const themes = [
    { id: 'general', name: 'Общая тематика' },
    { id: 'technical', name: 'Техническая документация' },
    { id: 'medical', name: 'Медицина' },
    { id: 'legal', name: 'Юриспруденция' },
    { id: 'business', name: 'Бизнес' },
    { id: 'education', name: 'Образование' }
  ]

  const startTraining = () => {
    setIsTraining(true)
    setTrainingProgress(0)
    
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsTraining(false)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 1000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Обучение модели</h1>
        <p className="text-gray-300">Настройте параметры и запустите обучение вашей AI модели</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Training Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Model Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Выбор модели</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {models.map((model) => (
                <motion.div
                  key={model.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedModel === model.id
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setSelectedModel(model.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                    <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
                      {model.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Training Parameters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Параметры обучения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Количество эпох</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={trainingParams.epochs}
                  onChange={(e) => setTrainingParams({...trainingParams, epochs: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Скорость обучения</label>
                <input
                  type="number"
                  step="0.0001"
                  min="0.0001"
                  max="0.01"
                  value={trainingParams.learningRate}
                  onChange={(e) => setTrainingParams({...trainingParams, learningRate: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Размер батча</label>
                <input
                  type="number"
                  min="1"
                  max="32"
                  value={trainingParams.batchSize}
                  onChange={(e) => setTrainingParams({...trainingParams, batchSize: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Максимум токенов</label>
                <input
                  type="number"
                  min="512"
                  max="4096"
                  value={trainingParams.maxTokens}
                  onChange={(e) => setTrainingParams({...trainingParams, maxTokens: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Язык</label>
                <select
                  value={trainingParams.language}
                  onChange={(e) => setTrainingParams({...trainingParams, language: e.target.value})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                  <option value="auto">Автоопределение</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Тематика</label>
                <select
                  value={trainingParams.theme}
                  onChange={(e) => setTrainingParams({...trainingParams, theme: e.target.value})}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {themes.map((theme) => (
                    <option key={theme.id} value={theme.id}>{theme.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Training Status */}
        <div className="space-y-6">
          {/* Training Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Управление обучением</h2>
            
            {!isTraining ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Готов к обучению</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Настройте параметры и запустите обучение модели
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startTraining}
                  className="w-full button-primary py-3 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Запустить обучение</span>
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Обучение в процессе</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Модель обучается на ваших данных...
                  </p>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Прогресс</span>
                    <span className="text-white font-medium">{Math.round(trainingProgress)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${trainingProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Примерное время: ~3 часа</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsTraining(false)}
                  className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Pause className="w-5 h-5" />
                  <span>Остановить</span>
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Training History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">История обучения</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-white font-medium text-sm">Техническая документация</div>
                    <div className="text-gray-400 text-xs">Завершено 2 часа назад</div>
                  </div>
                </div>
                <div className="text-green-400 text-sm font-medium">94.2%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-white font-medium text-sm">FAQ база</div>
                    <div className="text-gray-400 text-xs">Завершено 1 день назад</div>
                  </div>
                </div>
                <div className="text-green-400 text-sm font-medium">87.5%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="text-white font-medium text-sm">Юридические документы</div>
                    <div className="text-gray-400 text-xs">Ошибка 3 дня назад</div>
                  </div>
                </div>
                <div className="text-red-400 text-sm font-medium">Ошибка</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Training
