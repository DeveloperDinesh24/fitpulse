'use client'

import { useEffect, useState } from 'react'

export const DateAndTimeContainer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='text-right'>
      <p className='text-brand font-mono font-bold text-lg'>
        {currentTime.toLocaleTimeString()}
      </p>
      <p className='text-sm text-gray-500'>{currentTime.toDateString()}</p>
    </div>
  )
}
