import { Routes, Route, Navigate } from 'react-router-dom'

// Import Layouts
import AuthLayout from '../pages/auth/AuthLayout'
import DashboardLayout from '../pages/dashboard/DashboardLayout'

// Import Pages
import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignUpPage'
import HomePage from '../pages/dashboard/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

      {/* ======================================== */}
      {/*           Main App Routes                */}
      {/* ======================================== */}
      {/* NOTE: This will be a protected route later */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<HomePage />} />
        {/* 
          Add other dashboard routes here in the future:
          <Route path="/books" element={<BooksPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        */}
      </Route>

      {/* ======================================== */}
      {/*      Redirects and Catch-All Routes      */}
      {/* ======================================== */}
      {/* Redirect from root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* 404 Not Found Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}