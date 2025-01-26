"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, LineChart, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    title: "Total Customers",
    value: "2,345",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Monthly Revenue",
    value: "$34,567",
    change: "+23.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Projects",
    value: "45",
    change: "-5.2%",
    trend: "down",
    icon: LineChart,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight
        const trendColor = stat.trend === "up" ? "text-green-500" : "text-red-500"

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
                <TrendIcon className="h-4 w-4" />
                {stat.change}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

