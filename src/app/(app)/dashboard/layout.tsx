import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full flex h-screen">
      <Sidebar />
      <section className="flex flex-col w-full overflow-auto">
        <Nav />
        {children}
      </section>
    </section>
  )
}
