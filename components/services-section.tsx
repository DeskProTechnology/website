import { Monitor, Shield, Server, Video, Wifi, Flame, Cloud, Zap, Settings, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Software & Digital",
    description: "Custom software development, OS licensing, and strategic digital consulting.",
    icon: Monitor,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Network & Security",
    description: "Firewall security, network infrastructure, and secure intranet solutions.",
    icon: Shield,
    colSpan: "md:col-span-1",
  },
  {
    title: "Hardware & Servers",
    description: "Supply and installation of upgraded PCs, servers, and essential IT hardware.",
    icon: Server,
    colSpan: "md:col-span-1",
  },
  {
    title: "CCTV Surveillance",
    description: "Advanced surveillance systems to monitor and secure your premises 24/7.",
    icon: Video,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "IoT Solutions",
    description: "Smart connected devices and Internet of Things solutions.",
    icon: Wifi,
    colSpan: "md:col-span-1",
  },
  {
    title: "Fire Safety",
    description: "Fire alarm systems, extinguishers, and fire hydrants.",
    icon: Flame,
    colSpan: "md:col-span-1",
  },
  {
    title: "Cloud Services",
    description: "Integration with AWS, Azure, and Google Cloud.",
    icon: Cloud,
    colSpan: "md:col-span-1",
  },
  {
    title: "Power Backup",
    description: "Inverters, Online UPS, and Solar Panel systems.",
    icon: Zap,
    colSpan: "md:col-span-1",
  },
  {
    title: "AMC & Support",
    description: "Annual Maintenance Contracts and reliable after-sales support.",
    icon: Settings,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive <span className="text-primary">IT Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end technology services under one roof, ensuring your business runs without any digital interruptions.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${service.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-2.5 w-fit rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-y-2 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
