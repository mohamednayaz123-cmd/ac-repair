import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    id: 1,
    title: 'AC Repair Service',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    features: ['AC Installation', 'Gas Refilling', 'Cooling Issue Repair', 'Annual Maintenance'],
  },
  {
    id: 2,
    title: 'Refrigerator Repair',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    features: ['Cooling Problems', 'Compressor Repair', 'Gas Charging', 'Door Seal Replacement'],
  },
  {
    id: 3,
    title: 'Washing Machine Repair',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    features: ['Drum Issues', 'Water Leakage', 'Motor Repair', 'PCB Replacement'],
  },
  {
    id: 4,
    title: 'Microwave Repair',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80',
    features: ['Heating Issues', 'Magnetron Replacement', 'Control Panel Repair', 'Safety Testing'],
  },
  {
    id: 5,
    title: 'LED TV Repair',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    features: ['Display Issues', 'Power Problems', 'Motherboard Repair', 'Screen Diagnostics'],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">Our Premium Appliance Services</h2>
          <div className="h-1 w-20 bg-brand-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            We provide fast, reliable, and professional doorstep repair services for all major household appliances across all leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:border-brand-orange-200 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-blue-50 text-brand-blue-600 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                    {service.title.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-bold text-lg text-brand-blue-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[13px] text-gray-500">
                      <span className="text-brand-orange-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+919686445593" 
                  className="block w-full text-center py-3 bg-brand-blue-50 text-brand-blue-700 font-bold text-sm rounded-xl hover:bg-brand-blue-600 hover:text-white transition-colors"
                >
                  Book Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
