// src/pages/auth/AuthLayout.jsx
import { Outlet } from 'react-router-dom'
import { Library } from 'lucide-react'

function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-4 shadow-lg">
            <Library className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">LibraryX</h1>
          <p className="text-gray-500 mt-2">Your Modern Library Management System</p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          {/* Outlet will render either LoginPage or SignupPage */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout