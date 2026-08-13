import React, { useState } from 'react';
import { Building2, Compass, Map, Leaf, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';

interface ServicesViewProps {
  openContact: () => void;
}

export default function ServicesView({ openContact }: ServicesViewProps) {
  const [activeServiceTab, setActiveServiceTab] = useState(SERVICES[0].id);

  // Helper to resolve icon component from string
  const renderIcon = (name: string, size = 24) => {
    switch (name) {
      case 'Building2': return <Building2 size={size} />;
      case 'Compass': return <Compass size={size} />;
      case 'Map': return <Map size={size} />;
      case 'Leaf': return <Leaf size={size} />;
      default: return <Building2 size={size} />;
    }
  };

  const processSteps = [
    { num: '01', title: 'Konsultasi & Penyelidikan Tapak', desc: 'Kami berdiskusi intensif mengenai parameter kebutuhan, visi fungsional, analisis peraturan tapak lokal, dan target anggaran proyek Anda.' },
    { num: '02', title: 'Studi Konsep & Skematik', desc: 'Merumuskan hubungan spasial awal, pemodelan massa 3D kasar, sirkulasi mikrotermal udara, dan presentasi materialitas utama.' },
    { num: '03', title: 'Pengembangan Desain (DED)', desc: 'Menerjemahkan konsep menjadi gambar teknik detail berstandar konstruksi, mengkoordinasikan struktur sipil, utilitas MEP, dan spesifikasi material.' },
    { num: '04', title: 'Supervisi Lapangan berkala', desc: 'Mengawal proses konstruksi guna memastikan kontraktor mengeksekusi detail arsitektural dengan akurasi dan presisi struktural mutlak.' }
  ];

  return (
    <div className="bg-bg-light text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-primary-dark">
      
      {/* Page Header */}
      <section className="border-b border-border-light py-20 dark:border-border-dark" id="services-header">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
              Layanan Komprehensif
            </span>
            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              Presisi dari Konsep ke Struktur
            </h1>
            <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
              Arsitektur berkualitas lahir dari integrasi keahlian multi-disiplin yang sinergis. Kami merancang dengan pendekatan kritis untuk menghasilkan ruang berdaya guna tinggi dan tahan lama.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Service Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28" id="services-tabs-section">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Tabs Navigator (Left) */}
          <div className="lg:col-span-4 space-y-3" id="services-tabs-list">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                id={`btn-service-tab-${service.id}`}
                onClick={() => setActiveServiceTab(service.id)}
                className={`w-full flex items-center justify-between p-6 border text-left transition-all duration-300 cursor-pointer ${
                  activeServiceTab === service.id
                    ? 'border-primary-light bg-primary-light text-bg-light dark:border-primary-dark dark:bg-primary-dark dark:text-bg-dark shadow-md'
                    : 'border-border-light hover:border-primary-light text-primary-light dark:border-border-dark dark:hover:border-primary-dark dark:text-primary-dark'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={activeServiceTab === service.id ? 'text-bg-light dark:text-bg-dark' : 'text-muted-light dark:text-muted-dark'}>
                    {renderIcon(service.iconName, 20)}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider block opacity-70">
                      Service
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-wide">
                      {service.titleIndo}
                    </span>
                  </div>
                </div>
                <ArrowRight size={14} className={`transition-transform ${activeServiceTab === service.id ? 'translate-x-1' : ''}`} />
              </button>
            ))}
          </div>

          {/* Active Tab Content (Right) */}
          <div className="lg:col-span-8 border p-8 bg-black/5 dark:bg-white/5 border-border-light dark:border-border-dark" id="services-tab-content">
            <AnimatePresence mode="wait">
              {SERVICES.map((service) => {
                if (service.id !== activeServiceTab) return null;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <div className="flex items-center space-x-3 text-muted-light dark:text-muted-dark font-mono text-xs uppercase mb-2">
                        {renderIcon(service.iconName, 16)}
                        <span>{service.title}</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                        {service.titleIndo}
                      </h2>
                      <p className="mt-4 text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-light dark:text-primary-dark">
                        Cakupan Pekerjaan Detail:
                      </h4>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3 text-sm">
                            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                              <Check size={10} />
                            </div>
                            <span className="text-muted-light dark:text-muted-dark">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border-light dark:border-border-dark">
                      <button
                        onClick={openContact}
                        id={`btn-inquire-service-${service.id}`}
                        className="group flex items-center space-x-2 bg-primary-light text-bg-light px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-primary-light border border-primary-light dark:bg-primary-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:text-primary-dark dark:border-primary-dark cursor-pointer"
                      >
                        <span>Konsultasi {service.titleIndo}</span>
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* center photo for Landscape Architecture with background */}
      <section className="relative py-32 text-white overflow-hidden" id="services-landscape-banner">
        {/* Background Image with strong contrast dark mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYGBNE0_zWNyqElsaLZCMS1WLke5fph2QtKLzbkikB_fjQ_nToxE0E6VIUIjdv3TtCMPFV7DG_jjAziHs9KsVJ2MSI-twUHuM9cSDCtYO2f9qCNvabIK1GreHXIN6OGF4kKGa6KRvopv9VreXPrkCvrtHeVl_24g6bwxKXZLs8g-KU9SX9I3rSxrUjH9KOtvPgrRZgNYudpVVW4T33QNhhNZ6yGgitH4WByZkYttUEtrGN9s84D6H"
            alt="Lanskap Biologis Terpadu"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover grayscale brightness-50 contrast-110"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 mb-4 block">
            Karya Utama Lanskap
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl mb-6">
            Meningkatkan Vitalitas Ekologis Tapak
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-8">
            Bagi AETHER, tapak luar bukanlah area sisa pasca pembangunan. Lanskap adalah filter biologis alami yang menyerap curah hujan ekstrem tropis, memurnikan limpahan air permukaan, menurunkan temperatur termal bangunan hingga 4 derajat, serta melahirkan ketenangan psikologis bagi penghuninya.
          </p>
          <div className="flex justify-center">
            <button
              onClick={openContact}
              id="btn-landscape-consult"
              className="border border-white hover:bg-white hover:text-black transition-all px-8 py-4 text-xs font-semibold uppercase tracking-widest cursor-pointer"
            >
              Rancang Lanskap Anda
            </button>
          </div>
        </div>
      </section>

      {/* Execution Methodology Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28" id="services-methodology">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-light dark:text-muted-dark">
            Alur Kerja Presisi
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            Metodologi Pelaksanaan
          </h2>
          <p className="text-sm text-muted-light dark:text-muted-dark">
            Kami membagi setiap proyek ke dalam 4 fase kontrol kualitas ketat untuk memastikan tidak ada deviasi antara kesepakatan awal dan hasil jadi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" id="methodology-grid">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="border p-6 border-border-light bg-black/5 dark:border-border-dark dark:bg-white/5 flex flex-col justify-between h-64"
              id={`method-card-${step.num}`}
            >
              <span className="font-display text-4xl font-extrabold text-primary-light/20 dark:text-primary-dark/20">
                {step.num}
              </span>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide mt-4">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-light dark:text-muted-dark mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
