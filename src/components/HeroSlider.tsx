import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SLIDES_DATA } from '../data/schoolData';

interface HeroSliderProps {
  onOpenContactModal: (subject?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenContactModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES_DATA.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES_DATA.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleCtaClick = (slide: typeof SLIDES_DATA[0]) => {
    if (slide.ctaTarget.startsWith('#')) {
      const el = document.querySelector(slide.ctaTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onOpenContactModal(`Informações sobre ${slide.title}`);
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[560px] md:min-h-[640px] lg:min-h-[700px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Background Images */}
      {SLIDES_DATA.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
          } transform transition-transform duration-[7000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />

          {/* Premium Gradient Overlay with School Colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/30 to-slate-950/80" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-3xl">
          {SLIDES_DATA.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <div
                key={slide.id}
                className="space-y-6 animate-fadeIn"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-semibold backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {slide.title}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-balance">
                  "{slide.description}"
                </p>

                {/* Quick Trust Highlights */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Pré-Escolar ao Ensino Técnico</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>22 Salas & Laboratórios</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Professores Qualificados</span>
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => handleCtaClick(slide)}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-blue-950 font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
                    id={`hero-cta-btn-${slide.id}`}
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenContactModal('Pedido de Informações de Matrícula')}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full backdrop-blur-md border border-white/25 transition-all duration-200 text-sm sm:text-base hover:border-white/40 cursor-pointer"
                    id={`hero-secondary-btn-${slide.id}`}
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Fale com a Secretaria</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls: Prev & Next Arrows */}
      <div className="absolute z-30 inset-y-0 left-2 sm:left-4 flex items-center pointer-events-none">
        <button
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
          id="hero-prev-slide-btn"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="absolute z-30 inset-y-0 right-2 sm:right-4 flex items-center pointer-events-none">
        <button
          onClick={nextSlide}
          aria-label="Próximo slide"
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
          id="hero-next-slide-btn"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Indicators & Quick Bar */}
      <div className="absolute z-30 bottom-6 inset-x-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center space-x-2.5">
            {SLIDES_DATA.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-amber-400'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-semibold text-slate-300 tracking-widest uppercase bg-slate-900/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            0{currentSlide + 1} / 0{SLIDES_DATA.length}
          </div>
        </div>
      </div>
    </section>
  );
};
