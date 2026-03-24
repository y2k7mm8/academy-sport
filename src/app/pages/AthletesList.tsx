import { Link } from "react-router";
import { Filter, Search, Trophy, Medal, Flag } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useMemo, useState } from "react";
import { useAthletes } from "../data/athletesStore";

export function AthletesList() {
  const { t, language } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<string>(
    language === "ru" ? "Все виды" : "Бардык",
  );
  const [query, setQuery] = useState("");
  const [medalOnly, setMedalOnly] = useState(false);

  const { athletes: raw } = useAthletes();

  const athletes = useMemo(() => {
    return raw.map((a) => {
      const gold = (a.achievements || []).filter(
        (x) => x.type === "gold",
      ).length;
      const silver = (a.achievements || []).filter(
        (x) => x.type === "silver",
      ).length;
      const bronze = (a.achievements || []).filter(
        (x) => x.type === "bronze",
      ).length;
      return {
        id: a.id,
        name: a.name,
        sport: a.sport,
        image: a.image,
        medlas: { gold, silver, bronze },
      };
    });
  }, [raw, language]);

  const ruCategories = [
    "Все виды",
    "Борьба",
    "Дзюдо",
    "Легкая атлетика",
    "Плавание",
    "Тяжелая атлетика",
  ];

  const kyCategories = [
    "Бардык",
    "Күрөш",
    "Дзюдо",
    "Жеңил атлетика",
    "Сүзүү",
    "Ауыр атлетика",
  ];

  const categories = language === "ru" ? ruCategories : kyCategories;

  const filtered = useMemo(() => {
    return athletes.filter((a) => {
      // Filter by category
      if (activeCategory && activeCategory !== categories[0]) {
        const cat = activeCategory.toLowerCase();
        const sport = (a.sport || "").toLowerCase();
        if (!sport.includes(cat)) return false;
      }

      // Filter by search query
      if (query) {
        const q = query.toLowerCase();
        if (!a.name.toLowerCase().includes(q)) return false;
      }

      // Medal-only filter
      if (medalOnly) {
        const totalMedals =
          (a.medlas?.gold || 0) +
          (a.medlas?.silver || 0) +
          (a.medlas?.bronze || 0);
        if (totalMedals === 0) return false;
      }

      return true;
    });
  }, [athletes, activeCategory, query, medalOnly, categories]);

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-neutral-950 text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#E31837]"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#D50000]/20 rounded-full blur-[80px]"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-[#FFD700]"></span>
            <span className="text-[#FFD700] font-bold tracking-[0.2em] text-sm uppercase">
              Национальная сборная
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            СПОРТСМЕНЫ{" "}
            <span className="text-transparent stroke-text block mt-2 stroke-white-sm">
              КЫРГЫЗСТАНА
            </span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg font-medium">
            Гордость нации, представляющая Кыргызскую Республику на
            международной арене. Откройте для себя истории успеха и достижения
            наших чемпионов.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-24 z-30 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((sport, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(sport)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-colors ${
                  sport === activeCategory
                    ? "bg-[#D50000] text-white shadow-md shadow-red-900/20"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  language === "ru"
                    ? "Поиск по имени..."
                    : "Издөө по аталышка..."
                }
                aria-label={
                  language === "ru" ? "Поиск по имени" : "Издөө по аталышка"
                }
                className="w-full pl-9 pr-4 py-2 bg-neutral-100 border-none rounded-full text-sm font-medium focus:ring-2 focus:ring-[#D50000] outline-none"
              />
            </div>
            <button
              aria-pressed={medalOnly ? "true" : "false"}
              onClick={() => setMedalOnly((s) => !s)}
              title={
                medalOnly ? "Показывать всех" : "Показывать только призёров"
              }
              className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                medalOnly
                  ? "bg-[#D50000] text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((athlete) => (
            <Link
              key={athlete.id}
              to={`/athletes/${athlete.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1"
            >
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
                    {athlete.medlas.gold > 0 && (
                      <span className="flex items-center text-xs font-bold text-yellow-600">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></span>
                        {athlete.medlas.gold}
                      </span>
                    )}
                    {athlete.medlas.silver > 0 && (
                      <span className="flex items-center text-xs font-bold text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-gray-300 mr-1"></span>
                        {athlete.medlas.silver}
                      </span>
                    )}
                    {athlete.medlas.bronze > 0 && (
                      <span className="flex items-center text-xs font-bold text-amber-700">
                        <span className="w-2 h-2 rounded-full bg-amber-600 mr-1"></span>
                        {athlete.medlas.bronze}
                      </span>
                    )}
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
                    <svg
                      className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
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
