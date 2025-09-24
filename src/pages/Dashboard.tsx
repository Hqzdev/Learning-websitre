import { Routes, Route } from 'react-router-dom'
import DashboardHome from './dashboard/DashboardHome'
import MyModels from './dashboard/MyModels'
import UploadData from './dashboard/UploadData'
import Training from './dashboard/Training'
import Testing from './dashboard/Testing'
import API from './dashboard/API'
import Subscription from './dashboard/Subscription'
import Settings from './dashboard/Settings'

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/models" element={<MyModels />} />
      <Route path="/upload" element={<UploadData />} />
      <Route path="/training" element={<Training />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/api" element={<API />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default Dashboard
