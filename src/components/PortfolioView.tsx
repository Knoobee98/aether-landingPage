import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, MapPin, User, X, ChevronRight, Activity } from 'lucide-react';
import { ProjectItem } from '../types';

interface PortfolioViewProps {
  projects: ProjectItem[];
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

export default function PortfolioView({ projects, selectedProjectId, setSelectedProjectId }: PortfolioViewProps) {
  const [activeFilter, setActiveFilter] = useState<'Semua' | 'Komersial' | 'Residensial' | 'Urban'>('Semua');
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>(projects);

  // Manage filtering logic
  useEffect(() => {
    if (activeFilter === 'Semua') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter, projects]);

  // Find the currently selected project for detail modal
  const activeProject = projects.find(p => p.id === selectedProjectId);

  const filters: ('Semua' | 'Komersial' | 'Residensial' | 'Urban')[] = ['Semua', 'Komersial', 'Residensial', 'Urban'];

  return (
    <div className="bg-bg-light text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-primary-dark min-h-[80vh]">
      
      {/* Header */}
      <section className="border-b border-border-light py-16 dark:border-border-dark" id="portfolio-header">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-end md:space-y-0">
            <div className="max-w-xl space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
                Arsip Karya Nyata
              </span>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                Portofolio Desain
              </h1>
              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                Menghadirkan rekayasa struktural dan harmoni spasial dalam bentuk fisik yang fungsional dan monumental.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 border-b md:border-none pb-4 md:pb-0 border-border-light dark:border-border-dark" id="portfolio-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  id={`filter-btn-${filter.toLowerCase()}`}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-primary-light text-bg-light dark:bg-primary-dark dark:text-bg-dark'
                      : 'bg-black/5 text-muted-light hover:bg-black/10 dark:bg-white/5 dark:text-muted-dark dark:hover:bg-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8" id="portfolio-grid-section">
        <motion.div 
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" 
          id="projects-main-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className="group flex flex-col justify-between cursor-pointer border p-4 transition-all duration-300 hover:shadow-xl border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark"
                id={`project-card-${project.id}`}
              >
                <div>
                  <div className="relative h-64 overflow-hidden rounded-sm mb-6" id={`proj-card-img-wrap-${project.id}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-wider bg-black/60 text-white px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2" id={`proj-card-meta-wrap-${project.id}`}>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-muted-light dark:text-muted-dark">
                      <span className="flex items-center"><MapPin size={10} className="mr-1" /> {project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-primary-light dark:text-primary-dark">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t font-mono text-[10px] uppercase tracking-wider text-primary-light group-hover:text-muted-light dark:text-primary-dark dark:group-hover:text-muted-dark border-border-light dark:border-border-dark">
                  <span>Pelajari Analisis Desain</span>
                  <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="project-detail-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              id="project-detail-modal-body"
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark shadow-2xl border border-border-light dark:border-border-dark"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Sticky Modal Close */}
              <button
                onClick={() => setSelectedProjectId(null)}
                id="modal-close-btn"
                className="absolute right-6 top-6 z-10 rounded-full border bg-bg-light p-2.5 transition-colors cursor-pointer border-border-light hover:bg-black/5 dark:bg-bg-dark dark:border-border-dark dark:hover:bg-white/5"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Large Project Image */}
              <div className="w-full h-[300px] sm:h-[450px] relative overflow-hidden" id="modal-image-container">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 dark:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-light via-transparent to-transparent dark:from-bg-dark" />
                
                <div className="absolute bottom-6 left-6 sm:left-10 z-10" id="modal-image-title-box">
                  <span className="font-mono text-[9px] uppercase tracking-widest bg-black/60 text-white px-3 py-1.5 backdrop-blur-sm">
                    {activeProject.category}
                  </span>
                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white dark:text-primary-dark mt-3">
                    {activeProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content Details */}
              <div className="p-6 sm:p-10 space-y-10" id="modal-content-details">
                
                {/* Meta Summary Grid */}
                <div className="grid grid-cols-2 gap-4 border-y py-6 border-border-light dark:border-border-dark sm:grid-cols-4" id="modal-meta-grid">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">LOKASI</span>
                    <span className="font-display text-sm font-semibold flex items-center mt-1"><MapPin size={12} className="mr-1 text-muted-light dark:text-muted-dark" /> {activeProject.location}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">TAHUN</span>
                    <span className="font-display text-sm font-semibold flex items-center mt-1"><Calendar size={12} className="mr-1 text-muted-light dark:text-muted-dark" /> {activeProject.year}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">KLIEN</span>
                    <span className="font-display text-sm font-semibold flex items-center mt-1"><User size={12} className="mr-1 text-muted-light dark:text-muted-dark" /> {activeProject.client}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">KATEGORI</span>
                    <span className="font-display text-sm font-semibold flex items-center mt-1"><Activity size={12} className="mr-1 text-muted-light dark:text-muted-dark" /> {activeProject.category}</span>
                  </div>
                </div>

                {/* Project Description & Design Challenge Analysis */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12" id="modal-text-breakdown">
                  
                  {/* Left Column: Description */}
                  <div className="lg:col-span-7 space-y-6">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-light dark:text-muted-dark">
                      Tinjauan Umum Proyek
                    </h4>
                    <p className="text-base leading-relaxed text-muted-light dark:text-muted-dark">
                      {activeProject.description}
                    </p>

                    <div className="border p-6 bg-black/5 dark:bg-white/5 border-border-light dark:border-border-dark">
                      <h5 className="font-display text-sm font-bold uppercase tracking-wide text-primary-light dark:text-primary-dark mb-2">
                        Analisis Tantangan
                      </h5>
                      <p className="text-xs leading-relaxed text-muted-light dark:text-muted-dark">
                        {activeProject.challenge}
                      </p>
                    </div>

                    <div className="border p-6 border-primary-light/10 dark:border-primary-dark/10 bg-primary-light/[0.02] dark:bg-primary-dark/[0.02]">
                      <h5 className="font-display text-sm font-bold uppercase tracking-wide text-primary-light dark:text-primary-dark mb-2">
                        Solusi Arsitektural AETHER
                      </h5>
                      <p className="text-xs leading-relaxed text-muted-light dark:text-muted-dark">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Metrics Stats */}
                  <div className="lg:col-span-5 space-y-6">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-light dark:text-muted-dark">
                      Metrik & Performa Struktur
                    </h4>
                    <div className="space-y-4" id="modal-stats-list">
                      {activeProject.stats.map((stat, idx) => (
                        <div key={idx} className="border p-5 border-border-light dark:border-border-dark flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase text-muted-light dark:text-muted-dark">
                            {stat.label}
                          </span>
                          <span className="font-display text-sm font-extrabold tracking-wide">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border p-5 border-border-light dark:border-border-dark bg-black/5 dark:bg-white/5 text-center">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark">
                        Sertifikasi Teknis
                      </p>
                      <p className="text-xs font-semibold uppercase mt-2">
                        Standar Keandalan Aether Gold Level
                      </p>
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
