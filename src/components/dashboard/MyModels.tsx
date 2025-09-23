import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Play, 
  Settings, 
  Trash2, 
  Download, 
  Share2,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react'
import { Link } from 'react-router-dom'

const MyModels = () => {
  const [models] = useState([
    {
      id: 1,
      name: 'Техническая документация',
      description: 'Модель для анализа технических документов и инструкций',
      status: 'active',
      size: '7B',
      accuracy: 94.2,
      lastTrained: '2024-01-15',
      requests: 1247,
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'FAQ база знаний',
      description: 'Модель для ответов на часто задаваемые вопросы',
      status: 'training',
      size: '2B',
      accuracy: 87.5,
      lastTrained: '2024-01-14',
      requests: 892,
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      name: 'Юридические документы',
      description: 'Анализ и поиск в юридических документах',
      status: 'error',
      size: '13B',
      accuracy: 0,
      lastTrained: '2024-01-10',
      requests: 0,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    }
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'training':
        return <Clock className="w-4 h-4 text-blue-400" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Активна'
      case 'training':
        return 'Обучение'
      case 'error':
        return 'Ошибка'
      default:
        return 'Неизвестно'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Мои модели</h1>
          <p className="text-gray-300">Управляйте вашими AI моделями</p>
        </div>
        <Link to="/dashboard/training">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Создать модель</span>
          </motion.button>
        </Link>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-2xl p-6 card-hover"
          >
            {/* Model Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center`}>
                <model.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(model.status)}
                <span className={`text-xs font-medium ${
                  model.status === 'active' ? 'text-green-400' :
                  model.status === 'training' ? 'text-blue-400' :
                  'text-red-400'
                }`}>
                  {getStatusText(model.status)}
                </span>
              </div>
            </div>

            {/* Model Info */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-1">
                {model.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {model.description}
              </p>
            </div>

            {/* Model Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-xs text-gray-400 mb-1">Размер</div>
                <div className="text-sm font-medium text-white">{model.size}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Точность</div>
                <div className="text-sm font-medium text-white">
                  {model.accuracy > 0 ? `${model.accuracy}%` : 'N/A'}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Запросов</div>
                <div className="text-sm font-medium text-white">{model.requests}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Обновлено</div>
                <div className="text-sm font-medium text-white">
                  {new Date(model.lastTrained).toLocaleDateString('ru-RU')}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {model.status === 'active' && (
                <>
                  <Link to={`/dashboard/testing?model=${model.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 hover:text-primary-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Тестировать</span>
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </>
              )}
              
              {model.status === 'training' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Обучение...</span>
                </motion.button>
              )}
              
              {model.status === 'error' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Исправить</span>
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
              >
                <Settings className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {models.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            У вас пока нет моделей
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Создайте свою первую AI модель, загрузив данные и запустив обучение
          </p>
          <Link to="/dashboard/training">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              <span>Создать первую модель</span>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default MyModels
