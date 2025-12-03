import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, BookOpen, ClipboardCheck, Users, HeartHandshake, FileText } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Doubt-Solving",
    description: "Get your doubts cleared instantly with our dedicated doubt-solving sessions.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Tests",
    description: "Regular assessments to track progress and identify areas for improvement.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from teachers with years of experience in coaching young minds.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Support",
    description: "Individual attention to ensure every student reaches their potential.",
  },
  {
    icon: FileText,
    title: "Study Materials",
    description: "Comprehensive study materials and notes provided for all subjects.",
  },
];

export default function Index() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <Star className="h-4 w-4 fill-golden text-golden" />
                <span className="text-sm font-medium text-foreground">
                  4.8 ★ Google Rating (153 Reviews)
                </span>
              </div>

              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Quality Coaching for{" "}
                <span className="text-primary">1st to 10th Standard</span> Students
              </h1>

              <p className="text-lg text-muted-foreground">
                CBSE | ICSE | State Board • Online + Offline Coaching
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/contact">Enroll Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 font-semibold">
                  <a href="tel:9763852327">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80"
                  alt="Students studying in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-card">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              About A R Classes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A R Classes is a trusted coaching center in Pune dedicated to nurturing young minds from 1st to 10th standard. 
              We believe every child has the potential to excel, and our mission is to provide the guidance, support, 
              and resources they need to achieve academic success.
            </p>
            <Button asChild variant="link" className="text-primary">
              <Link to="/about">Learn more about us →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Class Range */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Classes We Offer
            </h2>
            <p className="text-muted-foreground">
              Comprehensive coaching for all primary and secondary classes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="h-20 w-20 md:h-24 md:w-24 bg-background rounded-2xl shadow-soft flex items-center justify-center hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <span className="font-heading font-bold text-xl md:text-2xl text-primary">
                  {i + 1}
                  <sup className="text-xs text-muted-foreground">
                    {i === 0 ? "st" : i === 1 ? "nd" : i === 2 ? "rd" : "th"}
                  </sup>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Why Choose A R Classes?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a supportive learning environment with experienced teachers and proven teaching methods.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-2xl border border-border hover:shadow-card hover:-translate-y-1 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join A R Classes today and give your child the academic foundation they deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:9763852327">
                <Phone className="h-4 w-4 mr-2" />
                9763852327
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
