import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'
import { SIDEBAR_VARIANTS, LIST_VARIANTS, ITEM_VARIANTS } from './variants'
import { LIST_SECTIONS } from './constants'
type Props = {
  isSidebarOpen: boolean
  closeSidebar: () => void
}

type Sections = 'home' | 'about' | 'learnJS' | 'learnReact'

export const SideBar = ({ isSidebarOpen, closeSidebar }: Props) => {
  const [activeSection, setActiveSection] = useState<Sections>('home')

  const setCurrentPage = (page: Sections) => {
    setActiveSection(page)
    closeSidebar()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial="closed"
        animate={isSidebarOpen ? 'open' : 'closed'}
        exit="closed"
        variants={SIDEBAR_VARIANTS}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="fixed top-0 left-0 flex h-screen w-[250px] bg-gray-900 py-4 px-2 shadow-lg"
      >
        <div className="flex h-auto w-full flex-col items-end">
          <div onClick={closeSidebar} className="m-0 h-auto w-auto p-0">
            <AiFillCloseCircle color="#fff" />
          </div>

          <motion.ul variants={LIST_VARIANTS} className="h-auto w-full py-4">
            {LIST_SECTIONS.map((section) => (
              <motion.li
                key={section.id}
                onClick={() => setCurrentPage(section.id as Sections)}
                variants={ITEM_VARIANTS}
                className={`text-bold flex h-6 items-center gap-3 rounded-lg py-6 px-4 font-Signika text-white ${
                  activeSection === section.id ? 'bg-blue-600' : ''
                }`}
              >
                {section.icon} <Link to={section.url}>{section.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
