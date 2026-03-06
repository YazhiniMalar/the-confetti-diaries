import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya & Rohan",
    text: "The Confeti Diaries turned our wedding into a fairytale. Every detail was absolutely perfect — we still get compliments from our guests!",
  },
  {
    name: "Charlotte & William",
    text: "Working with this team felt like magic. They understood our vision instantly and created something beyond our wildest dreams.",
  },
  {
    name: "Mei & Daniel",
    text: "From the first meeting to the last dance, everything was seamless. They don't just plan weddings — they create unforgettable experiences.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-blush">
      <div className="container mx-auto max-w-5xl px-6" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Love Letters
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Testimonials
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-xl bg-background/70 p-8 shadow-romantic backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-body mt-4 text-base italic leading-relaxed text-secondary-foreground">
                "{t.text}"
              </p>
              <p className="text-sans mt-6 text-xs font-semibold tracking-widest text-primary uppercase">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
