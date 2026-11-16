import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-950 text-gray-100 font-sans selection:bg-gold-500/20 selection:text-gold-300">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
