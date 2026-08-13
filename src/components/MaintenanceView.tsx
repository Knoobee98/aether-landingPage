import React from 'react';
import { Hammer, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function MaintenanceView() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent dark:from-white/5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center max-w-2xl px-6 text-center z-10"
      >
        <div className="mb-8 relative">
          <Hammer size={56} strokeWidth={1} className="text-muted-light dark:text-muted-dark animate-bounce" />
          <div className="absolute -bottom-2 -right-2 w-full h-full border border-border-light dark:border-border-dark opacity-50 -z-10 rounded-full blur-xl" />
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">
          Sistem Dalam Pemeliharaan
        </h1>
        
        <h2 className="font-mono text-sm tracking-[0.3em] uppercase text-muted-light dark:text-muted-dark mb-8">
          Aether Architecture
        </h2>
        
        <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed mb-12 max-w-lg">
          Kami sedang melakukan pembaruan infrastruktur digital untuk meningkatkan kualitas layanan. Harap kembali dalam beberapa saat.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-mono tracking-widest uppercase">
          <a href="mailto:hello@aether.studio" className="flex items-center gap-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors cursor-pointer">
            <Mail size={16} />
            <span>hello@aether.studio</span>
          </a>
          <span className="hidden sm:block text-muted-light/30 dark:text-muted-dark/30">|</span>
          <a href="tel:+6281122334455" className="flex items-center gap-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors cursor-pointer">
            <Phone size={16} />
            <span>+62 811 2233 4455</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
