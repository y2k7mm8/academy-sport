import { Medal, Trophy, Award, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const pageTranslations = {
  ru: {
    hero: {
      tag: "Результаты",
      title1: "НАШИ",
      title2: "ДОСТИЖЕНИЯ",
      desc: "Наши воспитанники — гордость Кыргызстана на международной спортивной арене."
    },
    medalStats: {
      title1: "МЕДАЛЬНЫЙ",
      title2: "ЗАЧЕТ",
      totalLabel: "Всего медалей"
    },
    medals: [
      { type: "ЗОЛОТО", count: 125, bg: "bg-[#FFCD00]", text: "text-neutral-900" },
      { type: "СЕРЕБРО", count: 98, bg: "bg-neutral-300", text: "text-neutral-900" },
      { type: "БРОНЗА", count: 87, bg: "bg-[#cd7f32]", text: "text-white" },
    ],
    timeline: {
      title1: "ХРОНОЛОГИЯ",
      title2: "ПОБЕД"
    },
    achievements: [
      {
        year: 2024,
        events: [
          { title: "Чемпионат Азии по борьбе", result: "3 золотые, 2 серебряные", location: "Астана, Казахстан" },
          { title: "Юношеский чемпионат мира по боксу", result: "2 золотые, 1 бронзовая", location: "София, Болгария" },
          { title: "Кубок Азии по футболу U-19", result: "Выход в полуфинал", location: "Доха, Катар" }
        ]
      },
      {
        year: 2023,
        events: [
          { title: "Азиатские игры", result: "5 золотых, 4 серебряные", location: "Ханчжоу, Китай" },
          { title: "Чемпионат мира по дзюдо U-21", result: "1 золотая, 2 бронзовые", location: "Монпелье, Франция" },
          { title: "Первенство Азии по легкой атлетике", result: "4 золотые медали", location: "Бангкок, Таиланд" }
        ]
      },
      {
        year: 2022,
        events: [
          { title: "Юношеские Олимпийские игры", result: "2 золотые, 3 серебряные", location: "Дакар, Сенегал" },
          { title: "Чемпионат Центральной Азии", result: "15 золотых медалей", location: "Бишкек, Кыргызстан" }
        ]
      }
    ],
    athletes: {
      title1: "ВЫДАЮЩИЕСЯ",
      title2: "АТЛЕТЫ",
      desc: "Лидеры сборных команд, показавшие наивысшие результаты в сезоне."
    },
    records: [
      { athlete: "Айдос Султанов", sport: "Борьба вольная", achievement: "Чемпион мира среди юниоров", year: "2023" },
      { athlete: "Аида Касымова", sport: "Легкая атлетика (800м)", achievement: "Рекорд Кыргызстана U-20", year: "2024" },
      { athlete: "Бектур Осмонов", sport: "Бокс (75 кг)", achievement: "Победитель молодежного чемпионата Азии", year: "2023" },
      { athlete: "Жамиля Турсунова", sport: "Дзюдо (63 кг)", achievement: "Серебряный призер Азиатских игр", year: "2023" }
    ]
  },
  ky: {
    hero: {
      tag: "Натыйжалар",
      title1: "БИЗДИН",
      title2: "ЖЕТИШКЕНДИКТЕР",
      desc: "Биздин тарбиялануучулар — эл аралык спорттук аренада Кыргызстандын сыймыгы."
    },
    medalStats: {
      title1: "МЕДАЛДЫК",
      title2: "ЭСЕП",
      totalLabel: "Жалпы медалдар"
    },
    medals: [
      { type: "АЛТЫН", count: 125, bg: "bg-[#FFCD00]", text: "text-neutral-900" },
      { type: "КҮМҮШ", count: 98, bg: "bg-neutral-300", text: "text-neutral-900" },
      { type: "КОЛО", count: 87, bg: "bg-[#cd7f32]", text: "text-white" },
    ],
    timeline: {
      title1: "ЖЕҢИШТЕРДИН",
      title2: "ХРОНОЛОГИЯСЫ"
    },
    achievements: [
      {
        year: 2024,
        events: [
          { title: "Күрөш боюнча Азия чемпионаты", result: "3 алтын, 2 күмүш", location: "Астана, Казакстан" },
          { title: "Бокс боюнча өспүрүмдөр арасындагы дүйнө чемпионаты", result: "2 алтын, 1 коло", location: "София, Болгария" },
          { title: "Футбол боюнча U-19 Азия кубогу", result: "Жарым финалга чыгуу", location: "Доха, Катар" }
        ]
      },
      {
        year: 2023,
        events: [
          { title: "Азия оюндары", result: "5 алтын, 4 күмүш", location: "Ханчжоу, Кытай" },
          { title: "Дзюдо боюнча U-21 дүйнө чемпионаты", result: "1 алтын, 2 коло", location: "Монпелье, Франция" },
          { title: "Жеңил атлетика боюнча Азия биринчилиги", result: "4 алтын медаль", location: "Бангкок, Таиланд" }
        ]
      },
      {
        year: 2022,
        events: [
          { title: "Өспүрүмдөр Олимпиада оюндары", result: "2 алтын, 3 күмүш", location: "Дакар, Сенегал" },
          { title: "Борбордук Азия чемпионаты", result: "15 алтын медаль", location: "Бишкек, Кыргызстан" }
        ]
      }
    ],
    athletes: {
      title1: "КӨРҮНҮКТҮҮ",
      title2: "АТЛЕТТЕР",
      desc: "Сезондо эң жогорку натыйжаларды көрсөткөн курама командалардын лидерлери."
    },
    records: [
      { athlete: "Айдос Султанов", sport: "Эркин күрөш", achievement: "Өспүрүмдөр арасындагы дүйнө чемпиону", year: "2023" },
      { athlete: "Аида Касымова", sport: "Жеңил атлетика (800м)", achievement: "Кыргызстандын U-20 рекорду", year: "2024" },
      { athlete: "Бектур Осмонов", sport: "Бокс (75 кг)", achievement: "Жаштар арасындагы Азия чемпионатынын жеңүүчүсү", year: "2023" },
      { athlete: "Жамиля Турсунова", sport: "Дзюдо (63 кг)", achievement: "Азия оюндарынын күмүш медаль ээси", year: "2023" }
    ]
  }
};

export function Achievements() {
  const { language } = useLanguage();
  const t = pageTranslations[language];

  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="bg-neutral-950 pt-32 pb-20 border-b-8 border-[#FFCD00]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-[#E31837]"></span>
            <span className="text-[#E31837] font-bold tracking-[0.2em] text-sm uppercase">{t.hero.tag}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            {t.hero.title1} <br/><span className="text-neutral-500">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-medium border-l-4 border-[#FFCD00] pl-6">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Medal Statistics */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-neutral-900">
              {t.medalStats.title1} <br/><span className="text-[#E31837]">{t.medalStats.title2}</span>
            </h2>
            <div className="bg-neutral-950 text-white px-8 py-4 flex flex-col items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFCD00] mb-1">{t.medalStats.totalLabel}</span>
              <span className="text-5xl font-black tracking-tighter">310</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.medals.map((medal, index) => (
              <div key={index} className={`${medal.bg} ${medal.text} p-12 relative overflow-hidden group`}>
                <div className="relative z-10">
                  <h3 className="text-sm font-bold tracking-widest mb-6 border-b border-current pb-4">
                    {medal.type}
                  </h3>
                  <div className="text-7xl md:text-8xl font-black tracking-tighter">
                    {medal.count}
                  </div>
                </div>
                <Medal className="absolute -bottom-8 -right-8 w-48 h-48 opacity-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-neutral-900 mb-16">
            {t.timeline.title1} <span className="text-neutral-400">{t.timeline.title2}</span>
          </h2>
          
          <div className="space-y-16">
            {t.achievements.map((yearData, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <div className="sticky top-24">
                    <h3 className="text-6xl font-black tracking-tighter text-[#E31837] mb-2">{yearData.year}</h3>
                    <div className="w-16 h-1 bg-neutral-900"></div>
                  </div>
                </div>
                
                <div className="md:col-span-9 grid lg:grid-cols-2 gap-8">
                  {yearData.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="bg-white border border-neutral-200 p-8 hover:border-neutral-900 transition-colors">
                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                          {event.location}
                        </span>
                      </div>
                      <h4 className="text-xl font-black uppercase tracking-tight text-neutral-900 mb-4 leading-tight">
                        {event.title}
                      </h4>
                      <p className="text-sm font-bold text-[#E31837] uppercase tracking-wide">
                        {event.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outstanding Athletes */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              {t.athletes.title1} <span className="text-[#FFCD00]">{t.athletes.title2}</span>
            </h2>
            <p className="text-neutral-400 font-medium">
              {t.athletes.desc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.records.map((record, index) => (
              <div key={index} className="border border-neutral-800 p-8 hover:border-[#E31837] transition-colors relative group">
                <div className="absolute top-0 left-0 w-full h-full bg-[#E31837]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#FFCD00] mb-2 block">
                        {record.sport}
                      </span>
                      <h3 className="text-3xl font-black uppercase tracking-tight">{record.athlete}</h3>
                    </div>
                    <div className="bg-neutral-800 text-white px-3 py-1 text-xs font-bold font-mono tracking-widest">
                      {record.year}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-lg font-medium text-neutral-300 border-l-2 border-[#E31837] pl-4">
                      {record.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
