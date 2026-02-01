import Link from "next/link";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:scale-105 transition-transform">
                <span className="font-bold text-xl tracking-tight">DT</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block tracking-tight">
                DeskPro Technology
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["About", "Services", "Clients", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-muted-foreground hover:text-primary transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href="tel:9802756534"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>9802756534</span>
              </a>
            </div>
            <Button asChild className="hidden md:inline-flex rounded-full px-6">
              <Link href="#contact">Get a Quote</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-8 px-4">
                  <Link
                    href="/"
                    className="font-bold text-2xl flex items-center gap-2"
                  >
                    <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                      DT
                    </div>
                    DeskPro
                  </Link>
                  <nav className="flex flex-col gap-6">
                    {["About", "Services", "Clients", "Contact"].map((item) => (
                      <SheetClose asChild key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="text-xl font-medium hover:text-primary transition-colors"
                        >
                          {item}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-4 mt-auto pt-8 border-t">
                    {" "}
                    <SheetClose asChild>
                      <a
                        href="tel:9802756534"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <span>9802756534</span>
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href="mailto:info@deskprotechnology.com.np"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>info@deskprotechnology.com.np</span>
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
