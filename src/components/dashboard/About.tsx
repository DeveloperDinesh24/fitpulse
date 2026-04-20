export const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <section className='bg-card p-6 rounded-2xl border border-gray-800'>
        <h2 className='text-brand font-bold mb-4'>Member Info</h2>
        <div className='space-y-2 text-sm text-gray-300'>
          <p>ID: #DINESH-99</p>
          <p>Email: dinesh@example.com</p>
          <p>Joined: Jan 20, 2026</p>
        </div>
      </section>

      <section className='bg-card p-6 rounded-2xl border border-gray-800'>
        <h2 className='text-brand font-bold mb-4'>Gym Info</h2>
        <div className='space-y-2 text-sm text-gray-300'>
          <p>Iron Paradise, Ajmer</p>
          <p>Manager: R. Singh</p>
        </div>
      </section>
    </div>
  )
}
