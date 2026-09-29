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

// ─── Tamoyil Card ─────────────────────────────────────────────────────────────
const TamoyilCard = ({ number, icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-zinc-900 border-l-4 border-zinc-500 rounded-r-2xl overflow-hidden"
  >
    <div className="p-6 pb-4">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-5xl font-black text-zinc-700 font-mono">{number}</span>
        <span className="text-4xl">{icon}</span>
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      {children}
    </div>
  </motion.div>
)

// ─── Diagram: Tamoyillar doirasi ──────────────────────────────────────────────
const TamoyillarDiagram = () => {
  const tamoyillar = [
    { id: 1, label: "Ilmiylik", short: "Ilmiy", angle: 0 },
    { id: 2, label: "Tizimlilik", short: "Tizim", angle: 45 },
    { id: 3, label: "Ko'rgazmalilik", short: "Ko'rgazma", angle: 90 },
    { id: 4, label: "Onglilik", short: "Onglilik", angle: 135 },
    { id: 5, label: "Mustahkamlik", short: "Mustahkam", angle: 180 },
    { id: 6, label: "Faollik", short: "Faollik", angle: 225 },
    { id: 7, label: "Individual yondashuv", short: "Individual", angle: 270 },
    { id: 8, label: "Hayot bilan bog'liqlik", short: "Hayot", angle: 315 },
  ]

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8">
      <h4 className="text-xl font-bold text-white text-center mb-8">Didaktika tamoyillari tizimi</h4>
      <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
        {/* Markaziy doira */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-zinc-700 border-2 border-zinc-500 flex items-center justify-center text-center">
            <span className="text-white text-xs font-bold leading-tight px-2">Ta'lim jarayoni</span>
          </div>
        </div>
        {/* Tashqi tamoyillar */}
        {tamoyillar.map((t) => {
          const rad = (t.angle * Math.PI) / 180
          const r = 130
          const cx = 160 + r * Math.cos(rad)
          const cy = 160 + r * Math.sin(rad)
          return (
            <motion.div
              key={t.id}
              whileHover={{ scale: 1.15 }}
              className="absolute w-16 h-16 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-center cursor-pointer"
              style={{ left: cx - 32, top: cy - 32 }}
            >
              <span className="text-zinc-300 text-xs font-semibold leading-tight px-1">{t.short}</span>
            </motion.div>
          )
        })}
        {/* Chiziqlar markazdan tashqi doiralarga */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          {tamoyillar.map((t) => {
            const rad = (t.angle * Math.PI) / 180
            const r = 130
            const cx = 160 + r * Math.cos(rad)
            const cy = 160 + r * Math.sin(rad)
            const nearX = 160 + 48 * Math.cos(rad)
            const nearY = 160 + 48 * Math.sin(rad)
            const farX = cx - 32 * Math.cos(rad)
            const farY = cy - 32 * Math.sin(rad)
            return (
              <line key={t.id} x1={nearX} y1={nearY} x2={farX} y2={farY}
                stroke="#52525b" strokeWidth="1.5" strokeDasharray="4 3" />
            )
          })}
        </svg>
      </div>
      <p className="text-zinc-500 text-sm text-center mt-6">
        Barcha tamoyillar bir-biri bilan bog'liq — birini inkor etsangiz, tizim buziladi
      </p>
    </div>
  )
}

// ─── Diagram: Taqqoslash jadvali ──────────────────────────────────────────────
const TaqqoslashJadvali = () => {
  const rows = [
    { tamoyil: "Ilmiylik", togri: "Faktlarga asoslangan, tekshirilgan bilim", noto: "Mish-mish, eskirgan yoki noto'g'ri ma'lumot" },
    { tamoyil: "Ko'rgazmalilik", togri: "Rasm, video, amaliy namoyish", noto: "Faqat og'zaki tushuntirish" },
    { tamoyil: "Tizimlilik", togri: "Oddiydan murakkabga ketma-ket", noto: "Tartibsiz, sakrab-sakrab o'tish" },
    { tamoyil: "Onglilik", togri: "O'quvchi nima uchun o'qishini biladi", noto: "Mexanik yodlash, sababi yo'q" },
    { tamoyil: "Mustahkamlik", togri: "Takror, mashq, amalda qo'llash", noto: "Bir marta tushuntirilib, unitiladi" },
    { tamoyil: "Faollik", togri: "O'quvchi savollar beradi, muhokama qiladi", noto: "O'quvchi passiv o'tiradi, faqat eshitadi" },
  ]
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-zinc-700">
        <h4 className="text-xl font-bold text-white">To'g'ri va noto'g'ri amalga oshirish</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-800">
              <th className="p-4 text-left text-zinc-400 font-semibold">Tamoyil</th>
              <th className="p-4 text-left text-green-400 font-semibold">✅ To'g'ri</th>
              <th className="p-4 text-left text-red-400 font-semibold">❌ Noto'g'ri</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/40'}>
                <td className="p-4 text-white font-semibold">{r.tamoyil}</td>
                <td className="p-4 text-zinc-300">{r.togri}</td>
                <td className="p-4 text-zinc-400">{r.noto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// TOPIC 4 PAGE — Didaktika tamoyillari
// ═══════════════════════════════════════════════════════════════════════════════
const Topic4 = () => {
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
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Reja 04</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Didaktika<br />
            <span className="text-zinc-400">Tamoyillari</span>
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
              <strong className="text-white">Didaktika tamoyillari</strong> — bu ta'lim jarayonini
              tashkil etishda rioya qilinishi zarur bo'lgan asosiy qoidalar tizimi.
              Ular ko'p asrlik pedagogik tajriba va ilmiy tadqiqotlar asosida shakllangan.
              Tamoyillar — faqat nazariy qoidalar emas, balki har bir dars loyihasida amalda ishlatiladigan
              <strong className="text-white"> yo'l ko'rsatkichlar</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Tamoyillar bir-biridan ajralmas: agar o'qituvchi faqat ilmiylikka e'tibor berib,
              ko'rgazmalilikning ahamiyatini inkor etsa — ta'lim to'liq bo'lmaydi.
              Agar mustahkamlikka e'tibor bermasdan, faqat yangi mavzu ustiga yangi mavzu yuklasa —
              o'quvchi oldingi bilimlarini unutib boradi. Tamoyillar birgalikda
              <strong className="text-white"> yaxlit tizim</strong> hosil qiladi.
            </p>
            <div className="bg-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3">Tamoyillar qayerdan keladi?</p>
              <p className="text-zinc-300 leading-relaxed">
                Tamoyillar didaktikaning <em>qonuniyatlaridan</em> kelib chiqadi. Qonuniyat — bu kuzatilgan holat:
                masalan, "o'quvchi bilimni ko'proq qo'llasa, ko'proq mustahkamlaydi" — bu qonuniyat.
                Shu qonuniyatdan <strong className="text-white">mustahkamlik tamoyili</strong> kelib chiqadi:
                yangi bilimni mashq va takror orqali mustahkamlash zarur. Ya'ni tamoyil — qonuniyatning
                amaliy buyrug'i.
              </p>
            </div>
          </InfoCard>
        </motion.div>

        {/* ── DOIRA DIAGRAMMA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TamoyillarDiagram />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 1 — ILMIYLIK TAMOYILI
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="01" title="8 ta asosiy tamoyil" />

          <div className="space-y-6">

            <TamoyilCard number="1" icon="🔬" title="Ilmiylik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Ta'limda faqat <strong className="text-white">ilmiy jihatdan asoslangan, tekshirilgan</strong> bilimlar
                berilishi kerak. O'qituvchi o'z shaxsiy fikri, mish-mish yoki eskirgan nazariyalarni
                haqiqat sifatida o'rgatmasligi kerak. Ilmiylik tamoyili talabi: o'quv materialining
                mazmuni ilm-fan yutuqlariga mos bo'lishi va o'quvchilarga ilmiy fikrlash usulini
                shakllantirishi lozim. Bu degani, o'quvchi faqat faktlarni emas,
                <em> qanday qilib bilish</em> usulini ham o'rganishi kerak — kuzatish, tahlil qilish,
                xulosa chiqarish.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl mb-4">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">Amalda nima degani?</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-zinc-300 text-sm">Darslikdagi ma'lumot so'nggi ilmiy kashfiyotlarga mos kelishi kerak</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-zinc-300 text-sm">O'qituvchi "shunday bo'ladi" emas, "chunki..." deb tushuntirishi kerak</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-zinc-300 text-sm">O'quvchiga "miyangizning 10% ini ishlatamiz" deyish — ilmiy noto'g'ri</span>
                  </div>
                </div>
              </div>
            </TamoyilCard>

            <Example icon="🧪" title="Biologiya darsi">
              Eskirgan darslikda: "Lamark nazariyasiga ko'ra, organizmlar hayot davomida orttirilgan
              xususiyatlarni avlodga o'tkazadi."<br /><br />
              Ilmiylik tamoyiliga ko'ra: bu nazariya rad etilgan — Darwin evolyutsiya nazariyasi va
              zamonaviy genetika boshqacha tushuntiradi. O'qituvchi eskirgan nazariyani emas,
              hozirgi ilm-fan tasdiqlagan bilimni o'rgatishi kerak.
            </Example>

            <TamoyilCard number="2" icon="📐" title="Tizimlilik va ketma-ketlik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Bilimlar <strong className="text-white">mantiqiy ketma-ketlikda</strong>, ya'ni
                oddiydan murakkabga, ma'lumdan noma'lumga, yaqindan uzoqqa qarab berilishi kerak.
                O'quvchi har bir yangi bilimni oldingi bilimlari asosiga qurishi lozim —
                aks holda yangi ma'lumot "havoda osilib qoladi", biron narsa bilan bog'lanmaydi
                va tezda unutiladi. Tizimlilik tamoyili shuningdek o'quv yili davomida
                mavzular o'rtasida bog'liqlik bo'lishini, oldingi mavzu keyingisiga zamin tayyorlashini talab qiladi.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl mb-4">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">Ketma-ketlik zanjiri</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Oddiy", "→", "Murakkab", "→", "Mavhum", "→", "Amaliy"].map((item, i) => (
                    <span key={i} className={
                      item === "→"
                        ? "text-zinc-600 font-bold text-lg"
                        : "px-3 py-1 bg-zinc-700 rounded-lg text-white text-sm font-medium"
                    }>{item}</span>
                  ))}
                </div>
              </div>
            </TamoyilCard>

            <Example icon="➕" title="Matematika — nima uchun qo'shishdan boshlanadi?">
              1-sinfda darhol algebraik ifodalarni emas, avval 1+1 ni o'rgatadi.
              2-sinfda ko'paytirish — bu qo'shishning qisqartmasi ekanini tushunib bo'lgach.
              5-sinfda kasrlar — butun sonlar yaxshi o'zlashtirilgandan keyin.<br /><br />
              <span className="text-zinc-400">
                Bu tasodifiy emas — bu tizimlilik tamoyilining 12 yillik dizayni.
              </span>
            </Example>

            <TamoyilCard number="3" icon="👁️" title="Ko'rgazmalilik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                O'quvchi bilimni <strong className="text-white">ko'rish, eshitish, his qilish</strong> orqali
                chuqurroq o'zlashtiradi. Ko'rgazmalilik — bu faqat rasm ko'rsatish emas.
                Bu sensor kanallarni faollashtirish: vizual (ko'rish), auditiv (eshitish), kinestetik (qilish).
                Edgar Dale tadqiqoti bo'yicha: odamlar o'qiganining 10%, eshitganining 20%, ko'rganining 30%,
                ko'rib va eshitganining 50%, o'zlari aytganining 70%, o'zlari qilganining
                <strong className="text-white"> 90%</strong> ini eslab qoladi.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl mb-4">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">Edgar Dale — "Tajriba konusi"</p>
                <div className="space-y-1.5">
                  {[
                    { action: "O'qish", percent: 10, width: "10%" },
                    { action: "Eshitish", percent: 20, width: "20%" },
                    { action: "Ko'rish", percent: 30, width: "30%" },
                    { action: "Ko'rib + eshitish", percent: 50, width: "50%" },
                    { action: "O'zi aytish", percent: 70, width: "70%" },
                    { action: "O'zi qilish", percent: 90, width: "90%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-zinc-400 text-xs w-36 flex-shrink-0">{item.action}</span>
                      <div className="flex-1 bg-zinc-700 rounded-full h-4 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="h-full bg-zinc-400 rounded-full"
                        />
                      </div>
                      <span className="text-white text-xs font-bold w-8">{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </TamoyilCard>

            <Example icon="⚗️" title="Kimyo darsi — reaksiya ko'rsatish">
              Faqat aytish: "Natriy suv bilan reaksiyaga kirishganda issiqlik ajralib chiqadi."<br />
              Ko'rgazmali: O'qituvchi laboratoriyada natriy parchasini suvga tashlaydi —
              o'quvchilar o'zlarining ko'zlari bilan alangani ko'radi.<br /><br />
              <span className="text-amber-300">
                Ikkinchi holda o'quvchi 30 yildan keyin ham bu reaksiyani eslab qoladi.
              </span>
            </Example>

            <TamoyilCard number="4" icon="🧠" title="Onglilik va faollik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                O'quvchi bilimni <strong className="text-white">ongli ravishda</strong>, ya'ni
                nima uchun o'rganayotganini tushunib o'zlashtirishishi kerak.
                Mexanik yodlash — bu bilim emas. Masalan, formula yodlab qo'ygan, lekin
                uni qachon va qanday ishlatishni bilmasa — bu bilim emas, bu yodlash.
                Onglilik tamoyili talabi: o'quvchi mavzuning maqsadini, ahamiyatini va
                hayotdagi qo'llanilishini tushunishi kerak.
                Faollik tamoyili esa onglilikni to'ldiradi: bilim passiv qabul qilish emas,
                <strong className="text-white"> faol izlanish</strong> orqali o'zlashtirilishi kerak —
                savol berish, muhokama, tajriba, loyiha.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">Onglilik darajalari (Bloom taksonomiyasi)</p>
                <div className="space-y-2">
                  {[
                    { daraja: "1. Bilish", desc: "faktni ayta olish", color: "bg-zinc-600" },
                    { daraja: "2. Tushunish", desc: "o'z so'zi bilan izohlash", color: "bg-zinc-600" },
                    { daraja: "3. Qo'llash", desc: "yangi vaziyatda ishlatish", color: "bg-zinc-500" },
                    { daraja: "4. Tahlil", desc: "qismlarga ajratib tekshirish", color: "bg-zinc-500" },
                    { daraja: "5. Sintez", desc: "yangi narsa yaratish", color: "bg-zinc-400" },
                    { daraja: "6. Baholash", desc: "tanqidiy fikr bildirish", color: "bg-zinc-300" },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${item.color}/20`}>
                      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                      <span className="text-white text-sm font-semibold w-28">{item.daraja}</span>
                      <span className="text-zinc-400 text-sm">— {item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TamoyilCard>

            <Example icon="🔢" title="Formulani yodlash vs tushunish">
              <strong className="text-zinc-400">Mexanik:</strong> "S = v × t — yodla!"<br /><br />
              <strong className="text-amber-300">Ongli:</strong> "Agar 60 km/soat tezlikda 2 soat yursa —
              qancha yo'l bosadi? Avval o'yla... 60 × 2 = 120 km. Mana, formula o'zi chiqdi."<br /><br />
              Ikkinchi holda o'quvchi formulani unutsa ham, qayta chiqarishi mumkin — chunki u tushungan.
            </Example>

            <TamoyilCard number="5" icon="🔁" title="Mustahkamlik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Yangi bilim darhol unutilmasligi uchun uni <strong className="text-white">takrorlash,
                mashq qilish va amalda qo'llash</strong> zarur. Psixologik tadqiqotlar ko'rsatishicha,
                o'quvchi yangi ma'lumotning 70% ini birinchi kuniyoq, 90% ini bir hafta ichida unutadi —
                agar takrorlanmasa. Bu Ebbinghaus "Unutish egri chizig'i" qonuni.
                Mustahkamlik tamoyilini amalga oshirish uchun: dars oxirida xulosa, uyga vazifa,
                keyingi darsda oldingi mavzuni so'rash, test va amaliy topshiriqlar.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">Ebbinghaus — unutish egri chizig'i</p>
                <div className="space-y-2">
                  {[
                    { vaqt: "Darhol", esda: 100, barWidth: "100%" },
                    { vaqt: "1 soatdan keyin", esda: 58, barWidth: "58%" },
                    { vaqt: "1 kundan keyin", esda: 33, barWidth: "33%" },
                    { vaqt: "1 haftadan keyin", esda: 21, barWidth: "21%" },
                    { vaqt: "1 oydan keyin", esda: 12, barWidth: "12%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-zinc-400 text-xs w-36 flex-shrink-0">{item.vaqt}</span>
                      <div className="flex-1 bg-zinc-700 rounded-full h-4 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.barWidth }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="h-full bg-zinc-400 rounded-full"
                        />
                      </div>
                      <span className="text-white text-xs font-bold w-10">{item.esda}%</span>
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-xs mt-3">* Takrorlash bu egri chiziqni tekislashtiradi</p>
              </div>
            </TamoyilCard>

            <Example icon="📅" title="Takrorlash jadvali — amalda">
              Yangi ingliz so'zini o'rgandingiz.<br />
              Agar faqat bir marta o'qisangiz — bir haftada unutasiz.<br /><br />
              Optimal takrorlash jadvali (interval repetition):<br />
              <strong className="text-zinc-300">Bugun → Ertaga → 3 kundan keyin → 1 haftada → 2 haftada</strong><br /><br />
              <span className="text-amber-300">Xuddi shu tamoyil asosida Anki, Duolingo va boshqa
              ilovalar ishlaydi.</span>
            </Example>

            <TamoyilCard number="6" icon="🎯" title="Maqsadga muvofiqlik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Ta'lim jarayonining har bir elementi — mavzu, usul, vazifa, baholash —
                <strong className="text-white"> aniq maqsadga xizmat qilishi</strong> kerak.
                O'qituvchi dars o'tishdan oldin o'ziga savol berishi shart:
                "Bu dars oxirida o'quvchi nima qila olishi kerak?"
                Agar javob aniq bo'lmasa — dars samarasiz bo'ladi.
                Maqsad SMART formatida ifodalanishi lozim: aniq, o'lchanadigan, erishib bo'ladigan,
                dolzarb va muddatli.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">SMART maqsad qanday ko'rinadi?</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3"><span className="text-red-400 flex-shrink-0">✗</span><span className="text-zinc-400">"O'quvchilar fizikani o'rganadi" — noaniq</span></div>
                  <div className="flex items-start gap-3"><span className="text-green-400 flex-shrink-0">✓</span><span className="text-zinc-300">"Dars oxirida o'quvchi Nyutonning 2-qonunini formulada ifodalaydi va 3 ta misol yechadi" — aniq va o'lchanadigan</span></div>
                </div>
              </div>
            </TamoyilCard>

            <TamoyilCard number="7" icon="👤" title="Individual yondashuv tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Har bir o'quvchi <strong className="text-white">o'ziga xos</strong> — uning o'rganish tezligi,
                bilim darajasi, motivatsiyasi, hayotiy tajribasi va idrok usuli boshqacha.
                Individual yondashuv tamoyili: o'qituvchi sinfni bir butun massa sifatida emas,
                har bir shaxs sifatida ko'rishi kerak. Bu degani, bir xil topshiriqni
                barcha o'quvchilarga bir xil tarzda berish — har doim ham to'g'ri emas.
                Zamonaviy ta'limda bu tamoyil <em>differensiallashgan ta'lim</em> ko'rinishida
                amalga oshiriladi: kuchli o'quvchilarga qiyinroq topshiriq,
                qiynalyotgan o'quvchilarga qo'shimcha yordam va vaqt.
              </p>
              <div className="bg-zinc-800 p-4 rounded-xl">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-3">O'rganish uslublari (VARK modeli)</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { letter: "V", name: "Visual", desc: "Rasm, grafik, jadval orqali" },
                    { letter: "A", name: "Auditiv", desc: "Eshitish, tinglash orqali" },
                    { letter: "R", name: "Reading", desc: "O'qish, yozish orqali" },
                    { letter: "K", name: "Kinestetik", desc: "Qo'l bilan qilish orqali" },
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-900 p-3 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-black text-lg">{item.letter}</span>
                        <span className="text-zinc-300 font-semibold text-sm">{item.name}</span>
                      </div>
                      <p className="text-zinc-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TamoyilCard>

            <Example icon="🏃" title="Sport — individual yondashuv">
              Futbol murabbiyi barcha o'yinchilarga bir xil mashq beradi — kuchli o'yinchi zerikadi,
              zaif o'yinchi esa zo'riqib jarohatlanishi mumkin.<br /><br />
              Yaxshi murabbiy: "Siz 100 marta uring, siz 50 marta, siz esa texnikani avval ko'r."<br /><br />
              <span className="text-amber-300">Xuddi shu tamoyil — sinfda ham ishlaydi.</span>
            </Example>

            <TamoyilCard number="8" icon="🌍" title="Hayot bilan bog'liqlik tamoyili">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Ta'lim <strong className="text-white">real hayotdan ajralmas</strong> bo'lishi kerak.
                O'quvchi "Bu nima kerak?" degan savolga aniq javob ola bilishi lozim.
                Agar o'tilgan mavzu hayot bilan bog'lanmasa — motivatsiya pasayadi,
                bilim esa tezda unutiladi. Hayot bilan bog'liqlik tamoyili:
                har bir mavzuni real misol, muammo yoki loyiha orqali tushuntirish.
                Masalan, foiz hisobini "bank krediti" orqali, fizika qonunlarini
                "avtomobil tormozlash masofasi" orqali ko'rsatish.
              </p>
            </TamoyilCard>

            <Example icon="💰" title="Foiz — abstract vs real">
              Abstract: "Foiz — bu butunning yuz qismdan biri. 200 × 0.15 = 30."<br /><br />
              Hayot bilan bog'liq: "Siz do'kondan 200 ming so'mlik telefon aksessuari olmoqchisiz.
              Do'konda 15% chegirma. Qancha to'laysiz?"<br /><br />
              <span className="text-amber-300">
                Ikkinchi usulda o'quvchi hisoblaydi, chunki buning unga kerakligi aniq.
              </span>
            </Example>

          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            TAQQOSLASH JADVALI
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TaqqoslashJadvali />
        </motion.div>

        {/* ══════════════════════════════════════════════
            TAMOYILLAR O'RTASIDAGI BOG'LIQLIK
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InfoCard>
            <h4 className="text-xl font-bold text-white mb-6">Tamoyillar qanday o'zaro bog'liq?</h4>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Har bir tamoyil alohida ishlaydi, lekin eng yuqori samara ularning
              <strong className="text-white"> birgalikda qo'llanilishida</strong>. Quyida bir darsning
              turli tamoyillar orqali qanday tuzilishi ko'rsatilgan:
            </p>
            <div className="space-y-3">
              {[
                { step: "Dars boshida", tamoyil: "Hayot bilan bog'liqlik", desc: "Real muammo yoki savol bilan darsni ochamiz — o'quvchi nima uchun o'rganishini biladi" },
                { step: "Yangi mavzu", tamoyil: "Ilmiylik + Tizimlilik", desc: "Ilmiy jihatdan to'g'ri bilim beriladi, oldingi mavzu bilan bog'lanadi" },
                { step: "Tushuntirish", tamoyil: "Ko'rgazmalilik", desc: "Rasm, video, namoyish — sensor kanallar faollashadi" },
                { step: "Mustaqil ish", tamoyil: "Onglilik + Faollik", desc: "O'quvchi o'zi yechadi, savollar beradi, muhokama qiladi" },
                { step: "Mashq", tamoyil: "Mustahkamlik", desc: "Turli xil misollar orqali yangi bilim mustahkamlanadi" },
                { step: "Dars oxiri", tamoyil: "Maqsadga muvofiqlik", desc: "Maqsad bajarilganmi tekshiriladi, uyga vazifa beriladi" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-zinc-800 p-4 rounded-xl">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-6 h-6 rounded-full bg-zinc-600 flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-zinc-400 text-xs">{item.step}</span>
                      <span className="text-white text-sm font-bold">{item.tamoyil}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </motion.div>

        {/* ══════════════════════════════════════════════
            3 TA QUIZ — KETMA-KET
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="02" title="Bilimni tekshir" />
          <div className="space-y-6">
            <Quiz
              question="O'qituvchi yangi mavzuni tushuntirishda doskaga chizma chizadi, model ko'rsatadi va video ijro etadi. Bu qaysi didaktik tamoyilga asoslanadi?"
              options={[
                "Ilmiylik tamoyili — faqat to'g'ri bilim berish",
                "Ko'rgazmalilik tamoyili — bir nechta sensor kanal orqali o'rgatish",
                "Mustahkamlik tamoyili — takrorlash orqali mustahkamlash",
                "Tizimlilik tamoyili — ketma-ket o'rgatish"
              ]}
              correctIndex={1}
              explanation="Ko'rgazmalilik tamoyili — o'quvchi bilimni ko'rish, eshitish va his qilish orqali chuqurroq o'zlashtiradi. Chizma, model va video bir vaqtda bir nechta sensor kanallarni faollashtiradi."
            />

            <Quiz
              question="Ebbinghaus 'Unutish egri chizig'i' qaysi tamoyilning ilmiy asosi hisoblanadi?"
              options={[
                "Ko'rgazmalilik tamoyili",
                "Individual yondashuv tamoyili",
                "Mustahkamlik tamoyili",
                "Hayot bilan bog'liqlik tamoyili"
              ]}
              correctIndex={2}
              explanation="Mustahkamlik tamoyili: bilim takrorlanmasa tezda unutiladi — Ebbinghaus egri chizig'i buni ilmiy isbotlaydi. Shuning uchun takrorlash, mashq va amalda qo'llash zarur."
            />

            <Quiz
              question="O'qituvchi sinfda kuchli o'quvchilarga qiyinroq, qiynalyotgan o'quvchilarga osonroq topshiriq beradi. Bu qaysi tamoyil?"
              options={[
                "Tizimlilik tamoyili — oddiydan murakkabga",
                "Maqsadga muvofiqlik tamoyili — har bir topshiriq maqsadga xizmat qiladi",
                "Individual yondashuv tamoyili — har o'quvchiga mos sharoit yaratish",
                "Faollik tamoyili — o'quvchini faol ishlashga undash"
              ]}
              correctIndex={2}
              explanation="Individual yondashuv (differensiallashgan ta'lim) tamoyili: har bir o'quvchi o'ziga xos, shuning uchun topshiriqlar o'quvchining bilim darajasiga moslashtirilishi kerak."
            />
          </div>
        </motion.div>

        {/* ── FOOTER ── */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-sm">Reja 04 / 06 — Didaktika Tamoyillari</p>
        </div>

      </div>
    </div>
  )
}

export default Topic4
