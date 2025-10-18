function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-gray-800 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-gray-800 transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                className="mr-2 rounded accent-indigo-500"
              />
              Remember me
            </label>
            <a href="#" className="text-indigo-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition-transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
