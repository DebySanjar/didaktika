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
const MemeCard = ({ src, alt, topText, bottomText, caption }) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-2xl mx-auto">
    <div className="relative">
      <img src={src} alt={alt} className="w-full object-cover" style={{ maxHeight: '480px' }} />
      {topText && (
        <div className="absolute top-3 left-0 right-0 flex justify-center px-4">
          <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
            {topText}
          </p>
        </div>
      )}
      {bottomText && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
          <p className="text-white font-black text-xl md:text-2xl text-center uppercase"
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
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
// TOPIC 3 PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const Topic3 = () => {
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
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Reja 03</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Turli Tarixiy<br />Davrlarda<br />
            <span className="text-zinc-400">Didaktik Tizimlar</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 1 — QADIMGI DAVR
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="01" title="Qadimgi davr — Sokrat, Platon, Aristotel" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                Qadimgi Yunonistonda ta'lim bizga tushuncha sifatida tanish bo'lgan maktab tizimidan mutlaqo boshqacha ko'rinishda mavjud edi.
                O'qitish ko'chada, bozorda, ibodatxona oldida — hayotning o'zida sodir bo'lardi. Eng muhimi,
                bu jarayon <strong className="text-white">dialog</strong> shaklida, ya'ni savol-javob orqali amalga oshirilardi.
              </p>

              <div className="space-y-5">
                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🏛️ Sokrat usuli — Mayevtika</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Sokrat (miloddan avvalgi 470–399) hech qachon tayyor javob bermagan. U shogirdlariga ketma-ket savollar berib,
                    ularni o'zlari to'g'ri xulosaga kelishga majbur qilgan. Bu usul <em>mayevtika</em> deb atalib,
                    yunoncha "duoya yordam berish" degan ma'noni anglatadi — xuddi aqldagi bilimni "tug'dirishga" yordam berish kabi.
                    Sokrat: "Men hech narsani bilmayman, lekin men bu haqda bilaman" — deydi. Bu o'z-o'zini
                    tanqid qilish va izlanish ruhini shakllantirishning eng qadimgi namunasi.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">📚 Platon — Akademiya</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Platon (miloddan avvalgi 428–348) o'z ustozi Sokratning usulini yanada rivojlantirdi va miloddan avvalgi 387-yilda
                    tarixdagi birinchi oliy o'quv yurtlaridan biri — Akademiyani tashkil etdi. U ta'limni ikki bosqichga ajratdi:
                    avval jismoniy va musiqiy tarbiya, so'ngra matematik va falsafiy fanlar.
                    Platonning asosiy g'oyasi: ta'lim — bu ruhni haqiqatga yo'naltirish jarayoni, shunchaki ma'lumot berish emas.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🔬 Aristotel — Litsey va kuzatuv</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Aristotel (miloddan avvalgi 384–322) Platonning shogirdi bo'lishiga qaramasdan,
                    o'z ilmiy maktabini — Litseyni tashkil etdi. U ta'limga yangi yondashuv olib kirdi:
                    bilim faqat fikr yuritish orqali emas, <strong className="text-white">tabiatni kuzatish va tajriba</strong> orqali
                    ham olinishi mumkin. Aristotel mantiq, biologiya, etika, siyosat fanlarini birinchi marta tizimli o'rgatdi.
                    Uning o'quvchilaridan biri — Iskandar Zulqarnayn, ya'ni Makedoniyalik Aleksandr edi.
                  </p>
                </div>
              </div>
            </InfoCard>

            <Example icon="🗣️" title="Sokrat usuli hozir ham ishlaydi">
              Yaxshi o'qituvchi: "Bu formulani eslang" — demaydi.<br />
              Yaxshi o'qituvchi: "Agar tezlik oshsa, vaqt o'zgaradimi? Nima uchun?" — deb so'raydi.<br /><br />
              O'quvchi o'zi fikrlab javobga kelsa — bu bilim uzoq vaqt esda qoladi.
              Bu aynan Sokratning 2500 yil oldin ishlatgan usuli. Zamonaviy pedagogika uni
              <strong className="text-amber-300"> "muammoli ta'lim"</strong> deb ataydi.
            </Example>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 2 — O'RTA ASRLAR
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="02" title="O'rta asrlar — Sxolastika va Ibn Sino" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                O'rta asrlarda (V–XV asrlar) ta'lim ikki yo'nalishda rivojlandi: G'arbiy Yevropada
                cherkov tomonidan boshqariladigan <strong className="text-white">sxolastik ta'lim</strong>,
                Sharqda esa ilm-fanni olg'a surgan <strong className="text-white">musulmon olimlari maktabi</strong>.
                Bu ikki yo'nalish bir-biridan keskin farq qilardi.
              </p>

              <div className="space-y-5">
                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">⛪ Sxolastika — G'arbiy Yevropa</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Sxolastika (lotincha "scholasticus" — maktabga oid) — O'rta asr Yevropasining asosiy
                    ta'lim tizimi edi. Uning mohiyati: diniy matnlarni (Bibliya, cherkov otalari asarlari) yodlash,
                    ularga sharh yozish va mantiqiy tarzda asoslash. O'quvchi savollamasligi, shubha bildirmasligi
                    kerak edi — chunki haqiqat allaqachon muqaddas kitoblarda yozilgan deb hisoblangan.
                    Natijada ijodkorlik va mustaqil fikrlash so'nib bordi.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🕌 Ibn Sino va Al-Farobiy — Sharq uyg'onishi</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    G'arb qorong'ulikda yotgan bir paytda, IX–XI asrlarda Markaziy Osiyo va Arab olamida
                    ilmiy inqilob sodir bo'ldi. Ibn Sino (980–1037) nafaqat tibbiyot ensiklopediyasi —
                    "Al-Qonun fit-Tibb" ni yozdi, balki ta'lim haqida ham chuqur fikrlar bildirdi.
                    U bolaning psixologik xususiyatlarini hisobga olish, har bir o'quvchiga individual yondashish
                    va bilimni hayot bilan bog'lash zarurligini ta'kidladi. Al-Farobiy (872–950) esa
                    fanning tasnifini ishlab chiqib, qaysi fanlar qanday ketma-ketlikda o'rgatilishi kerakligini belgiladi.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🏰 Faqat zodagonlar uchun ta'lim</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    O'rta asrlarning eng katta kamchiligi — ta'lim faqat cherkov ruhoniylari, zodagonlar
                    va boylar uchun mavjud edi. Oddiy dehqon va hunarmandning farzandi maktabga borishi
                    deyarli mumkin emasdi. Yevropada savodlilik darajasi 5–10% atrofida bo'lgan.
                    Faqat monastir maktablari biroz demokratik edi — ular yetim va kambag'al bolalarni ham
                    o'qitardi, lekin maqsad faqat diniy xizmatga tayyorlash edi.
                  </p>
                </div>
              </div>
            </InfoCard>

            <Example icon="📜" title="O'rta asr darsi qanday bo'lgan?">
              O'qituvchi kitobni ovoz chiqarib o'qiydi. O'quvchilar quloq soladi va yodlaydi.
              Savol berish — hurmatsizlik belgisi. "Nima uchun?" degan savol — bid'at.
              Imtihon: yodlagan narsangni ayt.<br /><br />
              <span className="text-zinc-400">Hozir ham ba'zi darslar shu ko'rinishda o'tadimi?.. 🤔</span>
            </Example>
          </div>
        </motion.div>

        {/* MEME 1 — Baronlar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MemeCard
            src="/baronlar.jpg"
            alt="Baronlar meme"
            topText="O'rta asrlarda ta'lim:"
            bottomText="Faqat biz o'qiymiz, qolganlar dalada ishlaydi!"
            caption="💡 O'rta asrlarda savodlilik darajasi Yevropada atigi 5–10% edi. Ta'lim imtiyoz edi, huquq emas."
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
            question="O'rta asrlardagi sxolastik ta'limning asosiy kamchiligi nima edi?"
            options={[
              "Darsliklar juda qimmat bo'lgan",
              "Mustaqil fikrlash va ijodkorlik so'ndirilgan, faqat yodlash talab etilgan",
              "O'qituvchilar yetarli bo'lmagan",
              "Matematika o'rgatilmagan"
            ]}
            correctIndex={1}
            explanation="Sxolastika diniy matnlarni yodlash va ularga shubhasiz bo'ysunishga asoslangan edi. Savol berish, mustaqil fikrlash man etilgan — bu ijodkorlik va ilmiy rivojlanishni to'sib qo'ydi."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 3 — UYG'ONISH DAVRI VA KOMENSKIY
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="03" title="Uyg'onish davri — Jan Amos Komenskiy" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                XV–XVII asrlarda Yevropada <strong className="text-white">Renessans</strong> — uyg'onish davri boshlandi.
                Insoniyat qayta Qadimgi Yunoniston ideallariga — erkin fikrlash, ilm-fan va tabiatga murojaat etdi.
                Ta'lim sohasida bu davrning eng buyuk islohotchisi — chex pedagogi
                <strong className="text-white"> Jan Amos Komenskiy</strong> (1592–1670) bo'ldi.
              </p>

              <div className="space-y-5">
                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">📖 "Buyuk Didaktika" — 1657</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Komenskiyning asosiy asari — "Didactica Magna" ("Buyuk Didaktika") pedagogika fanining
                    birinchi tizimli qo'llanmasi hisoblanadi. Unda u o'zining bosh g'oyasini bayon etdi:
                    <em> "Hammaga hamma narsani o'rgatish mumkin"</em> — ya'ni ta'lim faqat elita uchun emas,
                    barcha ijtimoiy tabaqadan bo'lgan bolalar uchun ochiq bo'lishi kerak.
                    Bu o'sha davr uchun inqilobiy fikr edi.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🏫 Sinf-dars tizimi</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Komenskiydan oldin o'qituvchi har bir o'quvchi bilan alohida shug'ullanardi — bu juda sekin va samarasiz edi.
                    Komenskiy <strong className="text-white">sinf-dars tizimini</strong> ixtiro qildi:
                    bir xil yoshdagi o'quvchilarni bir sinfga yig'ish, har bir dars belgilangan vaqtda bo'lishi,
                    o'quv yili tushum va bahor tatillari bilan bo'linishi. Bugungi maktab tizimining poydevori
                    aynan mana shu 1657-yildagi kashfiyotdir.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">👁️ Ko'rgazmalilik tamoyili</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Komenskiy birinchi bo'lib rasmli darsliklar yaratdi — "Orbis Sensualium Pictus"
                    ("Ko'rinadigan dunyo rasmlarda", 1658). U shunday dedi: "O'quvchiga avval narsaning o'zini
                    ko'rsat, keyin so'zini o'rgat." Bu hozirgi ko'rgazmali qurollar, slaydlar, videodarslar —
                    barchasining nazariy asosi. Komenskiy shuningdek tabiatga mos ta'lim tamoyilini ham asoslab berdi:
                    ta'lim bolaning yoshi va rivojlanish darajasiga mos bo'lishi kerak.
                  </p>
                </div>
              </div>
            </InfoCard>

            <Example icon="🌍" title="Komenskiyning ta'siri bugun ham seziladi">
              Siz hozir maktabda o'qigansiz. U yerda: sinflar bor, dars jadval bo'yicha o'tadi,
              o'quv yili sentyabrda boshlanadi, rasmli darsliklar bor, bir sinfda tengdoshlar o'tiradi.<br /><br />
              <strong className="text-amber-300">Bularning barchasini 1657-yilda Komenskiy loyihalagan.</strong><br />
              370 yil o'tdi — tizim hali ham ishlayapti.
            </Example>
          </div>
        </motion.div>

        {/* MEME 2 — Books */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MemeCard
            src="/books.jpg"
            alt="Big book small book meme"
            topText="O'rta asrlar: bitta yodlash kitobi"
            bottomText="Komenskiy: rasmli darsliklar, sinf tizimi, ko'rgazmali qurollar..."
            caption="💡 Komenskiy ta'limni tubdan o'zgartirdi — yodlashdan tushunishga, elitadan ommaga."
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
            question="Jan Amos Komenskiy qaysi tizimni ixtiro qilib, zamonaviy maktabning asosini qo'ydi?"
            options={[
              "Individual o'qitish tizimi — har bir o'quvchi bilan alohida",
              "Sinf-dars tizimi — tengdoshlarni birlashtirib, jadval asosida o'qitish",
              "Masofaviy ta'lim tizimi — uyda o'qish",
              "Imtihon tizimi — yil oxirida yagona test"
            ]}
            correctIndex={1}
            explanation="Komenskiy sinf-dars tizimini joriy etdi: bir xil yoshdagi o'quvchilarni sinfga yig'ish, darslarni jadval bo'yicha o'tkazish. Bu tizim 1657-yildan beri dunyo bo'yicha ishlatiladi."
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 4 — XIX–XX ASR
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="04" title="XIX–XX asr — Pestalotsi, Dyui, Vygotskiy" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                Sanoat inqilobi ta'lim sohasida ham inqilobni taqozo etdi. Fabrikalar uchun savodli ishchilar,
                davlat uchun bilimli fuqarolar kerak edi. Shu davrda uchta buyuk pedagog ta'lim nazariyasini
                tubdan o'zgartirib yubordi.
              </p>

              <div className="space-y-5">
                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🇨🇭 Iogann Genrix Pestalotsi (1746–1827)</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Shveytsariyalik pedagog Pestalotsi ta'limda "uch birlik" g'oyasini ilgari surdi:
                    <strong className="text-white"> Bosh + Qo'l + Yurak</strong> — ya'ni aqliy, jismoniy va axloqiy rivojlanish birgalikda bo'lishi kerak.
                    U Shveytsariyada kambag'al bolalar uchun maktab-internatlat tashkil etdi va
                    o'z usulini amalda sinab ko'rdi. Pestalotsi bolaga to'g'ri muomala qilish,
                    uning his-tuyg'ularini hisobga olish zarurligi haqida birinchilardan bo'lib yozdi.
                    Uning ishi keyinchalik "Ta'limda insonparvarlik" harakatining asosiga aylandi.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🇺🇸 Jon Dyui (1859–1952)</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Amerikalik faylasuf va pedagog Jon Dyui ta'limda inqilob qildi:
                    <strong className="text-white"> "Learning by doing"</strong> — qilish orqali o'rganish.
                    Dyuiga ko'ra, bola maktabda passiv o'tiruvchi emas, balki faol ishtirokchi bo'lishi kerak.
                    U 1896-yilda Chikagoda "laboratoriya maktabi" tashkil etdi — u yerda bolalar
                    o'qish o'rniga real loyihalar ustida ishlaydi, ovqat pishiradi, bino quradi,
                    va bu jarayonda matematika, fizika, adabiyotni o'zlashtirishadi.
                    Dyuining g'oyalari hozirgi proyektga asoslangan ta'lim (PBL) ning poydevori.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🇷🇺 Lev Vygotskiy (1896–1934)</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Sovet psixologi Vygotskiy ta'lim psixologiyasiga <strong className="text-white">"Yaqin rivojlanish zonasi"</strong>
                    (ZPD — Zone of Proximal Development) tushunchasini olib kirdi.
                    Bu zona — bolaning hozir o'zi qila oladigan narsa bilan, kattalar yordamida qila oladigan narsa
                    o'rtasidagi masofa. Eng samarali ta'lim aynan shu zonada amalga oshadi:
                    juda oson bo'lsa — bola zerikadi, juda qiyin bo'lsa — ruhdan tushadi.
                    Bundan tashqari, Vygotskiy til va ijtimoiy muhitning o'qishga ta'sirini ilmiy asoslab berdi.
                  </p>
                </div>
              </div>
            </InfoCard>

            <Example icon="🔨" title="Dyui usuli — bugun ham dolzarb">
              Agar siz robotika to'garagida dastur yozib, roboni harakat qildirgan bo'lsangiz —
              bu Dyuining "learning by doing" usuli.<br />
              Agar maktabda loyiha tayyorlab, taqdimot qilgan bo'lsangiz — bu ham Dyui.<br /><br />
              <span className="text-amber-300">100 yil oldingi g'oya, bugun ham eng samarali metodlardan biri.</span>
            </Example>

            <Example icon="🧗" title="Vygotskiyning ZPD — amalda">
              O'qituvchi 5-sinfga integral hisoblashni o'rgatmoqchi. Bu ZPD dan tashqarida — juda qiyin.<br />
              O'qituvchi 5-sinfga 1+1 ni hisoblashni o'rgatmoqchi. Bu ZPD dan past — juda oson, zerikadi.<br /><br />
              <strong className="text-amber-300">To'g'ri variant:</strong> biroz qiyin, lekin yordamchi savol bilan yechiladigan masala —
              aynan shu "yaqin rivojlanish zonasi".
            </Example>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            BLOK 5 — XXI ASR VA XULOSA
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle number="05" title="XXI asr — Raqamli ta'lim va AI" />

          <div className="space-y-6">
            <InfoCard>
              <p className="text-xl leading-relaxed mb-6">
                Bugungi ta'lim inqilobi tarixdagi eng tezkor o'zgarish hisoblanadi.
                COVID-19 pandemiyasi butun dunyo ta'limini bir kechada onlayn formatga o'tishga majbur qildi.
                Endi masofaviy ta'lim, aralash format (blended learning), sun'iy intellekt yordamchilari —
                bularning hammasi oddiy maktab kundaligiga kirib kelmoqda.
              </p>

              <div className="space-y-5">
                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🔄 Flipped Classroom — Teskari sinf</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    An'anaviy sxema: o'qituvchi darsda tushuntiradi → o'quvchi uyda mashq qiladi.<br />
                    Teskari sinf sxemasi: o'quvchi uyda video dars ko'radi → darsda muammo yechadi, savol beradi.
                    Bu yondashuv dars vaqtini passiv tinglovchilikdan faol ishlashga yo'naltiradi.
                    Tadqiqotlar ko'rsatishicha, bu usulda o'zlashtirish 15–25% ga oshadi.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-3">🤖 AI va ta'lim</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    ChatGPT, Khanmigo, Duolingo, Coursera — bu platformalar har bir o'quvchiga
                    individual ta'lim yo'lini taklif eta oladi. AI o'quvchining zaif tomonlarini aniqlaydi,
                    unga mos murakkablikdagi topshiriqlar beradi, tezkor fikr-mulohaza bildiradi.
                    Biroq texnologiya — faqat vosita. Agar uning orqasida didaktik tamoyillar bo'lmasa,
                    eng zamonaviy AI ham samarasiz ta'lim beradi.
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* Solishtirma jadval */}
            <InfoCard>
              <h4 className="text-xl font-bold text-white mb-6">Tarixiy davrlar — qisqacha jadval</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-zinc-700 rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-zinc-800">
                      <th className="border border-zinc-700 p-3 text-left text-white">Davr</th>
                      <th className="border border-zinc-700 p-3 text-left text-white">Asosiy yondashuv</th>
                      <th className="border border-zinc-700 p-3 text-left text-white">Markaziy figura</th>
                      <th className="border border-zinc-700 p-3 text-left text-white">Zaif tomoni</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { davr: 'Qadimgi davr', yondashuv: 'Sokrat usuli, dialog', marka: 'O\'qituvchi', zaif: 'Faqat elita uchun' },
                      { davr: 'O\'rta asrlar', yondashuv: 'Yodlash, sxolastika', marka: 'Muqaddas matn', zaif: 'Ijodkorlik yo\'q' },
                      { davr: 'Uyg\'onish (XVII)', yondashuv: 'Tizimli, ko\'rgazmali', marka: 'Komenskiy tizimi', zaif: 'Individual yondashuv kam' },
                      { davr: 'XIX–XX asr', yondashuv: 'Tajriba, faoliyat', marka: 'O\'quvchi', zaif: 'Tizimlilik etishmaydi' },
                      { davr: 'XXI asr', yondashuv: 'AI, aralash format', marka: 'Hamkorlik', zaif: 'Raqamli tengsizlik' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/50'}>
                        <td className="border border-zinc-700 p-3 text-zinc-200 font-semibold">{row.davr}</td>
                        <td className="border border-zinc-700 p-3 text-zinc-300">{row.yondashuv}</td>
                        <td className="border border-zinc-700 p-3 text-zinc-300">{row.marka}</td>
                        <td className="border border-zinc-700 p-3 text-zinc-400">{row.zaif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </InfoCard>
          </div>
        </motion.div>

        {/* Quiz 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quiz
            question="Vygotskiyning 'Yaqin rivojlanish zonasi' (ZPD) nimani anglatadi?"
            options={[
              "O'quvchi mustaqil bajara oladigan eng qiyin topshiriq",
              "O'quvchi hozir o'zi bilgan narsa bilan kattalar yordamida bila oladigan narsa o'rtasidagi masofa",
              "O'qituvchi va o'quvchi o'rtasidagi jismoniy masofa",
              "O'quvchining geografik jihatdan yaqin bo'lgan maktab hududi"
            ]}
            correctIndex={1}
            explanation="ZPD — o'quvchi hozir o'zi qila oladigan narsa bilan, yetakchi yordami orqali qila oladigan narsa o'rtasidagi zona. Eng samarali ta'lim aynan shu zonada sodir bo'ladi."
          />
        </motion.div>

        {/* ── FOOTER ── */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-sm">Reja 03 / 06 — Turli Tarixiy Davrlarda Didaktik Tizimlar</p>
        </div>

      </div>
    </div>
  )
}

export default Topic3
