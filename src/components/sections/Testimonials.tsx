import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    text: "Me encantó mi pulsera. La calidad es increíble y el diseño es tal cual la foto. ¡Súper recomendado!",
    rating: 5,
  },
  {
    name: "Lucía M.",
    text: "Compré una tobillera para el verano y no me la saco nunca. Resistente al agua de verdad. Hermosa.",
    rating: 5,
  },
  {
    name: "Valentina S.",
    text: "Pedí una personalizada y quedó perfecta. El trato fue súper cálido y atento. Volveré a comprar.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body font-medium">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Lo que dicen de nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                  <span className="font-display text-lg text-earth">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium text-charcoal">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
