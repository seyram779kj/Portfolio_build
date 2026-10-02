import { jsPDF } from 'jspdf';
import {
  PROFILE,
  WORK_EXPERIENCE,
  SKILL_GROUPS,
  EDUCATION,
  CERTIFICATIONS,
  VOLUNTEERING,
  PROJECTS_GALLERY,
} from '../data/portfolioData';

/**
 * Generates and downloads a clean, ATS-compliant, beautifully formatted
 * PDF Curriculum Vitae for Kingsley Kwasi Atitsogbe using jsPDF.
 */
export const downloadResumePdf = (): boolean => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let y = 14;

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - 16) {
        doc.addPage();
        y = 14;
        return true;
      }
      return false;
    };

    // Color definitions
    const COLOR_PRIMARY = [20, 24, 33];      // #141821 Dark Charcoal
    const COLOR_ACCENT = [224, 58, 28];       // #E03A1C Warm Red / Rust
    const COLOR_MUTED = [100, 116, 139];     // Slate-500
    const COLOR_DARK = [30, 41, 59];         // Slate-800
    const COLOR_LINE = [226, 232, 240];      // Slate-200

    // ==========================================
    // 1. HEADER
    // ==========================================
    doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(PROFILE.legalName.toUpperCase(), margin, y);
    y += 5.5;

    // Subtitle / Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2]);
    doc.text('PRODUCT MANAGER & COMPUTER SCIENCE PROFESSIONAL', margin, y);
    y += 4.5;

    // Contact metadata line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
    const contactLine1 = `${PROFILE.location}   |   ${PROFILE.email}   |   ${PROFILE.phonePrimary} / ${PROFILE.phoneSecondary}`;
    doc.text(contactLine1, margin, y);
    y += 4;

    const contactLine2 = `LinkedIn: ${PROFILE.linkedinDisplay}`;
    doc.text(contactLine2, margin, y);
    y += 3.5;

    // Divider
    doc.setDrawColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + contentWidth, y);
    y += 5;

    // Helper for Section Headings
    const drawSectionHeader = (title: string) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      doc.text(title.toUpperCase(), margin, y);
      y += 1.5;

      doc.setDrawColor(COLOR_LINE[0], COLOR_LINE[1], COLOR_LINE[2]);
      doc.setLineWidth(0.35);
      doc.line(margin, y, margin + contentWidth, y);
      y += 4;
    };

    // ==========================================
    // 2. PROFESSIONAL SUMMARY
    // ==========================================
    drawSectionHeader('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);
    const summaryLines = doc.splitTextToSize(PROFILE.about, contentWidth);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 3.7 + 3;

    // ==========================================
    // 3. CORE SKILLS & EXPERTISE
    // ==========================================
    drawSectionHeader('Core Competencies & Technical Skills');
    SKILL_GROUPS.forEach((group) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      const catLabel = `${group.category}: `;
      doc.text(catLabel, margin, y);
      const catWidth = doc.getTextWidth(catLabel);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);
      const skillsStr = group.skills.join('  •  ');
      const wrappedSkills = doc.splitTextToSize(skillsStr, contentWidth - catWidth);
      doc.text(wrappedSkills, margin + catWidth, y);
      y += wrappedSkills.length * 3.6 + 1.5;
    });
    y += 2;

    // ==========================================
    // 4. WORK EXPERIENCE
    // ==========================================
    drawSectionHeader('Work Experience');
    WORK_EXPERIENCE.forEach((exp) => {
      checkPageBreak(18);

      // Role and Period
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      doc.text(exp.role, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
      doc.text(exp.period, margin + contentWidth, y, { align: 'right' });
      y += 4;

      // Company and Location
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(COLOR_ACCENT[0], COLOR_ACCENT[1], COLOR_ACCENT[2]);
      doc.text(exp.company, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
      doc.text(exp.location, margin + contentWidth, y, { align: 'right' });
      y += 4;

      // Highlights
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);

      exp.highlights.forEach((hl) => {
        checkPageBreak(8);
        const bullet = '•';
        doc.text(bullet, margin + 1.5, y);
        const lines = doc.splitTextToSize(hl, contentWidth - 6);
        doc.text(lines, margin + 5, y);
        y += lines.length * 3.5 + 1.2;
      });

      y += 2;
    });

    // ==========================================
    // 5. SELECTED PRODUCT INITIATIVES / PROJECTS
    // ==========================================
    drawSectionHeader('Key Product Initiatives & Deliverables');
    PROJECTS_GALLERY.slice(0, 4).forEach((proj) => {
      checkPageBreak(12);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      doc.text(`${proj.title} — ${proj.role}`, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
      doc.text(proj.categoryDisplay, margin + contentWidth, y, { align: 'right' });
      y += 3.8;

      doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);
      const descLines = doc.splitTextToSize(proj.description, contentWidth - 4);
      doc.text(descLines, margin + 2, y);
      y += descLines.length * 3.4 + 1.8;
    });

    // ==========================================
    // 6. EDUCATION
    // ==========================================
    drawSectionHeader('Education');
    EDUCATION.forEach((edu) => {
      checkPageBreak(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      doc.text(edu.degree, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
      doc.text(edu.period, margin + contentWidth, y, { align: 'right' });
      y += 3.8;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);
      const eduDetail = `${edu.institution}${edu.gpa ? `  |  ${edu.gpa}` : ''}`;
      doc.text(eduDetail, margin, y);
      y += 4.5;
    });

    // ==========================================
    // 7. CERTIFICATIONS & CONTINUING EDUCATION
    // ==========================================
    drawSectionHeader('Certifications & Professional Development');
    CERTIFICATIONS.forEach((cert) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      doc.text(cert.title, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
      doc.text(cert.period, margin + contentWidth, y, { align: 'right' });
      y += 3.5;

      doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);
      doc.text(cert.issuer, margin, y);
      y += 4;
    });

    // ==========================================
    // 8. VOLUNTEERING & LEADERSHIP
    // ==========================================
    if (VOLUNTEERING && VOLUNTEERING.length > 0) {
      drawSectionHeader('Leadership & Community Engagement');
      VOLUNTEERING.forEach((vol) => {
        checkPageBreak(12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.8);
        doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
        doc.text(`${vol.title} — ${vol.organization}`, margin, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.2);
        doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
        doc.text(vol.period, margin + contentWidth, y, { align: 'right' });
        y += 3.8;

        if (vol.description) {
          const volDescLines = doc.splitTextToSize(vol.description, contentWidth - 4);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(COLOR_DARK[0], COLOR_DARK[1], COLOR_DARK[2]);
          doc.text(volDescLines, margin + 2, y);
          y += volDescLines.length * 3.4 + 2;
        }
      });
    }

    // Add page numbers to all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(COLOR_MUTED[0], COLOR_MUTED[1], COLOR_MUTED[2]);
      doc.setDrawColor(COLOR_LINE[0], COLOR_LINE[1], COLOR_LINE[2]);
      doc.setLineWidth(0.2);
      doc.line(margin, pageHeight - 10, margin + contentWidth, pageHeight - 10);

      doc.text(
        `${PROFILE.legalName} — Product Manager & Computer Science Professional`,
        margin,
        pageHeight - 6.5
      );
      doc.text(
        `Page ${i} of ${totalPages}`,
        margin + contentWidth,
        pageHeight - 6.5,
        { align: 'right' }
      );
    }

    // Save PDF
    const filename = `${PROFILE.legalName.replace(/\s+/g, '_')}_CV.pdf`;
    doc.save(filename);
    return true;
  } catch (error) {
    console.error('Failed to generate CV PDF:', error);
    return false;
  }
};
