import {
  BarChart3,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react'

import { motion } from 'framer-motion'

interface CardProps {
  title: string
  desc: string
  icon: LucideIcon
  className?: string
  isDark?: boolean
}

const FeatureCard = ({
  title,
  desc,
  icon: Icon,
  className = '',
  isDark = true,
}: CardProps) => (
  <div
    className={`
    p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 border
    ${
      isDark
        ? 'bg-card border-white/10 hover:border-brand/50 group'
        : 'bg-white text-black border-transparent'
    }
    ${className}
  `}
  >
    <Icon
      className={`${isDark ? 'text-brand' : 'text-black'} w-8 h-8 group-hover:scale-110 transition-transform`}
    />
    <div>
      <h3 className='text-xl font-bold mb-2 tracking-tight uppercase'>
        {title}
      </h3>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-black/70'}`}>
        {desc}
      </p>
    </div>
  </div>
)

export const Features = () => {
  return (
    <section id='features' className='py-24 px-6 max-w-7xl mx-auto'>
      <header className='text-center mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4'
        >
          Built for{' '}
          <span className='text-brand bg-clip-text bg-linear-to-r from-brand to-lime-500'>
            Performance
          </span>
        </motion.h2>
        <p className='text-gray-400 max-w-xl mx-auto'>
          Everything you need to run a high-margin fitness empire with
          SaaS-level precision.
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]'>
        {/* Card 1: Enterprise Analytics */}
        <div className='md:col-span-2 md:row-span-2 bg-card border border-white/10 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group'>
          <div className='z-10'>
            <BarChart3 className='text-brand w-12 h-12 mb-6 group-hover:rotate-12 transition-transform' />
            <h3 className='text-4xl font-bold mb-4 tracking-tighter uppercase'>
              Enterprise <br /> Analytics
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed max-w-xs'>
              Predictive churn modeling and branch-wise revenue tracking.
            </p>
          </div>
          {/* Animated Background Glow */}
          <div className='absolute -right-20 -bottom-20 w-96 h-96 bg-brand/5 rounded-full blur-[100px] group-hover:bg-brand/10 transition-all duration-700' />
        </div>

        {/* Card 2: Mobile Ready */}
        <FeatureCard
          title='Mobile Ready'
          desc='Manage memberships from the squat rack.'
          icon={Smartphone}
        />

        {/* Card 3: Unlimited Members */}
        <div className='bg-brand rounded-3xl p-8 flex flex-col justify-between text-black group cursor-pointer hover:shadow-[0_0_30px_rgba(217,255,0,0.3)] transition-all'>
          <Users className='w-8 h-8 group-hover:scale-110 transition-transform' />
          <h3 className='text-2xl font-black uppercase leading-tight'>
            Unlimited <br /> Members
          </h3>
        </div>

        {/* Card 4: Centralized Database */}
        <div className='md:col-span-2 bg-card border border-white/10 rounded-3xl p-8 flex items-center gap-8 relative overflow-hidden group'>
          <div className='bg-white/5 p-4 rounded-2xl group-hover:bg-brand/20 transition-colors'>
            <Database className='text-brand w-8 h-8' />
          </div>
          <div>
            <h3 className='text-xl font-bold mb-1 uppercase'>
              Centralized Database
            </h3>
            <p className='text-sm text-gray-400'>
              One source of truth for all your branches.
            </p>
          </div>
        </div>

        {/* Card 5: Multi-Region */}
        <FeatureCard
          title='Multi-Region'
          desc='Manage operations across multiple locations.'
          icon={Globe}
        />

        {/* Card 6: Military Security */}
        <FeatureCard
          title='Military Security'
          desc='End-to-end encryption for member data.'
          icon={ShieldCheck}
          isDark={false}
        />
      </div>
    </section>
  )
}
