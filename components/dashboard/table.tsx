"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "1",
    client: "Acme Inc",
    project: "Website Redesign",
    status: "In Progress",
    dueDate: "2024-03-15",
    budget: "$12,000",
  },
  {
    id: "2",
    client: "TechCorp",
    project: "SEO Campaign",
    status: "Completed",
    dueDate: "2024-02-28",
    budget: "$5,000",
  },
  {
    id: "3",
    client: "StartUp Co",
    project: "Social Media Management",
    status: "Pending",
    dueDate: "2024-03-30",
    budget: "$3,500",
  },
  {
    id: "4",
    client: "Global Ltd",
    project: "E-commerce Development",
    status: "In Progress",
    dueDate: "2024-04-15",
    budget: "$20,000",
  },
]

export function DashboardTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.client}</TableCell>
              <TableCell>{project.project}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === "Completed"
                      ? "default"
                      : project.status === "In Progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>{project.dueDate}</TableCell>
              <TableCell>{project.budget}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

