'use client'

import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'next/navigation'

export const Form = ({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean
  setIsLogin: (isLogin: boolean) => void
}) => {
  const router = useRouter()
  const { login } = useAuthStore()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLogin(true)
    login()
    router.push('/dashboard')
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
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
  )
}
