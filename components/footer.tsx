import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { getFullPath } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              OneXengine.Media is your partner in digital transformation, providing comprehensive marketing and web
              solutions.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href={getFullPath("/")} className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href={getFullPath("/about")} className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link
                href={getFullPath("/services")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href={getFullPath("/projects")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href={getFullPath("/contact")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <Input placeholder="Enter your email" type="email" className="max-w-[220px]" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 OneXengine.Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

