import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Do you provide study material?",
    answer: "Yes, we provide comprehensive study materials for all subjects. This includes notes, worksheets, practice questions, and reference materials aligned with the curriculum of CBSE, ICSE, and State Board. Students also receive sample papers and previous year questions for exam preparation.",
  },
  {
    question: "How many students per batch?",
    answer: "We maintain small batch sizes of 10-15 students per batch to ensure individual attention and effective learning. This allows our teachers to focus on each student's needs and provide personalized guidance throughout the learning process.",
  },
  {
    question: "What are the timings?",
    answer: "Our classes run from morning till 9 PM with different batches scheduled throughout the day. We offer flexible timing options to accommodate school schedules. Morning batches typically run from 7 AM to 12 PM, and evening batches from 4 PM to 9 PM. Specific batch timings depend on the standard and availability.",
  },
  {
    question: "Do you offer personalized 1-to-1 sessions?",
    answer: "Yes, we offer personalized one-on-one tutoring sessions for students who need extra attention or want to focus on specific subjects or topics. These sessions can be arranged based on the student's requirements and the teacher's availability. Additional fees may apply for individual sessions.",
  },
  {
    question: "How to locate A R Classes?",
    answer: "A R Classes is located at Vighnaharta Apartment, Opposite Hari Om Super Market, Sudarshan Nagar, Lane 2, Pimple Gurav, Pune-411061. We are easily accessible from major areas in Pimple Gurav. You can also call us at 9763852327 for directions or use Google Maps to navigate to our location.",
  },
  {
    question: "What boards do you cover?",
    answer: "We provide coaching for three major educational boards: CBSE (Central Board of Secondary Education), ICSE (Indian Certificate of Secondary Education), and Maharashtra State Board. Our teachers are well-versed with the curriculum and examination patterns of all these boards.",
  },
  {
    question: "Is there online coaching available?",
    answer: "Yes, we offer both online and offline coaching options. Online classes are conducted through video conferencing with interactive sessions, screen sharing for explanations, and digital study materials. This option is ideal for students who prefer learning from home or cannot attend physical classes.",
  },
  {
    question: "How do you track student progress?",
    answer: "We have a systematic progress tracking system that includes weekly tests, monthly assessments, and detailed performance reports. Parents receive regular updates about their child's performance, attendance, and areas that need improvement. We also conduct periodic parent-teacher meetings.",
  },
];

export default function FAQ() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about A R Classes and our programs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Feel free to reach out to us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <a href="tel:9763852327">Call: 9763852327</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
