import { useState } from 'react'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {isLogin ? 'Welcome Back' : 'Join FitPulse'}
          </h1>
          <p className='text-slate-400'>
            {isLogin
              ? 'Enter your credentials to access your dashboard.'
              : 'Create an account to start your fitness journey.'}
          </p>
        </div>

        {/* Form */}
        <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div>
              <label className='block text-sm font-medium text-slate-300 mb-1'>
                Full Name
              </label>
              <input
                type='text'
                className='w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all'
                placeholder='John Doe'
              />
            </div>
          )}

          <div>
            <label className='block text-sm font-medium text-slate-300 mb-1'>
              Email
            </label>
            <input
              type='email'
              className='w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all'
              placeholder='name@company.com'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-slate-300 mb-1'>
              Password
            </label>
            <input
              type='password'
              className='w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all'
              placeholder='••••••••'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors mt-2'
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Toggle Footer */}
        <div className='mt-6 text-center'>
          <p className='text-slate-400 text-sm'>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className='text-blue-400 hover:text-blue-300 font-semibold transition-colors'
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
