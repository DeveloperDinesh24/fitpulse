import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import type { FadeInProps } from '../../types/fadeIn.type'

export const FinalCTA = ({ fadeIn }: FadeInProps) => {
  return (
    <section className='py-32 px-6'>
      <motion.div
        {...fadeIn}
        className='max-w-5xl mx-auto bg-gradient-to-br from-brand to-lime-600 rounded-[40px] p-12 md:p-20 text-center text-black relative overflow-hidden'
      >
        <div className='relative z-10'>
          <h2 className='text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]'>
            Ready to build <br />
            your empire?
          </h2>
          <button className='px-12 py-6 bg-black text-white font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-lg'>
            Get Started Now
          </button>
        </div>
        <Zap className='absolute top-10 right-10 w-64 h-64 text-black/10 -rotate-12' />
      </motion.div>
    </section>
  )
}
