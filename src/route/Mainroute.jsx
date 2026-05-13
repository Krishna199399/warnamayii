import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Registration";
import Aboutus from "../pages/Aboutus";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Advisor Dashboard
import AdvisorDashboard from "../dashboard/advisor/AdvisorDashboard";
import MyFarmers from "../dashboard/advisor/MyFarmers";
import MySales from "../dashboard/advisor/MySales";
import AdvisorTasks from "../dashboard/advisor/Tasks";

// Area Manager Dashboard
import AreaDashboard from "../dashboard/areamanager/AreaDashboard";
import DoManagers from "../dashboard/areamanager/DoManagers";

// DO Manager Dashboard
import DoDashboard from "../dashboard/domanager/DoDashboard";
import Advisors from "../dashboard/domanager/Advisors";
import DoPerformance from "../dashboard/domanager/Performance";
import DoTasks from "../dashboard/domanager/Tasks";

// State Head Dashboard
import StateDashboard from "../dashboard/statehead/StateDashboard";
import ZonalManager from "../dashboard/statehead/ZonalManager";

// Zonal Manager Dashboard
import ZonalDashboard from "../dashboard/zonalmanager/ZonalDashboard";
import AreaEmployees from "../dashboard/zonalmanager/AreaEmployees";
import AreaPerformance from "../dashboard/zonalmanager/AreaPerformance";

// Common Dashboard Pages
import Reports from "../dashboard/common/Reports";
import Revenue from "../dashboard/common/Revenue";
import Settings from "../dashboard/common/Settings";

function Mainroute() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Advisor Routes */}
        <Route
          path="advisor"
          element={
            <ProtectedRoute allowedRoles={['advisor']}>
              <AdvisorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="advisor/farmers"
          element={
            <ProtectedRoute allowedRoles={['advisor']}>
              <MyFarmers />
            </ProtectedRoute>
          }
        />
        <Route
          path="advisor/sales"
          element={
            <ProtectedRoute allowedRoles={['advisor']}>
              <MySales />
            </ProtectedRoute>
          }
        />
        <Route
          path="advisor/tasks"
          element={
            <ProtectedRoute allowedRoles={['advisor']}>
              <AdvisorTasks />
            </ProtectedRoute>
          }
        />

        {/* Area Manager Routes */}
        <Route
          path="areamanager"
          element={
            <ProtectedRoute allowedRoles={['areamanager']}>
              <AreaDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="areamanager/domanagers"
          element={
            <ProtectedRoute allowedRoles={['areamanager']}>
              <DoManagers />
            </ProtectedRoute>
          }
        />

        {/* DO Manager Routes */}
        <Route
          path="domanager"
          element={
            <ProtectedRoute allowedRoles={['domanager']}>
              <DoDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="domanager/advisors"
          element={
            <ProtectedRoute allowedRoles={['domanager']}>
              <Advisors />
            </ProtectedRoute>
          }
        />
        <Route
          path="domanager/performance"
          element={
            <ProtectedRoute allowedRoles={['domanager']}>
              <DoPerformance />
            </ProtectedRoute>
          }
        />
        <Route
          path="domanager/tasks"
          element={
            <ProtectedRoute allowedRoles={['domanager']}>
              <DoTasks />
            </ProtectedRoute>
          }
        />

        {/* State Head Routes */}
        <Route
          path="statehead"
          element={
            <ProtectedRoute allowedRoles={['statehead']}>
              <StateDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="statehead/zonalmanagers"
          element={
            <ProtectedRoute allowedRoles={['statehead']}>
              <ZonalManager />
            </ProtectedRoute>
          }
        />

        {/* Zonal Manager Routes */}
        <Route
          path="zonalmanager"
          element={
            <ProtectedRoute allowedRoles={['zonalmanager']}>
              <ZonalDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="zonalmanager/employees"
          element={
            <ProtectedRoute allowedRoles={['zonalmanager']}>
              <AreaEmployees />
            </ProtectedRoute>
          }
        />
        <Route
          path="zonalmanager/performance"
          element={
            <ProtectedRoute allowedRoles={['zonalmanager']}>
              <AreaPerformance />
            </ProtectedRoute>
          }
        />

        {/* Common Routes (accessible by all roles) */}
        <Route path="reports" element={<Reports />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="settings" element={<Settings />} />

        {/* Default redirect based on role - handled in Login */}
        <Route path="" element={<Navigate to="/login" replace />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Mainroute;
