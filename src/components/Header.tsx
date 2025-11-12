import { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Domů', href: '#' },
    { label: 'Produkty', href: '#produkty' },
    { label: 'Kouzlo na míru', href: '#custom' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="backdrop-blur-md bg-[#FFEED6]/70 border-b border-[#EDB68A]/20"
        style={{ 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#EDB68A] rounded-lg flex items-center justify-center">
                <span className="text-[#A46114]">K</span>
              </div>
              <span className="text-[#A46114]">Kouzlo Gravíru</span>
            </div>

            {/* Icons and Hamburger */}
            <div className="flex items-center gap-4">
              <button 
                className="text-[#A46114] hover:text-[#EDB68A] transition-colors p-2"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button 
                className="text-[#A46114] hover:text-[#EDB68A] transition-colors p-2"
                aria-label="User account"
              >
                <User size={20} />
              </button>
              <button 
                className="text-[#A46114] hover:text-[#EDB68A] transition-colors p-2"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#A46114] hover:text-[#EDB68A] transition-colors p-2 ml-2"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0"
            style={{ 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <div className="backdrop-blur-md bg-[#FFEED6]/90 border-b border-[#EDB68A]/20 shadow-lg">
              <nav className="max-w-7xl mx-auto px-6 py-6">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="block text-[#A46114] hover:text-[#EDB68A] transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
