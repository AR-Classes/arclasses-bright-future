import { 
  HelpCircle, 
  ClipboardCheck, 
  BookOpen, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp 
} from "lucide-react";

const facilities = [
  {
    icon: HelpCircle,
    title: "Doubt Clearing Sessions",
    description: "Dedicated sessions where students can ask questions and get personalized explanations for any topic they find challenging.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly / Monthly Assessments",
    description: "Regular tests and assessments to evaluate understanding, track progress, and prepare students for examinations.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80",
  },
  {
    icon: BookOpen,
    title: "Study Material",
    description: "Comprehensive study materials, notes, and practice worksheets provided for all subjects and topics covered.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Online Resources",
    description: "Access to digital learning resources and recorded sessions for revision and supplementary learning.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "A secure and comfortable classroom environment where students can focus on learning without distractions.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&auto=format&fit=crop&q=80",
  },
  {
    icon: Users,
    title: "Parent-Teacher Meetings",
    description: "Regular PTMs to discuss student progress, address concerns, and collaborate on academic improvement strategies.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&auto=format&fit=crop&q=80",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Systematic tracking of each student's academic journey with detailed performance reports and feedback.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80",
  },
];

export default function Facilities() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Our <span className="text-primary">Facilities</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything your child needs for a complete learning experience under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center">
                      <facility.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
              Committed to Quality Education
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At A R Classes, we continuously invest in our facilities and teaching methods to provide 
              the best possible learning experience. Our goal is to create an environment where every 
              student feels supported, motivated, and ready to achieve their academic goals.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-2xl">
                <p className="font-heading font-bold text-3xl text-primary mb-2">500+</p>
                <p className="text-muted-foreground text-sm">Students Taught</p>
              </div>
              <div className="p-6 bg-background rounded-2xl">
                <p className="font-heading font-bold text-3xl text-primary mb-2">10+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div className="p-6 bg-background rounded-2xl">
                <p className="font-heading font-bold text-3xl text-primary mb-2">4.8★</p>
                <p className="text-muted-foreground text-sm">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
