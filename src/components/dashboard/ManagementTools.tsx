export const ManagementTools = () => {
  const tools = [
    'Attendance Log',
    'Billing History',
    'Profile Settings',
    'Direct Support',
  ]
  
  return (
    <section>
      <h3 className='text-sm font-bold text-gray-500 uppercase tracking-wider mb-4'>
        Management Tools
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {tools.map((tool, i) => (
          <div
            key={i}
            className='h-48 bg-linear-to-br from-card to-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-brand transition-all cursor-pointer group flex flex-col justify-between hover:scale-[1.02]'
          >
            <span className='text-brand font-bold text-lg'>{tool}</span>
            <div className='w-12 h-1 bg-gray-800 group-hover:bg-brand transition-colors rounded-full' />
          </div>
        ))}
      </div>
    </section>
  )
}
