export const ToggleFooter = ({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean
  setIsLogin: (isLogin: boolean) => void
}) => {
  return (
    <div className='mt-6 text-center'>
      <p className='text-slate-400 text-sm'>
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className='text-blue-400 hover:text-blue-300 font-semibold transition-colors'
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </div>
  )
}
