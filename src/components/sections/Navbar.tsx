import { Zap } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/10 bg-dark/80 backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        <div className='text-2xl font-black tracking-tighter italic flex items-center gap-2'>
          <div className='w-8 h-8 bg-brand rounded-lg rotate-12 flex items-center justify-center'>
            <Zap className='text-black w-5 h-5 -rotate-12' />
          </div>
          FIT<span className='text-brand'>PULSE</span>
        </div>
        <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-400'>
          <a href='#features' className='hover:text-brand transition-colors'>
            Features
          </a>
          <a href='#solutions' className='hover:text-brand transition-colors'>
            Solutions
          </a>
          <a href='#about' className='hover:text-brand transition-colors'>
            About
          </a>
        </div>
        <button className='bg-brand text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(217,255,0,0.3)]'>
          Admin Login
        </button>
      </div>
    </nav>
  )
}
