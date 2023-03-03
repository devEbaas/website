import { motion } from 'framer-motion'
import logo from '../../assets/beka-dark.png'
import { ABOUT_COPIES, ABOUT_TECNOLOGIES } from './copies'

export const About = () => {
  return (
    <div className="flex flex-col px-2 pt-6">
      <motion.div
        className="flex h-auto w-full items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="logo del sitio" className="h-auto w-1/2" />
      </motion.div>
      <motion.div
        className="w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-justify font-Signika">
          {ABOUT_COPIES.personalDescription}
        </p>
      </motion.div>
      <div className="flex w-full flex-col items-center justify-center px-4 pt-4">
        <motion.h2
          className="text-justify font-Signika text-[2rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experiencia técnica
        </motion.h2>
        <div className="flex w-full flex-wrap items-center justify-center gap-8 pt-4">
          {ABOUT_TECNOLOGIES.map((technology, index: number) => (
            <motion.div
              key={technology.name}
              className="flex h-28 w-28 items-center justify-center rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {technology.element}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
