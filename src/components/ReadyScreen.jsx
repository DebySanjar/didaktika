import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ReadyScreen = ({ onComplete, topicNumber, topicTitle }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(() => {
        onComplete && onComplete()
      }, 500)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white"
        >
          <div className="w-12 h-12 border-t-2 border-l-2 border-white"></div>
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 md:top-12 md:right-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white"
        >
          <div className="w-12 h-12 border-t-2 border-r-2 border-white"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white"
        >
          <div className="w-12 h-12 border-b-2 border-l-2 border-white"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white"
        >
          <div className="w-12 h-12 border-b-2 border-r-2 border-white"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="text-center px-4">
        {/* Topic Number - Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <div className="text-[12rem] md:text-[18rem] font-black text-white/10 leading-none">
            {topicNumber}
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <motion.h1 
            className="text-5xl md:text-8xl font-black text-white tracking-tight"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: '0em', opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            HAMMASI
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-8xl font-black text-white tracking-tight"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: '0em', opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            TAYYORMI?
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        {topicTitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-white/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto"
          >
            {topicTitle}
          </motion.p>
        )}

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -20,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ReadyScreen
