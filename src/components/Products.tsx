import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Dřevěná dekorace',
    description: 'Ručně vyrobená dekorace s jemnou gravirou',
    price: '890 Kč',
    image: 'https://images.unsplash.com/photo-1749101950816-86d8cd7657b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNvcmF0aW9uJTIwZ2lmdHxlbnwxfHx8fDE3NjI2OTc0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Gravírovaný panel',
    description: 'Luxusní gravírovaný panel pro moderní interiéry',
    price: '1 290 Kč',
    image: 'https://images.unsplash.com/photo-1603789766884-aef036cd3b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdyYXZlZCUyMHdvb2QlMjBwcm9kdWN0fGVufDF8fHx8MTc2MjY5NzQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Dřevěný doplněk',
    description: 'Elegantní doplněk pro každý domov',
    price: '690 Kč',
    image: 'https://images.unsplash.com/photo-1687180497323-0750d6fe0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzYyNjk3NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export function Products() {
  return (
    <section id="produkty" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-[#A46114] mb-4"
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.2',
              fontWeight: '600',
              letterSpacing: '-0.01em'
            }}
          >
            Naše produkty
          </h2>
          <p className="text-[#A46114]/70 max-w-2xl mx-auto">
            Prozkoumejte naši sbírku jedinečných dřevěných výrobků, 
            každý vytvořený s péčí a precizností.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div 
                className="rounded-2xl overflow-hidden backdrop-blur-md bg-[#FFEED6]/40 border border-[#EDB68A]/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ 
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-[#A46114]">{product.name}</h3>
                  <p className="text-[#A46114]/60">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#A46114]">{product.price}</span>
                    <button className="text-[#EDB68A] hover:text-[#A46114] transition-colors">
                      Zjistit více →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
