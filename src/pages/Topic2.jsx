import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// ─── Quiz Component ───────────────────────────────────────────────────────────
const Quiz = ({ question, options, correctIndex, explanation }) => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🧩</span>
        <h4 className="text-xl font-bold text-white">Bilimni tekshir</h4>
      </div>
      <p className="text-lg text-zinc-200 font-medium mb-6">{question}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {options.map((opt, i) => {
          let style = 'bg-zinc-800 border border-zinc-600 text-zinc-200 hover:border-zinc-400'
          if (selected !== null) {
            if (i === correctIndex) style = 'bg-green-900 border-2 border-green-500 text-green-200'
            else if (i === selected) style = 'bg-red-900 border-2 border-red-500 text-red-200'
            else style = 'bg-zinc-800 border border-zinc-700 text-zinc-500 opacity-60'
          }
          return (
            <button
              key={i}
              disabled={selected !== null}
              onClick={() => setSelected(i)}
              className={`p-4 rounded-xl text-left font-medium transition-all ${style} ${selected === null ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {opt}
            </button>
          )
        })}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl mt-2 ${selected === correctIndex ? 'bg-green-900/50 border border-green-600' : 'bg-red-900/50 border border-red-600'}`}
          >
            <p className={`font-semibold ${selected === correctIndex ? 'text-green-300' : 'text-red-300'}`}>
              {selected === correctIndex ? '✅ To\'g\'ri!' : `❌ Noto'g'ri. To'g'ri javob: '${options[correctIndex]}'`}
            </p>
            {explanation && <p className="text-zinc-400 text-sm mt-2">{explanation}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Section Divider ──────────────────────────────────────────────────────────
const SectionTitle = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-5xl font-black text-zinc-700 font-mono">{number}</span>
    <div className="flex-1 h-px bg-zinc-700"></div>
    <h2 className="text-2xl md:text-3xl font-black text-white">{title}</h2>
    <div className="flex-1 h-px bg-zinc-700"></div>
  </div>
)

// ─── Meme Components ────────────────────────────────────────────────────────
const WallMeme = ({ topText, bottomText, caption }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-2xl mx-auto">
    <div className="relative">
      <img
        src="https://media.giphy.com/media/7P8lA58Cg8cOzWi8db/giphy.gif"
        alt="Talking to a brick wall gif"
        className="w-full object-cover"
        style={{ maxHeight: '420px' }}
      />
      {/* Top text */}
      <div className="absolute top-3 left-0 right-0 flex justify-center px-4">
        <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {topText}
        </p>
      </div>
      {/* Bottom text */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
        <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {bottomText}
        </p>
      </div>
    </div>
    {caption && (
      <div className="p-4 bg-zinc-800 text-center">
        <p className="text-zinc-400 text-sm">{caption}</p>
      </div>
    )}
  </div>
)

// "This is Fine" dog meme — o'quvchi tushunmaydi lekin "yaxshi" deydi
const ThisIsFineMeme = ({ topText, bottomText, caption }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-2xl mx-auto">
    <div className="relative">
      <img
        src="/thisisfine.jpg"
        alt="This is fine meme"
        className="w-full object-cover"
        style={{ maxHeight: '420px' }}
      />
      <div className="absolute top-3 left-0 right-0 flex justify-center px-4">
        <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {topText}
        </p>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
        <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {bottomText}
        </p>
      </div>
    </div>
    {caption && (
      <div className="p-4 bg-zinc-800 text-center">
        <p className="text-zinc-400 text-sm">{caption}</p>
      </div>
    )}
  </div>
)

// "Change My Mind" meme — o'qituvchi dars o'tishi = ta'lim degan noto'g'ri fikr
const ChangeMindMeme = ({ topText, bottomText, caption }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-2xl mx-auto">
    <div className="relative">
      <img
        src="/changemymind.jpg"
        alt="Change my mind meme"
        className="w-full object-cover"
        style={{ maxHeight: '420px' }}
      />
      <div className="absolute top-3 left-0 right-0 flex justify-center px-4">
        <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {topText}
        </p>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
        <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {bottomText}
        </p>
      </div>
    </div>
    {caption && (
      <div className="p-4 bg-zinc-800 text-center">
        <p className="text-zinc-400 text-sm">{caption}</p>
      </div>
    )}
  </div>
)



// ─── Example & Info Components ────────────────────────────────────────────────
const Example = ({ icon, title, children }) => (
  <div className="border-l-4 border-amber-500 bg-zinc-900/60 p-6 rounded-r-2xl">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-2xl">{icon}</span>
      <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">Misol uchun</span>
      {title && <span className="text-zinc-400 text-sm">— {title}</span>}
    </div>
    <div className="text-zinc-200 text-base leading-relaxed">{children}</div>
  </div>
)

const InfoCard = ({ children }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-zinc-200 leading-relaxed">
    {children}
  </div>
)

// ═══════════════════════════════════════════════════════════════════════════════
// TOPIC 2 PAGE - Didaktikaning Asosiy Kategoriyalari
// ═══════════════════════════════════════════════════════════════════════════════
const Topic2 = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

        {/* ── PAGE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Reja 02</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Didaktikaning<br />Asosiy<br />
            <span className="text-zinc-400">Kategoriyalari</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 1 — TA'LIM JARAYONINING KOMPONENTLARI
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="01" title="Ta'lim jarayoni komponentlari" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                Ta'lim jarayoni — bu <strong className="text-white">o'qituvchi va o'quvchining birgalikdagi</strong> maqsadga yo'naltirilgan faoliyati.
                Bu jarayonda uchta asosiy komponent ishtirok etadi.
              </p>
              
              <div className="bg-zinc-800 p-6 rounded-xl">
                <h4 className="text-amber-400 font-bold mb-4 text-lg">Ta'lim jarayonining "uch kuchi"</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-zinc-700 rounded-lg">
                    <div className="text-4xl mb-2">👩‍🏫</div>
                    <div className="font-bold text-white mb-1">O'qituvchi</div>
                    <div className="text-zinc-400 text-sm">Bilim beruvchi</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-700 rounded-lg">
                    <div className="text-4xl mb-2">👨‍🎓</div>
                    <div className="font-bold text-white mb-1">O'quvchi</div>
                    <div className="text-zinc-400 text-sm">Bilim oluvchi</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-700 rounded-lg">
                    <div className="text-4xl mb-2">💡</div>
                    <div className="font-bold text-white mb-1">Bilim</div>
                    <div className="text-zinc-400 text-sm">Uzatiladigan kontent</div>
                  </div>
                </div>
              </div>
            </InfoCard>

            <Example icon="🎬" title="Kino analogiyasi">
              Yaxshi film uchun zarur: rejissyor (yo'naltiruvchi), aktyorlar (ishtirokchilar) va syujet (mazmun).
              <br />Ta'limda xuddi shunday: o'qituvchi (rejissyor), o'quvchi (aktyor) va bilim (syujet).
              <br /><br />
              <span className="text-amber-300">Bittasi yo'q bo'lsa — "film" muvaffaqiyatsiz bo'ladi!</span>
            </Example>
          </div>
        </motion.div>

        {/* MEME 1 - Wall Talking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <WallMeme
            topText="O'qituvchi: Hamma tushundimi?"
            bottomText="Men: devorga gapiryapmanmi boyattan beri!!!"
            caption="💡 Faqat o'qituvchi bor, o'quvchi yo'q — bu ta'lim emas, monolog!"
          />
        </motion.div>
        {/* Quiz 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quiz
            question="Agar o'qituvchi mavjud, bilim ham tayyor, lekin o'quvchi yo'q bo'lsa — bu holat qanday ataladi?"
            options={[
              "To'liq ta'lim jarayoni",
              "O'qitish jarayoni (ta'lim emas)",
              "O'rganish jarayoni",
              "Bilim uzatish jarayoni"
            ]}
            correctIndex={1}
            explanation="Bu faqat o'qitish jarayoni. Ta'lim bo'lishi uchun o'qituvchi, o'quvchi va bilim uchala ham kerak."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 2 — BILIM, KO'NIKMA, MALAKA FARQI
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="02" title="Bilim → Ko'nikma → Malaka" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl mb-6">
                Bu uchta tushuncha ko'pincha <strong className="text-red-400">adashtirilib yuboriladi</strong>. 
                Lekin ular orasida aniq farq bor — xuddi "bilaman", "qila olaman", "o'ylamasdan qilaman" kabi!
              </p>
              
              <div className="space-y-6">
                {/* Bilim */}
                <div className="bg-blue-900/30 border border-blue-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">💡</span>
                    <h4 className="text-2xl font-bold text-blue-300">Bilim (Knowledge)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4">
                    Voqelik haqidagi ma'lumotlar, faktlar, qonuniyatlar va tushunchalar. 
                    Bu o'quvchining <em>"ma'lumotlar bazasi"</em> — nima bilishini ko'rsatadi.
                  </p>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">FORMULA:</p>
                    <p className="text-white">📖 O'qish + 🧠 Tushunish + 💾 Esda saqlash = 💡 Bilim</p>
                  </div>
                </div>

                {/* Ko'nikma */}
                <div className="bg-purple-900/30 border border-purple-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">✋</span>
                    <h4 className="text-2xl font-bold text-purple-300">Ko'nikma (Skill)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4">
                    Bilimni amalda qo'llash qobiliyati. Hali <em>ongli nazorat</em> talab qiladi — 
                    har bir harakatni o'ylab bajarish kerak.
                  </p>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">FORMULA:</p>
                    <p className="text-white">💡 Bilim + 🔄 Mashq qilish + ⏰ Vaqt = ✋ Ko'nikma</p>
                  </div>
                </div>

                {/* Malaka */}
                <div className="bg-amber-900/30 border border-amber-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🏆</span>
                    <h4 className="text-2xl font-bold text-amber-300">Malaka (Habit/Mastery)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4">
                    Ko'p marta takrorlash natijasida <em>avtomatik</em> tus olgan ko'nikma. 
                    Endi o'ylamasdan, refleksga o'xshab bajariladi.
                  </p>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">FORMULA:</p>
                    <p className="text-white">✋ Ko'nikma + 🔁 Ko'p takror + ⏳ Uzoq vaqt = 🏆 Malaka</p>
                  </div>
                </div>
              </div>
            </InfoCard>

            <Example icon="🚗" title="Mashina haydash">
              <strong className="text-blue-300">Bilim:</strong> "Tormoz chapda, gaz o'ngda, clutch o'rtada" — buni kitobdan o'qib bilish mumkin.<br /><br />
              <strong className="text-purple-300">Ko'nikma:</strong> Birinchi marta haydash — har bir pedalga qarab, o'ylab bosish kerak.<br /><br />
              <strong className="text-amber-300">Malaka:</strong> 5 yil haydaganingizdan so'ng — gaplashib, musiqa eshitib haydayapsiz. Pedallar avtomatik!
            </Example>

            <Example icon="📖" title="O'qish jarayoni">
              <strong className="text-blue-300">Bilim:</strong> Harflarni tanish, so'zlar ma'nosini bilish.<br /><br />
              <strong className="text-purple-300">Ko'nikma:</strong> Sekin-asta o'qish, ba'zi so'zlarda to'xtab o'ylash.<br /><br />
              <strong className="text-amber-300">Malaka:</strong> Tez o'qish — ko'z bilan o'qib, darhol tushunish. Uni "o'qiy olish" deb emas, "o'qish" deb ataymiz!
            </Example>
          </div>
        </motion.div>
        {/* MEME 2 - This Is Fine */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ThisIsFineMeme
            topText="O'qituvchi: bilim berdim, ko'nikma shakllandirdim!"
            bottomText="O'quvchi hali birinchi marta mashq ham qilmagan"
            caption="💡 Bilim berish ≠ Ko'nikma shakllantirish. Mashqsiz ko'nikma bo'lmaydi!"
          />
        </motion.div>

        {/* Quiz 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quiz
            question="Sardor ingliz tilini 2 yil o'rgangan, lekin hali ham har bir so'zni o'ylab tarjima qiladi. Bu qaysi bosqich?"
            options={[
              "Bilim — chunki ingliz tilini biladi",
              "Ko'nikma — biladi, lekin ongli nazorat kerak",
              "Malaka — chunki tarjima qila oladi",
              "Ta'lim jarayoni — chunki hali o'rganmoqda"
            ]}
            correctIndex={1}
            explanation="Ko'nikma bosqichi — bilimni amalda qo'llaydi, lekin hali avtomatik emas, har safar o'ylash kerak."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 3 — TA'LIM vs O'QITISH vs O'RGANISH
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="03" title="Ta'lim ≠ O'qitish ≠ O'rganish" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl mb-6">
                Ko'plar bu tushunchalarni <strong className="text-red-400">sinonim</strong> deb o'ylaydi. Aslida ular 
                <strong className="text-white"> har xil jarayonlarni</strong> ifodalaydi!
              </p>

              <div className="space-y-6">
                {/* Ta'lim */}
                <div className="bg-emerald-900/30 border border-emerald-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🎓</span>
                    <h4 className="text-2xl font-bold text-emerald-300">Ta'lim (Education)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4">
                    O'qituvchi va o'quvchining <strong>birgalikdagi</strong> maqsadga yo'naltirilgan faoliyati. 
                    Bu ikki tomonlama jarayon — <em>ikkalasi ham faol</em>!
                  </p>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">KIM ISHTIROK ETADI:</p>
                    <p className="text-white">👩‍🏫 O'qituvchi + 👨‍🎓 O'quvchi = 🎓 Ta'lim</p>
                  </div>
                </div>

                {/* O'qitish */}
                <div className="bg-orange-900/30 border border-orange-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">👩‍🏫</span>
                    <h4 className="text-2xl font-bold text-orange-300">O'qitish (Teaching)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4">
                    Faqat <strong>o'qituvchi tomonidagi</strong> faoliyat. Bilimni tashkil etish, 
                    tushuntirish va uzatish. O'quvchi bor-yo'qligi muhim emas.
                  </p>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">KIM ISHTIROK ETADI:</p>
                    <p className="text-white">👩‍🏫 Faqat o'qituvchi = 📝 O'qitish</p>
                  </div>
                </div>

                {/* O'rganish */}
                <div className="bg-cyan-900/30 border border-cyan-500 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">👨‍🎓</span>
                    <h4 className="text-2xl font-bold text-cyan-300">O'rganish (Learning)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4">
                    Faqat <strong>o'quvchi tomonidagi</strong> faoliyat. Bilimni qabul qilish, 
                    tushunish va o'zlashtirish. O'qituvchi bo'lmasligi ham mumkin.
                  </p>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">KIM ISHTIROK ETADI:</p>
                    <p className="text-white">👨‍🎓 Faqat o'quvchi = 📚 O'rganish</p>
                  </div>
                </div>
              </div>
            </InfoCard>

            <Example icon="🎬" title="YouTube orqali">
              <strong className="text-orange-300">O'qitish:</strong> Bloger video tayyorlab YouTube ga yukladi — o'qitish qildi. Kimdir ko'rdi-ko'rmadi, muhim emas.<br /><br />
              <strong className="text-cyan-300">O'rganish:</strong> Siz videoni ko'rib, yangi narsalarni o'rgandingiz — lekin bloger bilan muloqot qilmadingiz.<br /><br />
              <strong className="text-emerald-300">Ta'lim:</strong> Live efirda bloger bilan chat orqali savol-javob — ikki tomonlama jarayon!
            </Example>

            <Example icon="📚" title="Maktabda">
              <strong className="text-orange-300">O'qitish:</strong> O'qituvchi dars tushuntiradi — o'quvchilar uxlab yotsa ham, u o'qitish qilyapti.<br /><br />
              <strong className="text-cyan-300">O'rganish:</strong> O'quvchi uyda kitob o'qib mustaqil o'rganadi — o'qituvchi yo'q.<br /><br />
              <strong className="text-emerald-300">Ta'lim:</strong> Darsda o'qituvchi tushuntiradi, o'quvchilar savol beradi, muhokama qilishadi — bu ta'lim!
            </Example>
          </div>
        </motion.div>
        {/* MEME 3 - Change My Mind */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChangeMindMeme
            topText="O'qituvchi dars o'tdi = o'quvchi o'rgandi"
            bottomText="Change my mind"
            caption="💡 O'qituvchi o'qitishi va o'quvchining o'rganishi — ikki alohida jarayon!"
          />
        </motion.div>

        {/* Quiz 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quiz
            question="Ona o'z farzandiga uyda matematik formulalarni tushuntirib bermoqda, farzand savollar beradi va misollar yechadi. Bu qanday jarayon?"
            options={[
              "O'qitish — chunki ona tushuntirmoqda",
              "O'rganish — chunki farzand o'rganmoqda",
              "Ta'lim — chunki ikkalasi ham faol ishtirok etmoqda",
              "Bilim uzatish — chunki formula o'rgatilmoqda"
            ]}
            correctIndex={2}
            explanation="Ta'lim jarayoni — ona (o'qituvchi) va farzand (o'quvchi) ikkalasi ham faol ishtirok etib, birgalikda maqsadga erishmoqda."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 4 — AMALIY MISOLLAR VA XULOSA
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="04" title="Amaliy misollar va xulosa" />

          <div className="space-y-6">
            <InfoCard>
              <h4 className="text-2xl font-bold text-white mb-6">Didaktik kategoriyalar jadval ko'rinishida</h4>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-zinc-600 rounded-lg">
                  <thead>
                    <tr className="bg-zinc-800">
                      <th className="border border-zinc-600 p-3 text-left text-white">Kategoriya</th>
                      <th className="border border-zinc-600 p-3 text-left text-white">Ta'rif</th>
                      <th className="border border-zinc-600 p-3 text-left text-white">Misol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-zinc-600 p-3 font-bold text-emerald-400">Ta'lim</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Ikki tomonlama jarayon</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Darsda savol-javob</td>
                    </tr>
                    <tr className="bg-zinc-900">
                      <td className="border border-zinc-600 p-3 font-bold text-orange-400">O'qitish</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Faqat o'qituvchi faoliyati</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">YouTube video</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-600 p-3 font-bold text-cyan-400">O'rganish</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Faqat o'quvchi faoliyati</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Mustaqil kitob o'qish</td>
                    </tr>
                    <tr className="bg-zinc-900">
                      <td className="border border-zinc-600 p-3 font-bold text-blue-400">Bilim</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Ma'lumotlar bazasi</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">"Yer quyosh atrofida aylanadi"</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-600 p-3 font-bold text-purple-400">Ko'nikma</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Ongli nazorat bilan bajarish</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Birinchi marta mashina haydash</td>
                    </tr>
                    <tr className="bg-zinc-900">
                      <td className="border border-zinc-600 p-3 font-bold text-amber-400">Malaka</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Avtomatik bajarish</td>
                      <td className="border border-zinc-600 p-3 text-zinc-300">Tez yozish, o'qish</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </InfoCard>

            <Example icon="🎯" title="Pedagogning vazifasi">
              <strong className="text-white">1-bosqich:</strong> O'quvchiga bilim berish (faktlar, qoidalar)<br />
              <strong className="text-white">2-bosqich:</strong> Ko'nikma shakllantirish (amaliyot, mashqlar)<br />
              <strong className="text-white">3-bosqich:</strong> Malakaga aylantirish (ko'p takror, avtomatlashtirish)<br /><br />
              <span className="text-amber-300">Maqsad: O'quvchi o'ylamasdan to'g'ri bajara olishi!</span>
            </Example>

            <Example icon="⚠️" title="Tez-tez uchraydigan xatolar">
              <strong className="text-red-400">Xato 1:</strong> "Men dars o'tdim = Ta'lim bo'ldi" — Yo'q! O'quvchi faol ishtirok etmasa, faqat o'qitish.<br /><br />
              <strong className="text-red-400">Xato 2:</strong> "Bilim berdim = Ko'nikma shakllandirdim" — Yo'q! Bilimdan ko'nikmaga o'tish uchun mashq kerak.<br /><br />
              <strong className="text-red-400">Xato 3:</strong> "Ko'nikma bor = Malaka bor" — Yo'q! Malaka uchun uzoq vaqt va ko'p takror kerak.
            </Example>
          </div>
        </motion.div>

        {/* ── FOOTER NAV ── */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-sm">Reja 02 / 06 — Didaktikaning Asosiy Kategoriyalari</p>
        </div>

      </div>
    </div>
  )
}

export default Topic2