import React, { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Navbar } from './components/Navbar';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { SkillsSection } from './components/SkillsSection';
import { VolunteeringSection } from './components/VolunteeringSection';
import { WorkGallerySection } from './components/WorkGallerySection';
import { TypographyToolbar } from './components/TypographyToolbar';
import { PROJECTS_GALLERY } from './data/portfolioData';
import { ProjectItem } from './types/portfolio';
import { useTypography } from './utils/useTypography';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  // Initialize dynamic typography engine
  useTypography();

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    contactElem?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreProjects = () => {
    const projectsElem = document.getElementById('work');
    projectsElem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#14151a] flex flex-col font-sans selection:bg-[#ff4d2e] selection:text-white">
      {/* Editorial Navbar with photo & clean links */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero: Kingsley Kwasi Atitsogbe, headline without text overlap, action buttons & portrait */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onExploreProjects={handleExploreProjects}
        />

        {/* Marquee Banner Divider */}
        <MarqueeBanner />

        {/* 2. About: Human bio + metric ticker */}
        <AboutSection />

        {/* 3. WORK / DESIGN GALLERY (Data-Driven with Filter Tabs & Project Cards) */}
        <WorkGallerySection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 4. Experience: Node Eight and ECG in reverse-chronological order */}
        <ExperienceTimeline />

        {/* 5. Skills and tools: Grouped (Product, Design, Data & AWS, AI tools) */}
        <SkillsSection />

        {/* 6. Education: Degrees and Certifications from CV */}
        <EducationSection />

        {/* 7. Volunteering: Community Outreach & Leadership */}
        <VolunteeringSection />

        {/* 8. Contact: Email, both phone numbers, LinkedIn, CV download */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={PROJECTS_GALLERY}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <ResumeViewerModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Typography Customizer */}
      <TypographyToolbar />
    </div>
  );
}
