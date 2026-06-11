import { Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-blue-700 rounded-lg flex items-center justify-center text-white shadow-md">
                <Wrench className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-lg text-brand-blue-900 leading-tight">
                Customer Care<br/><span className="text-brand-orange-500">Service Mysore</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Your trusted local experts for all kinds of home appliance repairs. Fast, reliable, and affordable services at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-brand-blue-900 text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="#home" className="hover:text-brand-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-brand-blue-900 text-sm uppercase tracking-widest mb-6">Our Services</h3>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">AC Repair</a></li>
              <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">Refrigerator Repair</a></li>
              <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">Washing Machine Service</a></li>
              <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">Microwave Oven Repair</a></li>
              <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">LED TV Repair</a></li>
              <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">Dishwasher Service</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-brand-blue-900 text-sm uppercase tracking-widest mb-6">Service Regions</h3>
            <ul className="space-y-3 font-medium text-sm">
              <li><span className="text-gray-500">Mysore City</span></li>
              <li><span className="text-gray-500">Vijayanagar & Hebbal</span></li>
              <li><span className="text-gray-500">Kuvempunagar & Bogadi</span></li>
              <li><span className="text-gray-500">Saraswathipuram</span></li>
              <li><span className="text-gray-500">Jayalakshmipuram</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} Customer Care Service Mysore. info@smarthomeservices.com
          </p>
          <div className="flex gap-6 text-[12px] font-bold text-gray-400 uppercase tracking-wide">
            <a href="#" className="hover:text-brand-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
