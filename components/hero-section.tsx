import Link from "next/link"
import { ArrowRight, ShieldCheck, Server, Cpu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-secondary/30 opacity-30 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Established 2075 BS
            </div>
          </div>
          
          <h1 className="max-w-4xl text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 ease-out">
            <span className="block text-foreground">Reliable, Efficient &</span>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_6s_linear_infinite]">
              Future-Ready Solutions
            </span>
          </h1>
          
          <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out">
            We specialize in end-to-end technology services including Software, Security, IoT, and Cloud Solutions. Your trusted partner for digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 ease-out">
            <Button size="lg" className="h-12 px-8 text-base rounded-full group" asChild>
              <Link href="#contact">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full hover:bg-primary/5" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ease-out">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-1">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="font-medium">Secure Infrastructure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-1">
                <Server className="h-6 w-6" />
              </div>
              <span className="font-medium">Reliable Systems</span>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-1">
                <Cpu className="h-6 w-6" />
              </div>
              <span className="font-medium">Innovative Tech</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
