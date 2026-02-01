import { CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Building Trust Through <br />
                <span className="text-primary">Technology & Service</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Established in 2075 BS, DeskPro Technology Pvt. Ltd. is a leading technology provider based in Biratnagar. We believe that true growth comes not from the number of sales, but from the trust we build with our clients through exceptional after-sales services.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                "Comprehensive IT and IoT Solutions in One Place",
                "Experienced Technical Team of Engineers",
                "Reliable After-Sales Support and AMC Services",
                "Strong Industry Presence and Trust"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8 mt-12">
                <div className="group rounded-3xl bg-card border p-8 hover:border-primary/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform origin-left">2075</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Established (BS)</div>
                </div>
                <div className="group rounded-3xl bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/20">
                  <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform origin-left">100%</div>
                  <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-8">
                <div className="group rounded-3xl bg-card border p-8 hover:border-primary/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform origin-left">Eng.</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Graduated Team</div>
                </div>
                <div className="group rounded-3xl bg-card border p-8 hover:border-primary/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform origin-left">24/7</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
