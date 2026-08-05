import React, { useState } from 'react';
import {
  Globe,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  UserCheck,
  Check,
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
              <div className="w-8 h-8 rounded-full border border-sky-500/30 bg-sky-500/15 flex items-center justify-center">
                <Globe className="w-4 h-4 text-sky-400" />
              </div>
            }
            title="Visit Our Website"
            href={businessContact.websiteUrl}
            variant="dark"
          />

          {/* 2. Call Us */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-emerald-500/30 bg-emerald-500/15 flex items-center justify-center">
                <Phone className="w-4 h-4 text-emerald-400" />
              </div>
            }
            title="Call Us"
            href={`tel:${businessContact.phone}`}
            variant="dark"
          />

          {/* 3. WhatsApp */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-[#25D366]/40 bg-[#25D366]/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </div>
            }
            title="WhatsApp"
            href={businessContact.whatsapp}
            variant="dark"
          />

          {/* 4. Email Us */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-full border border-amber-500/30 bg-amber-500/15 flex items-center justify-center">
                <Mail className="w-4 h-4 text-amber-400" />
              </div>
            }
            title="Email Us"
            href={`mailto:${businessContact.email}`}
            variant="dark"
          />

          {/* 5. Split Row: Instagram & Google */}
          <div className="grid grid-cols-2 gap-3 pt-0.5">
            <ActionCard
              icon={
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-sm">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              }
              title="Instagram"
              href={businessContact.instagramUrl}
              variant="cream"
              compact
            />

            <ActionCard
              icon={
                <div className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm p-1.5">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
              }
              title="Google"
              href={businessContact.googleReviewUrl}
              variant="cream"
              compact
            />
          </div>

          {/* 6. Save Contact */}
          <ActionCard
            icon={
              <div className="w-8 h-8 rounded-xl bg-[#C5A059] flex items-center justify-center text-zinc-950 shadow-sm">
                <UserCheck className="w-4 h-4 text-zinc-950" />
              </div>
            }
            title="Save Contact"
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
