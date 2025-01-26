import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-muted-foreground">Rabindra Sarani, Hailakandi, Assam, India</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-muted-foreground">anupamtospace002@gmail.com</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-muted-foreground">+91 7002081304</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

