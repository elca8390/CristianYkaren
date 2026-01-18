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
            Te invitamos a vestir en nuestra paleta (incluye blanco y negro), pero si lo prefieres puedes asistir con el color que más te guste.
          </p>

          {/* Color palette display */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex justify-start md:justify-center gap-6 md:gap-8 min-w-max px-2 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-gradient-romantic shadow-romantic mx-auto mb-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-sky border-4 border-card shadow-soft" />
              </div>
              <span className="font-heading text-lg text-foreground">Azul Celeste</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-gradient-romantic shadow-romantic mx-auto mb-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#F0D0D0] border-4 border-card shadow-soft" />
              </div>
              <span className="font-heading text-lg text-foreground">Rosa Pastel</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-gradient-romantic shadow-romantic mx-auto mb-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white border-4 border-card shadow-soft" />
              </div>
              <span className="font-heading text-lg text-foreground">Blanco</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-gradient-romantic shadow-romantic mx-auto mb-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black border-4 border-card shadow-soft" />
              </div>
              <span className="font-heading text-lg text-foreground">Negro</span>
            </motion.div>
            </div>
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
