import { DashboardStats } from "@/components/dashboard/stats"
import { DashboardTable } from "@/components/dashboard/table"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardStats />
      <DashboardTable />
    </div>
  )
}

