import { Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">Contact & Support</h2>
          <div className="h-1 w-20 bg-brand-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600">
            Need urgent repair service or a free quotation? Reach out to us directly or fill the form, and our tech support will connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Contact Details & Map */}
          <div className="bg-brand-blue-900 text-white p-8 lg:p-12 relative flex flex-col justify-between">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-brand-blue-200">We are ready to fix your appliances.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-brand-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-blue-200 font-medium mb-1">Phone</p>
                    <a href="tel:+919686445593" className="text-xl font-bold hover:text-brand-orange-400 transition-colors">+91 96864 45593</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-brand-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-blue-200 font-medium mb-1">Email Address</p>
                    <a href="mailto:info@smarthomeservices.com" className="text-lg font-bold hover:text-brand-orange-400 transition-colors">info@smarthomeservices.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 backdrop-blur-sm">
                    <Clock className="w-6 h-6 text-brand-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-blue-200 font-medium mb-1">Working Hours</p>
                    <p className="text-lg font-bold">Mon - Sun: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-12 pl-lg-0 relative">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="contact_name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:bg-white transition-colors" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="contact_phone" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:bg-white transition-colors" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div>
                <label htmlFor="contact_service" className="block text-sm font-medium text-gray-700 mb-1">Appliance Issue</label>
                <select id="contact_service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:bg-white transition-colors cursor-pointer text-gray-700" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="AC">AC Not Cooling/Leaking</option>
                  <option value="Refrigerator">Fridge Not Cooling</option>
                  <option value="WashingMachine">Washing Machine Issue</option>
                  <option value="Microwave">Microwave Heating Issue</option>
                  <option value="LEDTV">TV Display/Power Issue</option>
                  <option value="GeneralQuery">General Info / Quoatation</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact_message" className="block text-sm font-medium text-gray-700 mb-1">Detailed Message</label>
                <textarea id="contact_message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:bg-white transition-colors resize-none" placeholder="Describe the problem with your appliance..." required></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-brand-blue-600 text-white rounded-lg font-bold text-lg hover:bg-brand-blue-700 transition-colors shadow-lg shadow-brand-blue-600/30 group">
                Send Request <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
