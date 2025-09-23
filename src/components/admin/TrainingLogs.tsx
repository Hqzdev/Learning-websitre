import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Eye,
  CheckCircle,
  AlertTriangle,
  Clock,
  Brain,
  User
} from 'lucide-react'

const TrainingLogs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const trainingLogs = [
    {
      id: 1,
      modelName: 'Техническая документация',
      userId: 'user_123',
      userName: 'Александр Петров',
      status: 'completed',
      startTime: '2024-01-15 10:30:00',
      endTime: '2024-01-15 14:30:00',
      duration: '4h 00m',
      accuracy: 94.2,
      loss: 0.156,
      epochs: 3,
      dataSize: '2.4 ГБ',
      modelSize: '7B'
    },
    {
      id: 2,
      modelName: 'FAQ база знаний',
      userId: 'user_456',
      userName: 'Мария Сидорова',
      status: 'failed',
      startTime: '2024-01-15 12:15:00',
      endTime: '2024-01-15 13:45:00',
      duration: '1h 30m',
      accuracy: 0,
      loss: 0,
      epochs: 1,
      dataSize: '856 МБ',
      modelSize: '2B',
      error: 'Недостаточно данных для обучения'
    },
    {
      id: 3,
      modelName: 'Юридические документы',
      userId: 'user_789',
      userName: 'Дмитрий Козлов',
      status: 'running',
      startTime: '2024-01-15 15:00:00',
      endTime: null,
      duration: '2h 15m',
      accuracy: 0,
      loss: 0,
      epochs: 2,
      dataSize: '5.2 ГБ',
      modelSize: '13B'
    },
    {
      id: 4,
      modelName: 'Медицинские справочники',
      userId: 'user_321',
      userName: 'Елена Волкова',
      status: 'completed',
      startTime: '2024-01-14 09:00:00',
      endTime: '2024-01-14 16:30:00',
      duration: '7h 30m',
      accuracy: 91.8,
      loss: 0.203,
      epochs: 5,
      dataSize: '8.7 ГБ',
      modelSize: '16B'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'failed':
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      case 'running':
        return <Clock className="w-4 h-4 text-blue-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Завершено'
      case 'failed':
        return 'Ошибка'
      case 'running':
        return 'Выполняется'
      default:
        return 'Неизвестно'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400'
      case 'failed':
        return 'text-red-400'
      case 'running':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const filteredLogs = trainingLogs.filter(log => {
    const matchesSearch = log.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.userName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || log.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Логи обучения</h1>
          <p className="text-gray-300">История обучения моделей и системные логи</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-primary flex items-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Экспорт логов</span>
        </motion.button>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по модели или пользователю..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Все статусы</option>
              <option value="completed">Завершено</option>
              <option value="failed">Ошибки</option>
              <option value="running">Выполняется</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
            >
              <Filter className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Training Logs Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-effect rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Модель</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Пользователь</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Статус</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Время</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Точность</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Данные</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredLogs.map((log, index) => (
                <motion.tr
                  key={log.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{log.modelName}</div>
                        <div className="text-gray-400 text-sm">{log.modelSize} • {log.epochs} эпох</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{log.userName}</div>
                        <div className="text-gray-400 text-sm">{log.userId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(log.status)}
                      <span className={`text-sm font-medium ${getStatusColor(log.status)}`}>
                        {getStatusText(log.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-white text-sm">{log.startTime}</div>
                      <div className="text-gray-400 text-xs">
                        {log.endTime ? `Завершено: ${log.endTime}` : 'В процессе...'}
                      </div>
                      <div className="text-gray-500 text-xs">Длительность: {log.duration}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      {log.accuracy > 0 ? (
                        <>
                          <div className="text-white font-medium">{log.accuracy}%</div>
                          <div className="text-gray-400 text-xs">Loss: {log.loss}</div>
                        </>
                      ) : (
                        <div className="text-gray-400 text-sm">-</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-white text-sm">{log.dataSize}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">{trainingLogs.length}</div>
              <div className="text-sm text-gray-400">Всего обучений</div>
            </div>
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">
                {trainingLogs.filter(l => l.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-400">Успешных</div>
            </div>
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">
                {trainingLogs.filter(l => l.status === 'failed').length}
              </div>
              <div className="text-sm text-gray-400">Ошибок</div>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">
                {trainingLogs.filter(l => l.status === 'running').length}
              </div>
              <div className="text-sm text-gray-400">В процессе</div>
            </div>
            <Clock className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TrainingLogs
