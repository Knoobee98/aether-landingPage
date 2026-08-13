import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type LegalType = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: LegalType | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!type) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative flex h-full max-h-[85vh] w-full max-w-3xl flex-col bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark shadow-2xl"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border-light dark:border-border-dark px-6 py-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-widest text-primary-light dark:text-primary-dark">
                {type === 'privacy' ? 'Kebijakan Privasi' : 'Syarat & Ketentuan'}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-light transition-colors hover:bg-black/5 hover:text-primary-light dark:text-muted-dark dark:hover:bg-white/5 dark:hover:text-primary-dark cursor-pointer"
                aria-label="Tutup modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-6 py-8 text-sm leading-relaxed text-muted-light dark:text-muted-dark space-y-6">
              {type === 'privacy' ? (
                <>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">1. Pengumpulan Data</h3>
                    <p>Aether Architecture Studio mengumpulkan informasi identitas pribadi (seperti nama, alamat email, dan nomor telepon) yang Anda berikan secara sukarela melalui formulir konsultasi (Inquiry) kami. Kami juga mengumpulkan data analitik situs web yang tidak dapat mengidentifikasi individu untuk meningkatkan performa situs.</p>
                  </section>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">2. Penggunaan Informasi</h3>
                    <p>Informasi yang kami kumpulkan digunakan secara eksklusif untuk mengevaluasi pengajuan proyek Anda, mengatur jadwal konsultasi spasial, serta mengirimkan pembaruan jurnal jika Anda berlangganan buletin kami. Data pengajuan Anda akan disimpan dalam sistem manajemen kami untuk keperluan internal tim arsitek.</p>
                  </section>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">3. Perlindungan & Keamanan Data</h3>
                    <p>Integritas proyek dan privasi klien adalah prinsip utama kami. Kami menerapkan langkah-langkah keamanan industri terkini (termasuk enkripsi basis data) untuk melindungi data pribadi dan rincian arsitektural proyek yang Anda ajukan dari akses tanpa izin.</p>
                  </section>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">4. Pembagian Data</h3>
                    <p>Kami tidak akan pernah menjual, menyewakan, atau menukar data pribadi Anda kepada pihak ketiga mana pun. Informasi proyek hanya dibagikan secara internal kepada Arsitek, Project Manager, dan konsultan teknis (seperti insinyur struktur MEP) yang secara langsung terlibat dalam proyek Anda dan terikat oleh Non-Disclosure Agreement (NDA).</p>
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">1. Penerimaan Syarat</h3>
                    <p>Dengan mengakses dan menggunakan situs web Aether Architecture Studio, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan Penggunaan ini. Semua desain, gambar, jurnal, dan aset digital di situs ini dilindungi oleh hak cipta dan kekayaan intelektual.</p>
                  </section>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">2. Hak Kekayaan Intelektual</h3>
                    <p>Semua portofolio arsitektur, rendering 3D, cetak biru (blueprint) konseptual, teks, dan foto yang ditampilkan di situs ini adalah milik eksklusif Aether Architecture Studio, kecuali dinyatakan lain. Penggunaan komersial, reproduksi, atau distribusi materi-materi tersebut tanpa izin tertulis dilarang keras.</p>
                  </section>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">3. Pengajuan Proyek (Inquiry)</h3>
                    <p>Pengiriman formulir "Konsultasi Spasial" melalui situs web ini tidak secara otomatis menciptakan hubungan Klien-Arsitek (Client-Architect relationship) yang mengikat secara hukum. Keterikatan hukum baru terjadi setelah kedua belah pihak menandatangani kontrak kerja sama resmi secara terpisah.</p>
                  </section>
                  <section>
                    <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2 uppercase tracking-wide">4. Batasan Tanggung Jawab</h3>
                    <p>Kami berusaha memastikan semua informasi pada situs kami (termasuk artikel Jurnal dan deskripsi layanan) adalah akurat dan mutakhir. Namun, kami tidak menjamin keakuratan absolut dan tidak bertanggung jawab atas kerugian atau kerusakan tidak langsung yang mungkin timbul akibat penggunaan atau ketidakmampuan menggunakan situs web kami.</p>
                  </section>
                </>
              )}
              
              <div className="pt-8 text-xs border-t border-border-light dark:border-border-dark">
                <p>Terakhir diperbarui: 11 Juli 2026. Untuk pertanyaan lebih lanjut, hubungi <strong>legal@aether.arch</strong></p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
