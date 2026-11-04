import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

// jsPDF's built-in fonts only support basic Latin characters.
const clean = (s: string): string =>
  s
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/[^\x20-\x7E]/g, '');

const COLORS = {
  black: [17, 24, 39] as [number, number, number],       // #111827
  darkGray: [55, 65, 81] as [number, number, number],   // #374151
  bodyText: [31, 41, 55] as [number, number, number],   // #1F2937
  muted: [107, 114, 128] as [number, number, number],   // #6B7280
  divider: [209, 213, 219] as [number, number, number], // #D1D5DB
  link: [17, 24, 39] as [number, number, number],       // #111827
};

export const generateCV = (): jsPDF => {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210;
  const pageH = 297;
  const margin = 12;
  const contentW = pageW - margin * 2;
  const bottom = pageH - 10;
  let y = 12;

  const ensure = (h: number) => {
    if (y + h > bottom) {
      doc.addPage();
      y = 12;
    }
  };

  const sectionHeader = (title: string) => {
    ensure(10);
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...COLORS.black);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(...COLORS.divider);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentW, y);
    y += 4;
  };

  // Header Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.black);
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y);
  y += 5.5;

  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.darkGray);
  doc.text('SOFTWARE ENGINEERING UNDERGRADUATE', margin, y);
  y += 4.5;

  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.muted);
  doc.text('FULL-STACK DEVELOPMENT | BACKEND DEVELOPMENT | SOFTWARE ENGINEERING', margin, y);
  y += 5;

  // Contact Info Row 1
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.bodyText);
  const contact1 = `+94 77 123 4567   |   ${PERSONAL_INFO.email}   |   Sri Lanka`;
  doc.text(clean(contact1), margin, y);
  y += 4;

  // Contact Info Row 2
  const githubLabel = `GitHub: github.com/Dhilshan02`;
  const linkedinLabel = `LinkedIn: linkedin.com/in/dhilshan-mohamed`;
  const contact2 = `${githubLabel}   |   ${linkedinLabel}`;
  doc.text(clean(contact2), margin, y);
  y += 4;

  // Contact Info Row 3 - Portfolio
  const portfolioText = `Portfolio: dhilshan-portfolio.vercel.app`;
  doc.text(clean(portfolioText), margin, y);
  y += 5;

  // Header Divider
  doc.setDrawColor(...COLORS.divider);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentW, y);
  y += 4;

  // 1. PROFESSIONAL SUMMARY
  sectionHeader('PROFESSIONAL SUMMARY');
  const summaryText =
    'Software Engineering undergraduate at NSBM Green University progressing into 3rd year with hands-on experience developing responsive web applications and working with APIs, databases, and modern software engineering practices. Interested in Full-Stack Engineering, Backend Development, and Software Quality Assurance roles. Strong focus on clean code, software architecture, problem solving, usability, and continuous learning.';
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.bodyText);
  const summaryLines = doc.splitTextToSize(clean(summaryText), contentW) as string[];
  summaryLines.forEach((line) => {
    ensure(3.8);
    doc.text(line, margin, y);
    y += 3.8;
  });
  y += 1.5;

  // 2. TECHNICAL SKILLS
  sectionHeader('TECHNICAL SKILLS');

  const skillsData = [
    { label: 'Frontend', items: 'HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Bootstrap, Component Architecture' },
    { label: 'Backend', items: 'Java, Spring Boot, ASP.NET Core 8, C#, REST APIs, JWT Authentication' },
    { label: 'Database', items: 'SQL, MySQL, PostgreSQL, Microsoft SQL Server' },
    { label: 'Tools', items: 'Git, GitHub, Postman, Vite, EmailJS, Figma, OpenAPI/Swagger' },
  ];

  skillsData.forEach((skill) => {
    ensure(4.2);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.black);
    const prefix = `${skill.label}: `;
    doc.text(prefix, margin, y);
    const prefixW = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.bodyText);
    const lines = doc.splitTextToSize(clean(skill.items), contentW - prefixW) as string[];
    lines.forEach((line, i) => {
      if (i > 0) {
        y += 3.8;
        ensure(3.8);
      }
      doc.text(line, margin + (i === 0 ? prefixW : 0), y);
    });
    y += 4.2;
  });
  y += 1.5;

  // 3. PROJECTS
  sectionHeader('PROJECTS');

  const projects = [
    {
      title: 'Travel to Heaven',
      type: 'Full-Stack Web Application',
      stack: 'React | TypeScript | Java | Spring Boot | PostgreSQL | REST API | Postman',
      github: 'github.com/dhilshan-mohamed/travel-to-heaven',
      bullets: [
        'Developed a travel discovery and trip-planning web application enabling destination exploration, budget tracking, and itinerary management.',
        'Designed responsive user interfaces using React and Tailwind CSS and integrated Spring Boot REST APIs backed by PostgreSQL.',
        'Implemented secure role-based access control and tested API endpoints using Postman to validate payload structures and database persistence.',
      ],
    },
    {
      title: 'RecruitSphere AI',
      type: 'AI & Cloud Web Application',
      stack: 'React | TypeScript | ASP.NET Core 8 | C# | SQL Server | AI Matching Engine',
      github: 'github.com/dhilshan-mohamed/recruitsphere-ai',
      bullets: [
        'Developed an AI-driven talent acquisition platform for parsing applicant resumes against technical job requirements.',
        'Built interactive candidate ranking dashboards, radar chart skill breakdowns, and automated interview scheduling workflows.',
        'Engineered high-performance backend Web APIs with ASP.NET Core 8 and Entity Framework Core.',
      ],
    },
    {
      title: 'FindMyMeds',
      type: 'Full-Stack Web Application',
      stack: 'Spring Boot | Java | MySQL | React | REST API | Geolocation API',
      github: 'github.com/dhilshan-mohamed/find-my-meds',
      bullets: [
        'Developed a pharmacy software application for inventory tracking, automated low-stock alert notifications, and sales reporting.',
        'Implemented relational database schemas and optimized SQL queries for efficient medicine search operations.',
        'Documented structured test cases and performed functional testing to ensure accurate stock search and alert dispatch.',
      ],
    },
    {
      title: 'Goodreads Mobile App Redesign',
      type: 'UI/UX Accessibility Prototype',
      stack: 'Figma | Human-Computer Interaction (HCI) | Wireframing | WCAG Accessibility',
      github: 'figma.com/@dhilshan',
      bullets: [
        'Designed an HCI-focused travel and reading platform prototype aimed at improving digital accessibility for older adults and novices.',
        'Created high-contrast Figma wireframes and interactive prototypes focusing on clear typography and simplified navigation.',
      ],
    },
  ];

  projects.forEach((proj) => {
    ensure(18);
    // Line 1: Title (Bold Left) | Type (Bold Right)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...COLORS.black);
    doc.text(clean(proj.title), margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.darkGray);
    doc.text(clean(proj.type), margin + contentW, y, { align: 'right' });
    y += 4;

    // Line 2: Stack (Italic / Normal)
    doc.setFont('helvetica', 'oblique');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.darkGray);
    doc.text(clean(proj.stack), margin, y);
    y += 3.8;

    // Line 3: GitHub Link
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.bodyText);
    doc.text(clean(proj.github), margin, y);
    y += 4;

    // Bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    proj.bullets.forEach((bulletText) => {
      const lines = doc.splitTextToSize(clean(bulletText), contentW - 5) as string[];
      lines.forEach((line, i) => {
        ensure(3.8);
        doc.setTextColor(...COLORS.bodyText);
        if (i === 0) {
          doc.text('-', margin + 1.5, y);
        }
        doc.text(line, margin + 5, y);
        y += 3.8;
      });
    });
    y += 2;
  });

  // 4. EDUCATION
  sectionHeader('EDUCATION');

  const eduList = [
    {
      degree: 'BSc (Hons) Software Engineering',
      institution: 'NSBM Green University',
      period: '2025 - 2028 (Currently progressing into 3rd year)',
    },
    {
      degree: 'International Diploma in Quantity Surveying (Level 4)',
      institution: 'Metropolitan College (OTHM Qualifications)',
      period: '2026',
    },
  ];

  eduList.forEach((edu) => {
    ensure(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.black);
    const title = `${edu.degree} - ${edu.institution}`;
    doc.text(clean(title), margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.darkGray);
    doc.text(clean(edu.period), margin + contentW, y, { align: 'right' });
    y += 4.5;
  });
  y += 1.5;

  // 5. ADDITIONAL SKILLS & LANGUAGES
  sectionHeader('ADDITIONAL SKILLS & LANGUAGES');

  const additionalInfo = [
    {
      label: 'Additional Skills',
      items: 'Git/GitHub | Postman | Figma | Agile/Scrum | Problem Solving | Technical Communication | Teamwork | Adaptability',
    },
    {
      label: 'Languages',
      items: 'English (Good) | Tamil (Native) | Sinhala (Average)',
    },
  ];

  additionalInfo.forEach((info) => {
    ensure(4.5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.black);
    const prefix = `${info.label}: `;
    doc.text(prefix, margin, y);
    const prefixW = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.bodyText);
    doc.text(clean(info.items), margin + prefixW, y);
    y += 4.5;
  });

  // Footer / Page numbers
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.muted);
    doc.text(`${clean(PERSONAL_INFO.name)} - Curriculum Vitae`, margin, pageH - 5);
    doc.text(`Page ${i} of ${pages}`, margin + contentW, pageH - 5, { align: 'right' });
  }

  return doc;
};

export const downloadCV = (): void => {
  generateCV().save(PERSONAL_INFO.cvFilename);
};
