export const SystemInfoCard = () => {
  return (
    <section className='bg-card p-6 rounded-2xl border border-gray-800'>
      <h4 className='font-bold text-gray-400 mb-2'>System Status</h4>
      <div className='flex items-center gap-2 text-green-500 text-sm'>
        <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />{' '}
        Online
      </div>
    </section>
  )
}
