/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickContactModal } from './components/QuickContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PageId } from './types';

// Dedicated Page Views
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { CoursesPage } from './pages/CoursesPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Informações Gerais e Matrículas');
  const [modalCourse, setModalCourse] = useState<string | undefined>(undefined);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'inicio',
        'quem-somos',
        'ensino',
        'cursos',
        'estrutura',
        'porque-escolher',
        'contactos',
      ];

      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('inicio');
      }
    };

    // Initial load check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = (subject: string = 'Informações Gerais e Matrículas', course?: string) => {
    setModalSubject(subject);
    setModalCourse(course);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'quem-somos':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'ensino':
        return (
          <EducationPage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'cursos':
        return (
          <CoursesPage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'estrutura':
        return (
          <InfrastructurePage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'porque-escolher':
        return (
          <WhyChooseUsPage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'contactos':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-amber-400 selection:text-blue-950 font-sans">
      {/* 1. Header with dynamic page indicators & active state */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* 2. Active Page Content */}
      <main className="flex-grow pt-4">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Footer with page links & WhatsApp */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Interactive Quick Contact & Enrollment Modal (Forwarding to WhatsApp +244 958 363 295) */}
      <QuickContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        initialSubject={modalSubject}
        initialCourse={modalCourse}
      />

      {/* 5. Floating Direct WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
