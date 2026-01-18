import { motion } from "framer-motion";
import coupleMain from "@/assets/couple-main.png";
import coupleRing from "@/assets/couple-ring.jpeg";
import coupleProposal from "@/assets/couple-proposal.jpeg";
import coupleBouquet from "@/assets/couple-bouquet.jpeg";
import { Heart } from "lucide-react";

const GallerySection = () => {
  const images = [
    { src: coupleMain, alt: "Cristian y Karen" },
    { src: coupleRing, alt: "El anillo de compromiso" },
    { src: coupleProposal, alt: "La propuesta" },
    { src: coupleBouquet, alt: "Juntos con el bouquet" },
  ];

  return (
    <section className="py-20 bg-gradient-romantic">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Nuestra Historia
          </h2>
          <div className="divider-ornate">
            <Heart className="w-6 h-6 text-pink fill-pink" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="aspect-square overflow-hidden rounded-2xl shadow-soft group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
