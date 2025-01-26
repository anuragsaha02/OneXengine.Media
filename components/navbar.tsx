"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { AuthModal } from "./auth-modal"
import { getFullPath } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={getFullPath("/")} className="font-bold text-xl">
          OneXengine.Media
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={getFullPath(link.href)}
              className={`transition-colors hover:text-primary ${
                pathname === getFullPath(link.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="default" onClick={() => setIsAuthOpen(true)} className="hidden md:inline-flex">
            Sign In
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={getFullPath(link.href)}
                    className={`text-lg ${
                      pathname === getFullPath(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button onClick={() => setIsAuthOpen(true)}>Sign In</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <AuthModal open={isAuthOpen} onOpenChange={setIsAuthOpen} />
    </header>
  )
}

