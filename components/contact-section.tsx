import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Ready to transform your business? We reach every corner of our country to provide top-notch technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Locations</h3>
                  <p className="text-muted-foreground">Head Office: Biratnagar-05, Bargachhi</p>
                  <p className="text-muted-foreground">Ops Office: Itahari-17, Pakali</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">9802756534</p>
                  <p className="text-muted-foreground">9842419776, 9820751573 (CEO)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@deskprotechnology.com.np</p>
                  <p className="text-muted-foreground">deskprotechnology@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-8 md:p-10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                  <Input id="first-name" placeholder="John" className="bg-background/50 border-border/50 focus:border-primary h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                  <Input id="last-name" placeholder="Doe" className="bg-background/50 border-border/50 focus:border-primary h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" placeholder="m@example.com" type="email" className="bg-background/50 border-border/50 focus:border-primary h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary resize-none" id="message" placeholder="How can we help you?" />
              </div>
              <Button className="w-full h-12 text-base rounded-xl" type="submit">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
