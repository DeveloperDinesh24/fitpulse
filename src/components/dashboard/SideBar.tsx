import { PlanCard } from './PlanCard'
import { SystemInfoCard } from './SystemInfoCard'

export const SideBar = () => {
  return (
    <div className='space-y-6 flex flex-col h-full'>
      <PlanCard />
      <SystemInfoCard />
    </div>
  )
}
