import { DateAndTimeContainer } from './DateAndTimeContainer'

export const Header = () => {
  return (
    <header className='bg-card p-6 rounded-2xl border border-gray-800 flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-gray-400'>Welcome back, Dinesh.</p>
      </div>
      <DateAndTimeContainer />
    </header>
  )
}
