import { StatsBar } from '../components/sections/StatsBar'
import { HeroSection } from '../components/sections/HeroSection'
import { Navbar } from '../components/sections/Navbar'
import { ProblemSolution } from '../components/sections/ProblemSolution'
import { Features } from '../components/sections/Features'
import { FinalCTA } from '../components/sections/FinalCTA'

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <div className='min-h-screen bg-dark text-white selection:bg-brand selection:text-black font-sans'>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProblemSolution fadeIn={fadeIn} />
      <Features />
      <FinalCTA fadeIn={fadeIn} />
    </div>
  )
}
