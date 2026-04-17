import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className='bg-black pt-20 pb-10 px-6 border-t border-white/5'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          <div className='col-span-1 md:col-span-2'>
            <div className='text-3xl font-black tracking-tighter italic mb-6'>
              FIT<span className='text-brand'>PULSE</span>
            </div>
            <p className='text-gray-500 max-w-sm leading-relaxed mb-8'>
              The premier gym management software for modern entrepreneurs.
              Built with precision, engineered for speed, and designed for
              results.
            </p>
            <div className='flex gap-4'>
              <div className='p-3 bg-white/5 rounded-xl hover:bg-brand/20 hover:text-brand cursor-pointer transition-all'>
                <FaInstagram size={20} />
              </div>
              <div className='p-3 bg-white/5 rounded-xl hover:bg-brand/20 hover:text-brand cursor-pointer transition-all'>
                <SiX size={20} />
              </div>
              <div className='p-3 bg-white/5 rounded-xl hover:bg-brand/20 hover:text-brand cursor-pointer transition-all'>
                <FaGithub size={20} />
              </div>
              <div className='p-3 bg-white/5 rounded-xl hover:bg-brand/20 hover:text-brand cursor-pointer transition-all'>
                <FaLinkedin size={20} />
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-bold mb-6 uppercase tracking-widest text-xs text-brand'>
              Product
            </h4>
            <ul className='space-y-4 text-gray-400 text-sm'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Security
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Custom Build
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-6 uppercase tracking-widest text-xs text-brand'>
              Engineering
            </h4>
            <ul className='space-y-4 text-gray-400 text-sm'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Tech Stack
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  API Docs
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Open Source
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6'>
          <p className='text-gray-600 text-xs'>
            © 2026 FitPulse Systems. All rights reserved.
          </p>
          <div className='px-6 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3'>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <p className='text-gray-400 text-[10px] font-bold tracking-widest uppercase'>
              Designed & Engineered by{' '}
              <span className='text-white'>Dinesh | Full Stack Engineer</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
