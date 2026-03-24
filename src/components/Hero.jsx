import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Me from "../assets/me.jpg";
import Button from "./Button";

const icons = [
  { index: 1, icon: <FaGithub />, link: "https://github.com/Yousefkhalil00" },
  { index: 2, icon: <MdEmail />, link: "mailto:yousefkhalil894@gmail.com" },
  {
    index: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/yousef-khalil-44617a279/",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] container mx-auto py-10 px-6 gap-12 lg:gap-0 items-center min-h-[80vh]"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-between gap-6 order-2 lg:order-1 text-center lg:text-left"
      >
        <p className="text-secondary text-xl tracking-wide">Hello I'm</p>
        <h1 className="lg:text-6xl md:text-5xl text-4xl bg-gradient-to-b from-blue-600 to-blue-400 text-transparent bg-clip-text font-bold">
          Yousef Khalil
        </h1>
        <div className="font-bold">
          <TypeAnimation
            sequence={[
              "Front-End Developer",
              500,
              "Problem Solving",
              1000,
              "UI Designer",
              1000,
            ]}
            wrapper="span"
            speed={1}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-secondary text-lg md:text-xl tracking-wide leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Front End Developer with 1.5+ years of experience building scalable
          web applications. Passionate about teaching and helping others learn
          programming.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 w-full mt-4">
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto hover:bg-blue-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 active:scale-95">
              View My Work
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-glass border-secondary border hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 active:scale-95">
              Get In Touch
            </Button>
          </a>
          <a
            href="./assets/Yousef-KhalilCV.pdf"
            download="Yousef-KhalilCV.pdf"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto bg-glass border border-blue-500 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 active:scale-95 group">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent group-hover:text-blue-300 transition-colors">
                Download CV
              </span>
            </Button>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start text-2xl gap-5 mt-2">
          {icons.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glass border border-secondary p-3 rounded-xl hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:-translate-y-1 duration-300 transition-all"
              key={item.index}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center order-1 lg:order-2 w-full max-w-[300px] md:max-w-[400px] mx-auto"
      >
        <div className="rounded-full border-blue-600 border-4 p-2 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
          <img
            className="w-full aspect-square object-cover rounded-full border border-primary grayscale-100 hover:grayscale-0 duration-500 object-top"
            src={Me}
            alt="My Picture"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
