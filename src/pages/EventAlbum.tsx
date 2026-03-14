import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleTrail from "@/components/SparkleTrail";
import { portfolioItems } from "@/data/portfolioData";
import { useEffect } from "react";

const EventAlbum = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = portfolioItems.find((item) => item.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 bg-ivory min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-display text-3xl font-semibold text-foreground">Event not found</h1>
            <Link to="/portfolio" className="text-primary mt-4 inline-block underline">
              Back to Captured Moments
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SparkleTrail />
      <Navbar />
      <main className="pt-24 pb-16 bg-ivory min-h-screen">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-6">
            <Link
              to="/portfolio"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Captured Moments
            </Link>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
              {event.category}
            </p>
            <h1 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              {event.title}
            </h1>
            <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
          </motion.div>

          {/* Album Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {event.album.map((img, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-lg shadow-romantic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={img}
                  alt={`${event.title} - Photo ${i + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventAlbum;
