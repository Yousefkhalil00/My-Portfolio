import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 lg:w-[80%] container mx-auto">
      <h1 className="text-2xl font-bold text-white tracking-widest relative z-50">
        Yk<span className="text-blue-500">.</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-secondary font-semibold">
        {links.map((link) => {
          return (
            <a
              className="hover:text-blue-400 transition-colors duration-300"
              key={link}
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          );
        })}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-4xl focus:outline-none relative z-50 hover:text-blue-400 transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <BsX /> : <BsList />}
      </button>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 h-screen w-full bg-black z-40 flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-5xl font-bold hover:text-blue-500 transition-colors duration-300 tracking-wider"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

