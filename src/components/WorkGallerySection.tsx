import React, { useState } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { PROJECTS_GALLERY } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface WorkGallerySectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterOption = 'All' | 'Product' | 'Design' | 'Web Builds' | 'Research';

export const WorkGallerySection: React.FC<WorkGallerySectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  // Filter logic allowing 'Product + Design' to match both Product and Design tabs
  const filteredProjects = PROJECTS_GALLERY.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Product') {
      return project.category === 'Product' || project.categoryDisplay.toLowerCase().includes('product');
    }
    if (activeFilter === 'Design') {
      return project.category === 'Design' || project.categoryDisplay.toLowerCase().includes('design');
    }
    if (activeFilter === 'Web Builds') {
      return project.category === 'Web Builds' || project.categoryDisplay.toLowerCase().includes('web');
    }
    if (activeFilter === 'Research') {
      return project.category === 'Research' || project.categoryDisplay.toLowerCase().includes('research');
    }
    return true;
  });

  const filterTabs: { id: FilterOption; label: string }[] = [
    { id: 'All', label: 'All Projects' },
    { id: 'Product', label: 'Product' },
    { id: 'Design', label: 'UI/UX Design' },
    { id: 'Web Builds', label: 'Web Builds' },
    { id: 'Research', label: 'Research' },
  ];

  return (
    <section id="work" className="py-20 md:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200/80">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide text-[#ff4d2e]">
              <AsteriskIcon className="w-4 h-4" color="#ff4d2e" />
              <span>DEDICATED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111317] tracking-tight">
              Work & Design Gallery
            </h2>
            <p className="text-sm text-slate-600 font-sans max-w-xl leading-relaxed">
              Curated case studies across healthcare product development, responsive web applications, and field research. Click any project card to open complete specifications, workflows, and mockups.
            </p>
          </div>

          {/* Filter Tabs: All | Product | Design | Web Builds | Research */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200/90 rounded-2xl overflow-x-auto no-scrollbar shadow-xs self-start md:self-auto shrink-0">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              // Count matching projects
              const count = tab.id === 'All' 
                ? PROJECTS_GALLERY.length 
                : PROJECTS_GALLERY.filter((p) => {
                    if (tab.id === 'Product') return p.category === 'Product' || p.categoryDisplay.toLowerCase().includes('product');
                    if (tab.id === 'Design') return p.category === 'Design' || p.categoryDisplay.toLowerCase().includes('design');
                    if (tab.id === 'Web Builds') return p.category === 'Web Builds' || p.categoryDisplay.toLowerCase().includes('web');
                    if (tab.id === 'Research') return p.category === 'Research' || p.categoryDisplay.toLowerCase().includes('research');
                    return false;
                  }).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-bold font-mono rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#111317] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#111317] hover:bg-slate-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isTemplate = project.isTemplate;
            const hasRealCover = !project.coverImage.startsWith('[ADD');

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group bg-white border rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:-translate-y-1 ${
                  isTemplate
                    ? 'border-dashed border-slate-300 hover:border-[#ff4d2e] bg-slate-50/70'
                    : 'border-slate-200/90 hover:border-slate-900'
                }`}
              >
                {/* Cover Image Slot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                  {hasRealCover ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-radial from-slate-800 to-black space-y-2.5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-[#ff4d2e]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#ff4d2e]">
                        {project.coverImage}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Add cover.jpg to /src/assets/projects/{project.id}/
                      </span>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 bg-[#111317]/90 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg shadow-sm">
                      {project.categoryDisplay}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-0.5 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold rounded-md">
                    {project.year}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-display text-[#111317] group-hover:text-[#ff4d2e] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools preview & CTA */}
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[11px] font-mono font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-0.5 text-slate-400 text-[10px] font-mono">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-[#111317] pt-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#ff4d2e] group-hover:underline">
                        View Project Detail & Gallery
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#ff4d2e] group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
