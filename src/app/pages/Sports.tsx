import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const pageTranslations = {
  ru: {
    hero: {
      tag: "Дисциплины",
      title1: "ВИДЫ",
      title2: "СПОРТА",
      desc: "Программы подготовки по 12 олимпийским и национальным видам спорта."
    },
    athletes: "АТЛЕТОВ",
    programsTag: "Направления подготовки",
    applyBtn: "Подать заявку",
    sports: [
      {
        name: "БОРЬБА",
        type: "ЕДИНОБОРСТВА",
        image: "https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop",
        description: "Традиционный вид спорта Кыргызстана с богатой историей побед. Обучение вольной и греко-римской борьбе.",
        programs: ["Классическая база", "Тактика ведения боя", "Силовая выносливость"],
        athletesCount: "120"
      },
      {
        name: "ЛЕГКАЯ АТЛЕТИКА",
        type: "ЦИКЛИЧЕСКИЕ ВИДЫ",
        image: "https://images.unsplash.com/photo-1765261473063-ec862e10ba58?q=80&w=1080&auto=format&fit=crop",
        description: "Королева спорта. Комплексная подготовка спринтеров, стайеров и прыгунов для международных соревнований.",
        programs: ["Спринт", "Стайерский бег", "Прыжковые дисциплины"],
        athletesCount: "90"
      },
      {
        name: "ДЗЮДО",
        type: "ЕДИНОБОРСТВА",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1080&auto=format&fit=crop",
        description: "Олимпийское дзюдо. Фокус на технике бросков, борьбе в партере и психологической устойчивости.",
        programs: ["Техника бросков", "Борьба в партере", "Контроль и захваты"],
        athletesCount: "85"
      },
      {
        name: "БОКС",
        type: "ЕДИНОБОРСТВА",
        image: "https://images.unsplash.com/photo-1724529808495-8b7cf64e3e3a?q=80&w=1080&auto=format&fit=crop",
        description: "Олимпийский бокс. Развитие скорости, точности ударов и тактического мышления на ринге.",
        programs: ["Постановка удара", "Защитные действия", "Спарринг-практика"],
        athletesCount: "110"
      },
      {
        name: "ФУТБОЛ",
        type: "КОМАНДНЫЕ ВИДЫ",
        image: "https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop",
        description: "Подготовка юношеских и молодежных сборных U-17, U-19, U-21 по передовым методикам.",
        programs: ["Индивидуальная техника", "Групповые взаимодействия", "Физическая кондиция"],
        athletesCount: "150"
      },
      {
        name: "ПЛАВАНИЕ",
        type: "ВОДНЫЕ ВИДЫ",
        image: "https://images.unsplash.com/photo-1572594505398-97a384b34ec8?q=80&w=1080&auto=format&fit=crop",
        description: "Спортивное плавание. Совершенствование техники во всех стилях и развитие скоростной выносливости.",
        programs: ["Кроль и баттерфляй", "Брасс и спина", "Старты и повороты"],
        athletesCount: "60"
      }
    ],
    reqs: {
      title1: "ТРЕБОВАНИЯ",
      title2: "К КАНДИДАТАМ",
      desc: "Отбор в Центр подготовки проводится на конкурсной основе. Мы ищем целеустремленных атлетов с базовой подготовкой.",
      btn: "Регламент отбора PDF",
      items: [
        { num: "01", title: "ВОЗРАСТ", desc: "От 12 до 23 лет в зависимости от специфики вида спорта." },
        { num: "02", title: "ЗДОРОВЬЕ", desc: "Полное медицинское обследование и допуск спортивного диспансера." },
        { num: "03", title: "БАЗА", desc: "Наличие спортивного разряда или подтвержденные результаты." },
        { num: "04", title: "ГРАФИК", desc: "Готовность к двухразовым тренировкам 6 дней в неделю." }
      ]
    }
  },
  ky: {
    hero: {
      tag: "Дисциплиналар",
      title1: "СПОРТ",
      title2: "ТҮРЛӨРҮ",
      desc: "12 олимпиадалык жана улуттук спорт түрлөрү боюнча даярдоо программалары."
    },
    athletes: "СПОРТЧУ",
    programsTag: "Даярдоо багыттары",
    applyBtn: "Арыз берүү",
    sports: [
      {
        name: "КҮРӨШ",
        type: "ЖЕКЕ ТАЙМАШТАР",
        image: "https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop",
        description: "Кыргызстандын бай жеңиш тарыхы бар салттуу спорт түрү. Эркин жана грек-рим күрөшүнө окутуу.",
        programs: ["Классикалык база", "Таймаш тактикасы", "Күч туруктуулугу"],
        athletesCount: "120"
      },
      {
        name: "ЖЕҢИЛ АТЛЕТИКА",
        type: "ЦИКЛДИК ТҮРЛӨР",
        image: "https://images.unsplash.com/photo-1765261473063-ec862e10ba58?q=80&w=1080&auto=format&fit=crop",
        description: "Спорт канышасы. Эл аралык мелдештер үчүн спринтерлерди, стайерлерди жана секирүүчүлөрдү комплекстүү даярдоо.",
        programs: ["Спринт", "Стайердик чуркоо", "Секирүү дисциплиналары"],
        athletesCount: "90"
      },
      {
        name: "ДЗЮДО",
        type: "ЖЕКЕ ТАЙМАШТАР",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1080&auto=format&fit=crop",
        description: "Олимпиадалык дзюдо. Ыргытуу техникасына, партердеги күрөшкө жана психологиялык туруктуулукка басым жасоо.",
        programs: ["Ыргытуу техникасы", "Партердеги күрөш", "Көзөмөл жана кармоо"],
        athletesCount: "85"
      },
      {
        name: "БОКС",
        type: "ЖЕКЕ ТАЙМАШТАР",
        image: "https://images.unsplash.com/photo-1724529808495-8b7cf64e3e3a?q=80&w=1080&auto=format&fit=crop",
        description: "Олимпиадалык бокс. Рингде ылдамдыкты, соккулардын тактыгын жана тактикалык ой жүгүртүүнү өнүктүрүү.",
        programs: ["Сокку коюу", "Коргонуу аракеттери", "Спарринг-практика"],
        athletesCount: "110"
      },
      {
        name: "ФУТБОЛ",
        type: "КОМАНДАЛЫК ТҮРЛӨР",
        image: "https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop",
        description: "U-17, U-19, U-21 өспүрүмдөр жана жаштар курама командаларын алдыңкы методикалар боюнча даярдоо.",
        programs: ["Жеке техника", "Топтук өз ара аракеттенүү", "Физикалык абал"],
        athletesCount: "150"
      },
      {
        name: "СҮЗҮҮ",
        type: "СУУ ТҮРЛӨРҮ",
        image: "https://images.unsplash.com/photo-1572594505398-97a384b34ec8?q=80&w=1080&auto=format&fit=crop",
        description: "Спорттук сүзүү. Бардык стилдерде техниканы өркүндөтүү жана ылдамдык туруктуулугун өнүктүрүү.",
        programs: ["Кроль жана баттерфляй", "Брасс жана чалкалап сүзүү", "Старттар жана бурулуштар"],
        athletesCount: "60"
      }
    ],
    reqs: {
      title1: "ТАЛАПКЕРЛЕРГЕ",
      title2: "ТАЛАПТАР",
      desc: "Даярдоо борборуна тандоо сынак негизинде жүргүзүлөт. Биз базалык даярдыгы бар максаттуу атлеттерди издеп жатабыз.",
      btn: "Тандоо регламенти PDF",
      items: [
        { num: "01", title: "КУРАК", desc: "Спорттун түрүнө жараша 12 жаштан 23 жашка чейин." },
        { num: "02", title: "ДЕН СООЛУК", desc: "Толук медициналык кароодон өтүү жана спорттук диспансердин уруксаты." },
        { num: "03", title: "БАЗА", desc: "Спорттук разряддын болушу же тастыкталган жыйынтыктар." },
        { num: "04", title: "ГРАФИК", desc: "Аптасына 6 күн эки маал машыгууга даяр болуу." }
      ]
    }
  }
};

export function Sports() {
  const { language } = useLanguage();
  const t = pageTranslations[language];

  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="bg-neutral-950 pt-32 pb-20 border-b-8 border-[#E31837]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-[#FFCD00]"></span>
            <span className="text-[#FFCD00] font-bold tracking-[0.2em] text-sm uppercase">{t.hero.tag}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            {t.hero.title1} <br/><span className="text-neutral-500">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-medium border-l-4 border-[#E31837] pl-6">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Sports List */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {t.sports.map((sport, index) => (
            <div 
              key={index}
              className="group grid lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
            >
              {/* Info Side */}
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 lg:pr-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
                    {sport.type}
                  </span>
                  <span className="text-xs font-bold text-neutral-400 border border-neutral-200 px-3 py-1">
                    {sport.athletesCount} {t.athletes}
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                  {sport.name}
                </h2>
                
                <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-medium">
                  {sport.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">{t.programsTag}</h3>
                  {sport.programs.map((program, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b border-neutral-100 pb-3">
                      <div className="w-1.5 h-1.5 bg-[#FFCD00]"></div>
                      <span className="text-neutral-800 font-bold uppercase text-sm tracking-wide">{program}</span>
                    </div>
                  ))}
                </div>
                
                <button className="self-start flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-[#E31837] transition-colors mt-auto">
                  <span>{t.applyBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              
              {/* Image Side */}
              <div className="lg:col-span-7 h-[400px] lg:h-[600px] relative order-1 lg:order-2 overflow-hidden">
                <ImageWithFallback
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-neutral-950 text-white py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                {t.reqs.title1} <br/><span className="text-[#E31837]">{t.reqs.title2}</span>
              </h2>
              <p className="text-neutral-400 text-lg max-w-md font-medium leading-relaxed mb-12">
                {t.reqs.desc}
              </p>
              <button className="bg-[#E31837] text-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-neutral-900 transition-colors inline-block">
                {t.reqs.btn}
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {t.reqs.items.map((req, i) => (
                <div key={i} className="border-t border-neutral-800 pt-6">
                  <div className="text-3xl font-black text-[#FFCD00] mb-4">{req.num}</div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{req.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
