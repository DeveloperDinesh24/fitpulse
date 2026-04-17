import { StatsBar } from '../components/sections/StatsBar'
import { HeroSection } from '../components/sections/HeroSection'
import { Navbar } from '../components/sections/Navbar'
import { ProblemSolution } from '../components/sections/ProblemSolution'
import { Features } from '../components/sections/Features'

export default function LandingPage() {
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
