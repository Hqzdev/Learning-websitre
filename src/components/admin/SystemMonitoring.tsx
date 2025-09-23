import { motion } from 'framer-motion'
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Wifi, 
  AlertTriangle,
  CheckCircle,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

const SystemMonitoring = () => {
  const systemMetrics = [
    {
      name: 'CPU Usage',
      value: 45,
      max: 100,
      unit: '%',
      status: 'healthy',
      trend: 'up',
      change: '+2.3%'
    },
    {
      name: 'Memory Usage',
      value: 68,
      max: 100,
      unit: '%',
      status: 'warning',
      trend: 'up',
      change: '+5.1%'
    },
    {
      name: 'GPU Usage',
      value: 78,
      max: 100,
      unit: '%',
      status: 'warning',
      trend: 'down',
      change: '-1.2%'
    },
    {
      name: 'Disk Usage',
      value: 34,
      max: 100,
      unit: '%',
      status: 'healthy',
      trend: 'up',
      change: '+0.8%'
    },
    {
      name: 'Network I/O',
      value: 156,
      max: 1000,
      unit: 'MB/s',
      status: 'healthy',
      trend: 'up',
      change: '+12.5%'
    },
    {
      name: 'Active Connections',
      value: 1247,
      max: 5000,
      unit: '',
      status: 'healthy',
      trend: 'up',
      change: '+8.2%'
    }
  ]

  const services = [
    {
      name: 'API Gateway',
      status: 'healthy',
      uptime: '99.9%',
      responseTime: '45ms',
      requests: '12,456/min'
    },
    {
      name: 'Database',
      status: 'healthy',
      uptime: '99.8%',
      responseTime: '12ms',
      requests: '8,234/min'
    },
    {
      name: 'GPU Cluster',
      status: 'warning',
      uptime: '95.2%',
      responseTime: '234ms',
      requests: '156/min'
    },
    {
      name: 'File Storage',
      status: 'healthy',
      uptime: '99.7%',
      responseTime: '67ms',
      requests: '2,345/min'
    },
    {
      name: 'Training Service',
      status: 'healthy',
      uptime: '98.9%',
      responseTime: '123ms',
      requests: '89/min'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-400'
      case 'warning':
        return 'text-yellow-400'
      case 'error':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Мониторинг системы</h1>
        <p className="text-gray-300">Отслеживание производительности и состояния системы</p>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systemMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  metric.status === 'healthy' ? 'bg-green-500/20' :
                  metric.status === 'warning' ? 'bg-yellow-500/20' : 'bg-red-500/20'
                }`}>
                  {metric.name.includes('CPU') && <Cpu className="w-5 h-5 text-white" />}
                  {metric.name.includes('Memory') && <Monitor className="w-5 h-5 text-white" />}
                  {metric.name.includes('GPU') && <Activity className="w-5 h-5 text-white" />}
                  {metric.name.includes('Disk') && <HardDrive className="w-5 h-5 text-white" />}
                  {metric.name.includes('Network') && <Wifi className="w-5 h-5 text-white" />}
                  {metric.name.includes('Connections') && <Monitor className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h3 className="text-white font-medium">{metric.name}</h3>
                  <div className="flex items-center space-x-2">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    )}
                    <span className={`text-xs ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {metric.value}{metric.unit}
                </div>
                <div className="text-xs text-gray-400">
                  из {metric.max}{metric.unit}
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${
                  metric.status === 'healthy' ? 'bg-green-500' :
                  metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${(metric.value / metric.max) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Статус сервисов</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                {getStatusIcon(service.status)}
                <div>
                  <h3 className="text-white font-medium">{service.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Uptime: {service.uptime}</span>
                    <span>Response: {service.responseTime}</span>
                    <span>Requests: {service.requests}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                  {service.status === 'healthy' ? 'Работает' :
                   service.status === 'warning' ? 'Предупреждение' : 'Ошибка'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* System Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Системные уведомления</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <h3 className="text-white font-medium">Высокая нагрузка на GPU</h3>
              <p className="text-gray-300 text-sm mt-1">
                Использование GPU достигло 78%. Рекомендуется масштабирование кластера.
              </p>
              <div className="text-xs text-gray-400 mt-2">2 часа назад</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <h3 className="text-white font-medium">Обновление системы завершено</h3>
              <p className="text-gray-300 text-sm mt-1">
                Все сервисы успешно обновлены до версии 2.1.0. Производительность улучшена на 15%.
              </p>
              <div className="text-xs text-gray-400 mt-2">4 часа назад</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <Activity className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="text-white font-medium">Пиковая нагрузка</h3>
              <p className="text-gray-300 text-sm mt-1">
                Зафиксирован пик активности: 12,456 запросов в минуту. Система работает стабильно.
              </p>
              <div className="text-xs text-gray-400 mt-2">6 часов назад</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SystemMonitoring
