import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-soft/10 blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-gold mb-6 font-body font-medium">
            Encontrá tu pieza
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
            Elegí tu Aura
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-body font-light mb-10 max-w-xl mx-auto">
            Descubrí el accesorio perfecto para vos o regalá algo único a alguien especial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-charcoal hover:bg-earth text-cream px-12 py-6 text-base font-body tracking-wide transition-all duration-300 hover:shadow-hover"
            >
              Comprar ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-earth-light/30 text-earth hover:bg-sand/50 px-12 py-6 text-base font-body tracking-wide transition-all duration-300"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
