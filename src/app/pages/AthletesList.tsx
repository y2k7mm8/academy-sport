import { Link } from "react-router";
import { Filter, Search, Trophy, Medal, Flag } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function AthletesList() {
  const { t, language } = useLanguage();

  const athletes = [
    { id: 1, name: language === 'ru' ? "Айсулуу Тыныбекова" : "Айсулуу Тыныбекова", sport: language === 'ru' ? "Вольная борьба" : "Эркин күрөш", image: "https://images.unsplash.com/photo-1606335544053-c43609e6155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQ3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080", medlas: { gold: 3, silver: 1, bronze: 0 } },
    { id: 2, name: language === 'ru' ? "Акжол Махмудов" : "Акжол Махмудов", sport: language === 'ru' ? "Греко-римская борьба" : "Грек-рим күрөшү", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1080&auto=format&fit=crop", medlas: { gold: 2, silver: 1, bronze: 0 } },
    { id: 3, name: language === 'ru' ? "Мээрим Жуманазарова" : "Мээрим Жуманазарова", sport: language === 'ru' ? "Вольная борьба" : "Эркин күрөш", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1080&auto=format&fit=crop", medlas: { gold: 1, silver: 0, bronze: 1 } },
    { id: 4, name: language === 'ru' ? "Сардана Трофимова" : "Сардана Трофимова", sport: language === 'ru' ? "Легкая атлетика" : "Жеңил атлетика", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1080&auto=format&fit=crop", medlas: { gold: 0, silver: 1, bronze: 0 } },
    { id: 5, name: language === 'ru' ? "Денис Петрашов" : "Денис Петрашов", sport: language === 'ru' ? "Плавание" : "Сүзүү", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1080&auto=format&fit=crop", medlas: { gold: 1, silver: 2, bronze: 0 } },
    { id: 6, name: language === 'ru' ? "Эрназар Акматалиев" : "Эрназар Акматалиев", sport: language === 'ru' ? "Вольная борьба" : "Эркин күрөш", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1080&auto=format&fit=crop", medlas: { gold: 0, silver: 1, bronze: 1 } },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-neutral-950 text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#E31837]"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#D50000]/20 rounded-full blur-[80px]"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-[#FFD700]"></span>
            <span className="text-[#FFD700] font-bold tracking-[0.2em] text-sm uppercase">Национальная сборная</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            СПОРТСМЕНЫ <span className="text-transparent stroke-text block mt-2" style={{ WebkitTextStroke: "1px white", color: "transparent" }}>КЫРГЫЗСТАНА</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg font-medium">
            Гордость нации, представляющая Кыргызскую Республику на международной арене.
            Откройте для себя истории успеха и достижения наших чемпионов.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-24 z-30 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {['Все виды', 'Борьба', 'Дзюдо', 'Легкая атлетика', 'Плавание', 'Тяжелая атлетика'].map((sport, i) => (
              <button 
                key={i} 
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-colors ${
                  i === 0 ? "bg-[#D50000] text-white shadow-md shadow-red-900/20" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Поиск по имени..." 
                className="w-full pl-9 pr-4 py-2 bg-neutral-100 border-none rounded-full text-sm font-medium focus:ring-2 focus:ring-[#D50000] outline-none"
              />
            </div>
            <button className="p-2 bg-neutral-100 text-neutral-600 rounded-full hover:bg-neutral-200 transition-colors flex-shrink-0">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <Link key={athlete.id} to={`/athletes/${athlete.id}`} className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
              <div className="relative h-72 overflow-hidden bg-neutral-900">
                <img 
                  src={athlete.image} 
                  alt={athlete.name} 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Medals badge */}
                {(athlete.medlas.gold > 0 || athlete.medlas.silver > 0) && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex gap-2 items-center shadow-lg border border-white/20">
                    {athlete.medlas.gold > 0 && <span className="flex items-center text-xs font-bold text-yellow-600"><span className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></span>{athlete.medlas.gold}</span>}
                    {athlete.medlas.silver > 0 && <span className="flex items-center text-xs font-bold text-gray-500"><span className="w-2 h-2 rounded-full bg-gray-300 mr-1"></span>{athlete.medlas.silver}</span>}
                    {athlete.medlas.bronze > 0 && <span className="flex items-center text-xs font-bold text-amber-700"><span className="w-2 h-2 rounded-full bg-amber-600 mr-1"></span>{athlete.medlas.bronze}</span>}
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 bg-[#D50000] text-white text-[10px] font-black uppercase tracking-widest mb-2 rounded shadow-sm">
                    {athlete.sport}
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                    {athlete.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
                    <Flag className="w-4 h-4 text-[#D50000]" />
                    <span>Национальная сборная КР</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
                    <Trophy className="w-4 h-4 text-[#FFD700]" />
                    <span>Мастер спорта международного класса</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-100 flex justify-between items-center mt-auto">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest group-hover:text-[#D50000] transition-colors">
                    Смотреть профиль
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#D50000] transition-colors">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 bg-transparent border-2 border-neutral-900 text-neutral-900 font-black uppercase tracking-widest text-sm hover:bg-neutral-900 hover:text-white transition-all duration-300">
            Загрузить еще
          </button>
        </div>
      </section>
    </div>
  );
}
