import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";
import wedding8 from "@/assets/wedding-8.jpg";
import wedding9 from "@/assets/wedding-9.jpg";
import wedding10 from "@/assets/wedding-10.jpg";

const photos = [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8, wedding9, wedding10];

const CONFETTI_COLORS = [
  "hsl(345, 40%, 65%)",
  "hsl(38, 60%, 70%)",
  "hsl(40, 70%, 50%)",
  "hsl(10, 40%, 90%)",
  "hsl(345, 50%, 85%)",
  "hsl(200, 40%, 70%)",
  "hsl(160, 30%, 70%)",
  "hsl(0, 0%, 95%)",
];

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  size: number;
  delay: number;
}

const PolaroidIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);
  const [phase, setPhase] = useState<"stacking" | "burst" | "reveal" | "done">("stacking");
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const generateConfetti = useCallback(() => {
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 80; i++) {
      pieces.push({
        id: i,
        x: (Math.random() - 0.5) * window.innerWidth,
        y: (Math.random() - 0.5) * window.innerHeight,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 720 - 360,
        size: Math.random() * 12 + 4,
        delay: Math.random() * 0.3,
      });
    }
    return pieces;
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < photos.length) {
        setVisiblePhotos((prev) => [...prev, i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("burst");
          setConfetti(generateConfetti());
          setTimeout(() => {
            setPhase("reveal");
            setTimeout(() => {
              setPhase("done");
              onComplete();
            }, 4000);
          }, 1000);
        }, 800);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [generateConfetti, onComplete]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Stacking Polaroids */}
      <AnimatePresence>
        {phase === "stacking" &&
          visiblePhotos.map((index) => {
            const randomRotate = (Math.random() - 0.5) * 30;
            const randomX = (Math.random() - 0.5) * 40;
            const randomY = (Math.random() - 0.5) * 40;
            return (
              <motion.div
                key={index}
                className="polaroid absolute"
                initial={{ scale: 0, rotate: 0, y: -200, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: randomRotate,
                  x: randomX,
                  y: randomY,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{ zIndex: index }}
              >
                <img
                  src={photos[index]}
                  alt={`Wedding moment ${index + 1}`}
                  className="h-48 w-36 object-cover sm:h-56 sm:w-44"
                />
              </motion.div>
            );
          })}
      </AnimatePresence>

      {/* Burst */}
      {phase === "burst" &&
        visiblePhotos.map((index) => (
          <motion.div
            key={`burst-${index}`}
            className="polaroid absolute"
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: 0,
              opacity: 0,
              x: (Math.random() - 0.5) * 800,
              y: (Math.random() - 0.5) * 800,
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={photos[index]}
              alt=""
              className="h-48 w-36 object-cover sm:h-56 sm:w-44"
            />
          </motion.div>
        ))}

      {/* Confetti */}
      {(phase === "burst" || phase === "reveal") &&
        confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute rounded-sm"
            style={{
              backgroundColor: piece.color,
              width: piece.size,
              height: piece.size * 0.6,
            }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0 }}
            animate={{
              x: piece.x,
              y: [piece.y, piece.y + 300],
              rotate: piece.rotation,
              opacity: [1, 1, 0],
              scale: [0, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: piece.delay,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Brand Reveal - single line */}
      <AnimatePresence>
        {phase === "reveal" && (
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="shimmer-text text-display text-4xl font-bold tracking-widest whitespace-nowrap sm:text-6xl lg:text-7xl"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              THE CONFETTI DIARIES
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PolaroidIntro;
