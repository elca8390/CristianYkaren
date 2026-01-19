import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Heart, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    attendance: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.attendance || Number(formData.guests) < 1) {
      toast({
        title: "Por favor completa los campos requeridos",
        description: "Nombre, confirmacion y numero de asistentes son obligatorios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const attendanceText =
      formData.attendance === "yes" ? "Asistire a la boda" : "No podre asistir a la boda";
    const message = [
      "Confirmacion de asistencia",
      `Nombre: ${formData.name}`,
      attendanceText,
      `Numero de asistentes: ${formData.guests}`,
      `Mensaje: ${formData.message || "Sin mensaje adicional"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/573107989169?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: "Gracias por confirmar!",
      description:
        formData.attendance === "yes"
          ? "Nos vemos el 28 de Febrero :)"
          : "Lamentamos que no puedas asistir, te tendremos presente.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-3xl p-12 shadow-romantic"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-romantic flex items-center justify-center"
            >
              <Check className="w-10 h-10 text-foreground" />
            </motion.div>
            <h3 className="font-display text-4xl text-foreground mb-4">Gracias!</h3>
            <p className="font-heading text-lg text-muted-foreground">
              Hemos recibido tu confirmacion.
              {formData.attendance === "yes" && (
                <span className="block mt-2">Nos emociona celebrar contigo!</span>
              )}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Confirma tu Asistencia
          </h2>
          <p className="font-heading text-lg text-muted-foreground italic">
            Tu presencia hara este dia aun mas especial
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-romantic"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* Attendance */}
          <div className="mb-6">
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Podras asistir? *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label
                className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.attendance === "yes"
                    ? "border-pink bg-pink-light"
                    : "border-border hover:border-pink-light"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === "yes"}
                  onChange={handleChange}
                  className="sr-only"
                />
                <Heart
                  className={`w-5 h-5 ${
                    formData.attendance === "yes" ? "text-pink fill-pink" : "text-muted-foreground"
                  }`}
                />
                <span className="font-body font-medium">Si, asistire</span>
              </label>
              <label
                className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.attendance === "no"
                    ? "border-sky bg-sky-light"
                    : "border-border hover:border-sky-light"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === "no"}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="font-body font-medium">No podre asistir</span>
              </label>
            </div>
          </div>

          {/* Number of guests */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Numero de asistentes (incluyendote) *
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="number"
                name="guests"
                min={1}
                max={20}
                step={1}
                inputMode="numeric"
                value={formData.guests}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Indica el numero de asistentes"
                required
              />
            </div>
          </motion.div>

          {/* Message */}
          <div className="mb-8">
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Mensaje para los novios (opcional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Escribe un mensaje especial..."
            />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold shadow-romantic hover:shadow-glow transition-all duration-300 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="animate-pulse">Enviando...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Confirmar Asistencia
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
