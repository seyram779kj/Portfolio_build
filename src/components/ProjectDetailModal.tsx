import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X, ExternalLink, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { ProjectGalleryImage, ProjectItem } from '../types/portfolio';
import { ImageLightboxModal } from './ImageLightboxModal';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<ProjectGalleryImage | null>(null);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeLightboxImage) {
          setActiveLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeLightboxImage]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <div className="relative bg-[#13161c] border border-[#1e2430] rounded-2xl max-w-5xl w-full my-auto shadow-2xl overflow-hidden text-slate-200 max-h-[92vh] flex flex-col">
          {/* Top Bar with Category, Next/Prev, and Close */}
          <div className="sticky top-0 z-20 px-4 sm:px-6 py-3 sm:py-4 bg-[#161a23]/95 backdrop-blur-md border-b border-[#1e2430] flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5 text-xs font-mono truncate">
              <span className="px-2.5 py-0.5 bg-[#ff4d2e] text-white font-extrabold uppercase rounded text-[10px] tracking-wider shrink-0">
                {project.categoryDisplay}
              </span>
              <span className="text-slate-400 font-bold hidden xs:inline">{project.year}</span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="text-slate-400 truncate hidden sm:inline">{project.title}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Previous Project */}
              <button
                onClick={() => onSelectProject(prevProject)}
                className="px-2.5 py-1 text-xs font-mono font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 min-h-[34px]"
                title={`Previous: ${prevProject.title}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Prev</span>
              </button>

              {/* Next Project */}
              <button
                onClick={() => onSelectProject(nextProject)}
                className="px-2.5 py-1 text-xs font-mono font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 min-h-[34px]"
                title={`Next: ${nextProject.title}`}
              >
                <span className="hidden md:inline text-[11px]">Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-[#ff4d2e] flex items-center justify-center transition-colors text-sm min-h-[34px] min-w-[34px] cursor-pointer ml-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-8 lg:p-10 space-y-8 overflow-y-auto">
            {/* Header: Title, Description, Quick Meta Grid */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight [text-wrap:balance]">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-sans">
                  {project.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#0b0c10] border border-[#1e2430] rounded-xl text-xs font-sans">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    My Role
                  </span>
                  <span className="font-semibold text-white text-xs block leading-snug">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Timeline
                  </span>
                  <span className="font-semibold text-white text-xs block font-mono">
                    {project.timeline}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Tools & Technologies
                  </span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-[#161a23] text-slate-300 rounded font-mono text-[11px] border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links (Show ONLY buttons that have a real destination!) */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.liveUrl && project.liveUrl.startsWith('http') && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#ff4d2e] hover:bg-[#e03a1c] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>View live site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.figmaUrl && project.figmaUrl.startsWith('http') && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer border border-slate-700"
                  >
                    <span>View Figma file</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.prototypeUrl && project.prototypeUrl.startsWith('http') && (
                  <a
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-transparent hover:bg-white/5 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>View prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Short Overview Section: The Problem, What I Did, What Came Out of It */}
            <div className="space-y-4 pt-2 border-t border-[#1e2430]">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff4d2e]">
                Project Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. The Problem */}
                <div className="p-5 bg-[#0b0c10] border border-[#1e2430] rounded-xl space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    01. The Problem
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {project.overview.problem}
                  </p>
                </div>

                {/* 2. What I Did */}
                <div className="p-5 bg-[#0b0c10] border border-[#1e2430] rounded-xl space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    02. What I Did
                  </span>
                  <ul className="space-y-1.5 list-none text-xs sm:text-sm text-slate-200 font-sans">
                    {project.overview.whatIDid.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. What Came Out of It */}
                <div className="p-5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                    03. What Came Out of It
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-sans font-medium">
                    {project.overview.whatCameOutOfIt}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery with Captions and Lightbox Click */}
            <div className="space-y-4 pt-2 border-t border-[#1e2430]">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff4d2e]">
                  Visual Gallery & Screenshots ({project.images.length})
                </h2>
                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                  Click any image to open full-screen lightbox
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, idx) => {
                  const isPlaceholder = img.isPlaceholder || img.url.startsWith('[ADD');

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveLightboxImage(img)}
                      className="group relative bg-[#0b0c10] border border-[#1e2430] hover:border-[#ff4d2e] rounded-xl overflow-hidden transition-all cursor-pointer flex flex-col justify-between"
                    >
                      {/* Image container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                        {isPlaceholder ? (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-radial from-slate-800 to-black space-y-2">
                            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                              <ImageIcon className="w-5 h-5 text-[#ff4d2e]" />
                            </div>
                            <span className="text-xs font-medium text-slate-200 line-clamp-2 px-3 text-center">
                              {img.caption}
                            </span>
                            <span className="text-[10px] text-[#ff4d2e] font-mono tracking-wider uppercase">
                              Workflow Preview
                            </span>
                          </div>
                        ) : (
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        )}

                        {/* Lightbox hint badge */}
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/75 backdrop-blur text-[10px] font-mono text-white rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                          <ZoomIn className="w-3 h-3 text-[#ff4d2e]" />
                          <span>Enlarge</span>
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="p-3 text-xs text-slate-300 font-sans border-t border-[#1e2430] bg-[#0e1017]">
                        {img.caption}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Navigation */}
            <div className="pt-6 border-t border-[#1e2430] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-[#ff4d2e] text-white rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous: {prevProject.title}</span>
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-[#ff4d2e] text-white rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        image={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
      />
    </>
  );
};
