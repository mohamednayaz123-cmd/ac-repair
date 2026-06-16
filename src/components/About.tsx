import { Shield, Users, BadgeCheck, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: 'url(/src/assets/images/kitchen_appliances_bg_1781599138016.jpg)' }}
      >
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 p-8 md:p-12 bg-gray-900/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/10 mt-8"
          >
            <div>
              <h4 className="text-[11px] font-bold uppercase text-brand-orange-500 mb-3 tracking-widest">About Our Company</h4>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
                Mysore's Most Trusted Appliance Repair Experts
              </h2>
              <div className="h-1 w-20 bg-brand-orange-500 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-sm sm:text-[15px] text-gray-200 leading-relaxed">
              <p>
                At <strong className="text-white font-bold">Customer Care Service Mysore</strong>, we believe that a broken appliance shouldn't disrupt your daily life. Based centrally in Mysore, we have dedicated ourselves to providing rapid, reliable, and affordable repair solutions for households across the region.
              </p>
              <p>
                Our team comprises certified, heavily vetted, and highly trained technicians equipped with the latest diagnostic tools. Whether it's a refrigerator not cooling properly, a washing machine refusing to spin, or an AC failing in the peak of summer, we bring decades of combined technical expertise right to your doorstep.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm transition-colors hover:border-brand-orange-500">
                <div className="w-10 h-10 bg-white text-brand-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-white">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm transition-colors hover:border-brand-orange-500">
                <div className="w-10 h-10 bg-white text-brand-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-white">100% Genuine Parts</span>
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-white/20 flex flex-wrap items-center gap-4">
              <a href="tel:+919686445593" className="bg-brand-orange-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-brand-orange-600 shadow-md transition-colors text-sm flex items-center gap-2">
                <Wrench className="w-4 h-4" /> Book an Inspection
              </a>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-300 uppercase font-bold tracking-widest">Or Call Us Directly</span>
                <span className="font-bold text-brand-orange-400">+91 96864 45593</span>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-xs text-gray-300 leading-relaxed max-w-2xl">
              <strong>Disclaimer:</strong> We are an independent AC repair and service provider. We are not associated, affiliated, authorized, endorsed, or sponsored by any AC manufacturer or brand. All brand names, trademarks, and logos belong to their respective owners and are used for identification purposes only.
            </div>
          </motion.div>
      </div>
    </section>
  );
}
