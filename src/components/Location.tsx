import { MapPin, Phone, Mail } from 'lucide-react';

export function Location() {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="rounded-3xl backdrop-blur-md bg-[#FFEED6]/50 border border-[#EDB68A]/20 p-12 shadow-xl"
          style={{ 
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Info */}
            <div className="space-y-6">
              <h2 
                className="text-[#A46114]"
                style={{
                  fontSize: '2.5rem',
                  lineHeight: '1.2',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}
              >
                Kde nás najdete
              </h2>
              <p className="text-[#A46114]/70">
                Navštivte nás v našem showroomu nebo nás kontaktujte pro 
                více informací o našich produktech a možnostech zakázkové výroby.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDB68A]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#A46114]" />
                  </div>
                  <div>
                    <h4 className="text-[#A46114] mb-1">Adresa</h4>
                    <p className="text-[#A46114]/70">
                      Praha 1, Staré Město<br />
                      Dlouhá 123, 110 00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDB68A]/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#A46114]" />
                  </div>
                  <div>
                    <h4 className="text-[#A46114] mb-1">Telefon</h4>
                    <p className="text-[#A46114]/70">+420 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDB68A]/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#A46114]" />
                  </div>
                  <div>
                    <h4 className="text-[#A46114] mb-1">Email</h4>
                    <p className="text-[#A46114]/70">info@kouzlograviru.cz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-[400px] bg-[#EDB68A]/10 flex items-center justify-center border border-[#EDB68A]/20">
              <div className="text-center text-[#A46114]/50 space-y-2">
                <MapPin size={48} className="mx-auto" />
                <p>Mapa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
