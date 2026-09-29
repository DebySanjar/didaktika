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
              {selected === correctIndex ? '✅ To\'g\'ri!' : `❌ Noto'g'ri. To'g'ri javob: "${options[correctIndex]}"`}
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

// ─── Meme Card ────────────────────────────────────────────────────────────────
const DrakeMeme = ({ noText, yesText, caption }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-lg mx-auto">
    {/* NO panel */}
    <div className="relative">
      <img
        src="/drake.jpg"
        alt="Drake meme"
        className="w-full"
        style={{ display: 'block' }}
      />
      {/* Overlay text panels */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top half - NO */}
        <div className="flex-1 flex items-center justify-end pr-4">
          <div className="bg-black/80 text-white font-black text-lg md:text-2xl px-4 py-3 rounded-xl max-w-[55%] text-center leading-snug uppercase">
            {noText}
          </div>
        </div>
        {/* Bottom half - YES */}
        <div className="flex-1 flex items-center justify-end pr-4">
          <div className="bg-white text-black font-black text-lg md:text-2xl px-4 py-3 rounded-xl max-w-[55%] text-center leading-snug uppercase">
            {yesText}
          </div>
        </div>
      </div>
    </div>
    {caption && (
      <p className="p-4 text-zinc-400 text-sm border-t border-zinc-700">{caption}</p>
    )}
  </div>
)

const BrainMeme = ({ levels }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left — actual expanding brain meme image */}
      <div className="relative">
        <img
          src="/expandbrain.jpg"
          alt="Expanding brain meme"
          className="w-full h-full object-cover"
          style={{ minHeight: '300px' }}
        />
      </div>
      {/* Right — text panels */}
      <div className="flex flex-col divide-y divide-zinc-700">
        {levels.map((level, i) => (
          <div
            key={i}
            className={`flex-1 p-5 flex items-center ${
              i === levels.length - 1
                ? 'bg-zinc-700 border border-amber-500'
                : 'bg-zinc-900'
            }`}
          >
            <p className={`text-base leading-snug ${
              i === levels.length - 1 ? 'text-white font-bold' : 'text-zinc-300'
            }`}>
              {level}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ─── Example Block ────────────────────────────────────────────────────────────
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

// ─── Info Card ────────────────────────────────────────────────────────────────
const InfoCard = ({ children }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-zinc-200 leading-relaxed">
    {children}
  </div>
)


// ═══════════════════════════════════════════════════════════════════════════════
// TOPIC 1 PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const Topic1 = () => {

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
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Reja 01</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Didaktikaning<br />Predmeti va<br />
            <span className="text-zinc-400">Vazifalari</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 1 — DIDAKTIKA NIMA?
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="01" title="Didaktika nima?" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed">
                <strong className="text-white">Didaktika</strong> — bu pedagogikaning bir tarmog'i bo'lib,
                <em className="text-zinc-300"> ta'lim berish va o'rganish nazariyasi va amaliyotini</em> o'rganadi.
                U o'qituvchi <em>nima</em> o'rgatishi kerak emas, balki
                <strong className="text-white"> qanday</strong> o'rgatishi kerakligini belgilaydi.
              </p>
              <div className="mt-6 p-5 bg-zinc-800 rounded-xl">
                <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3">So'zning kelib chiqishi</p>
                <div className="flex flex-wrap items-center gap-3 text-base">
                  <span className="px-4 py-2 bg-zinc-700 rounded-lg font-mono text-white">🇬🇷 Yunon tili</span>
                  <span className="text-zinc-500">→</span>
                  <span className="px-4 py-2 bg-zinc-700 rounded-lg font-mono text-amber-400 font-bold">didaktikos</span>
                  <span className="text-zinc-500">→</span>
                  <span className="text-zinc-300 italic">"o'rgatuvchi, tushuntiruvchi"</span>
                </div>
              </div>
              <div className="mt-6 p-5 bg-zinc-800 rounded-xl">
                <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3">Ta'rif</p>
                <p className="text-zinc-200">
                  Didaktika deyilganda — ta'lim va o'qitishning <strong className="text-white">maqsadlari, mazmuni, tamoyillari, usullari,
                  vositalari va tashkiliy shakllarini</strong> ilmiy asosda o'rganuvchi fan tushuniladi.
                </p>
              </div>
            </InfoCard>

            <Example icon="🏗️" title="Qurilish analogiyasi">
              Arxitektor <em>qanday qilib</em> qurishni bilishi kerak — bu uning texnologiyasi.
              Xuddi shu kabi o'qituvchi ham <em>qanday qilib</em> bilim berishni bilishi kerak — bu uning didaktikasi.
              <br /><br />
              <span className="text-zinc-400">Arxitektor + texnologiya = yaxshi bino</span><br />
              <span className="text-amber-300">O'qituvchi + didaktika = samarali ta'lim</span>
            </Example>

            <Example icon="👨‍🍳" title="Oshpaz analogiyasi">
              Oshpaz faqat "non, tuz, go'sht bor" deb bilsa — bu bilim.
              Lekin "avval piyoz qovoriladi, so'ngra go'sht solinadi..." — bu didaktika.
              Materialni bilish yetarli emas — <strong className="text-amber-300">uni qanday yetkazishni bilish kerak.</strong>
            </Example>
          </div>
        </motion.div>

        {/* Quiz 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quiz
            question="Didaktika so'zi qaysi tildan kelib chiqqan va nima degan ma'noni anglatadi?"
            options={[
              "Lotin tilidan — 'o'rganuvchi'",
              "Yunon tilidan — 'o'rgatuvchi, tushuntiruvchi'",
              "Arab tilidan — 'bilim'",
              "Fransuz tilidan — 'ta'lim berish san'ati'"
            ]}
            correctIndex={1}
            explanation="Yunon tilida 'didaktikos' so'zi 'o'rgatuvchi, tushuntiruvchi' degan ma'noni anglatadi. Jan Amos Komenskiy 1657-yilda 'Buyuk Didaktika' asarini yozib, bu terminni fanga olib kirdi."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 2 — DIDAKTIKANING PREDMETI
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="02" title="Didaktikaning predmeti" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl mb-6">
                Didaktikaning predmeti — bu <strong className="text-white">ta'lim jarayoni</strong>:
                o'qituvchi va o'quvchining o'zaro birgalikdagi maqsadga yo'naltirilgan faoliyati.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-800 rounded-xl p-5 text-center">
                  <div className="text-4xl mb-3">👩‍🏫</div>
                  <div className="font-bold text-white mb-1">O'qituvchi</div>
                  <div className="text-zinc-400 text-sm">O'qitish faoliyati</div>
                </div>
                <div className="bg-zinc-700 rounded-xl p-5 text-center border border-amber-500">
                  <div className="text-4xl mb-3">🔄</div>
                  <div className="font-bold text-amber-400 mb-1">Ta'lim jarayoni</div>
                  <div className="text-zinc-300 text-sm">Didaktika predmeti</div>
                </div>
                <div className="bg-zinc-800 rounded-xl p-5 text-center">
                  <div className="text-4xl mb-3">👨‍🎓</div>
                  <div className="font-bold text-white mb-1">O'quvchi</div>
                  <div className="text-zinc-400 text-sm">O'qish faoliyati</div>
                </div>
              </div>
            </InfoCard>

            <InfoCard>
              <p className="font-bold text-white text-lg mb-4">Didaktika quyidagi savollarga javob beradi:</p>
              <div className="space-y-3">
                {[
                  { q: 'Nima uchun o\'qitish kerak?', a: 'Ta\'lim maqsadlari va vazifalari' },
                  { q: 'Nimani o\'qitish kerak?', a: 'Ta\'lim mazmuni va o\'quv dasturlari' },
                  { q: 'Qanday o\'qitish kerak?', a: 'Metodlar, shakllar va vositalar' },
                  { q: 'Qanday natijaga erishildi?', a: 'Ta\'lim samaradorligi va nazorat' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-zinc-800 rounded-xl">
                    <span className="text-amber-400 font-black text-lg flex-shrink-0">?</span>
                    <div>
                      <p className="text-white font-semibold">{item.q}</p>
                      <p className="text-zinc-400 text-sm mt-1">→ {item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </InfoCard>

            <Example icon="🎯" title="Maktabda">
              Matematika o'qituvchisi dars tayyorlayapti. U faqat formulalarni bilishi yetarli emas.
              U quyidagilarni ham bilishi kerak:<br /><br />
              <span className="text-zinc-300">• O'quvchilar bu mavzuni qanday qiyinchilik bilan o'zlashtirishini</span><br />
              <span className="text-zinc-300">• Qaysi usul (ko'rgazmali, amaliy, muammoli) samaraliroq ekanini</span><br />
              <span className="text-zinc-300">• Natijani qanday tekshirishni</span><br /><br />
              <span className="text-amber-300">Mana shularni o'rganadigan fan — Didaktika!</span>
            </Example>
          </div>
        </motion.div>

        {/* Meme 1 — Drake */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DrakeMeme
            noText="Shunchaki mavzuni yodlab dars o'tish"
            yesText="Didaktika tamoyillari bilan dars loyihalash"
            caption="💡 Predmetni bilish — zarur, lekin yetarli emas. Didaktika — bu uning ustidagi qatlam."
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
            question="Didaktikaning asosiy predmeti (o'rganish ob'ekti) nima hisoblanadi?"
            options={[
              "O'qituvchining shaxsiy sifatlari",
              "O'quv dasturlari va darsliklar",
              "O'qituvchi va o'quvchi o'rtasidagi ta'lim jarayoni",
              "Maktab binosi va jihozlari"
            ]}
            correctIndex={2}
            explanation="Didaktika o'qituvchi va o'quvchi o'rtasidagi ta'lim jarayonini — uning qonuniyatlari, tamoyillari, mazmuni, metodlari va shakllarini o'rganadi."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 3 — DIDAKTIKANING VAZIFALARI
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="03" title="Didaktikaning vazifalari" />

          <div className="space-y-6">
            {[
              {
                num: '1', color: 'border-blue-500', textColor: 'text-blue-400',
                title: 'Tavsiflovchi (deskriptiv) vazifa',
                desc: 'Ta\'lim jarayonida nima sodir bo\'lishini tizimli kuzatish, tavsiflab berish va qonuniyatlarni aniqlash. Empirik tadqiqotlar (kuzatuv, so\'rovnoma, suhbat) orqali bajariladi.',
                examples: [
                  { label: 'Maktabda', text: 'Pedagog-tadqiqotchi bir semestr davomida 40 ta darsni kuzatadi. O\'qituvchilarning qanday turdagi savollar berishini yozib boradi. Natija: 78% o\'qituvchi faqat yopiq savol (ha/yo\'q) beradi — bu o\'quvchilar mustaqil fikrlashini rivojlantirmaydi.' },
                  { label: 'Sizdan misol', text: 'Qaysi o\'qituvchining darsi qiziqroq o\'tgan va nima uchun? Bu savolni o\'zingizga bering — siz ham tavsiflovchi vazifani bajarib ko\'rdingiz.' },
                ],
              },
              {
                num: '2', color: 'border-green-500', textColor: 'text-green-400',
                title: 'Tushuntiruvchi (eksplanativ) vazifa',
                desc: 'Kuzatilgan hodisalar sabablarini ilmiy asosda tushuntiradi. "Bu nima uchun shunday?" savoliga javob beradi. Ta\'lim samaradorligining psixologik, fiziologik va ijtimoiy asoslarini ochib beradi.',
                examples: [
                  { label: 'Ko\'rgazmalilik', text: 'Edgar Dale\'ning "Experience Cone": odamlar o\'qiganining 10%, eshitganining 20%, ko\'rganining 30%, o\'zlari qilganining 75% ini eslab qoladi. Didaktika buning sababini tushuntiradi: ko\'rgazmali qurollar bir vaqtda bir nechta sensorli kanallarni faollashtiradi.' },
                  { label: 'Maktabda', text: '"Nima uchun algebra 6-sinfda boshlanadi, 4-da emas?" — 11-12 yoshda abstrakt fikrlash qobiliyati Piaje nazariyasiga ko\'ra etarlicha rivojlanadi. Didaktika shu sababni ilmiy asoslab beradi.' },
                ],
              },
              {
                num: '3', color: 'border-purple-500', textColor: 'text-purple-400',
                title: 'Bashorat qiluvchi (prognostik) vazifa',
                desc: 'Ta\'lim jarayonining kelajakdagi natijalarini, yangi usullar va texnologiyalarning samaradorligini oldindan ilmiy asosda taxmin qilish. Bu o\'quv dasturlarini tayyorlashga imkon beradi.',
                examples: [
                  { label: 'Flipped classroom', text: '2012-yilda didaktlar "teskari sinf" usulini sinashdan oldin bashorat qildi: "Agar o\'quvchilar video darslarni uyda ko\'rib kelsa, darsda amaliy mashqlarga ko\'proq vaqt bo\'ladi va o\'zlashtirish 15–25% oshadi." 5 yillik keng tadqiqot bu bashoratni to\'liq tasdiqladi.' },
                  { label: 'AI va ta\'lim (2024)', text: 'Hozir didaktlar: "Adaptiv AI tizimlari 2030-yilga kelib har o\'quvchiga shaxsiy o\'quv yo\'lini taklif eta oladi" deb bashorat qilmoqda. Bu bashorat hozirdanoq o\'quv dasturlarini qayta ko\'rishga sabab bo\'lmoqda.' },
                ],
              },
              {
                num: '4', color: 'border-amber-500', textColor: 'text-amber-400',
                title: 'Loyihalovchi (proyektiv) vazifa',
                desc: 'Didaktika nazariyasini amaliyotda qo\'llash: o\'quv dasturlari, darsliklar, metodlar va ta\'lim texnologiyalarini ilmiy asosda loyihalash. Bu eng amaliy, ko\'rinadigan vazifa.',
                examples: [
                  { label: 'Yangi darsliq', text: 'Vazirlik 4-sinf ona tili darsligini qayta tayyorlayapti. Didaktik loyihalash: (1) 10-11 yosh uchun abstrakt tushunchalar emas, voqea-hodisalar asosidagi matnlar; (2) Har 15 daqiqada faoliyat almashtirishni rejalashtirish; (3) Har bob oxirida refleksiya savollari. Natija: foydalanish 40% oshdi.' },
                  { label: 'Bu prezentatsiya', text: 'Siz ko\'rayotgan bu interaktiv dars ham loyihalovchi vazifaning natijasi — qaysi mavzu meme bilan, qaysi biri quiz bilan, qaysi biri misol bilan berilishi oldindan didaktik jihatdan rejalashtirilgan.' },
                ],
              },
            ].map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-zinc-900 border-l-4 ${task.color} rounded-r-2xl overflow-hidden`}
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-5xl font-black ${task.textColor} font-mono`}>{task.num}</span>
                    <h4 className={`text-xl font-bold ${task.textColor}`}>{task.title}</h4>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{task.desc}</p>
                </div>
                <div className="border-t border-zinc-800">
                  {task.examples.map((ex, ei) => (
                    <div key={ei} className={`p-6 ${ei > 0 ? 'border-t border-zinc-800' : ''} bg-black/30`}>
                      <p className="text-amber-400 text-xs font-black uppercase tracking-widest mb-2">
                        Misol uchun — <span className="text-zinc-500 normal-case font-normal">{ex.label}</span>
                      </p>
                      <p className="text-zinc-300 text-sm leading-relaxed">{ex.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meme 2 — Expanding Brain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BrainMeme
            levels={[
              '"Men faqat yo\'l ko\'rsataman , yuradigan talabani o\'zi"',
              '"Dars berayapman = o\'qityapman, hammasi zo\'r!"',
              '"Hmm, o\'quvchilar tushunmayapti... nima qilsam bo\'lar?"',
              '"Didaktikaning vazifalari asosida dars loyihalash kerak"',
            ]}
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
            question="O'qituvchi yangi darslik yozmoqda — qaysi mavzu qancha vaqt olishi va qanday misollar kirishi kerakligini aniqlayapti. Bu didaktikaning qaysi vazifasiga kiradi?"
            options={[
              "Tavsiflovchi vazifa — darsni kuzatish",
              "Tushuntiruvchi vazifa — sabablarni izohlab berish",
              "Bashorat qiluvchi vazifa — natijani taxmin qilish",
              "Loyihalovchi vazifa — o'quv materiallarini yaratish"
            ]}
            correctIndex={3}
            explanation="Loyihalovchi (proyektiv) vazifa — didaktika bilimlarini amalda o'quv dasturlari, darsliklar va metodlar yaratishda qo'llash. Bu eng amaliy vazifa hisoblanadi."
          />
        </motion.div>

        {/* ── FOOTER NAV ── */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-sm">Reja 01 / 06 — Didaktikaning Predmeti va Vazifalari</p>
        </div>

      </div>
    </div>
  )
}

export default Topic1
