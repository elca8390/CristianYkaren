import { motion } from "framer-motion";
import { MoonStar, Sparkles, GlassWater, HeartHandshake } from "lucide-react";

const CelebrationNotesSection = () => {
  const notes = [
    {
      icon: MoonStar,
      title: "Noche tranquila",
      description:
        "Hemos imaginado esta velada como un momento sereno para adultos, para que puedas brindar y disfrutar sin prisas.",
    },
    {
      icon: HeartHandshake,
      title: "Solo adultos",
      description:
        "Para mantener un ambiente íntimo, esta celebración será únicamente para adultos. Gracias por tu comprensión.",
    },
    {
      icon: Sparkles,
      title: "Ambiente íntimo",
      description:
        "Queremos que disfrutes de un espacio acogedor y sin distracciones, pensado para celebrar entre amigos y familia.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-light text-sm font-body text-foreground mb-6">
            <GlassWater className="w-4 h-4" />
            Detalles para que disfrutes
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Notas para la celebración
          </h2>
          <p className="font-heading text-lg text-muted-foreground italic">
            Queremos que vivas una noche relajada y especial, cuidamos cada detalle para ti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {notes.map((note, index) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/60 hover:shadow-romantic transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-romantic mb-5">
                <note.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {note.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {note.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl mx-auto mt-10 text-center"
        >
          <p className="font-body text-sm text-muted-foreground">
            Nuestro deseo es que puedas desconectarte y disfrutar al máximo; si necesitas ayuda con cualquier detalle previo,
            estamos a un mensaje de distancia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CelebrationNotesSection;
