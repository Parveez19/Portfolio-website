'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm Parveez - Software Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
     
      <div className="absolute inset-0 
        /* LIGHT MODE: Use a subtle white/light-gray */
        bg-white 
        /* DARK MODE: Use your primary dark gradient colors */
        dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20
            /* LIGHT MODE: Subtle light color */
            bg-gray-200 
            /* DARK MODE: Subtle dark emerald color */
            dark:bg-emerald-800"
        />
        
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 
            /* Light/Dark Text Color */
            text-gray-900 dark:text-white"
        >
          {text}
          
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-emerald-500" // Use your accent color
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-xl mb-8 
            text-gray-600 dark:text-gray-300"
        >
          Creating beautiful, functional web experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="space-x-4"
        >
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-medium transition duration-300
              /* Light/Dark BG - Use a solid Emerald color */
              bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <a href="/projects"> View My Work</a>
          </motion.button>
          
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-medium transition duration-300
              /* Light Mode */
              border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50
              /* Dark Mode */
              dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-gray-900"
          >
            <a href="/contact"> Contact Me</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}