'use client'

import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { useAuthStore } from '../../stores/useAuthStore'

export const HeroSection = () => {
  const { isAuthenticated } = useAuthStore()

  const handleLaunch = () => {
    if (isAuthenticated) {
      window.location.href = '/dashboard'
    } else {
      window.location.href = '/auth'
    }
  }

  return (
    <section className='pt-40 pb-32 px-6 relative overflow-hidden'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.08),transparent_70%)]' />
      <div className='max-w-7xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='inline-flex items-center gap-2 px-4 py-2 mb-8 border border-brand/20 rounded-full bg-brand/5 text-brand text-[10px] font-bold uppercase tracking-[0.2em]'
        >
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-brand'></span>
          </span>
          v2.0 Now Live for Tier-2 Cities
        </motion.div>
        <h1 className='text-6xl md:text-[100px] font-black tracking-tighter mb-8 leading-[0.85] uppercase'>
          Stop Chasing.
          <br />
          <span className='text-transparent bg-clip-text bg-linear-to-b from-brand to-lime-500'>
            Start Scaling.
          </span>
        </h1>
        <p className='max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed'>
          The high-performance SaaS for gym owners who are tired of messy
          spreadsheets. Built with the precision of a B.Com degree and the speed
          of the modern stack.
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
          <button
            onClick={handleLaunch}
            className='w-full sm:w-auto px-10 py-5 bg-brand text-black font-black rounded-2xl flex items-center justify-center gap-3 group hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(217,255,0,0.4)]'
          >
            LAUNCH YOUR GYM{' '}
            <MoveRight className='group-hover:translate-x-2 transition-transform' />
          </button>
          <button className='w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm'>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
