import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { User, Mail, Lock, Bell, MessageCircle, Save } from 'lucide-react'

const Settings = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    telegramNotifications: false,
    telegramUsername: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setMessage('Settings updated successfully!')
    setIsLoading(false)
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000)
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage('Passwords do not match')
      return
    }
    
    if (formData.newPassword.length < 6) {
      setMessage('Password must be at least 6 characters')
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setMessage('Password updated successfully!')
    setIsLoading(false)
    
    // Clear form
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }))
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
      </div>

      {message && (
        <div className={`p-4 rounded-2xl ${
          message.includes('successfully') 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message}
        </div>
      )}

      {/* Profile Information */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-6">Profile Information</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </form>
      </div>

      {/* Password Change */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-6">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-black mb-2">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="Enter current password"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-black mb-2">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="Enter new password"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input-field pl-10"
                placeholder="Confirm new password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Updating...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Update Password
              </>
            )}
          </button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-6">Notification Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <h3 className="font-medium text-black">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <h3 className="font-medium text-black">Telegram Notifications</h3>
                <p className="text-sm text-gray-600">Receive updates via Telegram</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="telegramNotifications"
                checked={formData.telegramNotifications}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>

          {formData.telegramNotifications && (
            <div>
              <label htmlFor="telegramUsername" className="block text-sm font-medium text-black mb-2">
                Telegram Username
              </label>
              <input
                type="text"
                id="telegramUsername"
                name="telegramUsername"
                value={formData.telegramUsername}
                onChange={handleInputChange}
                className="input-field"
                placeholder="@username"
              />
            </div>
          )}
        </div>
      </div>

      {/* Account Information */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-6">Account Information</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <div>
              <h3 className="font-medium text-black">Account ID</h3>
              <p className="text-sm text-gray-600">Used for API authentication</p>
            </div>
            <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded">
              {user?.id}
            </code>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <div>
              <h3 className="font-medium text-black">Subscription</h3>
              <p className="text-sm text-gray-600">Current plan and billing</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {user?.subscription}
              </span>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <div>
              <h3 className="font-medium text-black">Member Since</h3>
              <p className="text-sm text-gray-600">Account creation date</p>
            </div>
            <span className="text-sm text-gray-600">January 15, 2024</span>
          </div>
          
          <div className="flex justify-between items-center py-3">
            <div>
              <h3 className="font-medium text-black">Last Login</h3>
              <p className="text-sm text-gray-600">Most recent activity</p>
            </div>
            <span className="text-sm text-gray-600">2 hours ago</span>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card border-red-200">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black">Delete Account</h3>
              <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
            </div>
            <button className="btn-secondary text-red-600 border-red-300 hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
