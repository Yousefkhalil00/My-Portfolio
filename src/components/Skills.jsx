import { DiReact } from "react-icons/di";
import { BsTools } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { BiPhone } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { motion } from "framer-motion";

const content = [
  {
    title: "FrontEnd Developer",
    icon: <BsTools />,
    icons: [
      { icon: <DiReact />, details: "React" },
      { icon: <DiHtml5 />, details: "Html" },
      { icon: <BsBootstrap />, details: "BootStrap" },
      { icon: <DiCss3 />, details: "Css" },
      { icon: <BiPhone />, details: "Responsive" },
    ],
  },
  {
    title: "UI Designer",
    icon: <BsTools />,
    icons: [
      { icon: <CgFigma />, details: "Figma" },
      { icon: <SiAdobexd />, details: "AdobeXd" },
    ],
  },
  {
    title: "Tools And Skills",
    icon: <BsTools />,
    icons: [
      { icon: <BsGithub />, details: "Github" },
      { icon: <FaGitAlt />, details: "Git" },
      { icon: <BsRobot />, details: "AICoding" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:w-[80%] container mx-auto px-6 py-20 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <p className="text-blue-500 tracking-widest font-semibold uppercase text-sm">What I Know</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
          Skills & <span className="text-blue-400">Technologies</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
        {content.map((item, index) => {
          return (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.title}
              className="flex flex-col gap-6 bg-[#111127] p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] duration-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl text-white font-bold">
                  {item.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-start">
                {item.icons.map((subItem) => (
                  <div key={subItem.details} className="flex hover:-translate-y-1 items-center gap-2 bg-white/5 hover:bg-blue-500 hover:text-white border border-white/10 p-3 rounded-xl text-zinc-400 duration-300 transition-all group cursor-default">
                    <span className="text-xl text-blue-400 group-hover:text-white transition-colors">
                      {subItem.icon}
                    </span>
                    <span className="text-sm font-medium">
                      {subItem.details}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
