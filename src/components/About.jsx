import Card from "./Card";
import { BsGithub, BsAward, BsBriefcase, BsEmojiSmile } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="lg:w-[80%] container mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <p className="text-blue-500 tracking-widest font-semibold uppercase text-sm">
          Get To Know Me
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          About <span className="text-blue-400">Me</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] justify-between py-12 lg:py-20 items-center gap-12 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-zinc-400 tracking-wide text-lg md:text-xl leading-relaxed">
            I'm a Front End Developer with a passion for crafting beautiful,
            responsive, and high-performance web experiences. I specialize in
            turning ideas into clean, interactive interfaces using modern
            technologies like React, Tailwind CSS, and JavaScript. <br /> <br />
            With hands-on experience in building scalable front-end
            architectures and a strong eye for UI/UX design, I focus on creating
            visually compelling and maintainable interfaces that deliver
            seamless user experiences. I'm driven by continuous learning and
            love collaborating with remote teams to bring creative visions to
            life.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-5"
        >
          <Card icon={<BsGithub />} title="5" description="Projects" />
          <Card icon={<BsAward />} title="2" description="Certificates" />
          <Card icon={<BsBriefcase />} title="+1.5" description="Experience" />
          <Card icon={<BsEmojiSmile />} title="+10" description="Clients" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
