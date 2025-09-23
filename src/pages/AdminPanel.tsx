import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../components/admin/AdminLayout'
import AdminDashboard from '../components/admin/AdminDashboard'
import UserManagement from '../components/admin/UserManagement'
import SystemMonitoring from '../components/admin/SystemMonitoring'
import TrainingLogs from '../components/admin/TrainingLogs'
import FinancialStats from '../components/admin/FinancialStats'

const AdminPanel = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="monitoring" element={<SystemMonitoring />} />
        <Route path="logs" element={<TrainingLogs />} />
        <Route path="financial" element={<FinancialStats />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdminPanel
