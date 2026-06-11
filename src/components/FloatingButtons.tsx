import { Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        {/* Pulse effect rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange-400 opacity-75 animate-ping"></span>
        <a
          href="tel:+919686445593"
          className="relative bg-brand-orange-500 text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:bg-brand-orange-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Call Now"
        >
          <Phone className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg hidden md:block font-bold">
            Call +91 96864 45593
          </span>
        </a>
      </div>
    </>
  );
}
