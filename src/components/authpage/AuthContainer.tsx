'use client'

import { useState } from 'react'
import { Header } from '@/components/authpage/Header'
import { ToggleFooter } from '@/components/authpage/ToggleFooter'
import { Form } from '@/components/authpage/Form'

export const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl'>
        <Header isLogin={isLogin} />
        <Form isLogin={isLogin} setIsLogin={setIsLogin} />
        <ToggleFooter isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  )
}
