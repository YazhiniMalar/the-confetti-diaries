import { motion, useScroll, useTransform } from "framer-motion";
import floralTop from "@/assets/floral-top-decor.png";
import sideLeft from "@/assets/side-decor-left.png";
import sideRight from "@/assets/side-decor-right.png";

const DecorOverlay = () => {
  const { scrollY } = useScroll();

  // Floral top: fades out and moves up as you scroll
  const topOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const topY = useTransform(scrollY, [0, 400], [0, -80]);

  // Side decor: slides off to sides and fades as you scroll
  const leftX = useTransform(scrollY, [0, 600], [0, -300]);
  const rightX = useTransform(scrollY, [0, 600], [0, 300]);
  const sideOpacity = useTransform(scrollY, [0, 500], [0.85, 0]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* Floral top decor */}
      <motion.img
        src={floralTop}
        alt=""
        className="absolute top-0 left-0 w-full object-cover"
        style={{ opacity: topOpacity, y: topY }}
      />

      {/* Left side decor */}
      <motion.img
        src={sideLeft}
        alt=""
        className="absolute top-1/4 left-0 h-[50vh] w-auto object-contain"
        style={{ opacity: sideOpacity, x: leftX }}
      />

      {/* Right side decor */}
      <motion.img
        src={sideRight}
        alt=""
        className="absolute top-1/4 right-0 h-[50vh] w-auto object-contain"
        style={{ opacity: sideOpacity, x: rightX }}
      />
    </div>
  );
};

export default DecorOverlay;
