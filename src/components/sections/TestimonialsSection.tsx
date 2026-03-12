import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    name: "Sofia & James",
    text: "We couldn't have imagined a more perfect day. The attention to detail, the creativity — everything was beyond what we hoped for.",
  },
  {
    name: "Priya & Arjun",
    text: "A truly world-class team. They handled every element with grace and made our celebration feel effortless and spectacular.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-blush">
      <div className="container mx-auto max-w-3xl px-6" ref={ref}>
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

        <div className="mt-16 relative">
          <div className="rounded-xl bg-background/70 p-10 sm:p-14 shadow-romantic backdrop-blur-sm min-h-[220px] flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-body mt-6 text-lg italic leading-relaxed text-secondary-foreground sm:text-xl">
                  "{t.text}"
                </p>
                <p className="text-sans mt-8 text-xs font-semibold tracking-widest text-primary uppercase">
                  — {t.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 rounded-full bg-background p-2 shadow-romantic text-foreground transition-colors hover:bg-muted"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 rounded-full bg-background p-2 shadow-romantic text-foreground transition-colors hover:bg-muted"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
