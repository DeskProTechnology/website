import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeskPro Technology - Your Trusted IT Partner",
  description:
    "DeskPro Technology is a leading IT solutions provider based in Nepal, offering a wide range of services including software development, IT consulting, and digital transformation. We are committed to delivering innovative and reliable technology solutions that drive business success. With a team of experienced professionals and a customer-centric approach, DeskPro Technology helps businesses of all sizes leverage the power of technology to achieve their goals. Contact us today to learn how we can help your business thrive in the digital age.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/deskpro-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/deskpro-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/deskpro-logo.png",
        type: "image/png",
      },
    ],
    apple: "/deskpro-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster position="top-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
