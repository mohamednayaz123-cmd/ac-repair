import { motion } from 'motion/react';

const images = [
  { src: 'https://www.customercaremysore.in/pics/aboutus.avif', alt: 'AC Repair Technician', class: 'col-span-1 row-span-2 aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80', alt: 'Washing Machine Service', class: 'col-span-1 row-span-1 aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80', alt: 'Microwave Repair', class: 'col-span-1 row-span-2 aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80', alt: 'LED TV Repair', class: 'col-span-1 row-span-1 aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80', alt: 'Appliance Workshop', class: 'col-span-1 row-span-1 aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80', alt: 'Service Van / Team', class: 'col-span-1 row-span-2 aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80', alt: 'Home Service Visit', class: 'col-span-1 row-span-1 aspect-[4/3]' },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">Our Work Gallery</h2>
            <div className="h-1 w-20 bg-brand-blue-600 rounded-full mb-4"></div>
            <p className="text-lg text-gray-600">
              Glimpses of our expert technicians dedicatedly troubleshooting and repairing home appliances.
            </p>
          </div>
          <a href="tel:+919686445593" className="shrink-0 px-6 py-3 bg-white text-brand-blue-600 border border-brand-blue-200 rounded-lg font-semibold hover:bg-brand-blue-50 transition-colors shadow-sm">
            Need a Repair?
          </a>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-xl overflow-hidden shadow-sm group ${image.class} m-0 bg-gray-200`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-medium px-4 text-center">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
