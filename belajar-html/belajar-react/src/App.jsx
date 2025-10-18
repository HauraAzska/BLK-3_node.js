import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-green-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-amber-50">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-amber-100 p-8 rounded-2xl shadow-xl border border-green-200">
        <form action="#" method="POST" className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white border border-amber-300 px-3 py-2 text-amber-900 placeholder-amber-500 focus:border-amber-700 focus:ring-amber-700 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-green-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-green-700 hover:text-green-600">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white border border-amber-300 px-3 py-2 text-amber-900 placeholder-amber-500 focus:border-amber-700 focus:ring-amber-700 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-00 hover:bg-green-00 text-amber-50 font-semibold py-2 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-green-800">
          Not a member?{' '}
          <a href="#" className="font-semibold text-green-700 hover:text-green-600">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
