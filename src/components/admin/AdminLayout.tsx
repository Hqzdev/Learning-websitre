import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Users, 
  Monitor, 
  FileText, 
  DollarSign,
  Menu,
  X,
  LogOut,
  Shield
} from 'lucide-react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Панель управления', href: '/admin', icon: LayoutDashboard },
    { name: 'Управление пользователями', href: '/admin/users', icon: Users },
    { name: 'Мониторинг системы', href: '/admin/monitoring', icon: Monitor },
    { name: 'Логи обучения', href: '/admin/logs', icon: FileText },
    { name: 'Финансовая статистика', href: '/admin/financial', icon: DollarSign },
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-800 border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Admin Panel</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Администратор</div>
                <div className="text-xs text-gray-400">admin@aibuilder.com</div>
              </div>
            </div>
            <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200">
              <LogOut className="w-4 h-4" />
              <span>Выйти</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-dark-800/80 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-white">Администратор</div>
                <div className="text-xs text-gray-400">Система управления</div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
