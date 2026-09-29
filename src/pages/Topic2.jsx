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
        src="/wall.gif"
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
                Bu jarayon tasodifiy emas — u aniq maqsad, mazmun va metodlar asosida quriladi.
                Ta'lim jarayonida uchta asosiy komponent birga ishlaydi: biri yo'q bo'lsa, jarayon buziladi.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-zinc-800 p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">👩‍🏫</div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">O'qituvchi — tashkilotchi va yo'naltiruvchi</div>
                      <p className="text-zinc-300 leading-relaxed">
                        O'qituvchi shunchaki ma'lumot uzatuvchi emas. U ta'lim jarayonini rejalashtiradi,
                        o'quvchini motivatsiyalaydi, bilimni tushunarli qilib tuzilmalaydi, natijani baholaydi
                        va kerak bo'lsa yondashuvini o'zgartiradi. Yaxshi o'qituvchi o'quvchi nimani bilmasligini
                        emas, <em>qanday qilib bilishga</em> yordam berish mumkinligini biladi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">👨‍🎓</div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">O'quvchi — faol ishtirokchi</div>
                      <p className="text-zinc-300 leading-relaxed">
                        O'quvchi passiv idish emas — uning ichiga bilim quyib bo'lmaydi.
                        O'quvchi bilimni faol qurishga, savol berishga, xato qilishga va xatosidan o'rganishga tayyor bo'lishi kerak.
                        Zamonaviy didaktika o'quvchini ta'lim jarayonining <strong className="text-white">markaziga</strong> qo'yadi —
                        o'qituvchi esa yo'lni ko'rsatuvchi rolini bajaradi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💡</div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">Bilim (mazmun) — o'rgatilayotgan narsa</div>
                      <p className="text-zinc-300 leading-relaxed">
                        Bu faqat faktlar va raqamlar emas. Bilim — tushunchalar, qonuniyatlar, ko'nikmalar,
                        munosabatlar va qadriyatlarning yig'indisi. O'quv dasturlari aynan bilimning
                        qaysi qismi, qaysi tartibda va qanday chuqurlikda o'rgatilishini belgilaydi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl">
                <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3">Asosiy qoida</p>
                <p className="text-white leading-relaxed">
                  Agar uchta komponentdan biri yo'q bo'lsa: o'qituvchi tushuntiradi, lekin o'quvchi yo'q —
                  bu <em>o'qitish</em>, ta'lim emas. O'quvchi o'qiydi, lekin mazmun yo'q — bu vaqt o'tkazish.
                  Mazmun bor, lekin na o'qituvchi, na o'quvchi — bu faqat kutubxona.
                </p>
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
                Lekin ular orasida aniq, o'lchanadigan farq bor. O'qituvchi sifatida bu farqni bilmaslik —
                o'quvchiga noto'g'ri bosqichda noto'g'ri narsa o'rgatishga olib keladi.
              </p>

              <div className="space-y-6">
                {/* Bilim */}
                <div className="bg-zinc-800 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">💡</span>
                    <h4 className="text-2xl font-bold text-blue-300">Bilim (Knowledge)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
                    Bilim — voqelik haqidagi ma'lumotlar, faktlar, tushunchalar va qonuniyatlarning
                    ongli tarzda o'zlashtirilishi. Bu o'quvchining "ma'lumotlar bazasi" hisoblanadi.
                    Bilim passiv xarakteri bilan ajralib turadi — u amaliy harakatni talab qilmaydi,
                    lekin barcha ko'nikma va malakaning <strong className="text-white">asosi</strong> bo'lib xizmat qiladi.
                    Bilim bo'lmasa — ko'nikma shakllanmaydi, zero quruq mashq anglanmagan narsani mustahkamlamaydi.
                  </p>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">QANDAY SHAKLLANADI:</p>
                    <p className="text-white">📖 O'qish + 🧠 Tushunish + 💾 Esda saqlash = 💡 Bilim</p>
                  </div>
                </div>

                {/* Ko'nikma */}
                <div className="bg-zinc-800 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">✋</span>
                    <h4 className="text-2xl font-bold text-purple-300">Ko'nikma (Skill)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
                    Ko'nikma — bilimni muayyan vaziyatda ongli nazorat ostida qo'llash qobiliyati.
                    Ko'nikma shakllangan odam topshiriqni bajara oladi, lekin buning uchun
                    <strong className="text-white"> diqqatini to'liq jamlashi</strong>, har bir qadamni o'ylab bajarishi kerak.
                    Ko'nikma bilimdan farqli o'laroq, mashq talab qiladi — kitob o'qish yetmaydi,
                    amalda sinab ko'rish kerak. Ko'nikma charchoq va stres sharoitida
                    hali barqaror emas — bu uni malakadan ajratib turadigan asosiy belgi.
                  </p>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">QANDAY SHAKLLANADI:</p>
                    <p className="text-white">💡 Bilim + 🔄 Amaliy mashq + ⏰ Vaqt = ✋ Ko'nikma</p>
                  </div>
                </div>

                {/* Malaka */}
                <div className="bg-zinc-800 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🏆</span>
                    <h4 className="text-2xl font-bold text-amber-300">Malaka (Mastery / Habit)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
                    Malaka — ko'p marta takrorlash natijasida avtomatlashgan ko'nikma.
                    Malakali odam topshiriqni <strong className="text-white">ongli nazoratisiz</strong> bajaradi —
                    xuddi refleks kabi. Bu miya neyronlari darajasida mustahkamlangan yo'l hisoblanadi:
                    psixologlar buni "muskullar xotirasi" (muscle memory) deydi.
                    Malaka charchoq, stres va chalg'ituvchi omillar ostida ham barqaror qoladi —
                    aynan shu xususiyat uni ko'nikmadan ajratib turadi. Malaka shakllanishi
                    uchun taxminan 10 000 soat amaliyot kerak (Malcolm Gladwell tadqiqoti).
                  </p>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">QANDAY SHAKLLANADI:</p>
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
                Ko'plar bu tushunchalarni <strong className="text-red-400">sinonim</strong> deb o'ylaydi.
                Aslida ular uchta alohida jarayonni ifodalaydi — har birining o'z sub'ekti, o'z maqsadi va o'z qonuniyatlari bor.
                Bu farqni bilmaydigan o'qituvchi "men dars o'tdim" deganida ta'lim bo'ldi deb o'ylaydi —
                aslida esa faqat o'qitish bo'lgan bo'lishi mumkin.
              </p>

              <div className="space-y-6">
                {/* Ta'lim */}
                <div className="bg-zinc-800 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🎓</span>
                    <h4 className="text-2xl font-bold text-emerald-300">Ta'lim (Education)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
                    Ta'lim — o'qituvchi va o'quvchining <strong className="text-white">birgalikdagi, ikki tomonlama</strong>
                    maqsadga yo'naltirilgan faoliyati. Bu yerda ikkalasi ham faol: o'qituvchi
                    tushuntiradi, o'quvchi savollar beradi, muhokama ketadi, fikr almashiladi.
                    Ta'lim natijasida o'quvchi nafaqat bilim oladi, balki fikrlash usulini, munosabatini
                    va dunyoqarashini ham shakllantiradi. Shuning uchun "ta'lim" so'zi "tarbiya" tushunchasini
                    ham o'z ichiga oladi — bu pedagogikaning eng keng kategoriyasi.
                  </p>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">KIM ISHTIROK ETADI:</p>
                    <p className="text-white">👩‍🏫 O'qituvchi + 👨‍🎓 O'quvchi (ikkalasi faol) = 🎓 Ta'lim</p>
                  </div>
                </div>

                {/* O'qitish */}
                <div className="bg-zinc-800 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">👩‍🏫</span>
                    <h4 className="text-2xl font-bold text-orange-300">O'qitish (Teaching)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
                    O'qitish — faqat <strong className="text-white">o'qituvchi tomonidagi</strong> faoliyat:
                    bilimni tashkil etish, tizimlashtirish, tushuntirish va o'quvchiga yetkazishga urinish.
                    O'qitish bo'lishi uchun o'quvchining o'rganishi shart emas — o'qituvchi
                    monolog tarzida gapirishi ham o'qitish hisoblanadi. Mashhur misol:
                    o'qituvchi ajoyib dars o'tadi, lekin o'quvchilar telefon bilan band —
                    o'qitish sodir bo'ldi, ta'lim esa yo'q.
                    O'qitish samarali bo'lishi uchun u <em>o'rganishni qo'zg'atishi</em> kerak.
                  </p>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">KIM ISHTIROK ETADI:</p>
                    <p className="text-white">👩‍🏫 Faqat o'qituvchi faol = 📝 O'qitish</p>
                  </div>
                </div>

                {/* O'rganish */}
                <div className="bg-zinc-800 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">👨‍🎓</span>
                    <h4 className="text-2xl font-bold text-cyan-300">O'rganish (Learning)</h4>
                  </div>
                  <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
                    O'rganish — faqat <strong className="text-white">o'quvchi tomonidagi</strong> ichki jarayon:
                    yangi ma'lumotni qabul qilish, mavjud bilimlar bilan bog'lash, tushunish va
                    xotirada saqlash. O'rganish o'qituvchisiz ham sodir bo'ladi — bola mustaqil
                    kitob o'qiganda, YouTube videosini ko'rganda yoki hayotiy tajriba orqali o'rganganda.
                    O'rganish — aslida miyaning o'zi bajaradigan ish, uni tashqaridan to'liq boshqarish mumkin emas.
                    O'qituvchi faqat buning <em>sharoitini yaratadi</em>.
                  </p>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-400 text-sm mb-2">KIM ISHTIROK ETADI:</p>
                    <p className="text-white">👨‍🎓 Faqat o'quvchi faol = 📚 O'rganish</p>
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