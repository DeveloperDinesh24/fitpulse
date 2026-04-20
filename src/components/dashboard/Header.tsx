import { useEffect, useState } from 'react'

export const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className='bg-card p-6 rounded-2xl border border-gray-800 flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-gray-400'>Welcome back, Dinesh.</p>
      </div>
      <div className='text-right'>
        <p className='text-brand font-mono font-bold text-lg'>
          {currentTime.toLocaleTimeString()}
        </p>
        <p className='text-sm text-gray-500'>{currentTime.toDateString()}</p>
      </div>
    </header>
  )
}
