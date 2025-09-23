import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  FileText, 
  File, 
  X, 
  CheckCircle, 
  AlertCircle,
  Download,
  Trash2,
  Eye
} from 'lucide-react'

const UploadData = () => {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: 'technical_manual.pdf',
      size: '2.4 МБ',
      pages: 45,
      status: 'processed',
      uploadedAt: '2024-01-15 14:30'
    },
    {
      id: 2,
      name: 'faq_database.docx',
      size: '1.8 МБ',
      pages: 23,
      status: 'processing',
      uploadedAt: '2024-01-15 15:45'
    },
    {
      id: 3,
      name: 'legal_documents.txt',
      size: '856 КБ',
      pages: 12,
      status: 'error',
      uploadedAt: '2024-01-15 16:20'
    }
  ])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      handleFiles(files)
    }
  }, [])

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: formatFileSize(file.size),
        pages: Math.floor(Math.random() * 50) + 1,
        status: 'processing' as const,
        uploadedAt: new Date().toLocaleString('ru-RU')
      }
      setUploadedFiles(prev => [...prev, newFile])
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Б'
    const k = 1024
    const sizes = ['Б', 'КБ', 'МБ', 'ГБ']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-400" />
      case 'docx':
      case 'doc':
        return <FileText className="w-5 h-5 text-blue-400" />
      case 'txt':
        return <File className="w-5 h-5 text-gray-400" />
      default:
        return <File className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'processing':
        return <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />
      default:
        return <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processed':
        return 'Обработан'
      case 'processing':
        return 'Обработка...'
      case 'error':
        return 'Ошибка'
      default:
        return 'Ожидание'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Загрузить данные</h1>
        <p className="text-gray-300">Загрузите ваши документы для обучения AI модели</p>
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-2xl p-8"
      >
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
            dragActive
              ? 'border-primary-500 bg-primary-500/10'
              : 'border-white/20 hover:border-primary-500/50 hover:bg-white/5'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Перетащите файлы сюда
              </h3>
              <p className="text-gray-400 mb-4">
                или нажмите для выбора файлов
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.docx,.doc,.txt,.csv,.json"
                onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="button-primary cursor-pointer inline-block"
              >
                Выбрать файлы
              </label>
            </div>
            <div className="text-sm text-gray-500">
              Поддерживаемые форматы: PDF, DOCX, TXT, CSV, JSON (макс. 100 МБ)
            </div>
          </div>
        </div>
      </motion.div>

      {/* File List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Загруженные файлы</h2>
          <div className="text-sm text-gray-400">
            {uploadedFiles.length} файлов
          </div>
        </div>

        {uploadedFiles.length > 0 ? (
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  {getFileIcon(file.name)}
                  <div>
                    <div className="text-white font-medium">{file.name}</div>
                    <div className="text-sm text-gray-400">
                      {file.size} • {file.pages} страниц • {file.uploadedAt}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(file.status)}
                    <span className={`text-sm ${
                      file.status === 'processed' ? 'text-green-400' :
                      file.status === 'processing' ? 'text-blue-400' :
                      'text-red-400'
                    }`}>
                      {getStatusText(file.status)}
                    </span>
                  </div>
                  
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
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <File className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Файлы не загружены
            </h3>
            <p className="text-gray-400">
              Загрузите файлы для начала обучения модели
            </p>
          </div>
        )}
      </motion.div>

      {/* Processing Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Настройки обработки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Удалить дубликаты</label>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600 bg-white/5 border-white/20 rounded focus:ring-primary-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Очистить HTML теги</label>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600 bg-white/5 border-white/20 rounded focus:ring-primary-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Разделить по главам</label>
              <input type="checkbox" className="w-4 h-4 text-primary-600 bg-white/5 border-white/20 rounded focus:ring-primary-500" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Максимальная длина токена</label>
              <input
                type="number"
                defaultValue={2048}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Язык обработки</label>
              <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="ru">Русский</option>
                <option value="en">English</option>
                <option value="auto">Автоопределение</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default UploadData
