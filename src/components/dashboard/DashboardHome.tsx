import { motion } from 'framer-motion'
import { 
  Plus, 
  Brain, 
  Upload, 
  Zap, 
  MessageSquare, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  const recentActivity = [
    {
      type: 'training',
      title: 'Technical Documentation Model',
      description: 'Training completed successfully',
      time: '2 hours ago',
      status: 'completed',
      icon: CheckCircle
    },
    {
      type: 'upload',
      title: 'Uploaded manual.pdf',
      description: '5.2 MB, 120 pages',
      time: '4 hours ago',
      status: 'completed',
      icon: Upload
    },
    {
      type: 'training',
      title: 'FAQ Database Model',
      description: 'Training in progress...',
      time: '6 hours ago',
      status: 'in-progress',
      icon: Clock
    },
    {
      type: 'error',
      title: 'Training Error',
      description: 'Insufficient data for training',
      time: '1 day ago',
      status: 'error',
      icon: AlertCircle
    }
  ]

  const stats = [
    {
      title: 'Active Models',
      value: '3',
      change: '+1 this week',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Uploaded',
      value: '2.4 GB',
      change: '+500 MB this week',
      icon: Upload,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API Requests',
      value: '1,247',
      change: '+23% this week',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Training Time',
      value: '12.5h',
      change: '+3.2h this week',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome, John! 👋
            </h1>
            <p className="text-gray-300 text-lg">
              Here's what's happening with your AI models today
            </p>
          </div>
          <Link to="/dashboard/upload">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create Model</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
              <span className="text-green-400">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <Link to="/dashboard/models" className="text-primary-400 hover:text-primary-300 text-sm">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.status === 'completed' ? 'bg-green-500/20' :
                  activity.status === 'in-progress' ? 'bg-blue-500/20' :
                  'bg-red-500/20'
                }`}>
                  <activity.icon className={`w-4 h-4 ${
                    activity.status === 'completed' ? 'text-green-400' :
                    activity.status === 'in-progress' ? 'text-blue-400' :
                    'text-red-400'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm">{activity.title}</div>
                  <div className="text-gray-400 text-xs">{activity.description}</div>
                  <div className="text-gray-500 text-xs mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/dashboard/upload">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <Upload className="w-8 h-8 text-primary-400 mb-3" />
                <div className="text-white font-medium text-sm">Upload Data</div>
                <div className="text-gray-400 text-xs">Add new files</div>
              </motion.div>
            </Link>
            
            <Link to="/dashboard/training">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <Zap className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-white font-medium text-sm">Train Model</div>
                <div className="text-gray-400 text-xs">Create new model</div>
              </motion.div>
            </Link>
            
            <Link to="/dashboard/chat">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <MessageSquare className="w-8 h-8 text-green-400 mb-3" />
                <div className="text-white font-medium text-sm">Model Chat</div>
                <div className="text-gray-400 text-xs">Chat with AI</div>
              </motion.div>
            </Link>
            
            <Link to="/dashboard/analytics">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <TrendingUp className="w-8 h-8 text-orange-400 mb-3" />
                <div className="text-white font-medium text-sm">Analytics</div>
                <div className="text-gray-400 text-xs">Statistics and metrics</div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Getting Started */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-effect rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Get Started</h2>
        <p className="text-gray-300 mb-6">
          Create your first AI model in a few simple steps
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/dashboard/upload">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>1. Upload Data</span>
            </motion.button>
          </Link>
          <Link to="/dashboard/training">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>2. Train Model</span>
            </motion.button>
          </Link>
          <Link to="/dashboard/testing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>3. Test</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default DashboardHome
