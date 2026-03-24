import { motion } from "framer-motion";

const degrees = [
  {
    title: "Bachelor of Computer Science",
    institution: "Faculty of Computers and Information, Suez University",
    years: "2020 – 2024",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 2.21 2.686 4 6 4s6-1.79 6-4v-5" />
      </svg>
    ),
  },
  {
    title: "React - The Complete Guide (incl. Next.js, Redux)",
    institution: "Udemy (Maximilian Schwarzmuller)",
    years: "2025 ",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 2.21 2.686 4 6 4s6-1.79 6-4v-5" />
      </svg>
    ),
  },
];

const certificates = [
  {
    name: "Cybersecurity",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    name: "UI/UX Designer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    name: "Web Development Challenger",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

function DegreeCard({ title, institution, years, icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-[#111127] border border-blue-500/25 rounded-2xl px-6 md:px-8 py-6 md:py-7 mb-7 transition-all duration-300 hover:bg-[#16163a] hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(59,130,246,0.18)] cursor-default"
    >
      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-[14px] bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:shadow-[0_6px_28px_rgba(59,130,246,0.55)] group-hover:scale-105">
        {icon}
      </div>
      <div>
        <p className="font-bold text-base md:text-lg text-white/90 mb-1 transition-colors duration-300">
          {title}
        </p>
        <p className="text-sm text-white/50 mb-2 transition-colors duration-300 group-hover:text-white/90">
          {institution}
        </p>
        <p className="text-xs md:text-sm font-semibold text-blue-400 tracking-wide">
          {years}
        </p>
      </div>
    </motion.div>
  );
}

function CertCard({ name, icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col items-center gap-4 bg-[#111127] border border-blue-500/25 rounded-2xl px-6 py-8 overflow-hidden transition-all duration-300 hover:bg-[#16163a] hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_10px_44px_rgba(59,130,246,0.20)] cursor-default"
    >
      {/* shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-[14px] bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_4px_18px_rgba(59,130,246,0.30)] transition-all duration-300 group-hover:shadow-[0_6px_28px_rgba(59,130,246,0.55)] group-hover:scale-110 relative z-10">
        {icon}
      </div>
      <p className="text-xs md:text-sm font-medium text-white/50 text-center leading-snug transition-colors duration-300 group-hover:text-white/90 relative z-10">
        {name}
      </p>
    </motion.div>
  );
}

export default function EducationCertificates() {
  return (
    <section
      id="education"
      className="bg-[#09090f] flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-blue-500 mb-3">
            Learning Journey
          </p>
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 md:mb-14">
            Education <span className="text-white">&amp; Certificates</span>
          </h2>
        </motion.div>

        {/* Degree */}
        {degrees.map((d) => (
          <DegreeCard key={d.title} {...d} />
        ))}

        {/* Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {certificates.map((c) => (
            <CertCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
