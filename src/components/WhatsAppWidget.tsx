import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WhatsAppWidgetProps {
  phoneNumber?: string; // Format: 6281122334455 (without +)
  message?: string;
}

export default function WhatsAppWidget({ 
  phoneNumber = '6281122334455', // Default dummy number
  message = 'Halo Aether Architecture, saya tertarik untuk berkonsultasi mengenai desain spasial.'
}: WhatsAppWidgetProps) {
  
  const handleWhatsAppClick = () => {
    // Track click if Google Analytics is initialized
    if (import.meta.env.VITE_GA_ID) {
      import('react-ga4').then((ReactGA) => {
        ReactGA.default.event({
          category: 'Contact',
          action: 'Clicked WhatsApp Widget',
          label: 'Floating Button'
        });
      });
    }

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-none bg-primary-light text-bg-light shadow-2xl transition-transform hover:scale-110 hover:bg-black dark:bg-primary-dark dark:text-bg-dark dark:hover:bg-white cursor-pointer"
      aria-label="Chat on WhatsApp"
      id="whatsapp-floating-btn"
    >
      <MessageCircle size={28} strokeWidth={1.5} />
      
      {/* Brutalist offset shadow effect */}
      <div className="absolute -inset-1 -z-10 border border-primary-light/20 dark:border-primary-dark/20 pointer-events-none" />
    </motion.button>
  );
}
