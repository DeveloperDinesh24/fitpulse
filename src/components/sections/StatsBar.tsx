export const StatsBar = () => {
  return (
    <section className='py-10 border-y border-white/5 bg-white/2'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8'>
        {[
          { label: 'Uptime', val: '99.9%' },
          { label: 'Data Security', val: 'AES-256' },
          { label: 'Page Load', val: '< 0.4s' },
          { label: 'Multi-Branch', val: 'Supported' },
        ].map((stat, i) => (
          <div key={i} className='text-center'>
            <div className='text-2xl font-black text-white'>{stat.val}</div>
            <div className='text-xs text-brand font-bold uppercase tracking-widest mt-1'>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
