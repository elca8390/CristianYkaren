import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

const DressCodeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-romantic mb-6">
            <Shirt className="w-7 h-7 text-foreground" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Código de Vestimenta
          </h2>
          
          <p className="font-heading text-lg text-muted-foreground mb-10 italic">
            Te invitamos a vestir en nuestra paleta de colores
          </p>

          {/* Color palette display */}
          <div className="flex justify-center gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-sky shadow-soft mb-4 mx-auto border-4 border-card" />
              <span className="font-heading text-lg text-foreground">Azul Celeste</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-pink shadow-soft mb-4 mx-auto border-4 border-card" />
              <span className="font-heading text-lg text-foreground">Rosa Claro</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-muted-foreground leading-relaxed"
          >
            Nos encantaría que lucieras alguno de estos hermosos colores para celebrar 
            juntos este día tan especial. ¡Gracias por ser parte de nuestra historia!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCodeSection;
