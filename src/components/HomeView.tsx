import React from 'react';
import { ArrowRight, Star, Quote, Calendar, User, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIAL } from '../data';
import { ProjectItem, BlogPost } from '../types';

interface HomeViewProps {
  setView: (view: string) => void;
  openContact: () => void;
  setSelectedProject: (id: string) => void;
  setSelectedPost: (id: string) => void;
  projects: ProjectItem[];
  blogPosts: BlogPost[];
}

export default function HomeView({ setView, openContact, setSelectedProject, setSelectedPost, projects, blogPosts }: HomeViewProps) {
  const featuredProjects = projects.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-bg-light text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-primary-dark">
      
      {/* 1. Hero Section */}
      <section className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden" id="home-hero">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMA_WB9xjBg1EZNR0yGbwlvPdUobnzFIjeGVVDuxbIM1YZ79eG2ggggKifr7s9UcJbsDOWcCVUUWduFUahVn24HSd7SBQee1mGM2OxuOe_r-fJNKWgBfPW7NOk7DlXjPKQtnrdXx9eeIFIiaM2l5KfpAdNgHnshD9uYTCT2is_J59xdl89levEzrw-GpUnJVL5zpG6xjf62lkJ2BAAti5smwz-g8kJCZbd0rhEhs9_zDxfGqW5Yaaz"
            alt="Aether Architecture Hero"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover grayscale brightness-[0.85] contrast-[1.05] transition-all duration-700 dark:brightness-[0.35]"
          />
          {/* Solid deep wash overlay for reliable text contrast */}
          <div className="absolute inset-0 bg-white/50 dark:bg-black/65 transition-colors duration-700" />
          {/* Gradient overlay for bottom blending and atmospheric depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-light via-white/40 to-transparent dark:from-bg-dark dark:via-black/40 transition-colors duration-700" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-primary-light/95 dark:text-white/95 mb-4 bg-white/60 dark:bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/10 dark:border-white/20 transition-colors duration-300">
              AETHER ARCHITECTURE STUDIO
            </span>

            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-primary-light dark:text-primary-dark sm:text-6xl md:text-7xl leading-tight max-w-5xl transition-colors duration-300">
              RUANG. BENTUK. <span className="text-primary-light/70 dark:text-primary-dark/80 font-light block sm:inline">TUJUAN.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-light dark:text-gray-300 leading-relaxed sm:text-lg transition-colors duration-300">
              Presisi struktural tanpa kompromi. Kami merancang lingkungan binaan masa depan yang memadukan keindahan material mentah dengan keselarasan ekologis abadi.
            </p>

            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0" id="hero-actions">
              <button
                onClick={() => setView('portfolio')}
                id="hero-view-portfolio-btn"
                className="group flex items-center justify-center space-x-3 bg-primary-light text-bg-light px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all hover:bg-black hover:text-white dark:bg-primary-dark dark:text-bg-dark dark:hover:bg-bg-dark dark:hover:text-primary-dark cursor-pointer shadow-lg"
              >
                <span>Jelajahi Portofolio</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={openContact}
                id="hero-contact-btn"
                className="flex items-center justify-center border border-primary-light text-primary-light px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all hover:bg-primary-light hover:text-bg-light dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-bg-dark cursor-pointer"
              >
                Konsultasi Spasial
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center space-y-2 opacity-75">
          <span className="font-mono text-[9px] uppercase tracking-widest text-primary-light/95 dark:text-white/95 transition-colors duration-300">Scroll</span>
          <div className="h-8 w-[1px] bg-primary-light/60 dark:bg-white/60 animate-bounce transition-colors duration-300" />
        </div>
      </section>

      {/* 2. Introduction & Manifesto */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32" id="home-manifesto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
              Manifesto Kami
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary-light dark:text-primary-dark sm:text-4xl md:text-5xl leading-tight">
              Arsitektur Adalah Dialog Abadi.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-muted-light dark:text-muted-dark leading-relaxed">
            <p>
              Kami menolak dekorasi yang dangkal dan struktural yang berlebihan. Bagi kami, keindahan murni lahir dari penyederhanaan yang disiplin — di mana setiap kolom, permukaan dinding, dan limpahan cahaya alami memiliki peranan fungsional yang mutlak.
            </p>
            <p>
              Mengakar pada geografi lokal dan tantangan iklim tropis Asia Tenggara, kami menggabungkan tradisi spasial kuno dengan metodologi teknik mutakhir. Kami membiarkan beton mengekspos kejujurannya, baja mengekspos kekuatannya, dan vegetasi alami tumbuh menyatu merebut kembali perannya.
            </p>
            
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 text-center sm:text-left" id="manifesto-stats">
              <div className="border-l pl-4 border-border-light dark:border-border-dark">
                <p className="font-display text-3xl font-extrabold sm:text-4xl">15+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-light dark:text-muted-dark mt-1">Tahun Karya</p>
              </div>
              <div className="border-l pl-4 border-border-light dark:border-border-dark">
                <p className="font-display text-3xl font-extrabold sm:text-4xl">30+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-light dark:text-muted-dark mt-1">Penghargaan</p>
              </div>
              <div className="border-l pl-4 border-border-light dark:border-border-dark">
                <p className="font-display text-3xl font-extrabold sm:text-4xl">50+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-light dark:text-muted-dark mt-1">Proyek Sukses</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Services Overview with dynamic grid */}
      <section className="bg-black/5 dark:bg-white/5 py-24 md:py-32" id="home-services-intro">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
                Keahlian & Keunggulan
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Pendekatan Spasial Terpadu
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                Kami menyediakan layanan perancangan komprehensif dari konsepsi tapak makro hingga detail finishing mikro. Setiap dimensi dikerjakan oleh ahli dengan kontrol ketat demi hasil akhir yang presisi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12" id="services-intro-showcase">
            {/* Left Image Side */}
            <div className="lg:col-span-5 h-[350px] lg:h-[500px] overflow-hidden rounded-sm relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALCE6lRQff070vnn7YFBszxj3CLg8fq8VD2wPB6TKnDR3DRwscaKJ1zmHE3T4lu7--_OKJfuYWoQXmhxAsBeX9uo7qOTO0UiBnZuKBp1kgAs87e5G2vbWFN_U_cIsa4-88IKbv4yTNFAV0p_p9hDK8e6F8lJZMf-1E4QHTMoUx3BdrjDKTsfhKNUHQd0px_GOBvJy4nW-wNPVcCsdfw1QG23usSfw_RmAhJxqfiB8LLwAK200iC9HX"
                alt="Aether Studio Process"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover grayscale transition-transform duration-750 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
            </div>

            {/* Right Details Side */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-8">
              <div className="space-y-4">
                <div className="border-b pb-6 border-border-light dark:border-border-dark">
                  <span className="font-mono text-xs font-semibold uppercase text-primary-light dark:text-primary-dark">01 / DESAIN ARSITEKTUR</span>
                  <p className="text-sm text-muted-light dark:text-muted-dark mt-2 leading-relaxed">
                    Mendesain bangunan yang monumental namun hemat energi. Kami memaksimalkan sistem bayangan fasad dan material beton ramah lingkungan.
                  </p>
                </div>
                <div className="border-b pb-6 border-border-light dark:border-border-dark">
                  <span className="font-mono text-xs font-semibold uppercase text-primary-light dark:text-primary-dark">02 / ARSITEKTUR INTERIOR</span>
                  <p className="text-sm text-muted-light dark:text-muted-dark mt-2 leading-relaxed">
                    Merancang aliran ruang dalam yang mengalir tenang, taktil, dan penuh pencahayaan alami tak langsung.
                  </p>
                </div>
                <div className="pb-4">
                  <span className="font-mono text-xs font-semibold uppercase text-primary-light dark:text-primary-dark">03 / ARSITEKTUR LANSKAP</span>
                  <p className="text-sm text-muted-light dark:text-muted-dark mt-2 leading-relaxed">
                    Sinergi lanskap biologis terpadu yang menyerap polutan, menurunkan suhu sekitar, dan melestarikan air tanah kawasan.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setView('services')}
                id="view-services-detail-btn"
                className="group flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-primary-light hover:text-muted-light dark:text-primary-dark dark:hover:text-muted-dark mt-4 cursor-pointer"
              >
                <span>Lihat Semua Detail Layanan</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Portfolio Featured Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32" id="home-featured-portfolio">
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-end sm:space-y-0 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
              Galeri Proyek Pilihan
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Monumen Kebanggaan Kami
            </h2>
          </div>
          <button
            onClick={() => setView('portfolio')}
            id="view-all-projects-btn"
            className="group flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-primary-light hover:text-muted-light dark:text-primary-dark dark:hover:text-muted-dark cursor-pointer"
          >
            <span>Semua Proyek ({projects.length})</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" id="featured-projects-grid">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project.id);
                setView('portfolio');
              }}
              className="group flex flex-col justify-between cursor-pointer border p-4 transition-all duration-300 hover:shadow-xl border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark"
              id={`featured-proj-card-${project.id}`}
            >
              <div className="relative h-64 overflow-hidden rounded-sm" id={`featured-proj-img-${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-wider bg-black/60 text-white px-3 py-1 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="pt-6" id={`featured-proj-meta-${project.id}`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-light dark:text-muted-dark uppercase">
                    {project.location} • {project.year}
                  </span>
                  <ArrowUpRight size={14} className="text-muted-light transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-muted-dark group-hover:text-primary-light dark:group-hover:text-primary-dark" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mt-2 text-primary-light group-hover:text-primary-light dark:text-primary-dark">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-light dark:text-muted-dark mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonial Column */}
      <section className="bg-primary-light text-bg-light dark:bg-bg-dark/50 dark:text-primary-dark py-20 border-y border-border-light dark:border-border-dark" id="home-testimonial">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="rounded-full bg-white/10 dark:bg-white/5 p-4 text-white dark:text-primary-dark">
              <Quote size={28} />
            </div>

            <p className="font-display text-lg italic leading-relaxed sm:text-2xl text-gray-100 dark:text-primary-dark/90">
              "{TESTIMONIAL.quote}"
            </p>

            <div className="flex items-center space-x-4 pt-4" id="testimonial-client">
              <img
                src={TESTIMONIAL.image}
                alt={TESTIMONIAL.author}
                referrerPolicy="no-referrer"
                className="h-14 w-14 rounded-full border-2 object-cover border-white/20 dark:border-primary-dark/20 grayscale"
              />
              <div className="text-left">
                <h4 className="font-display font-bold uppercase tracking-wide text-white dark:text-primary-dark">{TESTIMONIAL.author}</h4>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-300 dark:text-muted-dark">{TESTIMONIAL.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Jurnal Desain (Design Journal) Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32" id="home-journal-section">
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-end sm:space-y-0 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
              Kanal Gagasan Kami
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Jurnal Desain AETHER
            </h2>
          </div>
          <button
            onClick={() => setView('blog')}
            id="view-all-blog-btn"
            className="group flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-primary-light hover:text-muted-light dark:text-primary-dark dark:hover:text-muted-dark cursor-pointer"
          >
            <span>Masuk ke Jurnal</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" id="home-blog-posts-grid">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                setSelectedPost(post.id);
                setView('blog');
              }}
              className="group flex flex-col justify-between cursor-pointer border p-4 transition-all duration-300 hover:shadow-xl border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark"
              id={`home-blog-card-${post.id}`}
            >
              <div className="relative h-48 overflow-hidden rounded-sm mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-wider bg-black/60 text-white px-3 py-1">
                  {post.category}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4 font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase">
                  <span className="flex items-center"><Calendar size={10} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock size={10} className="mr-1" /> {post.readTime}</span>
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-primary-light transition-colors group-hover:text-primary-light dark:text-primary-dark">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-light dark:text-muted-dark line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-2 font-mono text-[10px] uppercase tracking-wider text-primary-light group-hover:text-muted-light dark:text-primary-dark dark:group-hover:text-muted-dark pt-4 border-t border-border-light dark:border-border-dark">
                <span>Baca Gagasan</span>
                <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
