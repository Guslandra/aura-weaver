import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import promoImage1 from "@/assets/promo/yin-yang-bracelets.jpeg";
import promoImage2 from "@/assets/promo/couple-bracelets.jpeg";

const ValentinesPromo = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream to-sand/30 relative overflow-hidden">
      {/* Decorative hearts */}
      <div className="absolute top-10 left-10 text-rose-400/20">
        <Heart className="w-16 h-16 fill-current" />
      </div>
      <div className="absolute bottom-10 right-10 text-rose-400/20">
        <Heart className="w-12 h-12 fill-current" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-rose-400/10">
        <Heart className="w-8 h-8 fill-current" />
      </div>

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-rose-500 mb-4 font-body font-medium">
            <Heart className="w-4 h-4 fill-current" />
            Edición Especial
            <Heart className="w-4 h-4 fill-current" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Día de los Enamorados
          </h2>
          <p className="text-lg text-muted-foreground font-body font-light max-w-2xl mx-auto">
            Celebrá el amor con nuestras pulseras Yin Yang para parejas. Un símbolo de conexión y complemento perfecto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-white p-3 rounded-lg shadow-lg rotate-[-2deg] transition-transform duration-300 group-hover:rotate-0">
              <img
                src={promoImage1}
                alt="Pulseras Yin Yang para parejas"
                className="w-full h-80 object-cover rounded"
                loading="lazy"
              />
              <div className="absolute -top-3 -right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-body font-medium shadow-md">
                Edición limitada
              </div>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative bg-white p-3 rounded-lg shadow-lg rotate-[2deg] transition-transform duration-300 group-hover:rotate-0">
              <img
                src={promoImage2}
                alt="Pulseras de pareja en uso"
                className="w-full h-80 object-cover rounded"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -left-3 bg-charcoal text-cream px-4 py-2 rounded-full font-display text-xl shadow-md">
                $3.000
              </div>
            </div>
          </motion.div>
        </div>

        {/* Promo details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-charcoal/10 px-4 py-2 rounded-full text-sm font-body">
              <span className="font-medium">Incluye:</span> 2 pulseras
            </span>
            <span className="bg-charcoal/10 px-4 py-2 rounded-full text-sm font-body">
              <span className="font-medium">Colores:</span> Negro, Rojo, Blanco
            </span>
            <span className="bg-charcoal/10 px-4 py-2 rounded-full text-sm font-body">
              <span className="font-medium">Envío:</span> A todo el país
            </span>
          </div>

          {/* Color options */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-charcoal border-2 border-charcoal/20 shadow-md" title="Negro" />
            <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-rose-300 shadow-md" title="Rojo" />
            <div className="w-8 h-8 rounded-full bg-white border-2 border-charcoal/20 shadow-md" title="Blanco" />
          </div>

          <Button
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-6 text-base font-body tracking-wide transition-all duration-300 hover:shadow-lg"
            asChild
          >
            <a
              href="https://wa.me/5492645666318?text=Hola!%20Me%20interesa%20las%20pulseras%20de%20pareja%20Yin%20Yang%20para%20San%20Valent%C3%ADn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Reservá el tuyo
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4 font-body">
            ¡Hacé tu pedido antes del 10 de febrero!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValentinesPromo;
