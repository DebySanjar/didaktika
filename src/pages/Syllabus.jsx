import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Syllabus = () => {
  const navigate = useNavigate()

  const topics = [
    {
      id: 1,
      number: '01',
      title: 'Didaktikaning predmeti va uning vazifalari',
      path: '/topic1',
      available: true,
    },
    {
      id: 2,
      number: '02',
      title: 'Didaktikaning asosiy kategoriyalari',
      path: '/topic2',
      available: true,
    },
    {
      id: 3,
      number: '03',
      title: 'Turli tarixiy davrlarda didaktik tizimlarning shakllanishi va rivojlanishi',
      path: '/topic3',
      available: true,
    },
    {
      id: 4,
      number: '04',
      title: 'Didaktika tamoyillari',
      path: '/topic4',
      available: true,
    },
    {
      id: 5,
      number: '05',
      title: 'Zamonaviy ta\'lim vositasi sifatida sun\'iy intellekt: AI-asosidagi ta\'lim platformalarining didaktik tamoyillarga mosligi',
      path: '/topic5',
      available: true,
    },
    {
      id: 6,
      number: '06',
      title: 'Xulosa',
      path: '#',
      available: false,
    },
  ]

  return (
    <div className="bg-black">
      
      {/* Section 1: Header with Author */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-white mb-4">
              Didaktika — <br/>Ta'lim Nazariyasi
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-medium tracking-widest uppercase mb-12">
              Rejalar
            </p>
            <p className="text-2xl md:text-3xl text-white/60 mb-4">
              Tayyorladi:
            </p>
            <p className="text-3xl md:text-4xl text-white font-bold mb-16">
              Abduganiyev Sanjarbek
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/40 text-5xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/10"></div>
        <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white/10"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white/10"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/10"></div>
      </section>

      {/* Sections 2-7: Each Topic (full screen each) */}
      {topics.map((topic, index) => (
        <section
          key={topic.id}
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        >
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Big Number - White and Larger */}
              <div className="text-[12rem] md:text-[18rem] font-black text-white leading-none mb-12 font-mono">
                {topic.number}
              </div>

              {/* Title - Better font */}
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 px-6 leading-tight font-display">
                {topic.title}
              </h2>

              {/* Button or Status */}
              {topic.available ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(topic.path)}
                  className="px-10 py-5 bg-white text-gray-900 font-bold text-xl rounded-2xl shadow-2xl"
                >
                  O'qishni boshlash →
                </motion.button>
              ) : (
                <div className="inline-block px-8 py-4 bg-white/10 text-white/50 font-semibold text-lg rounded-xl border border-white/20">
                  Tez orada...
                </div>
              )}

              {/* Scroll indicator */}
              {index < topics.length - 1 && (
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white/30 text-4xl mt-16"
                >
                  ↓
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-white/5"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-white/5"></div>
        </section>
      ))}

      {/* Section 8: "HAMMA TAYYORMI?" Fullscreen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          {/* Corner borders */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-20 h-20 border-t-2 border-l-2 border-white/30"></div>
          <div className="absolute top-8 right-8 md:top-12 md:right-12 w-20 h-20 border-t-2 border-r-2 border-white/30"></div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 w-20 h-20 border-b-2 border-l-2 border-white/30"></div>
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-20 h-20 border-b-2 border-r-2 border-white/30"></div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[8rem] md:text-[14rem] font-black text-white tracking-tight leading-none font-display"
            style={{ fontFamily: "'Nunito', 'Inter', sans-serif", letterSpacing: '0.02em' }}
          >
            HAMMA<br/>TAYYORMI?
          </motion.h1>

          {/* Loading bar only */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-20 max-w-md mx-auto"
          >
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}

export default Syllabus
