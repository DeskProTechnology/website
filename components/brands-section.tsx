import Image from "next/image"

export function BrandsSection() {
  const brands = [
    { name: "Hikvision", logo: "/hikvision-logo-white.jpg" },
    { name: "Dahua", logo: "/dahua-technology-logo-white.jpg" },
    { name: "CP Plus", logo: "/cp-plus-logo-white.jpg" },
    { name: "Microsoft", logo: "/microsoft-azure-logo-white.jpg" },
    { name: "AWS", logo: "/aws-logo-white.jpg" },
    { name: "Google Cloud", logo: "/google-cloud-logo-white.jpg" },
    { name: "Cisco", logo: "/cisco-logo-white.jpg" },
    { name: "Dell", logo: "/dell-logo-white.jpg" }
  ]

  return (
    <section className="py-16 border-y border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-muted-foreground">Trusted Brands We Work With</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <div key={i} className="relative h-12 w-32 md:h-16 md:w-40 transition-all duration-300 hover:scale-110 hover:opacity-100">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
