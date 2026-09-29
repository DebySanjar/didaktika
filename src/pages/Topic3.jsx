import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReadyScreen from '../components/ReadyScreen'

const Topic3 = () => {
  const [showReady, setShowReady] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [completedCourse, setCompletedCourse] = useState(false)
  const navigate = useNavigate()

  const eras = [
    {
      id: 1,
      period: 'Qadimgi davr',
      icon: '🏛️',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      scholars: 'Sokrat, Platon, Aristotel',
      method: 'Suhbat va savol-javob (Sokrat usuli)',
      description: 'O\'qitishning asosiy usuli — savollar orqali o\'quvchini o\'zi fikrlashga undash.',
      quote: '"Sen nima deb o\'ylaysan? Nima uchun?" — Sokrat',
      meme: 'Sokrat: "Bilmayman deysan, lekin men ham bilmayman — ikkalamiz ham bilmas ekanmiz. Ammo men bu haqda bilaman 🤓"',
      alignment: 'left'
    },
    {
      id: 2,
      period: 'O\'rta Asrlar',
      icon: '⛪',
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      scholars: 'Ibn Sino, Al-Farobiy',
      method: 'Sxolastika va dogmatik ta\'lim',
      description: 'Diniy matnlarni yodlash va talqin qilish. O\'quvchi savollamaydi — faqat qabul qiladi.',
      quote: '"Bu shunday, chunki kitobda shunday yozilgan." — Muallim',
      meme: 'O\'quvchi: "Nega yer yumaloq?" \nMuallim: "O\'tir, imtihondan o\'tasan — tushunmaysan, yodlaysan" 🧏',
      alignment: 'right'
    },
    {
      id: 3,
      period: 'Uyg\'onish davri',
      icon: '🌱',
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      scholars: 'Jan Amos Komenskiy',
      method: 'Sinf-dars tizimi, sistemali ta\'lim',
      description: 'Zamonaviy didaktikaning asoschisi. "Buyuk didaktika" asarida: Hammaga hamma narsani o\'rgatish mumkin!',
      quote: '"Tabiatga mos ta\'lim" — Komenskiy',
      principles: ['✅ Sinf-dars tizimi', '✅ Yil bo\'yi o\'qish', '✅ Vizual o\'rgatish', '✅ Tabiatga mos ta\'lim'],
      meme: 'Komenskiy: "Rasmli darsliklar yasaymiz!" \nHamma: "Bu bid\'at!" \nKomenskiy: "400 yildan keyin barchangiz YouTube ko\'rasizlar 😎"',
      alignment: 'left'
    },
    {
      id: 4,
      period: 'XIX–XX Asr',
      icon: '🏭',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      scholars: 'Pestalotsi, Dyui, Vygotskiy',
      method: 'Tajriba orqali o\'rganish, ijtimoiy ta\'lim',
      description: 'Pestalotsi — qo\'l mehnati + aqliy rivojlanish. Dyui — "Learning by doing". Vygotskiy — yaqin rivojlanish zonasi.',
      scientists: [
        { name: 'Pestalotsi 🇨🇭', idea: 'Bosh + Qo\'l + Yurak' },
        { name: 'Dyui 🇺🇸', idea: 'Learning by doing' },
        { name: 'Vygotskiy 🇷🇺', idea: 'Yaqin rivojlanish zonasi' }
      ],
      alignment: 'right'
    },
    {
      id: 5,
      period: 'XXI Asr — Hozir',
      icon: '🤖',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      scholars: 'AI va raqamli ta\'lim',
      method: 'Blended learning, Flipped classroom, AI tools',
      description: 'ChatGPT, Khanmigo, Duolingo — bularning hammasi didaktika tamoyillariga asoslanishi kerak!',
      quote: '"Texnologiya — vosita, didaktika — asos" — Zamonaviy qarash',
      meme: 'O\'quvchi: "ChatGPTdan uy vazifasini yozdirib oldim 😎" \nDidaktika: "Yaxshi! Endi tushun, so\'ngra o\'zing yoz — yokhud AI seni boshqaradi 🤖"',
      alignment: 'left'
    }
  ]

  const comparisonData = [
    {
      period: 'Qadimgi',
      approach: 'Suhbat, savol-javob',
      center: '👨‍🏫 O\'qituvchi',
      weakness: 'Faqat elita uchun',
      chip: 'amber'
    },
    {
      period: 'O\'rta asr',
      approach: 'Yodlash, takrorlash',
      center: '📖 Matn',
      weakness: 'Ijodkorlik yo\'q',
      chip: 'purple'
    },
    {
      period: 'Renessans',
      approach: 'Tizimli ta\'lim',
      center: '🏫 Sinf-dars',
      weakness: 'Individual yondashuv kam',
      chip: 'green'
    },
    {
      period: 'XIX–XX',
      approach: 'Tajriba, faoliyat',
      center: '👨‍🎓 O\'quvchi',
      weakness: 'Tizimlilik etishmaydi',
      chip: 'blue'
    },
    {
      period: 'XXI asr',
      approach: 'Gibrid, AI-yordamchi',
      center: '🤝 Hamkorlik',
      weakness: 'Raqamli tengsizlik',
      chip: 'pink',
      highlight: true
    }
  ]

  const chipColors = {
    amber: 'bg-amber-100 text-amber-800',
    purple: 'bg-purple-100 text-purple-800',
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    pink: 'bg-pink-100 text-pink-800'
  }

  const handleAnswer = (answerId) => {
    setSelectedAnswer(answerId)
    setShowResult(true)
  }

  const handleComplete = () => {
    setCompletedCourse(true)
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  return (
    <>
      <AnimatePresence>
        {showReady && (
          <ReadyScreen
            topicNumber="03"
            topicTitle="Tarixiy Davrlarda Didaktik Tizimlar"
            onComplete={() => setShowReady(false)}
          />
        )}
      </AnimatePresence>

      {!showReady && !completedCourse && (
        <div className="min-h-screen py-12 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-7xl font-black text-gray-200">03</div>
                <div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full inline-block mb-2">
                    Reja 3
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900">
                    Turli Tarixiy Davrlarda <br />
                    <span className="gradient-text">Didaktik Tizimlar</span>
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 mb-12"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Ta'lim har doim ham bugungiday bo'lmagan. Keling,
                <strong className="text-purple-600"> 2000 yillik tarixiy sayohat</strong> qilaylik —
                va har davrda "meme'lar" ham bor edi, shunchaki rasmga tushirilmagan xolos 😄
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-purple-500 via-green-500 via-blue-500 to-pink-500"></div>

              {eras.map((era, index) => (
                <motion.div
                  key={era.id}
                  initial={{ opacity: 0, x: era.alignment === 'left' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className={`relative mb-16 ${
                    era.alignment === 'left' 
                      ? 'md:pr-1/2 md:text-right' 
                      : 'md:pl-1/2 md:ml-auto md:text-left'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`absolute left-6 md:left-1/2 w-6 h-6 -ml-3 rounded-full bg-gradient-to-r ${era.color} border-4 border-white shadow-lg z-10`}
                  />

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 ${era.alignment === 'right' ? 'md:pl-12' : 'md:pr-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`glass-card p-6 bg-gradient-to-br ${era.bgColor} border-2 border-gray-200`}
                    >
                      {/* Era Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${era.color} text-white font-bold rounded-full mb-4 text-sm`}>
                        {era.icon} {era.period}
                      </div>

                      {/* Scholars */}
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        {era.scholars}
                      </h3>

                      {/* Method */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-white rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
                          {era.method}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {era.description}
                      </p>

                      {/* Principles (only for Komenskiy) */}
                      {era.principles && (
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {era.principles.map((principle, idx) => (
                            <div key={idx} className="text-sm text-gray-700 bg-white/60 px-2 py-1 rounded">
                              {principle}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Scientists (only for XIX-XX) */}
                      {era.scientists && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                          {era.scientists.map((sci, idx) => (
                            <div key={idx} className="bg-white/60 p-3 rounded-lg text-center">
                              <div className="font-bold text-gray-900 text-sm">{sci.name}</div>
                              <div className="text-xs text-gray-600 mt-1">{sci.idea}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Quote */}
                      {era.quote && (
                        <div className="bg-white/70 border-l-4 border-gray-400 p-3 rounded italic text-gray-600 text-sm mb-4">
                          {era.quote}
                        </div>
                      )}

                      {/* Meme */}
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 p-4 rounded-xl">
                        <div className="flex items-start space-x-2">
                          <span className="text-2xl flex-shrink-0">😄</span>
                          <p className="text-sm text-gray-700 whitespace-pre-line">
                            {era.meme}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="my-16"
            >
              <h3 className="text-3xl font-black text-center mb-8 text-gray-900">
                📊 Tizimlarni solishtiramiz
              </h3>
              
              <div className="glass-card p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 font-bold text-gray-900">Davr</th>
                      <th className="text-left py-4 px-4 font-bold text-gray-900">Asosiy yondashuv</th>
                      <th className="text-left py-4 px-4 font-bold text-gray-900">Markaziy figura</th>
                      <th className="text-left py-4 px-4 font-bold text-gray-900">Zaif tomoni</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2 + idx * 0.1 }}
                        className={`border-b border-gray-200 ${
                          row.highlight ? 'bg-gradient-to-r from-pink-50 to-rose-50 font-semibold' : ''
                        }`}
                      >
                        <td className="py-4 px-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${chipColors[row.chip]}`}>
                            {row.period}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{row.approach}</td>
                        <td className="py-4 px-4 text-gray-700">{row.center}</td>
                        <td className="py-4 px-4 text-gray-600 text-sm">{row.weakness}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Mini Quiz */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="mb-12"
            >
              <div className="glass-card p-8 bg-gradient-to-br from-teal-50 to-cyan-50">
                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-3xl">🧩</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Mini Test</h4>
                    <p className="text-gray-600">Tarixni bilasizmi?</p>
                  </div>
                </div>

                <p className="text-lg text-gray-800 font-semibold mb-6">
                  "Buyuk Didaktika" asarini yozgan va sinf-dars tizimini joriy etgan kim?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => handleAnswer(1)}
                    disabled={showResult}
                    className={`p-4 rounded-xl font-medium text-left transition-all ${
                      selectedAnswer === 1
                        ? 'bg-red-500 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-800'
                    } ${showResult && 'cursor-not-allowed'}`}
                  >
                    Ibn Sino
                  </button>
                  <button
                    onClick={() => handleAnswer(2)}
                    disabled={showResult}
                    className={`p-4 rounded-xl font-medium text-left transition-all ${
                      selectedAnswer === 2
                        ? 'bg-red-500 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-800'
                    } ${showResult && 'cursor-not-allowed'}`}
                  >
                    Jan Jak Russo
                  </button>
                  <button
                    onClick={() => handleAnswer(3)}
                    disabled={showResult}
                    className={`p-4 rounded-xl font-medium text-left transition-all ${
                      selectedAnswer === 3
                        ? 'bg-green-500 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-800'
                    } ${showResult && 'cursor-not-allowed'}`}
                  >
                    Jan Amos Komenskiy ✓
                  </button>
                  <button
                    onClick={() => handleAnswer(4)}
                    disabled={showResult}
                    className={`p-4 rounded-xl font-medium text-left transition-all ${
                      selectedAnswer === 4
                        ? 'bg-red-500 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-800'
                    } ${showResult && 'cursor-not-allowed'}`}
                  >
                    Lev Vygotskiy
                  </button>
                </div>

                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      selectedAnswer === 3
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-red-100 border-2 border-red-500'
                    }`}
                  >
                    {selectedAnswer === 3 ? (
                      <p className="text-green-800 font-semibold">✅ To'g'ri! Jan Amos Komenskiy — didaktikaning otasi!</p>
                    ) : (
                      <p className="text-red-800 font-semibold">❌ Noto'g'ri. To'g'ri javob: Jan Amos Komenskiy</p>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.section>

          </div>
        </div>
      )}

      {/* Completion Screen */}
      <AnimatePresence>
        {completedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center"
          >
            <div className="text-center px-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="text-9xl mb-8"
              >
                🎓
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-black text-white mb-6"
              >
                Tabriklaymiz!
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-white/90 mb-8"
              >
                Siz Didaktika kursini muvaffaqiyatli yakunladingiz! 🎉
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 inline-block"
              >
                <div className="grid grid-cols-3 gap-8 text-white">
                  <div>
                    <div className="text-4xl font-black">3</div>
                    <div className="text-sm opacity-80">Mavzu o'rganildi</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black">3</div>
                    <div className="text-sm opacity-80">Test topshirildi</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black">100%</div>
                    <div className="text-sm opacity-80">Bajarildi</div>
                  </div>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-white/70 mt-8"
              >
                Bosh sahifaga qaytilmoqda...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Topic3
