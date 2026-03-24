import aiImg from "../assets/ai-landing.png";
import ecommerceImg from "../assets/ecommerce.png";
import adhkarImg from "../assets/adhkar.png";
import moviesImg from "../assets/movies.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    badge: "Featured Project",
    badgeColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    title: "AI Landing Page",
    subtitle: "AI SaaS Platform",
    description:
      "A modern, high-converting landing page for an AI SaaS product. Features smooth scroll animations, a glowing hero section, feature highlights, pricing tiers, and a fully responsive layout.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    tagStyle: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    image: aiImg,
    accentColor: "from-purple-500/20 to-blue-500/10",
    glowColor: "shadow-purple-500/20",
    links: {
      live: "https://brainwave00.netlify.app/",
      github: "https://github.com/Yousefkhalil00/Brainwave",
    },
  },
  {
    id: 2,
    badge: "Full-Stack Project",
    badgeColor:
      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    title: "ShopWave",
    subtitle: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings fetched from the Dummy Products API, cart management, user auth, and a complete Stripe payment gateway integration.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "REST API"],
    tagStyle: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    image: ecommerceImg,
    accentColor: "from-emerald-500/20 to-teal-500/10",
    glowColor: "shadow-emerald-500/20",
    links: {
      live: "https://shop-cart-delta-puce.vercel.app/",
      github: "https://github.com/Yousefkhalil00/ShopCart",
    },
  },
  {
    id: 3,
    badge: "Community Project",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    title: "Adhkar & Quran",
    subtitle: "Islamic Companion App",
    description:
      "A comprehensive Islamic website offering full Quran text & audio recitation, daily adhkar, prayer times, and tafseer — powered by multiple public Islamic APIs.",
    tags: ["React", "Quran API", "Adhkar API", "Web Audio"],
    tagStyle: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    image: adhkarImg,
    accentColor: "from-amber-500/20 to-yellow-500/10",
    glowColor: "shadow-amber-500/20",
    links: {
      live: "https://adhkar-chi.vercel.app/",
      github: "https://github.com/Yousefkhalil00/Adhkar",
    },
  },
  {
    id: 4,
    badge: "Featured Project",
    badgeColor: "bg-red-500/20 text-red-400 border border-red-500/30",
    title: "CineVerse",
    subtitle: "Movie Discovery Platform",
    description:
      "A sleek movie discovery platform powered by the TMDB API. Browse latest & popular movies, watch trailers directly on the detail page, and explore by genre with a fast search.",
    tags: ["React", "TMDB API", "React Router", "Tailwind CSS"],
    tagStyle: "bg-red-500/10 text-red-400 border border-red-500/20",
    image: moviesImg,
    accentColor: "from-red-500/20 to-rose-500/10",
    glowColor: "shadow-red-500/20",
    links: {
      live: "https://cineverse-lyart-gamma.vercel.app/",
      github: "https://github.com/Yousefkhalil00/CINEVERSE",
    },
  },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#09090f]">
      <div className="w-full lg:w-[85%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 mb-16"
        >
          <p className="text-blue-400 tracking-[0.3em] text-sm uppercase font-semibold">
            My Work
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-zinc-400 text-center max-w-xl mt-2 text-sm md:text-base leading-relaxed">
            A selection of projects I've built — from AI-driven interfaces to
            full-stack platforms and community apps.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[rgba(26,26,37,0.8)] backdrop-blur-sm hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 60px -10px var(--tw-shadow-color, rgba(0,0,0,0.5))`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Gradient accent top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.accentColor} opacity-60`}
              />

              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.accentColor} opacity-40 z-10`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge */}
                <span
                  className={`absolute top-3 right-3 z-20 text-xs px-3 py-1 rounded-full font-medium ${project.badgeColor}`}
                >
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Title block */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-white text-xl font-bold group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${project.tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    <GithubIcon />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    <ExternalLinkIcon />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
