import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { propertyServicesList } from '../data/businessData';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || propertyServicesList[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-[#0C0C0C] border border-white/10 rounded-2xl shadow-2xl p-6 text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-cinzel text-white">Inquiry Sent!</h3>
              <p className="text-xs text-zinc-300">
                Thank you, {name}. The AZ Property team will contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold font-cinzel text-white mb-1">Request a Quote</h3>
              <p className="text-xs text-zinc-400 mb-5">
                Tell us about your project and we'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full bg-[#141418] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Phone / Mobile</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07123 456789"
                    className="w-full bg-[#141418] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Service Required</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#141418] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    {propertyServicesList.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Inquiry">General Property Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Message / Details</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you need..."
                    className="w-full bg-[#141418] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A059] hover:bg-[#b58f48] text-black font-semibold text-xs sm:text-sm transition mt-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Quote Request
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
