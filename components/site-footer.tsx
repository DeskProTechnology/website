import Link from "next/link";
import { Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                <span className="font-bold text-lg tracking-tight">DT</span>
              </div>
              <span className="font-bold text-xl">DeskPro Technology</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for end-to-end technology services, security
              solutions, and digital transformation in Nepal.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">Social Link</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Software Development",
                "CCTV Surveillance",
                "Fire Safety",
                "Cloud Solutions",
                "Power Backup",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["About Us", "Our Clients", "Contact", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">
                  Head Office:
                </span>
                Biratnagar-05, Bargachhi
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Ops Office:</span>
                Itahari-17, Pakali
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Phone:</span>
                +977 9802756534
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Email:</span>
                info@deskprotechnology.com.np
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DeskPro Technology Pvt. Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
