import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const topics = [
    { num: '01', title: "Didaktikaning predmeti va vazifalari" },
    { num: '02', title: "Asosiy kategoriyalar" },
    { num: '03', title: "Tarixiy didaktik tizimlar" },
    { num: '04', title: "Didaktika tamoyillari" },
    { num: '05', title: "AI va zamonaviy ta'lim" },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Corner marks */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-zinc-700" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-zinc-700" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-zinc-700" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-zinc-700" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-8 py-20 relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-10 bg-zinc-600" />
          <span className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-medium">
            Pedagogika va Psixologiya — 2-semestr
          </span>
        </motion.div>

        {/* Big title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[5rem] md:text-[8.5rem] font-black leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-white">Didak-</span>
          <span className="block text-white">tika</span>
          <span className="block text-zinc-600 text-[2.5rem] md:text-[4rem] mt-4 font-black">
            Ta'lim Nazariyasi
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-zinc-800 mb-10 origin-left"
        />

        {/* Topics list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-16"
        >
          {topics.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="group"
            >
              <div className="text-zinc-700 font-mono text-xs mb-1">{t.num}</div>
              <div className="text-zinc-500 text-xs leading-snug group-hover:text-zinc-300 transition-colors">
                {t.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: author + button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          {/* Author */}
          <div>
            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-1">Tayyorladi</p>
            <p className="text-white text-2xl md:text-3xl font-black">Abduganiyev Sanjarbek</p>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/syllabus')}
            className="group flex items-center gap-4 px-8 py-4 border border-zinc-700 hover:border-zinc-400 rounded-2xl transition-all"
          >
            <span className="text-white font-bold text-lg">Boshlash</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-zinc-400 group-hover:text-white transition-colors text-xl"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Big watermark number */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        05
      </div>

    </div>
  )
}

export default Home
