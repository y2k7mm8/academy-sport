import { Link } from "react-router";
import { ArrowRight, Trophy, Users, Target, Activity, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { t, language } = useLanguage();

  const stats = [
    { value: t('home.stats.athletes'), label: t('home.stats.athletesLabel').toUpperCase() },
    { value: t('home.stats.medals'), label: t('home.stats.medalsLabel').toUpperCase() },
    { value: t('home.stats.sports'), label: t('home.stats.sportsLabel').toUpperCase() },
    { value: t('home.stats.facilities'), label: t('home.stats.facilitiesLabel').toUpperCase() },
  ];

  const sports = [
    {
      name: language === 'ru' ? "БОРЬБА" : "КҮРӨШ",
      image: "https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop",
      tag: language === 'ru' ? "ЕДИНОБОРСТВА" : "КҮРӨШ СПОРТТОРУ"
    },
    {
      name: language === 'ru' ? "ЛЕГКАЯ АТЛЕТИКА" : "ЖЕҢИЛ АТЛЕТИКА",
      image: "https://images.unsplash.com/photo-1765261473063-ec862e10ba58?q=80&w=1080&auto=format&fit=crop",
      tag: language === 'ru' ? "ЦИКЛИЧЕСКИЕ ВИДЫ" : "ЦИКЛДИК ТҮРЛӨР"
    },
    {
      name: language === 'ru' ? "ФУТБОЛ" : "ФУТБОЛ",
      image: "https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop",
      tag: language === 'ru' ? "КОМАНДНЫЕ ВИДЫ" : "КОМАНДАЛЫК ТҮРЛӨР"
    },
    {
      name: language === 'ru' ? "БАСКЕТБОЛ" : "БАСКЕТБОЛ",
      image: "https://images.unsplash.com/photo-1721339041100-ec39e6600362?q=80&w=1080&auto=format&fit=crop",
      tag: language === 'ru' ? "КОМАНДНЫЕ ВИДЫ" : "КОМАНДАЛЫК ТҮРЛӨР"
    },
    {
      name: language === 'ru' ? "ТЯЖЕЛАЯ АТЛЕТИКА" : "АУЫР АТЛЕТИКА",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1080&auto=format&fit=crop",
      tag: language === 'ru' ? "СИЛОВЫЕ ВИДЫ" : "КҮЧ ТҮРЛӨРҮ"
    },
    {
      name: language === 'ru' ? "ПЛАВАНИЕ" : "СҮЗҮҮ",
      image: "https://images.unsplash.com/photo-1560085429-07b1d6f46a2a?q=80&w=1080&auto=format&fit=crop",
      tag: language === 'ru' ? "ВОДНЫЕ ВИДЫ" : "СУУ ТҮРЛӨРҮ"
    }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-neutral-950 flex flex-col justify-end pb-24 border-b-8 border-[#E31837]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1729048229977-fa74f7a330af?q=80&w=1920&auto=format&fit=crop"
            alt={language === 'ru' ? "Спортсмены на стадионе" : "Стадиондогу спортчулар"}
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-[#FFCD00]"></span>
            <span className="text-[#FFCD00] font-bold tracking-[0.2em] text-sm md:text-base uppercase">
              {language === 'ru' ? 'Официальный сайт' : 'Расмий сайт'}
            </span>
          </div>
          
          <h1 className="text-white font-black uppercase leading-[0.85] tracking-tighter mb-6 break-words max-w-5xl">
            {language === 'ru' ? (
              <>
                <span className="block text-5xl sm:text-7xl lg:text-[7rem]">ЦЕНТР ПОДГОТОВКИ</span>
                <span className="block text-4xl sm:text-6xl lg:text-[6rem] text-transparent stroke-text" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
                  МОЛОДЕЖНЫХ
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-[7rem] text-[#E31837]">СБОРНЫХ КОМАНД</span>
              </>
            ) : (
              <>
                <span className="block text-5xl sm:text-7xl lg:text-[7rem]">ЖАШТАР КУРАМА</span>
                <span className="block text-4xl sm:text-6xl lg:text-[6rem] text-transparent stroke-text" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
                  КОМАНДАЛАРЫН
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-[7rem] text-[#E31837]">ДАЯРДОО БОРБОРУ</span>
              </>
            )}
          </h1>
          
          <p className="text-neutral-300 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10 border-l-4 border-[#E31837] pl-6">
            {language === 'ru' 
              ? 'Государственное учреждение по развитию спорта высших достижений и подготовке резерва для национальных сборных Кыргызской Республики.'
              : 'Кыргыз Республикасынын улуттук курама командалары үчүн жогорку жетишкендиктер спортун өнүктүрүү жана камдык даярдоо боюнча мамлекеттик мекеме.'
            }
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/about"
              className="group bg-white text-neutral-950 px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#E31837] hover:text-white transition-all duration-300 flex items-center gap-4"
            >
              {t('common.learnMore')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/sports"
              className="group border border-white/30 text-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              {t('nav.sports')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-neutral-900 leading-none mb-4 group-hover:text-[#E31837] transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest pl-2 border-l-2 border-[#E31837]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Mission */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-neutral-900 mb-8">
                ВОСПИТЫВАЕМ <br/>
                <span className="text-[#E31837]">ЧЕМПИОНОВ</span> <br/>
                БУДУЩЕГО
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-medium">
                Мы создаем идеальные условия для выявления, отбора и подготовки талантливых 
                молодых спортсменов. Наша цель — вывести юношеский и молодежный спорт 
                Кыргызстана на мировой уровень.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Target className="w-6 h-6 text-[#E31837] stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 uppercase tracking-wider mb-2 text-sm">Фокус на результат</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">Системный подход к тренировкам по международным стандартам.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Activity className="w-6 h-6 text-[#E31837] stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 uppercase tracking-wider mb-2 text-sm">Спорт медицина</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">Полный контроль физического состояния и восстановления.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-[#E31837] transition-colors group"
              >
                <span>Узнать больше о центре</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="relative h-[600px]">
              <div className="absolute top-0 right-0 w-3/4 h-full bg-[#E31837]/5 translate-x-8 -translate-y-8 z-0"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop"
                alt="Тренировка команды"
                className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#E31837] text-white p-8 z-20 max-w-[280px]">
                <div className="text-4xl font-black mb-2">20+</div>
                <div className="text-sm font-bold uppercase tracking-widest">Лет успешной работы в спорте высших достижений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="bg-neutral-950">
        <div className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-[#E31837]"></span>
                <span className="text-[#E31837] font-bold tracking-[0.2em] text-sm uppercase">Дисциплины</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                НАПРАВЛЕНИЯ <br/><span className="text-neutral-600">ПОДГОТОВКИ</span>
              </h2>
            </div>
            <Link
              to="/sports"
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-[#FFCD00] transition-colors group pb-2 border-b border-white/30 hover:border-[#FFCD00]"
            >
              <span>Все виды спорта</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <Link
              key={index}
              to="/sports"
              className="group relative h-[450px] overflow-hidden bg-neutral-900 block"
            >
              <ImageWithFallback
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-[#FFCD00] text-xs font-bold uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {sport.tag}
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                  {sport.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#E31837] overflow-hidden">
        {/* Abstract shapes in background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600 rounded-full blur-[100px] opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-800 rounded-full blur-[80px] opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-[0.9]">
            ПРОЛОЖИ СВОЙ ПУТЬ <br/> НА ОЛИМПИЙСКИЕ ИГРЫ
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium">
            Центр проводит регулярные отборы талантливых спортсменов во всех регионах страны.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-[#E31837] px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-neutral-950 hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:shadow-none"
            >
              Оставить заявку
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#E31837] transition-all duration-300"
            >
              Критерии отбора
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}