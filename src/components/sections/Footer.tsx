import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80 py-16">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="font-display text-4xl text-cream mb-2">Aura</h3>
            <p className="text-sm font-body tracking-widest uppercase text-cream/50">
              Accesorios artesanales
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-10" />

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-6 mb-10"
          >
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-cream/70 group-hover:text-gold transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-cream/70 group-hover:text-gold transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-cream/70 group-hover:text-gold transition-colors" />
            </a>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-body"
          >
            <a href="#" className="hover:text-gold transition-colors">
              Colección
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Sobre nosotros
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Contacto
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Personalizados
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xs text-cream/40 font-body"
          >
            © 2025 Aura. Todos los derechos reservados.
            <br />
            Hecho con amor en Argentina 🇦🇷
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
