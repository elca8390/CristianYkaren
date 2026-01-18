import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Pause, Play } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import DressCodeSection from "@/components/DressCodeSection";
import CelebrationNotesSection from "@/components/CelebrationNotesSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";
import backgroundTrack from "@/assets/Cancion_de_Fondo.mp3";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const tryAutoplay = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay bloqueado, el usuario podrá iniciar con el botón.
      }
    };

    void tryAutoplay();

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5200);
    return () => clearTimeout(timer);
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Si falla el play, no cambiamos estado.
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="overflow-x-hidden">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-80 h-56 sm:w-96 sm:h-64 flex items-center justify-center perspective">
              {/* Envelope back - kraft pastel */}
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-[#f7eadb] via-[#f1e0cb] to-[#e8d3b8] border border-[#d7bea0] shadow-[0_20px_45px_rgba(0,0,0,0.18)]" />

              {/* Letter content */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: -6, opacity: 1 }}
                transition={{ delay: 1, duration: 0.9 }}
                className="relative z-10 w-11/12 h-40 sm:h-44 bg-[#fdfaf3] rounded-[14px] shadow-lg border border-[#d8c7a9] flex flex-col items-center justify-center px-5 text-center"
              >
                <p className="font-heading text-sm text-[#7a664b] mb-2 tracking-[0.2em] uppercase">
                  Invitación
                </p>
                <p className="font-display text-2xl sm:text-3xl text-[#3c2f1f]">Cristian & Karen</p>
                <p className="font-body text-xs text-[#5a4a36] mt-3 leading-relaxed px-2">
                  Dentro de esta invitación guardamos el amor y la alegría que queremos compartir contigo.
                </p>
              </motion.div>

              {/* Top flap - antique pastel */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -135 }}
                transition={{ delay: 0.55, duration: 1, ease: "easeInOut" }}
                style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#f6e6d2] via-[#e9d5b6] to-[#d9bf98] border border-[#c6b189] rounded-t-[18px] overflow-hidden"
              >
                <div className="absolute inset-x-8 top-3 h-px bg-[#c6b189]/60" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, #f9b8c4 0 10px, #cde6ff 10px 20px, #fdf5ec 20px 30px)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 0)",
                    opacity: 0.6,
                  }}
                />
              </motion.div>

              {/* Wax seal */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 14 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#b04d47] shadow-md border border-[#8e3b36] flex items-center justify-center"
              >
                <span className="font-display text-xs text-[#fdf5e7] tracking-[0.1em]">C&K</span>
              </motion.div>

              {/* Stripe border along body edges */}
              <div className="absolute inset-2 rounded-[14px] pointer-events-none" style={{ background: "linear-gradient(#fdfaf3, #fdfaf3)" }}>
                <div
                  className="absolute inset-0 rounded-[14px]"
                  style={{
                    padding: "6px",
                    background:
                      "repeating-linear-gradient(135deg, #f9b8c4 0 10px, #cde6ff 10px 20px, #fdf5ec 20px 30px)",
                    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />
              </div>

              {/* Side fold shadows */}
              <div className="absolute inset-0 rounded-[18px] pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/6 to-transparent rounded-l-[18px]" />
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/6 to-transparent rounded-r-[18px]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={backgroundTrack}
        autoPlay
        loop
        playsInline
        className="hidden"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={togglePlayback}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <span className="rounded-full bg-primary-foreground/20 p-1">
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </span>
        <span className="font-heading text-sm flex items-center gap-1">
          <Music2 className="w-4 h-4" />
          {isPlaying ? "Pausar Música" : "Reproducir música"}
        </span>
      </button>
      <HeroSection />
      <CountdownSection />
      <EventDetailsSection />
      <DressCodeSection />
      <CelebrationNotesSection />
      <GallerySection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
};

export default Index;
