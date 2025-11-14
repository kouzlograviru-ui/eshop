import heroImage from 'figma:asset/b4f54072d9b06e5a818969fc0e16549c72294e3d.png';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-[#FFEED6]/60 border border-[#EDB68A]/30 rounded-full px-6 py-3">
              <Sparkles size={18} className="text-[#EDB68A]" />
              <span className="text-[#A46114] font-medium">Ručně vyráběné dřevěné výrobky</span>
            </div>

            <h1
              className="text-[#A46114]"
              style={{
                fontSize: '4rem',
                lineHeight: '1.1',
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}
            >
              Jedinečné výrobky ze dřeva pro váš domov
            </h1>

            <p
              className="text-[#A46114]/70"
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6'
              }}
            >
              Objevte kouzlo ručně gravírovaných dřevěných dekorací a doplňků. Každý kus je originál vytvořený s láskou k detailu.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-3 bg-[#A46114] text-[#FFEED6] px-8 py-4 rounded-full hover:bg-[#8B5010] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                <ShoppingBag size={22} />
                <span className="font-medium">Prohlédnout produkty</span>
              </button>

              <button className="inline-flex items-center gap-2 backdrop-blur-md bg-[#FFEED6]/60 border border-[#EDB68A]/30 text-[#A46114] px-8 py-4 rounded-full hover:bg-[#EDB68A]/40 transition-all duration-300">
                <span className="font-medium">O nás</span>
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-[#A46114] font-bold" style={{ fontSize: '2rem' }}>500+</div>
                <div className="text-[#A46114]/60">Spokojených zákazníků</div>
              </div>
              <div className="w-px h-12 bg-[#EDB68A]/30"></div>
              <div>
                <div className="text-[#A46114] font-bold" style={{ fontSize: '2rem' }}>100%</div>
                <div className="text-[#A46114]/60">Ruční práce</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Krásné dřevěné dekorace"
                className="w-full h-full object-cover"
                style={{ minHeight: '600px' }}
              />

              <div
                className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-[#FFEED6]/80 border border-[#EDB68A]/20 rounded-2xl p-6"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#EDB68A] rounded-full flex items-center justify-center">
                    <span className="text-[#A46114] font-bold text-xl">-20%</span>
                  </div>
                  <div>
                    <div className="text-[#A46114] font-semibold text-lg">Speciální nabídka</div>
                    <div className="text-[#A46114]/70">Sleva na první nákup</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#EDB68A]/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#A46114]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
