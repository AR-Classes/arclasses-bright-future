import { Clock, Users, ClipboardCheck, UserCheck, Shield } from "lucide-react";

const policies = [
  {
    icon: Clock,
    title: "Attendance Policy",
    items: [
      "Regular attendance is mandatory for all enrolled students.",
      "Parents/guardians must inform the center in advance if a student will be absent.",
      "Students with less than 75% attendance may not be eligible for final assessments.",
      "Make-up classes may be arranged for students with genuine reasons for absence.",
    ],
  },
  {
    icon: Users,
    title: "Student Behavior Code",
    items: [
      "Students must maintain discipline and respect towards teachers and peers.",
      "Use of mobile phones during class hours is strictly prohibited.",
      "Students must come prepared with required books and stationery.",
      "Any form of bullying or misconduct will result in disciplinary action.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Assessment System",
    items: [
      "Weekly tests are conducted to assess understanding of recent topics.",
      "Monthly comprehensive tests cover all subjects and topics taught.",
      "Progress reports are shared with parents after each assessment cycle.",
      "Remedial classes are provided for students who need additional support.",
    ],
  },
  {
    icon: UserCheck,
    title: "Parent Engagement",
    items: [
      "Regular parent-teacher meetings are scheduled to discuss student progress.",
      "Parents can schedule one-on-one meetings with teachers upon request.",
      "Progress updates are communicated via phone or in-person discussions.",
      "Parents are encouraged to support learning at home through assigned homework.",
    ],
  },
  {
    icon: Shield,
    title: "Safety Rules",
    items: [
      "All students must be picked up and dropped off by authorized individuals.",
      "Emergency contact information must be kept updated with the center.",
      "First aid facilities are available on premises.",
      "Fire safety drills are conducted periodically.",
    ],
  },
];

export default function Policies() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Our <span className="text-primary">Policies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Clear guidelines to ensure a productive and safe learning environment for all students.
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className="p-6 md:p-8 bg-muted rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center">
                    <policy.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-foreground">
                    {policy.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Have Questions About Our Policies?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're happy to clarify any policies or address specific concerns. 
              Feel free to reach out to us.
            </p>
            <p className="text-foreground font-medium">
              Contact us at: <a href="tel:9763852327" className="text-primary hover:underline">9763852327</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
