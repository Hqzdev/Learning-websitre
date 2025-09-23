import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Zap, User, LogOut, Settings } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuth()

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Тарифы', href: '/pricing' },
    { name: 'API', href: '/docs' },
    { name: 'Поддержка', href: '/support' },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsUserMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">AI Builder</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{user?.username}</span>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-lg py-2 z-50"
                  >
                    <div className="px-4 py-2 border-b border-white/10">
                      <p className="text-sm font-medium text-white">{user?.fullName || user?.username}</p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Панель управления
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Выйти
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  Войти
                </Link>
                <Link
                  to="/register"
                  className="button-primary text-sm"
                >
                  Начать бесплатно
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Войти
                </Link>
                <Link
                  to="/register"
                  className="button-primary text-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Начать бесплатно
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
