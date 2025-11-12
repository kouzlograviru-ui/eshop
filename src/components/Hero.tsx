import heroImage from 'figma:asset/b4f54072d9b06e5a818969fc0e16549c72294e3d.png';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center h-[600px]">
          {/* Left side - Photo (60% width) */}
          <div className="absolute left-0 top-0 bottom-0 w-[60%] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Cozy living space"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Text Banner (40% width, overlapping by ~10-15%) */}
          <div 
            className="relative ml-auto w-[45%] z-10"
            style={{
              marginLeft: '52%'
            }}
          >
            <div 
              className="backdrop-blur-md bg-[#FFEED6]/40 border border-[#EDB68A]/20 rounded-2xl p-12 space-y-8"
              style={{ 
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '-20px 20px 60px rgba(164, 97, 20, 0.15), -10px 10px 30px rgba(164, 97, 20, 0.1)'
              }}
            >
              <h1 
                className="text-[#A46114]"
                style={{
                  fontSize: '3.5rem',
                  lineHeight: '1.1',
                  fontWeight: '600',
                  letterSpacing: '-0.02em'
                }}
              >
                Objevte kouzlo dřeva
              </h1>

              <button className="group inline-flex items-center gap-2 bg-[#EDB68A] text-[#A46114] px-8 py-4 rounded-full hover:bg-[#A46114] hover:text-[#FFEED6] transition-all duration-300 shadow-lg hover:shadow-xl">
                Zobrazit více
                <ChevronRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
