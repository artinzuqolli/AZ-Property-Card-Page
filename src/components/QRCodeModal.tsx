import React, { useState } from 'react';
import { X, Copy, Check, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessContact } from '../data/businessData';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // QR code using public api
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}&color=000000&bgcolor=FAF6EE`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-sm bg-[#0C0C0C] border border-white/10 rounded-2xl shadow-2xl p-6 text-white text-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-2 mb-2">
            <QrCode className="w-5 h-5 text-[#C5A059]" />
            <h3 className="text-base font-bold font-cinzel text-white">Share Business Card</h3>
          </div>
          <p className="text-xs text-zinc-400 mb-5">
            Scan with phone camera to instantly open AZ Property card
          </p>

          {/* QR Code container */}
          <div className="mx-auto w-48 h-48 bg-[#FAF6EE] p-3 rounded-2xl shadow-inner border border-[#C5A059]/40 flex items-center justify-center mb-5">
            <img
              src={qrCodeUrl}
              alt="AZ Property QR Code"
              className="w-full h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-[#C5A059] font-mono truncate bg-zinc-900/80 py-2 px-3 rounded-lg mb-4 border border-white/5">
            {businessContact.website}
          </p>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#C5A059] hover:bg-[#b58f48] text-black font-semibold text-xs sm:text-sm transition shadow-sm"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Link Copied to Clipboard!' : 'Copy Page Link'}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
