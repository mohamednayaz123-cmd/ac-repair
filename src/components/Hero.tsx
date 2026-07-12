import { Phone, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 xl:col-span-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-brand-blue-900/95 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl border border-white/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-blue-100 text-xs font-bold uppercase tracking-widest mb-6 relative z-10">
              <ShieldCheck className="w-4 h-4" /> Trusted & Certified Experts
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-6 relative z-10">
              Service Center <br className="hidden md:block"/>
              <span className="text-brand-orange-500">Mysore</span>
            </h1>
            <p className="text-brand-blue-200 text-lg mb-8 max-w-xl leading-relaxed relative z-10">
              Same-Day Service for AC, Refrigerator, Washing Machine, Microwave, and LED TV at your doorstep.
            </p>

            <div className="flex flex-wrap items-center gap-4 relative z-10 mb-8">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex-1 min-w-[140px]">
                <p className="text-[10px] text-brand-orange-400 font-bold uppercase tracking-widest mb-1">Service Area</p>
                <p className="text-sm font-medium">Mysore & Surroundings</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex-1 min-w-[140px]">
                <p className="text-[10px] text-brand-orange-400 font-bold uppercase tracking-widest mb-1">Response Time</p>
                <p className="text-sm font-medium">Under 60 Minutes</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10">
              <a href="tel:+919686445593" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue-600 text-white rounded-xl font-bold hover:bg-brand-blue-700 transition-colors shadow-md text-sm w-full sm:w-auto">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="#booking-form" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-md text-sm w-full sm:w-auto">
                <Calendar className="w-4 h-4" /> Book Service
              </a>
            </div>
          </motion.div>
        </div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 xl:col-span-4 cursor-default"
          id="booking-form"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-bold mb-6 text-brand-blue-900">Quick Booking</h3>
            <form className="flex flex-col gap-4 text-gray-800" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const appliance = formData.get('appliance');
              const address = formData.get('address');
              
              const text = `Hi, I would like to book a service.\n\nName: ${name}\nPhone: ${phone}\nAppliance: ${appliance}\nArea: ${address}`;
              const whatsappUrl = `https://wa.me/919686445593?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" className="w-full text-sm p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-blue-500 transition-colors" required />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full text-sm p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-blue-500 transition-colors" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select id="appliance" name="appliance" className="w-full text-sm p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-blue-500 cursor-pointer text-gray-500 transition-colors" required defaultValue="">
                  <option value="" disabled>Select Appliance</option>
                  <option value="AC">AC Repair</option>
                  <option value="Refrigerator">Refrigerator Repair</option>
                  <option value="WashingMachine">Washing Machine Repair</option>
                  <option value="Microwave">Microwave Repair</option>
                  <option value="LEDTV">LED TV Repair</option>
                  <option value="Dishwasher">Dishwasher Repair</option>
                  <option value="Other">Other</option>
                </select>
                <input type="text" id="address" name="address" placeholder="Your Area" className="w-full text-sm p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-blue-500 transition-colors" required />
              </div>
              <button type="submit" className="w-full bg-brand-blue-700 text-white font-bold py-4 rounded-xl hover:bg-brand-blue-800 shadow-md transition-colors mt-2">
                Get a Callback
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
