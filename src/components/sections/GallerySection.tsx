import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";

const topRow = [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6];
const bottomRow = [wedding6, wedding5, wedding4, wedding3, wedding2, wedding1];

const CarouselRow = ({ images, direction }: { images: string[]; direction: "left" | "right" }) => {
  // Double images for seamless loop
  const doubled = [...images, ...images];
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 ${animClass}`} style={{ width: "max-content" }}>
        {doubled.map((img, i) => (
          <div key={i} className="flex-shrink-0 overflow-hidden rounded-lg w-64 h-44 sm:w-80 sm:h-56">
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory overflow-hidden">
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
      </div>

      <div className="mt-16 space-y-4">
        <CarouselRow images={topRow} direction="left" />
        <CarouselRow images={bottomRow} direction="right" />
      </div>
    </section>
  );
};

export default GallerySection;
