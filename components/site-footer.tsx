import Link from "next/link";
import { Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

const companyItems = [
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Our Clients",
    href: "#clients",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  // {
  //   name: "Privacy Policy",
  //   href: "#",
  // },
];

const servicesItems = [
  {
    name: "Software Development",
    href: "#services",
  },
  {
    name: "CCTV Surveillance",
    href: "#services",
  },
  {
    name: "Fire Safety",
    href: "#services",
  },
  {
    name: "Cloud Solutions",
    href: "#services",
  },
  {
    name: "Power Backup",
    href: "#services",
  },
];

const socialItems = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-primary-foreground p-1.5 rounded-md">
                {/* <span className="font-bold text-lg tracking-tight">DT</span> */}
                <img
                  src={"/deskpro-logo.png"}
                  alt="DeskPro Technology"
                  className="h-8 w-8"
                />
              </div>
              <span className="font-bold text-xl">DeskPro Technology</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for end-to-end technology services, security
              solutions, and digital transformation in Nepal.
            </p>
            <div className="flex gap-4">
              {socialItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">Social Link</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {servicesItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {companyItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">
                  Head Office:
                </span>
                <Link
                  // href="https://goo.gl/maps/1Zy7n2h5sH2iLh6C9"
                  href=""
                  target="_blank"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Biratnagar-05, Bargachhi
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Ops Office:</span>
                <Link
                  // href="https://goo.gl/maps/1Zy7n2h5sH2iLh6C9"
                  href=""
                  target="_blank"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Itahari-17, Pakali
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Phone:</span>
                <Link
                  href="tel:+9779802756534"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  +977 9802756534
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Email:</span>
                <Link
                  href="mailto:info@deskprotechnology.com.np"
                  className=" hover:text-primary transition-colors cursor-pointer"
                >
                  info@deskprotechnology.com.np
                </Link>
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
