import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const PresentationNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const routes = ['/', '/syllabus', '/topic1', '/topic2', '/topic3']
  const currentIndex = routes.indexOf(location.pathname)

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Arrow Right or Space -> Next
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        if (currentIndex < routes.length - 1) {
          navigate(routes[currentIndex + 1])
        }
      }
      // Arrow Left -> Previous
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (currentIndex > 0) {
          navigate(routes[currentIndex - 1])
        }
      }
      // Home -> First slide
      if (e.key === 'Home') {
        e.preventDefault()
        navigate(routes[0])
      }
      // End -> Last slide
      if (e.key === 'End') {
        e.preventDefault()
        navigate(routes[routes.length - 1])
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, navigate])

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center space-x-3">
      {/* Progress dots */}
      <div className="flex space-x-2 bg-white/10 backdrop-blur-lg px-4 py-3 rounded-full border border-white/20">
        {routes.map((route, index) => (
          <button
            key={route}
            onClick={() => navigate(route)}
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : index < currentIndex
                  ? 'bg-white/50'
                  : 'bg-white/20'
              }`}
            />
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                {index === 0 && 'Kirish'}
                {index === 1 && 'Reja'}
                {index === 2 && 'Mavzu 1'}
                {index === 3 && 'Mavzu 2'}
                {index === 4 && 'Mavzu 3'}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(routes[currentIndex - 1])}
          className="w-12 h-12 bg-white/10 backdrop-blur-lg hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all"
        >
          ←
        </motion.button>
      )}

      {currentIndex < routes.length - 1 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(routes[currentIndex + 1])}
          className="w-12 h-12 bg-white/10 backdrop-blur-lg hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all"
        >
          →
        </motion.button>
      )}
    </div>
  )
}

export default PresentationNav
