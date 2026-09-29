import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Kirish', icon: '🏠' },
    { path: '/syllabus', label: 'Reja', icon: '📋' },
    { path: '/topic1', label: 'Predmet', icon: '🎯' },
    { path: '/topic2', label: 'Kategoriyalar', icon: '🗂️' },
    { path: '/topic3', label: 'Tarix', icon: '⏳' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-3xl"
            >
              🎓
            </motion.div>
            <div>
              <h1 className="text-xl font-display font-bold gradient-text">
                Didaktika
              </h1>
              <p className="text-xs text-gray-500">Ta'lim Nazariyasi</p>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 ${
                      isActive 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Progress Badge */}
          <div className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
            <span className="text-sm font-medium text-gray-700">Progress:</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((step) => {
                const completed = 
                  (step === 1 && ['/topic1'].includes(location.pathname)) ||
                  (step === 2 && ['/topic2'].includes(location.pathname)) ||
                  (step === 3 && ['/topic3'].includes(location.pathname))
                
                return (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      completed 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125' 
                        : 'bg-gray-300'
                    }`}
                  />
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu - Simple version */}
      <div className="md:hidden px-4 pb-3 bg-white/90 backdrop-blur-lg">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                location.pathname === item.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-500'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
