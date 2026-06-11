import { Clock, Users, Shield, Tag, Award, Home } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: 'Same Day Service',
    description: 'We understand emergencies. Get your appliances fixed on the very same day of booking.'
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Certified Technicians',
    description: 'Our team consists of highly trained, background-verified, and experienced professionals.'
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Genuine Spare Parts',
    description: 'We use only 100% genuine and high-quality parts to ensure long-lasting appliance health.'
  },
  {
    icon: <Tag className="w-7 h-7" />,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. Expert service that fits your budget.'
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Service Warranty',
    description: 'Peace of mind guaranteed with up to 90 days of warranty on our repair services.'
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Doorstep Support',
    description: 'Skip the hassle of transporting broken appliances. We repair it right at your home.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-brand-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            We operate with complete integrity, delivering the highest quality appliance repair services tailored to your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-brand-orange-50 border border-brand-orange-100 rounded-2xl flex flex-col group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white text-brand-orange-500 rounded-lg flex items-center justify-center shadow-sm border border-brand-orange-100">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold uppercase text-brand-blue-900 tracking-wider hover:text-brand-orange-600 transition-colors">{feature.title}</h3>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
