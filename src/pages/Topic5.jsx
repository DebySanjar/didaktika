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
            <button key={i} disabled={selected !== null} onClick={() => setSelected(i)}
              className={`p-4 rounded-xl text-left font-medium transition-all ${style} ${selected === null ? 'cursor-pointer' : 'cursor-default'}`}>
              {opt}
            </button>
          )
        })}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl mt-2 ${selected === correctIndex ? 'bg-green-900/50 border border-green-600' : 'bg-red-900/50 border border-red-600'}`}>
            <p className={`font-semibold ${selected === correctIndex ? 'text-green-300' : 'text-red-300'}`}>
              {selected === correctIndex ? '✅ To\'g\'ri!' : `❌ Noto'g'ri. To'g'ri javob: "${options[correctIndex]}"`}
            </p>
            {explanation && <p className="text-zinc-400 text-sm mt-2">{explanation}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const SectionTitle = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-5xl font-black text-zinc-700 font-mono">{number}</span>
    <div className="flex-1 h-px bg-zinc-700"></div>
    <h2 className="text-2xl md:text-3xl font-black text-white">{title}</h2>
    <div className="flex-1 h-px bg-zinc-700"></div>
  </div>
)

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

// ─── AI Platformalar Illustratsiya ───────────────────────────────────────────
const PlatformCard = ({ emoji, name, desc, tamoyil, color }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col gap-3"
  >
    <div className="flex items-center gap-3">
      <span className="text-4xl">{emoji}</span>
      <div>
        <div className="text-white font-bold text-lg">{name}</div>
        <div className="text-zinc-500 text-sm">{desc}</div>
      </div>
    </div>
    <div className={`mt-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${color} w-fit`}>
      Didaktik tamoyil: {tamoyil}
    </div>
  </motion.div>
)

// ─── An'anaviy vs AI solishtirma ─────────────────────────────────────────────
const SolishtirishBlok = ({ traditional, ai }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🏫</span>
        <span className="text-zinc-300 font-bold">An'anaviy ta'lim</span>
      </div>
      <ul className="space-y-3">
        {traditional.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-zinc-500 mt-0.5 flex-shrink-0">—</span>
            <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-zinc-900 border border-zinc-600 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🤖</span>
        <span className="text-white font-bold">AI-ta'lim</span>
      </div>
      <ul className="space-y-3">
        {ai.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-zinc-400 mt-0.5 flex-shrink-0">→</span>
            <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

// ─── "Is this pigeon?" rasmli karta ──────────────────────────────────────────
const ImageMeme = ({ src, alt, topText, bottomText, caption }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-2xl mx-auto">
    <div className="relative">
      <img src={src} alt={alt} className="w-full object-cover" style={{ maxHeight: '480px' }} />
      {topText && (
        <div className="absolute top-3 left-0 right-0 flex justify-center px-4">
          <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
            style={{ textShadow: '2px 2px 0 #000,-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000' }}>
            {topText}
          </p>
        </div>
      )}
      {bottomText && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
          <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
            style={{ textShadow: '2px 2px 0 #000,-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000' }}>
            {bottomText}
          </p>
        </div>
      )}
    </div>
    {caption && (
      <div className="p-4 bg-zinc-800 text-center border-t border-zinc-700">
        <p className="text-zinc-400 text-sm">{caption}</p>
      </div>
    )}
  </div>
)

// ─── AI Chat simulyatsiya illustratsiyasi ─────────────────────────────────────
const AIChatDemo = () => {
  const messages = [
    { role: 'student', text: "Kvadrat tenglamani tushuntira olasizmi?" },
    { role: 'ai', text: "Albatta! Kvadrat tenglama: ax² + bx + c = 0. Keling, sening bilim darajangni aniqlaylik — avval oddiy misol: x² - 4 = 0. Bu tenglamani echib ko'r." },
    { role: 'student', text: "x = 2 bo'ladimi?" },
    { role: 'ai', text: "To'g'ri! x = 2 yoki x = -2, chunki (-2)² ham 4 ga teng. Endi biroz qiyinroq: x² + 5x + 6 = 0. Bu yerda diskriminant kerak bo'ladi..." },
  ]
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
      <div className="bg-zinc-800 px-6 py-4 flex items-center gap-3 border-b border-zinc-700">
        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
        <span className="text-zinc-400 text-sm ml-2">AI o'qituvchi — individual sessiya</span>
      </div>
      <div className="p-6 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.role === 'student' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`flex ${msg.role === 'student' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'student'
                ? 'bg-zinc-700 text-zinc-200 rounded-br-sm'
                : 'bg-zinc-800 border border-zinc-600 text-zinc-300 rounded-bl-sm'
            }`}>
              {msg.role === 'ai' && <span className="text-zinc-500 text-xs block mb-1">🤖 AI o'qituvchi</span>}
              {msg.role === 'student' && <span className="text-zinc-500 text-xs block mb-1 text-right">👤 O'quvchi</span>}
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-6 pb-4">
        <p className="text-zinc-600 text-xs text-center">
          AI o'quvchi darajasini aniqlaydi → Sokrat usuli bilan savollar beradi → Individual yo'l quriladi
        </p>
      </div>
    </div>
  )
}

// ─── Xavf-xatar diagrammasi ───────────────────────────────────────────────────
const XavfDiagramma = () => {
  const xavflar = [
    { icon: "🧠", sarlavha: "Tanqidiy fikrlash so'nishi", desc: "AI hamma narsani javob bersa, o'quvchi o'zi o'ylamasligi mumkin", daraja: 85 },
    { icon: "📝", sarlavha: "Akademik halollik", desc: "Uy vazifalarini AI yozib berishi — o'quvchining o'rganishini to'sqinlik qiladi", daraja: 90 },
    { icon: "🤝", sarlavha: "Ijtimoiy ko'nikmalar", desc: "Faqat AI bilan muloqot — insonlar bilan gaplashishni qiyinlashtiradi", daraja: 70 },
    { icon: "📊", sarlavha: "Raqamli tengsizlik", desc: "Internet va qurilmasi yo'q o'quvchilar AI imkoniyatlaridan foydalana olmaydi", daraja: 75 },
    { icon: "🔐", sarlavha: "Ma'lumotlar xavfsizligi", desc: "O'quvchi ma'lumotlari AI tizimlarga kiritilishi maxfiylik muammosi tug'diradi", daraja: 65 },
  ]
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
      <h4 className="text-white font-bold text-lg mb-6">AI ta'limining xavf-xatarlari</h4>
      <div className="space-y-5">
        {xavflar.map((x, i) => (
          <div key={i}>
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl flex-shrink-0">{x.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">{x.sarlavha}</span>
                  <span className="text-zinc-400 text-xs">{x.daraja}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${x.daraja}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full bg-zinc-500 rounded-full"
                  />
                </div>
                <p className="text-zinc-500 text-xs mt-1">{x.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// TOPIC 5 PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const Topic5 = () => {
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
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Reja 05</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Zamonaviy Ta'lim<br />Vositasi Sifatida<br />
            <span className="text-zinc-400">Sun'iy Intellekt</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </motion.div>

        {/* ── KIRISH ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InfoCard>
            <p className="text-xl leading-relaxed mb-6">
              <strong className="text-white">Sun'iy intellekt (AI)</strong> — bu ta'lim sohasidagi
              eng tez rivojlanayotgan texnologiya. ChatGPT, Duolingo, Khan Academy, Coursera —
              bu platformalar faqat texnologiya emas, ularda
              <strong className="text-white"> didaktika tamoyillari</strong> ham yashiringan.
              Savol shunda: AI ta'limni yaxshilaydimi yoki buzadimi?
              Javob: bu AI <em>qanday ishlatilishiga</em> bog'liq.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              2023-yilda OpenAI tomonidan o'tkazilgan tadqiqot ko'rsatishicha, AI yordamchilari bilan
              o'qigan talabalar an'anaviy usulga qaraganda
              <strong className="text-white"> 40% tezroq</strong> yangi tushunchalarni o'zlashtirgani aniqlangan.
              Biroq xuddi shu tadqiqot: AI yordamiga haddan tashqari tayanganlar
              mustaqil fikrlash qobiliyatida zaiflashganini ham ko'rsatdi.
              Bu ikkilamchi xulosa — AI ta'limning kuchli vositasi, lekin
              <strong className="text-white"> didaktik nazoratisiz</strong> xavfli ham.
            </p>
            <div className="bg-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3">Asosiy savol</p>
              <p className="text-zinc-200 text-lg leading-relaxed">
                AI-platformalar didaktikaning 8 ta tamoyiliga qay darajada mos keladi?
                Va mos kelmaganda nima bo'ladi?
              </p>
            </div>
          </InfoCard>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 1 — AI TA'LIM NIMA?
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="01" title="AI ta'lim qanday ishlaydi?" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                AI-asosidagi ta'lim tizimlari uchta asosiy mexanizmga tayanadi:
                <strong className="text-white"> adaptivlik, darhol fikr-mulohaza</strong> va
                <strong className="text-white"> shaxsiylashtirilgan yo'l</strong>.
                Bu uchta xususiyat birgalikda o'quvchiga an'anaviy sinfda erishib bo'lmaydigan narsani beradi —
                aynan unga mos sur'at va murakkablikda o'rganish imkonini.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-zinc-800 p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">🎯</span>
                    <div>
                      <div className="font-bold text-white mb-2">Adaptiv o'rganish (Adaptive Learning)</div>
                      <p className="text-zinc-300 leading-relaxed text-sm">
                        AI o'quvchining javoblarini real vaqtda tahlil qiladi va topshiriqlar murakkabligini
                        avtomatik moslaydi. O'quvchi ko'p xato qilsa — osonroq misol beradi, tez yechar ekan —
                        qiyinlashtirib boradi. Bu Vygotskiyning "yaqin rivojlanish zonasi" tamoyilini
                        masshtabda amalga oshiradi. 40 o'quvchili sinfda bir o'qituvchi buning uddasidan
                        chiqa olmaydi — AI har bir o'quvchi uchun alohida yo'l quradi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">⚡</span>
                    <div>
                      <div className="font-bold text-white mb-2">Darhol fikr-mulohaza (Instant Feedback)</div>
                      <p className="text-zinc-300 leading-relaxed text-sm">
                        An'anaviy ta'limda o'quvchi uy vazifasini topshiradi — o'qituvchi 2-3 kun keyin tekshiradi.
                        Bu vaqt oralig'ida o'quvchi xatosidan xabarsiz davom etadi va xato yondashuv mustahkamlanib qoladi.
                        AI darhol javob beradi: "Bu xato, chunki..." — xato qilingan zahoti tuzatish amalga oshadi.
                        Pedagogik nuqtayi nazardan, bu ta'lim siklini sezilarli tezlashtiradi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">🗺️</span>
                    <div>
                      <div className="font-bold text-white mb-2">Shaxsiylashtirilgan o'quv yo'li</div>
                      <p className="text-zinc-300 leading-relaxed text-sm">
                        Har bir o'quvchi turli boshlang'ich bilim darajasida keladi.
                        AI o'quvchining kuchli va zaif tomonlarini dastlabki testdan aniqlaydi,
                        so'ngra faqat unga kerakli mavzularni ko'rsatadi.
                        Duolingo buning eng yaxshi misoli: siz qaysi so'zlarni bilmasligingizni tizim biladi
                        va aynan o'sha so'zlarni ko'proq takrorlaydi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </InfoCard>

            {/* AI Chat Demo */}
            <AIChatDemo />

            <Example icon="🎮" title="Duolingo — gamifikatsiya va adaptivlik">
              Duolingo tasodifiy qurulmagan. Uning har bir elementi didaktik tamoyilga asoslanadi:<br /><br />
              <strong className="text-zinc-300">Streak (ketma-ket kunlar):</strong> Mustahkamlik tamoyili — har kuni takrorlash.<br />
              <strong className="text-zinc-300">XP va levels:</strong> Motivatsiya va faollik tamoyili.<br />
              <strong className="text-zinc-300">Xato qilsang qaytarilib beriladi:</strong> Ebbinghaus egri chizig'i — zaif joyni ko'proq mashq qilish.<br />
              <strong className="text-zinc-300">Qisqa darslar (5 min):</strong> Diqqat va charchoq nazariyasiga asoslangan.<br /><br />
              <span className="text-amber-300">2023-yil statistikasi: Duolingo foydalanuvchilari 6 oyda an'anaviy kurs o'quvchilaridan yaxshiroq natija ko'rsatgan.</span>
            </Example>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 2 — PLATFORMALAR
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="02" title="AI platformalar va didaktik tamoyillar" />

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PlatformCard emoji="🦜" name="Duolingo" desc="Til o'rganish platformasi"
                tamoyil="Mustahkamlik + Faollik" color="bg-zinc-800 text-zinc-300" />
              <PlatformCard emoji="🎓" name="Khan Academy" desc="Bepul universal ta'lim"
                tamoyil="Tizimlilik + Ko'rgazmalilik" color="bg-zinc-800 text-zinc-300" />
              <PlatformCard emoji="🤖" name="ChatGPT / Khanmigo" desc="AI suhbat o'qituvchi"
                tamoyil="Onglilik + Individual yondashuv" color="bg-zinc-800 text-zinc-300" />
              <PlatformCard emoji="📚" name="Coursera / EdX" desc="Onlayn kurs platformalari"
                tamoyil="Ilmiylik + Hayot bilan bog'liqlik" color="bg-zinc-800 text-zinc-300" />
              <PlatformCard emoji="✏️" name="Grammarly" desc="Yozishga AI yordamchi"
                tamoyil="Darhol fikr-mulohaza" color="bg-zinc-800 text-zinc-300" />
              <PlatformCard emoji="🧮" name="Photomath / Wolfram" desc="Matematika yechuvchi AI"
                tamoyil="Ko'rgazmalilik (xavfli tomon bor)" color="bg-zinc-800 text-zinc-300" />
            </div>

            <InfoCard>
              <p className="text-white font-bold text-lg mb-4">Khan Academy — eng yaxshi namuna</p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Khan Academy 2008-yilda Salman Khan tomonidan bitta maqsad bilan yaratilgan:
                <em>"Dunyo miqyosidagi bepul, sifatli ta'lim"</em>.
                Hozir 50 million foydalanuvchi, 29 tilda, matematikadan tarixgacha — bepul.
                Lekin uning eng muhim xususiyati texnologiya emas — bu
                <strong className="text-white"> didaktik loyiha</strong>.
              </p>
              <div className="space-y-3">
                {[
                  { tamoyil: "Tizimlilik", qanday: "Har bir mavzu oldingi bilimlarga asoslanadi, skill tree ko'rinishida" },
                  { tamoyil: "Ko'rgazmalilik", qanday: "Barcha tushuntirishlar animatsiyali video orqali beriladi" },
                  { tamoyil: "Mustahkamlik", qanday: "80% to'g'ri javob bermasdan keyingi mavzuga o'tib bo'lmaydi" },
                  { tamoyil: "Individual yondashuv", qanday: "AI qaysi mavzu zaif ekanini aniqlab, mashqlarni moslaydi" },
                  { tamoyil: "Darhol fikr-mulohaza", qanday: "Har bir javobdan so'ng nima to'g'ri, nima noto'g'ri — darhol ko'rsatiladi" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-zinc-800 p-4 rounded-xl">
                    <span className="text-zinc-400 font-bold text-sm w-28 flex-shrink-0">{item.tamoyil}</span>
                    <span className="text-zinc-300 text-sm">{item.qanday}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* "Is this pigeon?" rasmli meme — AI ni o'qituvchi deb bilish */}
            <ImageMeme
              src="/isthispigeon.jpg"
              alt="Is this a pigeon meme"
              topText="O'quvchi ChatGPTga uy vazifasi yozdirsa:"
              bottomText="Bu o'rganish?"
              caption="💡 AI javob berishi — o'rganish emas. O'rganish — o'quvchi o'zi fikrlaganda sodir bo'ladi."
            />
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 3 — AN'ANAVIY vs AI SOLISHTIRMA
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="03" title="An'anaviy ta'lim vs AI ta'lim" />

          <div className="space-y-6">
            <SolishtirishBlok
              traditional={[
                "Barcha o'quvchilarga bir xil sur'atda dars o'tiladi",
                "O'qituvchi 30-40 o'quvchiga bir vaqtda e'tibor qarata olmaydi",
                "Uy vazifasi tekshiruvi 1-3 kun kechikadi",
                "Zaif o'quvchi ortda qolsa, mavzu o'tilib ketadi",
                "O'qituvchining kayfiyati, charchoqligi dars sifatiga ta'sir qiladi",
                "Darslik yilda bir marta yangilanadi",
              ]}
              ai={[
                "Har o'quvchi o'ziga mos sur'atda o'rganadi",
                "AI bir vaqtning o'zida millionlab o'quvchiga xizmat qiladi",
                "Xato qilingan zahoti darhol tuzatish amalga oshadi",
                "AI zaif joyni aniqlaydi va u yerga qaytib mashq qiladi",
                "AI hech qachon charchamaydi, kayfiyati o'zgarmaydi",
                "AI kontenti real vaqtda yangilana oladi",
              ]}
            />

            <InfoCard>
              <p className="text-white font-bold text-lg mb-4">Lekin AI hamma narsani qila olmaydi</p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                AI kuchli vosita, lekin uning o'zi yetarli emas. Ta'lim faqat ma'lumot uzatish emas —
                bu <strong className="text-white">insoniy jarayon</strong>.
                O'qituvchi bilan o'quvchi o'rtasidagi ishonch, motivatsiya, his-tuyg'ular,
                guruh muhiti — bularni AI hali takrorlay olmaydi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-xl">
                  <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">AI qila olmaydi</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>— O'quvchini haqiqiy motivatsiyalashtirish</li>
                    <li>— Guruh dinamikasini boshqarish</li>
                    <li>— Insoniy hamdardlik va tushunish</li>
                    <li>— Murakkab axloqiy masalalarni muhokama qilish</li>
                    <li>— Ijodiy o'yinlar va loyihalarni to'liq boshqarish</li>
                  </ul>
                </div>
                <div className="bg-zinc-800 p-4 rounded-xl">
                  <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">AI ustunligi</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>→ Cheksiz sabr va takrorlash imkoniyati</li>
                    <li>→ Real vaqtda adaptatsiya</li>
                    <li>→ Ma'lumotlarni tahlil qilish</li>
                    <li>→ 7/24 mavjudligi</li>
                    <li>→ Millionlab o'quvchiga bir vaqtda xizmat</li>
                  </ul>
                </div>
              </div>
            </InfoCard>

            <Example icon="🏥" title="Tibbiyot analogiyasi">
              MRI apparati shifokordan yaxshiroq rentgen ko'radi. Lekin MRI o'z-o'zicha davolamaydi —
              shifokor kerak.<br /><br />
              Xuddi shu kabi: AI o'qituvchidan yaxshiroq ma'lumot qayta ishlaydi.
              Lekin AI o'z-o'zicha ta'lim bera olmaydi —
              <strong className="text-amber-300"> didaktik tafakkurga ega o'qituvchi kerak.</strong>
            </Example>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 4 — XAVF-XATARLAR
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="04" title="AI ta'limning xavf-xatarlari" />

          <div className="space-y-6">
            <XavfDiagramma />

            <InfoCard>
              <p className="text-white font-bold text-lg mb-4">Eng katta xavf: "AI o'rgandim" illyuziyasi</p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Bu psixologiyada <strong className="text-white">"fluency illusion"</strong> deb ataladi —
                o'quvchi AI tushuntirib bergan narsani o'zi biladi deb o'ylaydi.
                Aslida esa faqat AI biladi. Sinov kelganda — o'quvchi yechima topa olmaydi.
              </p>
              <div className="bg-zinc-800 p-5 rounded-xl mb-4">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">Tadqiqot natijalari — Harvard, 2023</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Fizika kursida AI-yordamchi bilan o'qigan talabalar dars paytida
                  an'anaviy guruhdagi talabalarga qaraganda ko'proq o'rganganini his qildi.
                  Lekin yakuniy imtihonda AI-guruh <strong className="text-white">sezilarli past natija</strong> ko'rsatdi.
                  Sababi: AI tushuntirib berganda, talabalar faol o'ylamagan — faqat "tinglab" qolgan.
                </p>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Bu shuni ko'rsatadiki, AI ta'limni samarali qilishi uchun u
                <strong className="text-white"> Sokrat usulida</strong> ishlashi kerak —
                javob berish emas, savol berish. O'quvchini o'zi yechimga kelishga undash.
                Khanmigo (Khan Academy AI) aynan shu yondashuv bilan qurilgan.
              </p>
            </InfoCard>

            <Example icon="⚖️" title="To'g'ri va noto'g'ri AI ishlatish">
              <strong className="text-red-400">Noto'g'ri:</strong> "ChatGPT, mana bu masalani yech."<br />
              → O'quvchi javobni ko'chiradi. Hech narsa o'rganilmadi.<br /><br />
              <strong className="text-amber-300">To'g'ri:</strong> "ChatGPT, bu masalani qanday yondashib yechaman? Qanday formula kerak?"<br />
              → AI yo'l ko'rsatadi, o'quvchi o'zi yechadi.<br /><br />
              <strong className="text-green-400">Eng to'g'ri:</strong> "Men shu usul bilan yechdim — bu to'g'rimi? Qayerda xato qildim?"<br />
              → O'quvchi faol, AI — tekshiruvchi. Didaktika tamoyili to'liq ishlaydi.
            </Example>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 5 — KELAJAK
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="05" title="Ta'limning kelajagi: O'qituvchi + AI" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                2030-yilgacha ta'lim sohasida AI quyidagi o'zgarishlarni olib kelishi kutilmoqda:
              </p>
              <div className="space-y-4">
                {[
                  {
                    yil: "2025",
                    hodisa: "Har bir o'quvchiga shaxsiy AI o'quv yordamchisi",
                    holat: "Hozir sinov bosqichida (GPT-4o, Khanmigo)"
                  },
                  {
                    yil: "2027",
                    hodisa: "AI o'qituvchi darsni real vaqtda moslaydi — o'quvchi yuzidagi ifodani tahlil qilib",
                    holat: "Tadqiqot bosqichida"
                  },
                  {
                    yil: "2030",
                    hodisa: "Shaxsiy o'quv yo'li — har bir o'quvchi uchun alohida dastur",
                    holat: "Bashorat qilinmoqda"
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-zinc-800 p-4 rounded-xl">
                    <div className="flex-shrink-0 bg-zinc-700 px-3 py-1 rounded-lg">
                      <span className="text-white font-black font-mono text-sm">{item.yil}</span>
                    </div>
                    <div>
                      <p className="text-zinc-200 text-sm font-medium mb-1">{item.hodisa}</p>
                      <p className="text-zinc-500 text-xs">{item.holat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard>
              <p className="text-white font-bold text-xl mb-4">
                Xulosa: AI — vosita, didaktika — asos
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Eng zamonaviy AI ham, oxir-oqibat, didaktikaning asosiy savollariga javob bera olmaydi:
                nima uchun o'rgatish kerak, nima o'rgatish kerak, qanday o'rgatish kerak.
                Bu savollar — insoniy qadriyatlar, jamiyat ehtiyojlari va pedagogik tafakkur bilan bog'liq.
                AI ularni hal qilmaydi — <strong className="text-white">o'qituvchi hal qiladi</strong>.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Kelajakda muvaffaqiyatli o'qituvchi ikki narsani biladigon bo'ladi:
                <strong className="text-white"> didaktika tamoyillarini</strong> va
                <strong className="text-white"> AI vositalaridan foydalanishni</strong>.
                Bu ikkalasi birgalikda — ta'limning yangi davrini ochadi.
              </p>
            </InfoCard>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            3 TA QUIZ
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="06" title="Bilimni tekshir" />
          <div className="space-y-6">
            <Quiz
              question="O'quvchi qiyin masalani ChatGPTga to'liq yechtirib, javobini ko'chirdi. Didaktik nuqtai nazardan bu qanday muammo?"
              options={[
                "Hech qanday muammo yo'q — javob to'g'ri bo'lsa kifoya",
                "Vaqt sarfi ko'p — qo'lda yechish tezroq",
                "O'rganish sodir bo'lmadi — o'quvchi faol fikrlamadi, 'fluency illusion' xavfi bor",
                "AI xato javob berishi mumkin — ishonib bo'lmaydi"
              ]}
              correctIndex={2}
              explanation="Didaktikada o'rganish — o'quvchi aktiv fikrlaganda sodir bo'ladi. AI javob berganda o'quvchi passiv qoladi. Bu 'fluency illusion' — tushundim deb o'ylaydi, aslida AI bilgan."
            />

            <Quiz
              question="Duolingo har kuni foydalanuvchini streak (ketma-ket kunlar) bilan rag'batlantiradi. Bu qaysi didaktik tamoyilga asoslanadi?"
              options={[
                "Ko'rgazmalilik tamoyili — vizual element sifatida",
                "Mustahkamlik tamoyili — muntazam takrorlash orqali bilimni mustahkamlash",
                "Ilmiylik tamoyili — ilmiy ma'lumotlar berish",
                "Tizimlilik tamoyili — ketma-ket o'rgatish"
              ]}
              correctIndex={1}
              explanation="Mustahkamlik tamoyili: Ebbinghaus unutish egri chizig'iga ko'ra, bilim takrorlanmasa unutiladi. Duolingo streak mexanizmi kunlik takrorlashni ta'minlaydi."
            />

            <Quiz
              question="Khan Academy o'quvchini 80% to'g'ri javob bermaguncha keyingi mavzuga o'tkazmasligi qaysi tamoyilni amalga oshiradi?"
              options={[
                "Hayot bilan bog'liqlik — real hayot bilan bog'lash",
                "Individual yondashuv — har o'quvchiga mos sur'at va mustahkamlash talab etish",
                "Faollik tamoyili — o'quvchini faol ishlashga undash",
                "Maqsadga muvofiqlik — aniq maqsad qo'yish"
              ]}
              correctIndex={1}
              explanation="Individual yondashuv tamoyili: har bir o'quvchi o'ziga mos sur'atda, yetarlicha mustahkamlangach davom etadi. 80% mezon — o'quvchi mavzuni chindan o'zlashtirganini ta'minlaydi."
            />
          </div>
        </motion.div>

        {/* ── FOOTER ── */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-sm">Reja 05 / 06 — Zamonaviy Ta'lim Vositasi Sifatida Sun'iy Intellekt</p>
        </div>

      </div>
    </div>
  )
}

export default Topic5
