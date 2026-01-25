import { motion } from "framer-motion";

const EmotionalQuote = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
          />

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream/90 mb-8 leading-relaxed italic">
            "No es un accesorio.
            <br />
            <span className="text-gold">Es una parte de tu historia.</span>"
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalQuote;
