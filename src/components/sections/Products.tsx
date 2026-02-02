import { motion } from "framer-motion";

// Import product images
import pulseraRoseGold from "@/assets/products/pulsera-rose-gold.jpeg";
import pulseraAzul from "@/assets/products/pulsera-azul.webp";
import pulseraOpalina from "@/assets/products/pulsera-opalina.webp";
import pulseraRoja from "@/assets/products/pulsera-roja.webp";
import pulseraLila from "@/assets/products/pulsera-lila.webp";
import pulseraVerde from "@/assets/products/pulsera-verde.webp";
import tobilleraCaracolRojo from "@/assets/products/tobillera-caracol-rojo.webp";
import tobilleraCaracolMadera from "@/assets/products/tobillera-caracol-madera.webp";
import tobilleraCaracolBlanco from "@/assets/products/tobillera-caracol-blanco.webp";
import tobilleraCaracolVerde from "@/assets/products/tobillera-caracol-verde.webp";
import pulseraTurquesa from "@/assets/products/pulsera-turquesa.webp";
import pulseraConcha from "@/assets/products/pulsera-concha.webp";
import pulseraLlave from "@/assets/products/pulsera-llave.webp";
import pulseraCobre from "@/assets/products/pulsera-cobre.webp";
import tobilleraTurquesa from "@/assets/products/tobillera-turquesa.webp";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
  category: "pulsera" | "tobillera";
}

const products: Product[] = [
  {
    id: 1,
    name: "Pulsera Turquesa",
    description: "Hilo encerado negro con cuentas turquesa y madera",
    price: "$1.800",
    image: pulseraTurquesa,
    available: true,
    category: "pulsera",
  },
  {
    id: 2,
    name: "Pulsera Concha Marina",
    description: "Hilo encerado con concha natural y cuentas blancas",
    price: "$1.500",
    image: pulseraConcha,
    available: true,
    category: "pulsera",
  },
  {
    id: 3,
    name: "Pulsera Llave",
    description: "Hilo natural con dije de llave vintage",
    price: "$1.800",
    image: pulseraLlave,
    available: true,
    category: "pulsera",
  },
  {
    id: 4,
    name: "Pulsera Cobre Cristal",
    description: "Hilo encerado cobre con cristales facetados",
    price: "$2.000",
    image: pulseraCobre,
    available: true,
    category: "pulsera",
  },
  {
    id: 5,
    name: "Tobillera Cauri Turquesa",
    description: "Con concha cauri y cuentas turquesa",
    price: "$2.000",
    image: tobilleraTurquesa,
    available: true,
    category: "tobillera",
  },
  {
    id: 6,
    name: "Pulsera Rose Gold",
    description: "Hilo negro con detalles en oro rosa",
    price: "$2.500",
    image: pulseraRoseGold,
    available: true,
    category: "pulsera",
  },
  {
    id: 7,
    name: "Pulsera Cristal Azul",
    description: "Con cuentas de cristal azul intenso",
    price: "$2.500",
    image: pulseraAzul,
    available: true,
    category: "pulsera",
  },
  {
    id: 8,
    name: "Tobillera Caracol Rojo",
    description: "Con caracol natural y cuentas rojas",
    price: "$2.000",
    image: tobilleraCaracolRojo,
    available: true,
    category: "tobillera",
  },
  {
    id: 9,
    name: "Tobillera Caracol Verde",
    description: "Con caracol y cuentas de madera verde",
    price: "$2.000",
    image: tobilleraCaracolVerde,
    available: true,
    category: "tobillera",
  },
  {
    id: 10,
    name: "Tobillera Mar",
    description: "Con caracol y cuentas de madera",
    price: "$1.800",
    image: tobilleraCaracolMadera,
    available: true,
    category: "tobillera",
  },
  {
    id: 11,
    name: "Pulsera Opalina",
    description: "Con piedras de opalina y detalles plateados",
    price: "$2.500",
    image: pulseraOpalina,
    available: false,
    category: "pulsera",
  },
  {
    id: 12,
    name: "Pulsera Coral",
    description: "Hilo natural con cuenta coral",
    price: "$2.500",
    image: pulseraRoja,
    available: false,
    category: "pulsera",
  },
  {
    id: 13,
    name: "Pulsera Lila",
    description: "Con cristal lila y ojo turco",
    price: "$2.500",
    image: pulseraLila,
    available: false,
    category: "pulsera",
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-lg bg-card shadow-card transition-all duration-500 hover:shadow-hover">
        {/* Image container */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            width={298}
            height={298}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
          
          {/* Availability badge */}
          {!product.available && (
            <div className="absolute top-4 right-4 bg-earth/90 text-cream text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
              Agotado
            </div>
          )}
          
          {product.available && (
            <div className="absolute top-4 right-4 bg-gold/90 text-charcoal text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body font-medium">
              Disponible
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs uppercase tracking-widest text-gold font-body mb-2 block">
            {product.category}
          </span>
          <h3 className="font-display text-xl text-charcoal mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground font-body mb-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-earth">
              {product.price}
            </span>
            {product.available && (
              <a
                href={`https://wa.me/5492645666318?text=${encodeURIComponent(`Hola! Me interesa comprar: ${product.name} (${product.price})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body font-medium text-charcoal hover:text-gold transition-colors uppercase tracking-wider"
              >
                Comprar →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="coleccion" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body font-medium">
            Catálogo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Nuestra Colección
          </h2>
          <p className="text-lg text-muted-foreground font-body font-light max-w-2xl mx-auto">
            Cada pieza es creada a mano con dedicación, materiales de calidad y un diseño único.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
