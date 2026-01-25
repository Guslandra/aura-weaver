import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold mb-6 font-body font-medium"
          >
            Nuestra esencia
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
            Creamos piezas que cuentan historias
          </h2>

          <div className="w-16 h-[1px] bg-sand-dark mx-auto mb-10" />

          <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed mb-8">
            En <span className="text-earth font-medium">Aura</span>, cada accesorio nace de la dedicación y el amor por lo artesanal. 
            Trabajamos con hilo encerado de alta calidad, resistente al agua y al uso diario, 
            para crear pulseras, tobilleras y collares que te acompañan en cada momento.
          </p>

          <p className="text-lg text-earth-light font-body italic">
            "No es solo un accesorio. Es una extensión de tu energía."
          </p>
        </motion.div>

        {/* Decorative line elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center gap-3 mt-12"
        >
          <div className="w-12 h-[1px] bg-gold-soft" />
          <div className="w-3 h-3 rounded-full border border-gold-soft" />
          <div className="w-12 h-[1px] bg-gold-soft" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
