import { useEffect, useRef, useState } from "react";
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
