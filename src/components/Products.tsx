import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Dřevěná dekorace',
    description: 'Ručně vyrobená dekorace s jemnou gravirou',
    price: '890 Kč',
    oldPrice: '1 120 Kč',
    rating: 4.8,
    reviews: 24,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1749101950816-86d8cd7657b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNvcmF0aW9uJTIwZ2lmdHxlbnwxfHx8fDE3NjI2OTc0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Gravírovaný panel',
    description: 'Luxusní gravírovaný panel pro moderní interiéry',
    price: '1 290 Kč',
    rating: 5.0,
    reviews: 18,
    badge: 'Nový',
    image: 'https://images.unsplash.com/photo-1603789766884-aef036cd3b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdyYXZlZCUyMHdvb2QlMjBwcm9kdWN0fGVufDF8fHx8MTc2MjY5NzQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Dřevěný doplněk',
    description: 'Elegantní doplněk pro každý domov',
    price: '690 Kč',
    oldPrice: '850 Kč',
    rating: 4.9,
    reviews: 31,
    badge: 'Sleva',
    image: 'https://images.unsplash.com/photo-1687180497323-0750d6fe0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzYyNjk3NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Dřevěná miska',
    description: 'Ručně tesaná miska z jednoho kusu dřeva',
    price: '1 450 Kč',
    rating: 4.7,
    reviews: 15,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBib3dsfGVufDF8fHx8MTc2MjY5NzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: 'Nástěnná dekorace',
    description: 'Jedinečná nástěnná dekorace s gravírováním',
    price: '2 190 Kč',
    rating: 5.0,
    reviews: 9,
    badge: 'Limitovaná edice',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB3YWxsJTIwZGVjb3J8ZW58MXx8fHwxNzYyNjk3NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    name: 'Dřevěný podnos',
    description: 'Stylový servírovací podnos do každé kuchyně',
    price: '890 Kč',
    rating: 4.6,
    reviews: 22,
    image: 'https://images.unsplash.com/photo-1565183997392-2f5d554e8e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0cmF5fGVufDF8fHx8MTc2MjY5NzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export function Products() {
  return (
    <section id="produkty" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#A46114] mb-4"
              style={{
                fontSize: '3rem',
                lineHeight: '1.2',
                fontWeight: '700',
                letterSpacing: '-0.01em'
              }}
            >
              Oblíbené produkty
            </h2>
            <p className="text-[#A46114]/70 max-w-2xl mx-auto text-lg">
              Ručně vytvořené dřevěné výrobky s gravírováním. Každý kus je originál.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div
                className="rounded-2xl overflow-hidden backdrop-blur-md bg-[#FFEED6]/50 border border-[#EDB68A]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#A46114] text-[#FFEED6] px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </div>
                  )}

                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md bg-[#FFEED6]/80 border border-[#EDB68A]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#FFEED6]"
                    aria-label="Přidat do oblíbených"
                  >
                    <Heart size={18} className="text-[#A46114]" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-[#A46114] text-[#FFEED6] py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#8B5010] transition-colors">
                      <ShoppingCart size={18} />
                      Přidat do košíku
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-[#EDB68A] fill-[#EDB68A]" />
                      <span className="text-[#A46114] font-medium">{product.rating}</span>
                    </div>
                    <span className="text-[#A46114]/50">({product.reviews} hodnocení)</span>
                  </div>

                  <h3 className="text-[#A46114] font-semibold text-lg">{product.name}</h3>
                  <p className="text-[#A46114]/60 text-sm">{product.description}</p>

                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-[#A46114] font-bold text-xl">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-[#A46114]/40 line-through text-sm">{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 backdrop-blur-md bg-[#FFEED6]/60 border-2 border-[#EDB68A]/40 text-[#A46114] px-8 py-4 rounded-full hover:bg-[#EDB68A]/40 transition-all duration-300 font-medium">
            Zobrazit všechny produkty
          </button>
        </motion.div>
      </div>
    </section>
  );
}
