import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "./CloseIcon";
type Props = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

const sidebarVariants = {
  closed: {
    x: -250,
    height: "100%",
    opacity: 1,
  },
  open: {
    x: 0,
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: -250,
    height: "100%",
    opacity: 1,
  },
};

const listTransition = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

type Sections = "home" | "about" | "learnJS" | "learnReact";

export const SideBar = ({ isSidebarOpen, closeSidebar }: Props) => {
    const [activeSection, setActiveSection] = useState<Sections>("home");

  return (
    <AnimatePresence>
      <motion.div
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        exit="closed"
        variants={sidebarVariants}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="bg-gray-900 shadow-lg flex h-screen fixed top-0 left-0 py-4 px-2 w-[250px]"
      >
        <div className="flex w-full h-auto items-end flex-col">
          <div onClick={closeSidebar} className="w-auto h-auto p-0 m-0">
            <CloseIcon />
          </div>

          <motion.ul variants={listTransition} className="w-full h-auto py-4">
            <motion.li
              variants={itemVariants}
              className={`h-6 flex items-center py-6 px-4 rounded-lg font-Signika text-bold text-white ${
                activeSection === "home" ? "bg-blue-600" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </motion.li>

            <motion.li
              onClick={() => setActiveSection("about")}
              variants={itemVariants}
              className={`h-6 flex items-center py-6 px-4 rounded-lg font-Signika text-bold text-white ${
                activeSection === "about" ? "bg-blue-600" : ""
              }`}
            >
              <Link to="/about">About</Link>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={`h-6 flex items-center py-6 px-4 rounded-lg font-Signika text-bold text-white ${
                activeSection === "learnJS" ? "bg-blue-600" : ""
              }`}
            >
              Aprende JS
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={`h-6 flex items-center py-6 px-4 rounded-lg font-Signika text-bold text-white ${
                activeSection === "learnReact" ? "bg-blue-600" : ""
              }`}
            >
              Aprende React
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
