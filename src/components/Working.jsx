import { motion } from "framer-motion";

const Working = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="w-full lg:w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-5 py-12 lg:py-20"
        >
          <p className="text-blue-500 tracking-widest font-semibold uppercase text-sm">My Journey</p>
          <h2 className="text-blue-400 text-4xl md:text-5xl font-bold text-center">Work Experience</h2>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col w-full border-2 border-white/5 bg-[#111127] hover:border-blue-500/50 hover:bg-[#16163a] rounded-3xl p-6 md:p-8 gap-3 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
          >
            <p className="text-blue-500">2025</p>
            <h1 className="text-white text-2xl font-bold">IT Engineer</h1>
            <p className="text-white/70">Watanya For Roads ( Military )</p>
            <ul className="flex flex-col gap-3 ">
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Manages and maintains systems : An IT engineer ensures that
                computer systems, networks, and servers run smoothly and
                efficiently.
              </li>
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Solves technical problems : They troubleshoot issues related to
                hardware, software, or networks and provide quick solutions to
                keep things working.
              </li>
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Installs and updates software and hardware : IT engineers set up
                new computers, install necessary software, and perform upgrades
                to keep systems up-to-date.
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col w-full border-2 border-white/5 bg-[#111127] hover:border-blue-500/50 hover:bg-[#16163a] rounded-3xl p-6 md:p-8 gap-3 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
          >
            <p className="text-blue-500">2024</p>
            <h1 className="text-white text-2xl font-bold">
              Front end Developer
            </h1>
            <p className="text-white/70">MegaSoft Portsaid ( Internship )</p>
            <ul className="flex flex-col gap-3 ">
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Builds user interfaces : Creates the visual parts of websites
                and apps that users interact with using HTML, CSS, and
                JavaScript.
              </li>
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Improves user experience (UX) : Ensures the design is
                responsive, fast, and easy to use across different devices and
                screen sizes.
              </li>
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Connects design with functionality Works with designers and
                back-end developers to turn designs into working, interactive
                features.
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group flex flex-col w-full border-2 border-white/5 bg-[#111127] hover:border-blue-500/50 hover:bg-[#16163a] rounded-3xl p-6 md:p-8 gap-3 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
          >
            <p className="text-blue-500">2023 - 2024</p>
            <h1 className="text-white text-2xl font-bold">UI/UX Designer</h1>
            <p className="text-white/70">Freelance</p>
            <ul className="flex flex-col gap-3 ">
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Designs user-friendly interfaces: Creates visually appealing and
                easy-to-use layouts for websites and apps.
              </li>
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Enhances user experience (UX) : Studies user behavior and
                improves how users interact with a product to make it smooth and
                intuitive.
              </li>
              <li className="text-white/70 list-disc list-inside marker:text-blue-500">
                Creates wireframes and prototypes : Builds mockups and
                interactive prototypes to test ideas before development.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Working;
