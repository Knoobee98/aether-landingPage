import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, Compass, Shield, X, HelpCircle, Briefcase, GraduationCap } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';

export default function AboutView() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const values = [
    { icon: <Compass size={24} />, title: 'Rasionalisme Struktural', desc: 'Kami mengutamakan kesederhanaan geometris dan fungsionalitas material murni tanpa ornamen berlebih.' },
    { icon: <Shield size={24} />, title: 'Ketahanan Ekologis', desc: 'Merancang dengan perhitungan termodinamika alami, sirkulasi pasif udara, dan perlindungan air tanah lokal.' },
    { icon: <Award size={24} />, title: 'Teknologi & Presisi', desc: 'Mengintegrasikan perancangan berbasis BIM, analisis parametrik, dan sensor IoT cerdas ke dalam struktur publik.' }
  ];

  const milestones = [
    { year: '2011', title: 'Pendirian AETHER', desc: 'Adrian Wijaya mendirikan studio kecil di Jakarta dengan visi arsitektur beton monolitik yang berintegritas tinggi.' },
    { year: '2015', title: 'Karya Berkelanjutan Pertama', desc: 'Menyelesaikan Kompleks Villa Hijau Bandung, memenangkan Gold Award Green Building Council Indonesia.' },
    { year: '2019', title: 'Ekspansi Regional', desc: 'Mulai mendesain super-struktur komersial di Banten dan Jawa Tengah, mengintegrasikan sistem fasad sirkulasi masif.' },
    { year: '2024', title: 'Kantor Pusat Lumina', desc: 'Menyelesaikan menara double-skin bervegetasi penuh di Jakarta, yang kini menjadi mercusuar arsitektur ekologis.' }
  ];

  return (
    <div className="bg-bg-light text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-primary-dark">
      
      {/* 1. Header Section */}
      <section className="border-b border-border-light py-20 dark:border-border-dark" id="about-header">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
              Profil Perusahaan
            </span>
            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              AETHER ARCHITECTURE STUDIO
            </h1>
            <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
              Didirikan atas dasar idealisme bahwa setiap ruang buatan manusia harus menghormati geometri alam dan fungsionalitas murni. Kami merancang arsitektur yang jujur, kokoh, dan berumur panjang.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Values Bento-style Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28" id="about-values">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2] text-muted-light dark:text-muted-dark">
            Pedoman Karya Kami
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            Pilar Filosofi AETHER
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" id="values-grid">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="border p-8 border-border-light bg-black/5 dark:border-border-dark dark:bg-white/5 flex flex-col justify-between h-72 group hover:border-primary-light dark:hover:border-primary-dark transition-colors duration-300"
              id={`value-card-${idx}`}
            >
              <div className="text-muted-light dark:text-muted-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                {v.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide mt-6">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-light dark:text-muted-dark mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Team Member Section */}
      <section className="bg-black/5 dark:bg-white/5 py-20 md:py-28" id="about-team">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-end sm:space-y-0 mb-16">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
                Arsitek & Insinyur Kami
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Kolektif Kreatif AETHER
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              Kombinasi talenta perancang spasial utama, ahli struktur senior, spesialis lanskap, dan desainer interior.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" id="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group flex flex-col justify-between cursor-pointer border p-4 transition-all duration-300 hover:shadow-xl border-border-light bg-bg-light dark:border-border-dark dark:bg-bg-dark hover:border-primary-light dark:hover:border-primary-dark"
                id={`team-card-${member.id}`}
              >
                <div>
                  <div className="relative h-72 overflow-hidden rounded-sm mb-6" id={`team-img-wrap-${member.id}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                  </div>
                  
                  <div className="space-y-1" id={`team-meta-${member.id}`}>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark">
                      {member.experience} Pengalaman
                    </span>
                    <h3 className="font-display text-base font-bold uppercase tracking-tight text-primary-light dark:text-primary-dark">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-light dark:text-muted-dark">
                      {member.roleId}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t font-mono text-[9px] uppercase tracking-wider text-primary-light group-hover:text-muted-light dark:text-primary-dark dark:group-hover:text-muted-dark border-border-light dark:border-border-dark">
                  <span>Lihat Biografi Utama</span>
                  <X size={12} className="rotate-45 transition-transform group-hover:rotate-90" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Timeline Milestone */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28" id="about-milestones">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2] text-muted-light dark:text-muted-dark">
            Kronik Perjalanan
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            Sejarah Perkembangan AETHER
          </h2>
        </div>

        <div className="relative border-l border-border-light dark:border-border-dark ml-4 md:ml-32 space-y-12" id="timeline-flow">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 group" id={`milestone-node-${m.year}`}>
              
              {/* Year Label left-anchored for desktop */}
              <div className="absolute -left-4 top-1 h-8 w-8 rounded-full border bg-bg-light flex items-center justify-center border-primary-light text-primary-light dark:bg-bg-dark dark:border-primary-dark dark:text-primary-dark font-display text-xs font-extrabold shadow-sm transition-colors group-hover:bg-primary-light group-hover:text-bg-light dark:group-hover:bg-primary-dark dark:group-hover:text-bg-dark">
                ✓
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-8">
                <span className="font-display text-2xl font-black text-primary-light dark:text-primary-dark tracking-wide">
                  {m.year}
                </span>
                <div className="mt-2 md:mt-0 space-y-2">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted-light dark:text-muted-dark max-w-2xl leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Team Member Detail Light Modal Overlay */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="team-detail-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              id="team-detail-modal-body"
              className="relative w-full max-w-2xl bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark p-6 sm:p-10 shadow-2xl border border-border-light dark:border-border-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                id="team-modal-close"
                className="absolute right-6 top-6 rounded-full border bg-bg-light p-2 transition-colors cursor-pointer border-border-light hover:bg-black/5 dark:bg-bg-dark dark:border-border-dark dark:hover:bg-white/5"
                aria-label="Close bio"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col sm:flex-row gap-8 items-start mt-4" id="team-modal-content-grid">
                
                {/* Image Col */}
                <div className="w-full sm:w-48 shrink-0 h-64 overflow-hidden rounded-sm relative">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Details Col */}
                <div className="space-y-6 flex-1">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">
                      {selectedMember.role}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight mt-1">
                      {selectedMember.name}
                    </h2>
                    <p className="text-xs text-muted-light dark:text-muted-dark mt-1 font-mono">
                      {selectedMember.roleId}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-light dark:text-muted-dark">
                    {selectedMember.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t pt-4 border-border-light dark:border-border-dark" id="team-modal-meta-grid">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-muted-light dark:text-muted-dark block">Keahlian Spesifik</span>
                      <span className="font-display text-xs font-semibold flex items-center mt-1"><Briefcase size={12} className="mr-1 opacity-70" /> {selectedMember.specialty}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-muted-light dark:text-muted-dark block">Pengalaman Lapangan</span>
                      <span className="font-display text-xs font-semibold flex items-center mt-1"><GraduationCap size={12} className="mr-1 opacity-70" /> {selectedMember.experience}</span>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
