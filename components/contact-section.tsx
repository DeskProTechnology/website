"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormState>;

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  /* ------------------ validation ------------------ */
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------ handlers ------------------ */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Validation error", {
        description: "Please fix the highlighted fields.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent 🎉", {
        description: "Thanks for reaching out. We’ll contact you soon.",
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Ready to transform your business? We reach every corner of our
                country to provide top-notch technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg mb-1">Our Locations</h3>
                  <Link
                    href="https://www.google.com/maps/place/Biratnagar-05,+Bargachhi/@27.243189,87.106433,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb0c8c2f0c8c2f:0x8c8c8c8c8c8c8c8c!8m2!3d27.243189!4d87.106433!16s%2Fg%2F11c4z8z5_?entry=ttu"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Head Office: Biratnagar-05, Bargachhi
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/Itahari-17,+Pakali/@27.243189,87.106433,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb0c8c2f0c8c2f:0x8c8c8c8c8c8c8c8c!8m2!3d27.243189!4d87.106433!16s%2Fg%2F11c4z8z5_?entry=ttu"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Ops Office: Itahari-17, Pakali
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <Link
                    href="tel:9802756534"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    9802756534 (Support)
                  </Link>
                  <Link
                    href="tel:9842419776"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    9842419776 (Sales)
                  </Link>
                  <Link
                    href="tel:9820751573"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    9820751573 (CEO)
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <Link
                    href="mailto:info@deskprotechnology.com.np"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    info@deskprotechnology.com.np
                  </Link>
                  <Link
                    href="mailto:deskprotechnology@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    deskprotechnology@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-3xl border bg-card/50 backdrop-blur-sm p-8 md:p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First name</label>
                  <Input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Saurav"
                    className="h-12"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Last name</label>
                  <Input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Prasad"
                    className="h-12"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="min-h-[150px] resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                className="w-full h-12 text-base rounded-xl cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
