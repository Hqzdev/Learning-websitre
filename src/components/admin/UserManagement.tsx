import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Mail,
  Shield,
  Ban,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const users = [
    {
      id: 1,
      name: 'Александр Петров',
      email: 'alex@example.com',
      plan: 'Pro',
      status: 'active',
      models: 3,
      lastActive: '2024-01-15 14:30',
      joinDate: '2024-01-10',
      totalSpent: 87
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      email: 'maria@example.com',
      plan: 'Basic',
      status: 'active',
      models: 1,
      lastActive: '2024-01-15 12:15',
      joinDate: '2024-01-12',
      totalSpent: 0
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      email: 'dmitry@example.com',
      plan: 'Enterprise',
      status: 'suspended',
      models: 5,
      lastActive: '2024-01-14 09:45',
      joinDate: '2024-01-08',
      totalSpent: 297
    },
    {
      id: 4,
      name: 'Елена Волкова',
      email: 'elena@example.com',
      plan: 'Pro',
      status: 'active',
      models: 2,
      lastActive: '2024-01-15 16:20',
      joinDate: '2024-01-11',
      totalSpent: 58
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'suspended':
        return <Ban className="w-4 h-4 text-red-400" />
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Активен'
      case 'suspended':
        return 'Заблокирован'
      case 'pending':
        return 'Ожидает'
      default:
        return 'Неизвестно'
    }
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Basic':
        return 'bg-gray-500/20 text-gray-400'
      case 'Pro':
        return 'bg-primary-500/20 text-primary-400'
      case 'Enterprise':
        return 'bg-purple-500/20 text-purple-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Управление пользователями</h1>
          <p className="text-gray-300">Просмотр и управление аккаунтами пользователей</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{users.length}</div>
            <div className="text-sm text-gray-400">Всего пользователей</div>
          </div>
        </div>
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
                placeholder="Поиск пользователей..."
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
              <option value="active">Активные</option>
              <option value="suspended">Заблокированные</option>
              <option value="pending">Ожидающие</option>
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

      {/* Users Table */}
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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Пользователь</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">План</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Статус</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Модели</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Последняя активность</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Потрачено</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{user.name}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPlanColor(user.plan)}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(user.status)}
                      <span className={`text-sm ${
                        user.status === 'active' ? 'text-green-400' :
                        user.status === 'suspended' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {getStatusText(user.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{user.models}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-300 text-sm">{user.lastActive}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">${user.totalSpent}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <Shield className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">{users.length}</div>
              <div className="text-sm text-gray-400">Всего пользователей</div>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
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
                {users.filter(u => u.status === 'active').length}
              </div>
              <div className="text-sm text-gray-400">Активных</div>
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
                {users.filter(u => u.plan === 'Pro').length}
              </div>
              <div className="text-sm text-gray-400">Pro пользователей</div>
            </div>
            <Shield className="w-8 h-8 text-purple-400" />
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
                ${users.reduce((sum, user) => sum + user.totalSpent, 0)}
              </div>
              <div className="text-sm text-gray-400">Общий доход</div>
            </div>
            <DollarSign className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default UserManagement
