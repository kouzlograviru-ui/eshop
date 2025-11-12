import { Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="backdrop-blur-md bg-[#FFEED6]/70 border-t border-[#EDB68A]/20 mt-24"
      style={{ 
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#EDB68A] rounded-lg flex items-center justify-center">
                <span className="text-[#A46114]">K</span>
              </div>
              <span className="text-[#A46114]">Kouzlo Gravíru</span>
            </div>
            <p className="text-[#A46114]/70">
              Luxusní dřevěné dekorace a gravírované dárky pro výjimečné okamžiky.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#A46114] mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#A46114]/70 hover:text-[#EDB68A] transition-colors">
                  Domů
                </a>
              </li>
              <li>
                <a href="#produkty" className="text-[#A46114]/70 hover:text-[#EDB68A] transition-colors">
                  Produkty
                </a>
              </li>
              <li>
                <a href="#custom" className="text-[#A46114]/70 hover:text-[#EDB68A] transition-colors">
                  Kouzlo na míru
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-[#A46114]/70 hover:text-[#EDB68A] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-[#A46114] mb-4">Sledujte nás</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#EDB68A]/30 flex items-center justify-center text-[#A46114] hover:bg-[#EDB68A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#EDB68A]/30 flex items-center justify-center text-[#A46114] hover:bg-[#EDB68A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#EDB68A]/30 flex items-center justify-center text-[#A46114] hover:bg-[#EDB68A] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-[#A46114]/70">
              info@kouzlograviru.cz<br />
              +420 123 456 789
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#EDB68A]/20 text-center text-[#A46114]/60">
          <p>© 2025 Kouzlo Gravíru. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
