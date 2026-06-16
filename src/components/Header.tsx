import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b border-gray-200 py-3' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://www.customercaremysore.in/logo.jpg" alt="Logo" className="w-14 h-14 object-contain rounded-full shadow-sm" />
            <div>
              <h1 className="font-display font-bold text-lg leading-none text-brand-blue-900">Customer Care Service Mysore</h1>
              <p className="text-[10px] text-brand-orange-600 font-bold tracking-wider uppercase leading-none mt-1">Fast, Reliable & Affordable</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-brand-blue-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 border-l border-gray-200 pl-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">Emergency Service</span>
                <span className="text-brand-blue-800 font-bold leading-none mt-0.5">+91 96864 45593</span>
              </div>
              <a href="tel:+919686445593" className="px-5 py-2.5 bg-brand-orange-500 text-white rounded-full font-bold text-sm hover:bg-brand-orange-600 shadow-md transition-colors">
                Book Service
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2.5 bg-brand-blue-50 text-brand-blue-900 rounded-xl hover:bg-brand-blue-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 flex flex-col p-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-xl">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex flex-col gap-4 flex-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-gray-700 hover:text-brand-blue-600 py-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <a href="tel:+919686445593" className="w-full text-center py-3 bg-brand-blue-600 text-white rounded-lg font-semibold block">
                  Book a Technician
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
