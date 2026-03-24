import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ImageWithFallback from "../components/ImageWithFallback";

const pageTranslations = {
  ru: {
    hero: {
      tag: "Пресс-центр",
      title1: "НОВОСТИ",
      title2: "И СОБЫТИЯ",
      desc: "Официальная информация, результаты соревнований и жизнь Центра подготовки.",
    },
    categories: [
      "Все",
      "Официально",
      "Борьба",
      "Футбол",
      "Легкая атлетика",
      "Инфраструктура",
    ],
    mainNewsTag: "Главное",
    readMore: "Читать",
    loadMore: "Загрузить еще",
    newsletter: {
      title1: "ОФИЦИАЛЬНАЯ",
      title2: "РАССЫЛКА",
      desc: "Получайте первыми новости о победах, изменениях в составах и важных событиях.",
      placeholder: "ВАШ E-MAIL",
      btn: "Подписаться",
    },
    news: [
      {
        id: 1,
        title: "Команда по борьбе завоевала 5 медалей на чемпионате Азии",
        date: "10 марта 2026",
        category: "Борьба",
        image:
          "https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Молодежная сборная Кыргызстана по вольной борьбе показала выдающиеся результаты на чемпионате Азии, завоевав 3 золотые и 2 серебряные медали в напряженных поединках.",
        featured: true,
      },
      {
        id: 2,
        title: "Открытие нового тренировочного комплекса",
        date: "5 марта 2026",
        category: "Инфраструктура",
        image:
          "https://images.unsplash.com/photo-1729048229977-fa74f7a330af?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Состоялось торжественное открытие современного тренировочного комплекса с новейшим оборудованием для подготовки олимпийского резерва.",
        featured: true,
      },
      {
        id: 3,
        title: "Молодежная сборная по футболу готовится к Кубку Азии",
        date: "28 февраля 2026",
        category: "Футбол",
        image:
          "https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Команда проводит интенсивные тренировки и товарищеские матчи в рамках подготовки к предстоящему турниру.",
        featured: false,
      },
      {
        id: 4,
        title: "Легкоатлеты установили два национальных рекорда",
        date: "20 февраля 2026",
        category: "Легкая атлетика",
        image:
          "https://images.unsplash.com/photo-1765261473063-ec862e10ba58?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "На отборочных соревнованиях молодые легкоатлеты побили рекорды страны в беге на 800 и 1500 метров.",
        featured: false,
      },
      {
        id: 5,
        title: "Баскетбольная команда стала чемпионом Центральной Азии",
        date: "15 февраля 2026",
        category: "Баскетбол",
        image:
          "https://images.unsplash.com/photo-1721339041100-ec39e6600362?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Молодежная сборная по баскетболу одержала уверенную победу в финале регионального чемпионата.",
        featured: false,
      },
      {
        id: 6,
        title: "Подписано соглашение о сотрудничестве с НОК",
        date: "10 февраля 2026",
        category: "Официально",
        image:
          "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Центр и Национальный олимпийский комитет договорились о расширенной программе подготовки к Играм 2028.",
        featured: false,
      },
    ],
  },
  ky: {
    hero: {
      tag: "Пресс-борбор",
      title1: "ЖАҢЫЛЫКТАР",
      title2: "ЖАНА ОКУЯЛАР",
      desc: "Расмий маалымат, мелдештердин жыйынтыктары жана Даярдоо борборунун жашоосу.",
    },
    categories: [
      "Баары",
      "Расмий",
      "Күрөш",
      "Футбол",
      "Жеңил атлетика",
      "Инфраструктура",
    ],
    mainNewsTag: "Башкы",
    readMore: "Окуу",
    loadMore: "Дагы жүктөө",
    newsletter: {
      title1: "РАСМИЙ",
      title2: "ЖАЗЫЛУУ",
      desc: "Жеңиштер, курамдардагы өзгөрүүлөр жана маанилүү окуялар тууралуу жаңылыктарды биринчилерден болуп алыңыз.",
      placeholder: "СИЗДИН E-MAIL",
      btn: "Жазылуу",
    },
    news: [
      {
        id: 1,
        title: "Күрөш боюнча команда Азия чемпионатында 5 медаль жеңип алды",
        date: "10-март, 2026",
        category: "Күрөш",
        image:
          "https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Кыргызстандын эркин күрөш боюнча жаштар курамасы Азия чемпионатында көрүнүктүү натыйжаларды көрсөтүп, чыңалуу таймаштарда 3 алтын жана 2 күмүш медаль жеңип алды.",
        featured: true,
      },
      {
        id: 2,
        title: "Жаңы машыгуу комплексинин ачылышы",
        date: "5-март, 2026",
        category: "Инфраструктура",
        image:
          "https://images.unsplash.com/photo-1729048229977-fa74f7a330af?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Олимпиадалык резервди даярдоо үчүн эң жаңы жабдуулар менен заманбап машыгуу комплексинин салтанаттуу ачылышы болду.",
        featured: true,
      },
      {
        id: 3,
        title: "Футбол боюнча жаштар курамасы Азия Кубогуна даярданууда",
        date: "28-февраль, 2026",
        category: "Футбол",
        image:
          "https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Команда алдыдагы турнирге даярдануу алкагында интенсивдүү машыгууларды жана жолдоштук беттештерди өткөрүүдө.",
        featured: false,
      },
      {
        id: 4,
        title: "Жеңил атлетчилер эки улуттук рекорд койду",
        date: "20-февраль, 2026",
        category: "Жеңил атлетика",
        image:
          "https://images.unsplash.com/photo-1765261473063-ec862e10ba58?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Тандоо мелдештеринде жаш жеңил атлетчилер 800 жана 1500 метрге чуркоодо өлкөнүн рекорддорун жаңылашты.",
        featured: false,
      },
      {
        id: 5,
        title: "Баскетбол боюнча команда Борбордук Азиянын чемпиону болду",
        date: "15-февраль, 2026",
        category: "Баскетбол",
        image:
          "https://images.unsplash.com/photo-1721339041100-ec39e6600362?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Баскетбол боюнча жаштар курамасы аймактык чемпионаттын финалында ишенимдүү жеңишке жетти.",
        featured: false,
      },
      {
        id: 6,
        title: "УОК менен кызматташуу жөнүндө келишимге кол коюлду",
        date: "10-февраль, 2026",
        category: "Расмий",
        image:
          "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1080&auto=format&fit=crop",
        excerpt:
          "Борбор жана Улуттук олимпиада комитети 2028-жылкы Оюндарга даярдануунун кеңейтилген программасы боюнча макулдашты.",
        featured: false,
      },
    ],
  },
};

export function News() {
  const { language } = useLanguage();
  const t = pageTranslations[language];

  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="bg-neutral-950 pt-32 pb-20 border-b-8 border-[#E31837]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-[#FFCD00]"></span>
            <span className="text-[#FFCD00] font-bold tracking-[0.2em] text-sm uppercase">
              {t.hero.tag}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            {t.hero.title1} <br />
            <span className="text-neutral-500">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-medium border-l-4 border-[#E31837] pl-6">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-nowrap overflow-x-auto gap-8 py-6 no-scrollbar">
            {t.categories.map((category, index) => (
              <button
                key={index}
                className={`whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-colors pb-1 border-b-2 ${
                  index === 0
                    ? "border-[#E31837] text-neutral-900"
                    : "border-transparent text-neutral-400 hover:text-neutral-900 hover:border-neutral-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#E31837] mb-12 flex items-center gap-4">
            <span className="w-4 h-4 bg-[#E31837]"></span>
            {t.mainNewsTag}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {t.news
              .filter((item) => item.featured)
              .map((item) => (
                <article key={item.id} className="group cursor-pointer">
                  <div className="relative h-[400px] lg:h-[500px] mb-8 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
                    <div className="absolute top-0 left-0 bg-[#E31837] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
                      {item.category}
                    </div>
                  </div>

                  <div className="flex items-center text-neutral-400 text-xs font-bold font-mono tracking-widest mb-4 gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4 group-hover:text-[#E31837] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 font-medium leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:text-[#E31837] transition-colors">
                    {t.readMore}{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Regular News Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {t.news
              .filter((item) => !item.featured)
              .map((item) => (
                <article
                  key={item.id}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative h-[250px] mb-6 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4 border-b border-neutral-200 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E31837]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold font-mono tracking-widest text-neutral-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900 mb-4 group-hover:text-[#E31837] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-600 font-medium leading-relaxed mb-6 flex-grow">
                    {item.excerpt}
                  </p>
                </article>
              ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="border-2 border-neutral-900 text-neutral-900 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-900 hover:text-white transition-colors">
              {t.loadMore}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#E31837] py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          {/* Abstract pattern */}
          <div className="w-full h-full border-[20px] border-white rounded-full translate-x-1/2 -translate-y-1/4"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                {t.newsletter.title1} <br /> {t.newsletter.title2}
              </h2>
              <p className="text-white/80 font-medium text-lg">
                {t.newsletter.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-0 w-full max-w-xl lg:ml-auto">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-6 py-5 font-bold tracking-widest text-sm focus:outline-none focus:border-white focus:bg-white/20 transition-colors"
              />
              <button className="bg-white text-[#E31837] px-8 py-5 font-black uppercase tracking-widest text-sm hover:bg-neutral-900 hover:text-white transition-colors">
                {t.newsletter.btn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
