import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoAura from "@/assets/logo-aura.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold-soft/20 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-sand/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo/Brand */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm uppercase tracking-widest text-earth-light mb-6 font-body font-medium"
          >
            Accesorios artesanales
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <img 
              src={logoAura} 
              alt="Aura" 
              width={320}
              height={320}
              fetchPriority="high"
              className="w-48 md:w-64 lg:w-80 h-auto mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Hechos a mano con hilo encerado.
            <br />
            <span className="text-earth">Cada pieza es única, como vos.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-charcoal hover:bg-earth text-cream px-10 py-6 text-base font-body tracking-wide transition-all duration-300 hover:shadow-hover"
              asChild
            >
              <a href="#coleccion">Ver colección</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-earth-light/30 text-earth hover:bg-sand/50 px-10 py-6 text-base font-body tracking-wide transition-all duration-300"
              asChild
            >
              <a href="#nosotros">Conocer más</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-earth-light/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-earth-light/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
