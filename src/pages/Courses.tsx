import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Laptop, Home, ClipboardList, BookOpen } from "lucide-react";

const boards = [
  {
    name: "CBSE",
    description: "Central Board of Secondary Education curriculum with NCERT-based teaching approach.",
  },
  {
    name: "ICSE",
    description: "Indian Certificate of Secondary Education with comprehensive subject coverage.",
  },
  {
    name: "State Board",
    description: "Maharashtra State Board curriculum with focus on local examination patterns.",
  },
];

const modes = [
  {
    icon: GraduationCap,
    title: "Offline Coaching",
    description: "In-person classes at our center with direct interaction with teachers and peers.",
  },
  {
    icon: Laptop,
    title: "Online Coaching",
    description: "Live online classes for students who prefer learning from the comfort of home.",
  },
  {
    icon: Home,
    title: "Home Assignments",
    description: "Regular homework and practice assignments to reinforce learning at home.",
  },
  {
    icon: ClipboardList,
    title: "Weekly Tests",
    description: "Regular assessments to track progress and prepare for examinations.",
  },
];

export default function Courses() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive coaching programs designed for academic excellence across all major boards.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Standards We Teach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer separate batches for each standard, ensuring focused attention and age-appropriate teaching methods.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="p-6 bg-muted rounded-2xl text-center hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <p className="font-heading font-bold text-xl text-foreground">
                  {i + 1}
                  <sup className="text-xs text-muted-foreground">
                    {i === 0 ? "st" : i === 1 ? "nd" : i === 2 ? "rd" : "th"}
                  </sup>
                </p>
                <p className="text-sm text-muted-foreground">Standard</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boards */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Board Curriculum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide coaching for all major educational boards with curriculum-specific teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {boards.map((board) => (
              <div
                key={board.name}
                className="p-6 bg-background rounded-2xl shadow-soft border border-border"
              >
                <div className="h-14 w-14 bg-accent rounded-2xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {board.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {board.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Learning Modes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible learning options to suit different needs and preferences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode) => (
              <div
                key={mode.title}
                className="p-6 bg-muted rounded-2xl hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <mode.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Enroll Your Child Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Give your child the academic support they need. Contact us to learn more about our courses.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
