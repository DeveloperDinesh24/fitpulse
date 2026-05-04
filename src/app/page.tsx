import { Features } from '@/components/sections/Features'
import { HeroSection } from '@/components/sections/HeroSection'
import { Navbar } from '@/components/sections/Navbar'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { StatsBar } from '@/components/sections/StatsBar'

export default function Home() {
  return (
    <div className='min-h-screen bg-dark text-white selection:bg-brand selection:text-black font-sans'>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProblemSolution />
      <Features />
    </div>
  )
}
