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
          className="relative bg-brand-orange-500 text-white px-6 py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:bg-brand-orange-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" />
          <span className="font-bold whitespace-nowrap text-base">+91 96864 45593</span>
        </a>
      </div>
    </>
  );
}
