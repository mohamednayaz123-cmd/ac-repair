import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const areas = [
  'Mysore South',
  'Vijayanagar',
  'Kuvempunagar',
  'Hebbal',
  'Jayalakshmipuram',
  'Bogadi',
  'Nazarbad',
  'Saraswathipuram'
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-brand-blue-50 border-t border-b border-brand-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">Our Service Coverage</h2>
            <div className="h-1 w-20 bg-brand-blue-600 rounded-full mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-600 mb-6">
              We provide rapid appliance repair services across major areas in and around Mysore. Our mobile technicians arrive promptly at your location.
            </p>
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-brand-blue-100 text-brand-blue-700 font-semibold mb-2 lg:mb-0">
              <MapPin className="w-5 h-5 mr-2" /> Serving 20+ Neighborhoods
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-wrap gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-100/80 rounded-xl text-[12px] text-gray-700 font-medium flex items-center hover:bg-brand-orange-50 hover:text-brand-orange-600 transition-colors cursor-default border border-transparent hover:border-brand-orange-200"
                >
                  <MapPin className="w-3 h-3 text-brand-orange-500 mr-1.5 opacity-70" />
                  {area}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
