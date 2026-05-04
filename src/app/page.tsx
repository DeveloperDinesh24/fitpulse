import { Navbar } from '../components/sections/Navbar'

export default function Home() {
  return (
    <div className='min-h-screen bg-dark text-white selection:bg-brand selection:text-black font-sans'>
      <Navbar />
    </div>
  )
}
