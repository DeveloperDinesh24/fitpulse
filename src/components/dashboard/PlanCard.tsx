export const PlanCard = () => {
  return (
    <section className='bg-card p-6 rounded-2xl border border-brand/20 flex flex-col gap-6'>
      <div>
        <p className='text-xs text-gray-500 uppercase font-bold tracking-wider'>
          Active Plan
        </p>
        <h3 className='text-xl font-bold'>Premium Gold</h3>
      </div>
      <div>
        <p className='text-xs text-gray-500 uppercase font-bold tracking-wider'>
          Renewal Date
        </p>
        <p className='font-medium text-brand'>Oct 15, 2026</p>
      </div>
      <button className='bg-brand text-black font-bold w-full py-3 rounded-lg hover:opacity-90 transition-opacity'>
        Manage Subscription
      </button>
    </section>
  )
}
