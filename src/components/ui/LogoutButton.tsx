import { LogOut } from 'lucide-react'

export const LogoutButton = () => {
  return (
    <div className='mt-auto pt-6 border-t border-gray-800'>
      <button className='w-full flex items-center justify-center gap-3 bg-card border border-gray-800 hover:border-red-900/50 hover:bg-red-950/20 text-gray-400 hover:text-red-400 py-3 rounded-lg transition-all duration-300 cursor-pointer'>
        <LogOut className='w-5 h-5' />
        <span className='font-medium'>Logout</span>
      </button>
    </div>
  )
}
