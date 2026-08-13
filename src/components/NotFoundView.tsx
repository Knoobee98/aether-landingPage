import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface NotFoundViewProps {
  setView?: (view: string) => void;
}

export default function NotFoundView({ setView }: NotFoundViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <Compass size={64} strokeWidth={1} className="text-muted-light dark:text-muted-dark mb-6 animate-pulse" />
        <h1 className="font-display text-8xl font-bold tracking-tighter mb-4 text-primary-light dark:text-primary-dark">
          404
        </h1>
        <h2 className="font-mono text-xl tracking-[0.2em] uppercase text-muted-light dark:text-muted-dark mb-8">
          Ruang Tidak Ditemukan
        </h2>
        <p className="max-w-md text-sm text-muted-light dark:text-muted-dark leading-relaxed mb-10">
          Koordinat spasial yang Anda cari tampaknya berada di luar rancangan arsitektur kami. Halaman ini mungkin telah dipindahkan atau dihapus.
        </p>
        
        {setView && (
          <button
            onClick={() => setView('home')}
            className="group flex items-center space-x-3 bg-primary-light px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-dark transition-all hover:bg-black/80 dark:bg-primary-dark dark:text-primary-light dark:hover:bg-white/90 cursor-pointer"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Beranda</span>
          </button>
        )}
      </motion.div>
    </div>
  );
}
