import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Plus, Brain, Upload, TestTube, Clock, CheckCircle } from 'lucide-react'

const DashboardHome = () => {
  const { user } = useAuth()

  const recentActivities = [
    {
      id: 1,
      type: 'training',
      title: 'Model "Customer Support" training completed',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'upload',
      title: 'Uploaded 15 documents to "Legal Docs" dataset',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'testing',
      title: 'Tested "Product Q&A" model with 25 questions',
      time: '2 days ago',
      status: 'completed'
    }
  ]

  const stats = [
    {
      title: 'Active Models',
      value: '3',
      icon: Brain,
      color: 'text-black'
    },
    {
      title: 'Total Datasets',
      value: '7',
      icon: Upload,
      color: 'text-black'
    },
    {
      title: 'API Calls This Month',
      value: '1,247',
      icon: TestTube,
      color: 'text-black'
    },
    {
      title: 'Training Hours',
      value: '12.5',
      icon: Clock,
      color: 'text-black'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-black mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">
          Ready to build your next AI model? Let's get started.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Quick Start</h2>
            <Plus className="h-6 w-6 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-6">
            Create a new AI model in just a few steps
          </p>
          <Link to="/dashboard/upload" className="btn-primary">
            Create New Model
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Test Your Models</h2>
            <TestTube className="h-6 w-6 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-6">
            Test your trained models with real questions
          </p>
          <Link to="/dashboard/testing" className="btn-secondary">
            Start Testing
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div>
        <h2 className="text-2xl font-semibold text-black mb-6">Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="card text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-2xl mb-4`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-semibold text-black mb-6">Recent Activity</h2>
        <div className="card">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {activity.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-black" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-black">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  activity.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-semibold text-black mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/dashboard/models" className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <Brain className="h-6 w-6 text-black mr-3" />
              <h3 className="text-lg font-semibold text-black">My Models</h3>
            </div>
            <p className="text-gray-600">View and manage your AI models</p>
          </Link>

          <Link to="/dashboard/api" className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <TestTube className="h-6 w-6 text-black mr-3" />
              <h3 className="text-lg font-semibold text-black">API Access</h3>
            </div>
            <p className="text-gray-600">Get your API keys and documentation</p>
          </Link>

          <Link to="/dashboard/subscription" className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <Upload className="h-6 w-6 text-black mr-3" />
              <h3 className="text-lg font-semibold text-black">Subscription</h3>
            </div>
            <p className="text-gray-600">Manage your subscription and billing</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
