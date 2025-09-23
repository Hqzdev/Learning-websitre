import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import PricingPage from './pages/PricingPage'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-900"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="admin/*" element={<AdminPanel />} />
        </Route>
      </Routes>
    </motion.div>
  )
}

export default App
