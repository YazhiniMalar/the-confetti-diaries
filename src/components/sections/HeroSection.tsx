import { motion } from "framer-motion";
import backdrop from "@/assets/wedding-backdrop.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backdrop})` }}
      />
      <div className="absolute inset-0 bg-ivory/70 backdrop-blur-sm" />
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1 className="shimmer-text text-display text-5xl font-bold tracking-[0.15em] sm:text-7xl lg:text-8xl">
          THE CONFETI
        </h1>
        <p className="text-display mt-2 text-2xl font-light tracking-[0.4em] text-foreground sm:text-3xl">
          DIARIES
        </p>
        <motion.p
          className="text-sans mx-auto mt-8 max-w-md text-sm font-light tracking-wider text-muted-foreground sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Crafting timeless celebrations & unforgettable memories
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href="#about"
            className="gradient-gold text-sans inline-block rounded-full px-8 py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            EXPLORE OUR STORY
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
