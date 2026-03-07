import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";

const images = [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory">
      <div className="container mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Memories
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Wedding Gallery
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-16 columns-2 gap-4 sm:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
