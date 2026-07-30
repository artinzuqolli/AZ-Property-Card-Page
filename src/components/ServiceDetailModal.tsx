import React from 'react';
import { X, CheckCircle2, PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PropertyService } from '../types';
import { businessContact } from '../data/businessData';

interface ServiceDetailModalProps {
  service: PropertyService | null;
  onClose: () => void;
  onOpenInquiry: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenInquiry,
}) => {
  if (!service) return null;

  const whatsappLink = `https://wa.me/447597597598?text=Hello%20AZ%20Property,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
    service.title
  )}%20services.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-[#0C0C0C] border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 text-white overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C5A059]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-cinzel">{service.title}</h3>
              <p className="text-xs text-[#C5A059] font-medium">{service.shortDesc}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features list */}
          <div className="space-y-2.5 mb-6 bg-zinc-900/50 p-3.5 rounded-xl border border-white/5">
            <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest block mb-1">
              Included Services
            </span>
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs sm:text-sm transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(service.title);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#C5A059] hover:bg-[#b58f48] text-black font-semibold text-xs sm:text-sm transition shadow-sm"
            >
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
