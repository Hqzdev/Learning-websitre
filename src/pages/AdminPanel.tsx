import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Users, Activity, DollarSign, FileText, Settings, BarChart3, Server, AlertTriangle } from 'lucide-react'

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Overview', href: '/admin', icon: BarChart3 },
    { name: 'User Management', href: '/admin/users', icon: Users },
    { name: 'System Monitoring', href: '/admin/monitoring', icon: Server },
    { name: 'Financial Stats', href: '/admin/financial', icon: DollarSign },
    { name: 'Training Logs', href: '/admin/logs', icon: FileText },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ]

  const stats = [
    {
      title: 'Total Users',
      value: '1,247',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Models',
      value: '3,456',
      change: '+8%',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      title: 'Revenue',
      value: '$24,567',
      change: '+15%',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'API Calls',
      value: '1.2M',
      change: '+23%',
      icon: BarChart3,
      color: 'text-orange-600'
    }
  ]

  const recentUsers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', plan: 'Pro', joined: '2 hours ago' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic', joined: '4 hours ago' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', plan: 'Enterprise', joined: '1 day ago' },
    { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', plan: 'Pro', joined: '2 days ago' }
  ]

  const systemAlerts = [
    { id: '1', type: 'warning', message: 'High CPU usage on GPU cluster 2', time: '5 minutes ago' },
    { id: '2', type: 'info', message: 'New user registration spike detected', time: '1 hour ago' },
    { id: '3', type: 'error', message: 'Training job failed for user 1234', time: '2 hours ago' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">System overview and management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold text-black">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="card">
          <h2 className="text-xl font-semibold text-black mb-4">Recent Users</h2>
          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-black">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {user.plan}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{user.joined}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="card">
          <h2 className="text-xl font-semibold text-black mb-4">System Alerts</h2>
          <div className="space-y-3">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start">
                <div className="flex-shrink-0">
                  {alert.type === 'error' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                  {alert.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                  {alert.type === 'info' && <Activity className="h-5 w-5 text-blue-600" />}
                </div>
                <div className="ml-3">
                  <p className="text-sm text-black">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <button className="btn-primary">
            <Users className="h-4 w-4 mr-2" />
            Manage Users
          </button>
          <button className="btn-secondary">
            <Server className="h-4 w-4 mr-2" />
            System Status
          </button>
          <button className="btn-secondary">
            <DollarSign className="h-4 w-4 mr-2" />
            View Reports
          </button>
          <button className="btn-secondary">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
