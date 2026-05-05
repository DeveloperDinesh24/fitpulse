import { Header } from '@/components/dashboard/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-dark text-white p-6 md:p-8 flex gap-8'>
      <main className='flex-1 space-y-8'>
        <Header />
        {children}
      </main>
    </div>
  )
}
