import { Building2, Landmark, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Valued Clients</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            We proudly serve a diverse range of clients across various sectors in Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              percent: "35%",
              label: "Industrial Clients",
              icon: Building2,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              percent: "20%",
              label: "Government Sector",
              icon: Landmark,
              color: "text-secondary",
              bg: "bg-secondary/10"
            },
            {
              percent: "45%",
              label: "Commercial & Individual",
              icon: Users,
              color: "text-foreground",
              bg: "bg-foreground/5"
            }
          ].map((item, i) => (
            <Card key={i} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 px-6 flex flex-col items-center text-center h-full">
                <div className={`p-4 rounded-2xl ${item.bg} ${item.color} mb-6`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-5xl font-bold mb-3 tracking-tight">{item.percent}</h3>
                <p className="font-semibold text-xl mb-4">{item.label}</p>
                <div className="w-12 h-1 bg-border rounded-full mb-6"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
