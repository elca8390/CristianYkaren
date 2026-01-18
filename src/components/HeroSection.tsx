import { motion } from "framer-motion";
import coupleMain from "@/assets/couple-main.png";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 rounded-full bg-pink opacity-40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 rounded-full bg-sky opacity-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-5 h-5 rounded-full bg-pink-light opacity-50"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-60 left-1/4 w-2 h-2 rounded-full bg-sky opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-card/80 border border-pink/50 shadow-romantic font-body text-sm md:text-base uppercase text-foreground mb-6"
          >
            <Heart className="w-4 h-4 text-pink fill-pink" />
            <span className="tracking-[0.35em]">Nos casamos</span>
          </motion.p>

          {/* Main Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto mb-8 w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-romantic opacity-50 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-pink-light shadow-romantic">
              <img
                src={coupleMain}
                alt="Cristian David y Karen Yadira"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card rounded-full p-2 shadow-soft"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-6 h-6 text-pink fill-pink" />
            </motion.div>
          </motion.div>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-2"
          >
            Cristian David
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-4 my-4"
          >
            <span className="w-16 h-px bg-pink" />
            <span className="font-heading text-2xl italic text-muted-foreground">&</span>
            <span className="w-16 h-px bg-sky" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8"
          >
            Karen Yadira
          </motion.h1>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card shadow-soft border border-border"
          >
            <span className="font-heading text-xl md:text-2xl font-medium text-foreground">
              28 de Febrero, 2026
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs tracking-widest uppercase">Desliza</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
