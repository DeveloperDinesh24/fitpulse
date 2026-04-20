import { About } from '../components/dashboard/About'
import { Header } from '../components/dashboard/Header'
import { ManagementTools } from '../components/dashboard/ManagementTools'
import { PlanCard } from '../components/dashboard/PlanCard'
import { LogoutButton } from '../components/ui/LogoutButton'

export const MemberDashboard = () => {
  return (
    <div className='min-h-screen bg-dark text-white p-6 md:p-8 flex gap-8'>
      <main className='flex-1 space-y-8'>
        <Header />
        <About />
        <ManagementTools />
        <aside className='w-80 shrink-0'>
          <div className='space-y-6 flex flex-col h-full'>
            <PlanCard />
            <LogoutButton />
          </div>
        </aside>
      </main>
    </div>
  )
}
