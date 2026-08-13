import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
  openContact: () => void;
  isAdminMode?: boolean;
  openLegalModal: (type: 'privacy' | 'terms') => void;
}

export default function Footer({ setView, openContact, isAdminMode = false, openLegalModal }: FooterProps) {
  if (isAdminMode) return null;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t bg-bg-light text-primary-light transition-colors duration-300 border-border-light dark:border-border-dark dark:bg-bg-dark dark:text-primary-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-24">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8" id="footer-grid">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6" id="footer-col-brand">
            <div>
              <span className="font-display text-2xl font-bold tracking-[0.25em]">AETHER</span>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                Presisi struktural tanpa kompromi. Kami merancang ruang, bentuk, dan tujuan dalam harmoni ekologis abadi.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4" id="footer-socials">
              <a href="#linkedin" className="rounded-full border p-2.5 transition-colors border-border-light text-muted-light hover:border-primary-light hover:text-primary-light dark:border-border-dark dark:text-muted-dark dark:hover:border-primary-dark dark:hover:text-primary-dark">
                <Linkedin size={16} />
              </a>
              <a href="#instagram" className="rounded-full border p-2.5 transition-colors border-border-light text-muted-light hover:border-primary-light hover:text-primary-light dark:border-border-dark dark:text-muted-dark dark:hover:border-primary-dark dark:hover:text-primary-dark">
                <Instagram size={16} />
              </a>
              <a href="#twitter" className="rounded-full border p-2.5 transition-colors border-border-light text-muted-light hover:border-primary-light hover:text-primary-light dark:border-border-dark dark:text-muted-dark dark:hover:border-primary-dark dark:hover:text-primary-dark">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-4" id="footer-col-links">
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-light dark:text-muted-dark">
                Eksplorasi
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => setView('home')} className="transition-colors hover:text-muted-light dark:hover:text-muted-dark cursor-pointer">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('services')} className="transition-colors hover:text-muted-light dark:hover:text-muted-dark cursor-pointer">
                    Layanan
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('portfolio')} className="transition-colors hover:text-muted-light dark:hover:text-muted-dark cursor-pointer">
                    Portofolio
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('about')} className="transition-colors hover:text-muted-light dark:hover:text-muted-dark cursor-pointer">
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('blog')} className="transition-colors hover:text-muted-light dark:hover:text-muted-dark cursor-pointer">
                    Jurnal Desain
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-light dark:text-muted-dark">
                Kontak & Alamat
              </h4>
              <ul className="space-y-3 text-sm text-muted-light dark:text-muted-dark">
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light dark:text-primary-dark" />
                  <span>Grand Sudirman Tower Lt. 18, Jakarta Selatan, 12190</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={14} className="shrink-0 text-primary-light dark:text-primary-dark" />
                  <span>+62 (21) 8089-1224</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={14} className="shrink-0 text-primary-light dark:text-primary-dark" />
                  <span>studio@aether.arch</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4" id="footer-col-newsletter">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-light dark:text-muted-dark">
              Berlangganan Jurnal
            </h4>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              Dapatkan pembaruan bulanan tentang filosofi spasial, teknologi berkelanjutan, dan rilisan proyek terbaru kami.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mt-2" id="newsletter-form">
              <input
                type="email"
                required
                placeholder="Alamat email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b py-3 pr-10 text-sm font-light bg-transparent focus:border-primary-light focus:outline-none dark:focus:border-primary-dark border-border-light dark:border-border-dark"
              />
              <button
                type="submit"
                id="newsletter-submit-btn"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 transition-transform duration-300 hover:translate-x-1 cursor-pointer"
                aria-label="Submit newsletter subscribe"
              >
                <ArrowUpRight size={18} />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs font-mono text-green-600 dark:text-green-400 mt-2">
                ✓ Terima kasih! Anda telah terdaftar dalam sistem kami.
              </p>
            )}
          </div>

        </div>

        <div className="mt-16 flex flex-col justify-between border-t pt-8 font-mono text-xs text-muted-light dark:border-border-dark dark:text-muted-dark sm:flex-row sm:items-center" id="footer-bottom">
          <p>© {new Date().getFullYear()} AETHER ARCHITECTURE. Hak Cipta Dilindungi.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <button onClick={() => openLegalModal('privacy')} className="hover:text-primary-light dark:hover:text-primary-dark cursor-pointer">Kebijakan Privasi</button>
            <button onClick={() => openLegalModal('terms')} className="hover:text-primary-light dark:hover:text-primary-dark cursor-pointer">Syarat & Ketentuan</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
