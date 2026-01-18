import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Church } from "lucide-react";

const EventDetailsSection = () => {
  const details = [
    {
      icon: Calendar,
      title: "Fecha",
      info: "28 de Febrero, 2026",
      subinfo: "Sábado",
    },
    {
      icon: Clock,
      title: "Hora",
      info: "04:00 PM",
      subinfo: "Por favor, llegar puntual",
    },
    {
      icon: MapPin,
      title: "Lugar",
      info: "Finca Villa Zamay",
      subinfo: "Caguán, Neiva, Huila",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Detalles del Evento
          </h2>
          <div className="divider-ornate">
            <Church className="w-6 h-6 text-pink" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-romantic transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-romantic mb-6">
                <detail.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {detail.title}
              </h3>
              <p className="font-heading text-2xl text-foreground mb-1">
                {detail.info}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {detail.subinfo}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://maps.google.com/?q=Caguan+Neiva+Huila+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-5 h-5" />
            Ver ubicación en Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
