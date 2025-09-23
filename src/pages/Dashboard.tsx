import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import DashboardHome from '../components/dashboard/DashboardHome'
import MyModels from '../components/dashboard/MyModels'
import UploadData from '../components/dashboard/UploadData'
import Training from '../components/dashboard/Training'
import Testing from '../components/dashboard/Testing'
import API from '../components/dashboard/API'
import Subscription from '../components/dashboard/Subscription'
import Settings from '../components/dashboard/Settings'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DashboardHome />} />
        <Route path="models" element={<MyModels />} />
        <Route path="upload" element={<UploadData />} />
        <Route path="training" element={<Training />} />
        <Route path="testing" element={<Testing />} />
        <Route path="api" element={<API />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  )
}

export default Dashboard
