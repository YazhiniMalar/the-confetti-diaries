import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleTrail from "@/components/SparkleTrail";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";

const portfolioItems = [
  { img: wedding1, title: "Sarah & James", category: "Wedding", height: "h-72" },
  { img: wedding2, title: "Elena & Marco", category: "Reception", height: "h-96" },
  { img: wedding3, title: "Priya & Arjun", category: "Ceremony", height: "h-80" },
  { img: wedding4, title: "Lily & Thomas", category: "Engagement", height: "h-64" },
  { img: wedding5, title: "Mei & Daniel", category: "Wedding", height: "h-96" },
  { img: wedding6, title: "Charlotte & William", category: "Reception", height: "h-72" },
  { img: wedding1, title: "Ava & Noah", category: "Ceremony", height: "h-80" },
  { img: wedding3, title: "Sofia & Liam", category: "Destination", height: "h-96" },
  { img: wedding5, title: "Zara & Ethan", category: "Engagement", height: "h-64" },
  { img: wedding2, title: "Olivia & Lucas", category: "Wedding", height: "h-80" },
  { img: wedding4, title: "Mia & Sebastian", category: "Reception", height: "h-96" },
  { img: wedding6, title: "Isabella & Henry", category: "Ceremony", height: "h-72" },
];

const Portfolio = () => {
  return (
    <>
      <SparkleTrail />
      <Navbar />
      <main className="pt-24 pb-16 bg-ivory min-h-screen">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-6">
            <Link
              to="/"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
              Our Work
            </p>
            <h1 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              Portfolio
            </h1>
            <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
            <p className="text-body mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              A curated collection of weddings and ceremonies we've had the honour of bringing to life.
            </p>
          </motion.div>

          {/* Pinterest / Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-romantic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.height}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-foreground/70 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-sans text-[10px] font-medium tracking-[0.2em] text-primary-foreground/70 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-display text-lg font-semibold text-primary-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
