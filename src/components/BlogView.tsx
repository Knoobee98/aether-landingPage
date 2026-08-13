import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft, ChevronRight, Share2, Eye, Compass, Heart } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogViewProps {
  blogPosts: BlogPost[];
  selectedPostId: string | null;
  setSelectedPostId: (id: string | null) => void;
}

export default function BlogView({ blogPosts, selectedPostId, setSelectedPostId }: BlogViewProps) {
  const [likes, setLikes] = useState<Record<string, number>>({
    'masa-depan-arsitektur-berkelanjutan': 24,
    'minimalisme-dalam-desain-modern': 18,
    'integrasi-teknologi-ruang-publik': 15,
  });

  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    if (liked[id]) {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
      setLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const activePost = blogPosts.find(p => p.id === selectedPostId);

  return (
    <div className="bg-bg-light text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-primary-dark min-h-[80vh]">
      
      <AnimatePresence mode="wait">
        {!activePost ? (
          
          /* --- Blog Grid List View --- */
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto max-w-7xl px-6 py-20 sm:px-8"
            id="blog-list-container"
          >
            {/* Header */}
            <div className="max-w-3xl space-y-4 mb-16" id="blog-header-box">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-light dark:text-muted-dark">
                Pena & Pemikiran Kami
              </span>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                Jurnal Desain AETHER
              </h1>
              <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
                Kumpulan esai, laporan riset spasial, dan catatan filosofi dari tim arsitek dan insinyur kami. Kami membagi pengetahuan untuk kemajuan lingkungan binaan masa depan.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3" id="blog-posts-grid">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className="group flex flex-col justify-between cursor-pointer border p-4 transition-all duration-300 hover:shadow-xl border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark"
                  id={`article-card-${post.id}`}
                >
                  <div>
                    <div className="relative h-64 overflow-hidden rounded-sm mb-6" id={`blog-card-img-${post.id}`}>
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

                    <div className="space-y-4" id={`blog-card-meta-${post.id}`}>
                      <div className="flex items-center space-x-4 font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase">
                        <span className="flex items-center"><Calendar size={10} className="mr-1" /> {post.date}</span>
                        <span className="flex items-center"><Clock size={10} className="mr-1" /> {post.readTime}</span>
                      </div>
                      
                      <h2 className="font-display text-lg font-bold uppercase tracking-tight text-primary-light group-hover:text-primary-light dark:text-primary-dark leading-snug">
                        {post.title}
                      </h2>
                      
                      <p className="text-xs text-muted-light dark:text-muted-dark line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between" id={`blog-card-bottom-${post.id}`}>
                    <div className="flex items-center space-x-2 font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase">
                      <Heart size={10} className={liked[post.id] ? 'fill-red-500 text-red-500' : ''} />
                      <span>{likes[post.id] || 0} Apresiasi</span>
                    </div>
                    <div className="flex items-center space-x-2 font-mono text-[9px] text-muted-light dark:text-muted-dark uppercase">
                      <User size={10} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 font-mono text-[10px] uppercase text-primary-light dark:text-primary-dark font-semibold">
                      <span>Baca Esai</span>
                      <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        ) : (
          
          /* --- Full Article Reader View --- */
          <motion.div
            key="blog-reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mx-auto max-w-4xl px-6 py-12 sm:px-8"
            id="blog-reader-container"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedPostId(null)}
              id="reader-back-btn"
              className="group flex items-center space-x-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted-light hover:text-primary-light dark:text-muted-dark dark:hover:text-primary-dark mb-10 cursor-pointer"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Kembali ke Jurnal</span>
            </button>

            {/* Article Meta */}
            <div className="space-y-4 mb-8" id="reader-meta-header">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark px-3 py-1.5 rounded-full">
                {activePost.category}
              </span>
              <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl leading-tight">
                {activePost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border-light dark:border-border-dark font-mono text-[10px] uppercase text-muted-light dark:text-muted-dark">
                <span className="flex items-center"><User size={12} className="mr-1.5" /> Ditulis Oleh: {activePost.author}</span>
                <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> Diterbitkan: {activePost.date}</span>
                <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {activePost.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-[250px] sm:h-[450px] overflow-hidden rounded-sm relative mb-12" id="reader-image-box">
              <img
                src={activePost.image}
                alt={activePost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-95"
              />
            </div>

            {/* Article Content */}
            <div className="prose dark:prose-invert max-w-none text-base leading-relaxed text-muted-light dark:text-muted-dark space-y-6" id="reader-body">
              {activePost.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="first-letter:font-display first-letter:text-xl first-letter:font-bold first-letter:mr-0.5">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer & Interactive Reactions */}
            <div className="border-t mt-16 pt-8 flex flex-col justify-between items-center gap-4 border-border-light dark:border-border-dark sm:flex-row" id="reader-reactions">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(activePost.id)}
                  id={`like-btn-${activePost.id}`}
                  className={`flex items-center space-x-2 border px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    liked[activePost.id]
                      ? 'bg-red-500/10 border-red-500/40 text-red-500'
                      : 'border-border-light hover:border-primary-light text-muted-light hover:text-primary-light dark:border-border-dark dark:hover:border-primary-dark dark:text-muted-dark dark:hover:text-primary-dark'
                  }`}
                >
                  <Heart size={14} className={liked[activePost.id] ? 'fill-red-500' : ''} />
                  <span>Apresiasi ({likes[activePost.id] || 0})</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tautan artikel berhasil disalin!');
                  }}
                  id="share-article-btn"
                  className="flex items-center space-x-2 border px-4 py-2 text-xs font-mono uppercase tracking-wider border-border-light hover:border-primary-light text-muted-light hover:text-primary-light dark:border-border-dark dark:hover:border-primary-dark dark:text-muted-dark dark:hover:text-primary-dark cursor-pointer"
                >
                  <Share2 size={14} />
                  <span>Bagikan</span>
                </button>
              </div>

              <div className="text-right">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-light dark:text-muted-dark block">KONTRIBUTOR UTAMA</span>
                <span className="text-xs font-bold uppercase tracking-wider">{activePost.author}</span>
              </div>
            </div>

            {/* Author Profile Card */}
            <div className="mt-12 p-6 border bg-black/5 dark:bg-white/5 border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-6 items-center" id="reader-author-bio-card">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center font-display text-xl font-bold bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                  {activePost.author.charAt(0)}
                </div>
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">Mengenal {activePost.author}</h4>
                <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed">
                  Penulis adalah bagian dari dewan kurator ideologis AETHER. Berfokus pada sinergi metodologi spasial modern dengan kelestarian alam hayati kawasan tropis.
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
