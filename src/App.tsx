import React, { useState } from 'react';
import {
  Globe,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  UserCheck,
  Check,
  QrCode,
  Download,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AZLogo } from './components/AZLogo';
import { ActionCard } from './components/ActionCard';
import { ServiceFooter } from './components/ServiceFooter';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QRCodeModal } from './components/QRCodeModal';
import { ContactFormModal } from './components/ContactFormModal';
import { businessContact } from './data/businessData';
import { PropertyService } from './types';
import { downloadVCard } from './utils/vcard';

// Hero image path
import heroImgPath from './assets/images/az_property_hero_1785454671203.jpg';

export default function App() {
  const [selectedService, setSelectedService] = useState<PropertyService | null>(null);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedInquiryService, setSelectedInquiryService] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveContact = () => {
    downloadVCard();
    showToast('Contact file (.vcf) downloaded!');
  };

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedInquiryService(serviceName);
    }
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans antialiased flex flex-col items-center justify-between selection:bg-[#C5A059] selection:text-black">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#C5A059] text-black font-semibold text-xs py-2 px-4 rounded-full shadow-2xl flex items-center gap-2 border border-amber-200"
          >
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container - optimized for mobile width & centered on desktop */}
      <div className="w-full max-w-md min-h-screen flex flex-col justify-between bg-[#080808] border-x border-white/5 shadow-2xl relative">
        {/* Floating Quick Actions Bar (Top right corner on page) */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setIsQRModalOpen(true)}
            title="Share / QR Code"
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-black/80 transition shadow-lg active:scale-95"
          >
            <QrCode className="w-4 h-4 text-[#C5A059]" />
          </button>
          <button
            onClick={handleSaveContact}
            title="Download vCard"
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-black/80 transition shadow-lg active:scale-95"
          >
            <Download className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

        {/* HERO TOP SECTION WITH MODERN ARCHITECTURE BACKGROUND */}
        <div className="relative w-full pt-10 pb-10 px-4 text-center overflow-hidden flex flex-col items-center justify-center">
          {/* Background House Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImgPath}
              alt="AZ Property Modern Architecture"
              className="w-full h-full object-cover object-center scale-105 filter brightness-[0.65] contrast-110"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-[#080808]/90 to-[#080808]" />
          </div>

          {/* Logo & Branding */}
          <div className="relative z-10 w-full max-w-xs mx-auto pt-4">
            <AZLogo size="md" />
          </div>

          {/* Golden Curved Separator */}
          <div className="relative z-10 w-full mt-8 -mb-10 overflow-hidden pointer-events-none">
            <svg
              viewBox="0 0 500 40"
              className="w-full h-10 text-[#080808] preserve-3d"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="goldCurve" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A059" />
                  <stop offset="50%" stopColor="#F5D77F" />
                  <stop offset="100%" stopColor="#9E7B32" />
                </linearGradient>
              </defs>
              <path
                d="M 0,20 Q 250,45 500,20 L 500,40 L 0,40 Z"
                fill="currentColor"
              />
              <path
                d="M 0,20 Q 250,45 500,20"
                stroke="url(#goldCurve)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* LINKS & ACTION CARDS SECTION */}
        <div className="relative z-10 px-4 sm:px-6 space-y-3.5 pt-4 max-w-md mx-auto w-full flex-1">
          {/* 1. Visit Our Website */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#C5A059]" />
              </div>
            }
            title="Visit Our Website"
            subtitle={businessContact.website}
            href={businessContact.websiteUrl}
            variant="dark"
          />

          {/* 2. Call Us */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#C5A059]" />
              </div>
            }
            title="Call Us"
            subtitle={businessContact.phoneDisplay}
            href={`tel:${businessContact.phone}`}
            variant="dark"
          />

          {/* 3. WhatsApp */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
              </div>
            }
            title="WhatsApp"
            subtitle="Chat with us"
            href={businessContact.whatsapp}
            variant="dark"
          />

          {/* 4. Email Us */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#C5A059]" />
              </div>
            }
            title="Email Us"
            subtitle={businessContact.email}
            href={`mailto:${businessContact.email}`}
            variant="dark"
          />

          {/* 5. Split Row: Instagram & Google */}
          <div className="grid grid-cols-2 gap-3 pt-0.5">
            <ActionCard
              icon={
                <div className="w-7 h-7 rounded-full bg-[#E5DAC3] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[#8A6A23]" />
                </div>
              }
              title="Instagram"
              subtitle={businessContact.instagram}
              href={businessContact.instagramUrl}
              variant="cream"
              compact
            />

            <ActionCard
              icon={
                <div className="w-7 h-7 rounded-full bg-[#E5DAC3] flex items-center justify-center font-bold font-serif text-[#8A6A23] text-sm">
                  G
                </div>
              }
              title="Google"
              subtitle="Leave a review"
              href={businessContact.googleReviewUrl}
              variant="cream"
              compact
            />
          </div>

          {/* 6. Save Contact */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-xl bg-[#E5DAC3] flex items-center justify-center text-[#8A6A23]">
                <UserCheck className="w-4 h-4" />
              </div>
            }
            title="Save Contact"
            subtitle="Add AZ Property to your contacts"
            onClick={handleSaveContact}
            variant="cream"
          />
        </div>

        {/* BOTTOM SOLID BLACK FOOTER */}
        <ServiceFooter />
      </div>

      {/* MODALS */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      <ContactFormModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialService={selectedInquiryService}
      />
    </div>
  );
}
