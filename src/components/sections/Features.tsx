import { motion } from "framer-motion";
import { Sparkles, Droplets, Palette, Fingerprint } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Hecho a mano",
    description: "Cada pieza es creada artesanalmente con amor y dedicación",
  },
  {
    icon: Droplets,
    title: "Resistente al agua",
    description: "Hilo encerado de alta calidad que podés usar siempre",
  },
  {
    icon: Sparkles,
    title: "Materiales premium",
    description: "Piedras, cristales y cuentas cuidadosamente seleccionadas",
  },
  {
    icon: Palette,
    title: "Diseños únicos",
    description: "Combinaciones exclusivas que no vas a encontrar en otro lado",
  },
];
const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body font-medium">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal">
            ¿Por qué Aura?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sand/50 flex items-center justify-center transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-earth transition-colors duration-300 group-hover:text-gold" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
