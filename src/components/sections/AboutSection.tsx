import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-ivory">
      <div className="container mx-auto max-w-4xl px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Our Story
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            About The Confeti Diaries
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>
        <motion.p
          className="text-body mt-10 text-lg leading-relaxed text-secondary-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We believe every love story deserves to be celebrated in its most
          extraordinary form. At The Confeti Diaries, we transform your
          wedding dreams into breathtaking realities — blending elegance with
          joyful celebration, timeless beauty with unforgettable moments.
        </motion.p>
        <motion.p
          className="text-body mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From intimate garden ceremonies to grand ballroom affairs, our
          passion is crafting the diary of your most cherished day — one
          confetti-filled page at a time.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
