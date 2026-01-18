import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-gradient-romantic">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Cristian & Karen
          </h2>
          <p className="font-heading text-xl text-muted-foreground mb-6 italic">
            28 de Febrero, 2026
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="font-body text-sm">Hecho con</span>
            <Heart className="w-4 h-4 text-pink fill-pink animate-pulse-soft" />
            <span className="font-body text-sm">para nuestros invitados</span>
          </div>

          <div className="mt-8">
            <p className="font-body text-xs text-muted-foreground">
              #CristianYKaren2026
            </p>
            <p className="font-body text-xs text-muted-foreground mt-2">
              © <a href="https://ecoingenieria.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">ecoingenieria.co</a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
