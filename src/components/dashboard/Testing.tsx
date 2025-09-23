import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Settings, 
  Copy, 
  ThumbsUp, 
  ThumbsDown,
  RotateCcw,
  Download
} from 'lucide-react'

const Testing = () => {
  const [selectedModel, setSelectedModel] = useState('technical-docs')
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'user',
      message: 'Как настроить насос для перекачки воды?',
      timestamp: '2024-01-15 14:30'
    },
    {
      id: 2,
      type: 'bot',
      message: 'Для настройки насоса для перекачки воды выполните следующие шаги:\n\n1. Проверьте герметичность всех соединений\n2. Убедитесь, что всасывающий патрубок погружен в воду\n3. Заполните насос водой перед первым запуском\n4. Проверьте направление вращения двигателя\n5. Отрегулируйте давление на реле давления\n\nВажно: перед первым запуском обязательно заполните насос водой, иначе может произойти сухой ход.',
      timestamp: '2024-01-15 14:31'
    },
    {
      id: 3,
      type: 'user',
      message: 'Что делать если насос не качает воду?',
      timestamp: '2024-01-15 14:35'
    },
    {
      id: 4,
      type: 'bot',
      message: 'Если насос не качает воду, проверьте следующие возможные причины:\n\n1. **Проверьте уровень воды** - убедитесь, что всасывающий патрубок погружен в воду\n2. **Проверьте герметичность** - все соединения должны быть герметичными\n3. **Проверьте засорение** - очистите фильтры и всасывающий патрубок\n4. **Проверьте воздушные пробки** - стравите воздух из системы\n5. **Проверьте электропитание** - убедитесь в правильности подключения\n\nЕсли проблема не решается, обратитесь к специалисту.',
      timestamp: '2024-01-15 14:36'
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const models = [
    { id: 'technical-docs', name: 'Техническая документация', status: 'active' },
    { id: 'faq-base', name: 'FAQ база знаний', status: 'training' },
    { id: 'legal-docs', name: 'Юридические документы', status: 'error' }
  ]

  const sendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user' as const,
      message: message.trim(),
      timestamp: new Date().toLocaleString('ru-RU')
    }

    setChatHistory(prev => [...prev, userMessage])
    setMessage('')
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot' as const,
        message: 'Это тестовый ответ от AI модели. В реальном приложении здесь будет ответ, сгенерированный на основе ваших данных.',
        timestamp: new Date().toLocaleString('ru-RU')
      }
      setChatHistory(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Тестирование модели</h1>
          <p className="text-gray-300">Протестируйте вашу AI модель, задавая вопросы</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {models.map((model) => (
              <option key={model.id} value={model.id} disabled={model.status !== 'active'}>
                {model.name} {model.status !== 'active' && `(${model.status})`}
              </option>
            ))}
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl h-[600px] flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {models.find(m => m.id === selectedModel)?.name}
                    </h3>
                    <p className="text-sm text-gray-400">AI модель готова к тестированию</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatHistory.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${
                    msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.type === 'user' 
                        ? 'bg-primary-500' 
                        : 'bg-gradient-to-r from-primary-500 to-purple-600'
                    }`}>
                      {msg.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/5 text-gray-100'
                    }`}>
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {msg.message}
                      </div>
                      <div className={`text-xs mt-2 ${
                        msg.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {msg.timestamp}
                      </div>
                    </div>
                    {msg.type === 'bot' && (
                      <div className="flex flex-col space-y-1">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => copyToClipboard(msg.message)}
                          className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
                        >
                          <Copy className="w-3 h-3" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded transition-all duration-200"
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-all duration-200"
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-end space-x-4">
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Задайте вопрос вашей AI модели..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    rows={3}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!message.trim() || isLoading}
                  className="p-3 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Model Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Информация о модели</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-400">Размер модели</div>
                <div className="text-white font-medium">7B параметров</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Точность</div>
                <div className="text-white font-medium">94.2%</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Последнее обучение</div>
                <div className="text-white font-medium">2 часа назад</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Всего запросов</div>
                <div className="text-white font-medium">1,247</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Быстрые вопросы</h3>
            <div className="space-y-2">
              {[
                'Как настроить насос?',
                'Что делать при поломке?',
                'Как провести техническое обслуживание?',
                'Какие меры безопасности соблюдать?'
              ].map((question, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMessage(question)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Testing
