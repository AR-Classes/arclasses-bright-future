import { MapPin, Target, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide quality education that builds strong academic foundations and instills a love for learning in every student.",
  },
  {
    icon: Heart,
    title: "Student-Focused",
    description: "Every teaching method and decision is centered around what's best for our students' growth and development.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in teaching and help students achieve their highest potential in academics.",
  },
];

export default function About() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              About <span className="text-primary">A R Classes</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A trusted name in quality education for students from 1st to 10th standard in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A R Classes was founded with a simple yet powerful vision: to make quality education accessible 
                  to every student, regardless of their starting point. Located in the heart of Pimple Gurav, Pune, 
                  we have been serving the local community with dedication and passion.
                </p>
                <p>
                  Our team of experienced educators understands that every child learns differently. That's why 
                  we've developed teaching methodologies that cater to individual learning styles, ensuring that 
                  no student is left behind.
                </p>
                <p>
                  Over the years, we've helped hundreds of students build strong academic foundations, improve 
                  their grades, and develop confidence in their abilities. We cover CBSE, ICSE, and State Board 
                  curricula, providing comprehensive support for students across different educational systems.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80"
                  alt="Teacher helping students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-background rounded-2xl shadow-soft text-center"
              >
                <div className="h-14 w-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                  alt="Classroom environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                Experienced Educators
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our faculty consists of highly qualified and experienced teachers who are passionate about 
                  education. Each teacher brings years of expertise in their respective subjects and a deep 
                  understanding of the curriculum requirements for CBSE, ICSE, and State Board.
                </p>
                <p>
                  We believe that good teaching goes beyond textbooks. Our educators focus on making concepts 
                  clear, engaging students in interactive learning, and providing the individual attention that 
                  every student needs to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-14 w-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-muted-foreground mb-6">
              Conveniently located in Pimple Gurav, Pune, our center is easily accessible for families 
              in the surrounding areas.
            </p>
            <div className="p-6 bg-background rounded-2xl shadow-soft">
              <p className="text-foreground font-medium">
                Vighnaharta Apartment, Opp. Hari Om Super Market,<br />
                Sudarshan Nagar, Lane 2, Pimple Gurav,<br />
                Pune - 411061
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
