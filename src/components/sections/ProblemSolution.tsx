'use client'

import { Lock } from 'lucide-react'
import { motion } from 'framer-motion'

export const ProblemSolution = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <section id='solutions' className='py-32 px-6 bg-dark'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <motion.div {...fadeIn}>
            <h2 className='text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight'>
              Why old systems <br />
              <span className='text-red-500'>fail</span> your business
            </h2>
            <div className='space-y-6'>
              {[
                'Spreadsheets are prone to human error and data loss.',
                'Generic software is too complex for fast-paced gyms.',
                'No clear overview of multi-branch revenue.',
                'Security leaks leading to member privacy issues.',
              ].map((item, i) => (
                <div key={i} className='flex gap-4 items-start'>
                  <div className='mt-1 bg-red-500/10 p-1 rounded'>
                    <Lock className='w-4 h-4 text-red-500' />
                  </div>
                  <p className='text-gray-400 font-medium'>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeIn}
            className='bg-linear-to-br from-brand/20 to-transparent p-1 rounded-3xl'
          >
            <div className='bg-card rounded-[calc(1.5rem-1px)] p-8 border border-white/5'>
              <div className='space-y-4'>
                <div className='h-4 w-1/2 bg-white/10 rounded-full animate-pulse' />
                <div className='h-20 w-full bg-white/5 rounded-2xl' />
                <div className='grid grid-cols-2 gap-4'>
                  <div className='h-24 bg-brand/10 rounded-2xl border border-brand/20 flex items-center justify-center'>
                    <span className='text-brand font-bold'>Safe</span>
                  </div>
                  <div className='h-24 bg-white/5 rounded-2xl' />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
