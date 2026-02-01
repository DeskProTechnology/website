import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      role: "Operations Manager, Surya Aggregate",
      content:
        "DeskPro's team provided exceptional service for our factory's CCTV and fire safety installation. Their after-sales support is truly reliable.",
      rating: 5,
      initials: "RS",
    },
    {
      name: "Priya Adhikari",
      role: "Principal, Government School Project",
      content:
        "We are very satisfied with the computer lab setup and networking solutions provided. The team is knowledgeable and professional.",
      rating: 5,
      initials: "PA",
    },
    {
      name: "Amit Pradhan",
      role: "Branch Manager, Machhapuchhre Bank",
      content:
        "Reliable AMC services and quick troubleshooting. They understand the critical nature of banking security systems.",
      rating: 5,
      initials: "AP",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            What our valued clients say about our services and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Card
              key={i}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-24 w-24 text-primary" />
              </div>
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed italic">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
