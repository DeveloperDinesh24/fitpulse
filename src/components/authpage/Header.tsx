export const Header = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <div className='text-center mb-8'>
      <h1 className='text-3xl font-bold text-white mb-2'>
        {isLogin ? 'Welcome Back' : 'Join FitPulse'}
      </h1>
      <p className='text-slate-400'>
        {isLogin
          ? 'Enter your credentials to access your dashboard.'
          : 'Create an account to start your fitness journey.'}
      </p>
    </div>
  )
}
