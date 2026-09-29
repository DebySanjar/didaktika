import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Page Content with transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="pt-20 pb-16"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🎓</span>
                <h3 className="text-xl font-bold">Didaktika</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Pedagogika va Psixologiya fanidan interaktiv o'quv moduli. 
                Meme'lar, animatsiya va hayotiy misollar bilan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Mavzular</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📌 Didaktikaning predmeti</li>
                <li>📌 Asosiy kategoriyalar</li>
                <li>📌 Tarixiy tizimlar</li>
                <li className="text-gray-500">🔒 Didaktika tamoyillari</li>
                <li className="text-gray-500">🔒 AI va zamonaviy ta'lim</li>
              </ul>
            </div>

            {/* Stats */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Statistika</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-2xl font-bold gradient-text">3</div>
                  <div className="text-xs text-gray-300">Mavzular</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-2xl font-bold gradient-text">12+</div>
                  <div className="text-xs text-gray-300">Meme'lar</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-2xl font-bold gradient-text">∞</div>
                  <div className="text-xs text-gray-300">Bilim</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-gray-300">Sifat</div>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Didaktika Interaktiv Modul | S2 · Pedagogika va Psixologiya</p>
            <p className="mt-2">Made with ❤️ and memes 🎭</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
