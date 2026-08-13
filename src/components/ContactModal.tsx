import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, CheckCircle2, Copy, FileText } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Komersial');
  const [budget, setBudget] = useState('500 Juta - 2 Miliar');
  const [details, setDetails] = useState('');

  const [inquiryHistory, setInquiryHistory] = useState<Inquiry[]>([]);
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && details.trim()) {
      const newInquiry: Inquiry = {
        id: `AETH-${Math.floor(100000 + Math.random() * 900000)}`,
        name,
        email,
        projectType,
        budget,
        details,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      setInquiryHistory(prev => [newInquiry, ...prev]);
      setSubmittedInquiry(newInquiry);

      // Reset Form fields
      setName('');
      setEmail('');
      setDetails('');
    }
  };

  const projectTypes = ['Komersial', 'Residensial', 'Urban', 'Lainnya'];
  const budgets = ['< 500 Juta', '500 Juta - 2 Miliar', '2 Miliar - 10 Miliar', '> 10 Miliar'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="contact-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-end p-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="contact-modal-body"
            className="w-full max-w-lg h-full bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark shadow-2xl border-l flex flex-col justify-between overflow-y-auto border-border-light dark:border-border-dark"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header */}
            <div className="p-6 border-b border-border-light dark:border-border-dark flex items-center justify-between" id="contact-modal-header">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">KONSULTASI SPASIAL</span>
                <h2 className="font-display text-lg font-bold uppercase tracking-wide">Mulai Rencana Proyek</h2>
              </div>
              <button
                onClick={() => {
                  setSubmittedInquiry(null);
                  onClose();
                }}
                id="contact-close-btn"
                className="rounded-full border bg-bg-light p-2 transition-colors cursor-pointer border-border-light hover:bg-black/5 dark:bg-bg-dark dark:border-border-dark dark:hover:bg-white/5"
                aria-label="Close form"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 space-y-8" id="contact-modal-content">
              <AnimatePresence mode="wait">
                {!submittedInquiry ? (
                  
                  /* --- Form Panel --- */
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="project-submission-form"
                  >
                    <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed">
                      Sampaikan garis besar kebutuhan ruang Anda. Tim kurator teknis AETHER akan meninjau kelayakan tapak dan merespons dalam waktu 24 jam.
                    </p>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-name" className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block font-semibold">
                        Nama Lengkap / Instansi *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        placeholder="cth. Adrian Sanjaya, PT Lumina Group"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-4 py-3 text-xs bg-transparent focus:border-primary-light focus:outline-none dark:focus:border-primary-dark border-border-light dark:border-border-dark"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-email" className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block font-semibold">
                        Alamat Email Korespondensi *
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        placeholder="cth. adrian@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-4 py-3 text-xs bg-transparent focus:border-primary-light focus:outline-none dark:focus:border-primary-dark border-border-light dark:border-border-dark"
                      />
                    </div>

                    {/* Project Category */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block font-semibold">
                        Kategori Klasifikasi Proyek
                      </label>
                      <div className="grid grid-cols-2 gap-2" id="project-type-selector">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            id={`type-opt-${type.toLowerCase()}`}
                            onClick={() => setProjectType(type)}
                            className={`px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-center border transition-all cursor-pointer ${
                              projectType === type
                                ? 'bg-primary-light text-bg-light border-primary-light dark:bg-primary-dark dark:text-bg-dark dark:border-primary-dark'
                                : 'border-border-light hover:border-primary-light dark:border-border-dark dark:hover:border-primary-dark'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Ranges */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block font-semibold">
                        Estimasi Alokasi Anggaran (Rupiah)
                      </label>
                      <div className="grid grid-cols-2 gap-2" id="budget-range-selector">
                        {budgets.map((range) => (
                          <button
                            key={range}
                            type="button"
                            id={`budget-opt-${range.replace(/\s+/g, '-').toLowerCase()}`}
                            onClick={() => setBudget(range)}
                            className={`px-3 py-3 text-[9px] font-semibold uppercase tracking-wider text-center border transition-all cursor-pointer ${
                              budget === range
                                ? 'bg-primary-light text-bg-light border-primary-light dark:bg-primary-dark dark:text-bg-dark dark:border-primary-dark'
                                : 'border-border-light hover:border-primary-light dark:border-border-dark dark:hover:border-primary-dark'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-details" className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block font-semibold">
                        Garis Besar Tantangan & Kebutuhan Ruang *
                      </label>
                      <textarea
                        id="input-details"
                        required
                        rows={4}
                        placeholder="Jelaskan parameter tapak, total luas lantai perkiraan, atau target fungsional khusus bangunan..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full border px-4 py-3 text-xs bg-transparent focus:border-primary-light focus:outline-none dark:focus:border-primary-dark border-border-light dark:border-border-dark resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="submit-inquiry-btn"
                      className="group w-full flex items-center justify-center space-x-2 bg-primary-light text-bg-light py-4 text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-primary-light border border-primary-light transition-all duration-300 dark:bg-primary-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:text-primary-dark dark:border-primary-dark cursor-pointer shadow-lg"
                    >
                      <Send size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>Ajukan Pengkajian Konsep</span>
                    </button>
                  </motion.form>
                ) : (
                  
                  /* --- Success Panel --- */
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8 flex flex-col justify-center text-center py-6"
                    id="submission-success-panel"
                  >
                    <div className="flex justify-center text-green-600 dark:text-green-400">
                      <CheckCircle2 size={56} className="animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-bold uppercase tracking-wide">Pengajuan Berhasil Terkirim!</h3>
                      <p className="text-xs text-muted-light dark:text-muted-dark max-w-sm mx-auto leading-relaxed">
                        Pengkajian awal parameter tapak dan kebutuhan proyek Anda telah didaftarkan dalam database kurasi studio AETHER.
                      </p>
                    </div>

                    {/* Visual Receipt Card */}
                    <div className="border p-6 text-left space-y-4 bg-black/5 border-border-light dark:border-border-dark dark:bg-white/5 font-mono text-[11px]" id="receipt-card">
                      <div className="flex items-center justify-between border-b pb-3 border-border-light dark:border-border-dark">
                        <span className="font-semibold text-muted-light dark:text-muted-dark uppercase text-[9px]">TIKET KONSULTASI</span>
                        <span className="font-extrabold tracking-wider">{submittedInquiry.id}</span>
                      </div>
                      
                      <div className="space-y-2 text-muted-light dark:text-muted-dark">
                        <div className="flex justify-between">
                          <span>PEMOHON:</span>
                          <span className="font-semibold text-primary-light dark:text-primary-dark uppercase text-right max-w-[200px] truncate">{submittedInquiry.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>EMAIL:</span>
                          <span className="font-semibold text-primary-light dark:text-primary-dark text-right truncate max-w-[200px]">{submittedInquiry.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>KLASIFIKASI:</span>
                          <span className="font-semibold text-primary-light dark:text-primary-dark uppercase">{submittedInquiry.projectType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ESTIMASI BIAYA:</span>
                          <span className="font-semibold text-primary-light dark:text-primary-dark uppercase">{submittedInquiry.budget}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TANGGAL:</span>
                          <span>{submittedInquiry.date}</span>
                        </div>
                      </div>

                      <div className="border-t pt-3 flex items-center justify-between text-[9px] text-muted-light dark:text-muted-dark uppercase">
                        <span>ESTIMASI RESPON:</span>
                        <span className="font-bold text-primary-light dark:text-primary-dark">&lt; 24 JAM</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(submittedInquiry.id);
                          alert('Nomor tiket berhasil disalin!');
                        }}
                        id="copy-ticket-btn"
                        className="flex items-center justify-center space-x-2 border py-3 text-xs font-mono uppercase tracking-widest border-border-light hover:border-primary-light text-muted-light hover:text-primary-light dark:border-border-dark dark:hover:border-primary-dark dark:text-muted-dark dark:hover:text-primary-dark cursor-pointer"
                      >
                        <Copy size={12} />
                        <span>Salin Nomor Tiket</span>
                      </button>

                      <button
                        onClick={() => setSubmittedInquiry(null)}
                        id="new-inquiry-btn"
                        className="bg-primary-light text-bg-light py-3 text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-primary-light border border-primary-light dark:bg-primary-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:text-primary-dark dark:border-primary-dark cursor-pointer transition-colors"
                      >
                        Ajukan Rencana Lain
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border-light dark:border-border-dark bg-black/5 dark:bg-white/5 font-mono text-[9px] text-muted-light dark:text-muted-dark flex items-center justify-between" id="contact-modal-footer">
              <span>AETHER STUDIO INTEGRITY SYSTEMS</span>
              <span>VERSI 1.2.0</span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
