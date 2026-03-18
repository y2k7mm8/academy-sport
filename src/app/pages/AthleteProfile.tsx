import { Link, useParams } from "react-router";
import { ArrowLeft, MapPin, Calendar, Medal, Award, TrendingUp } from "lucide-react";

export function AthleteProfile() {
  const { id } = useParams();

  // Mock data based on ID or fallback
  const athlete = {
    name: "Айсулуу Тыныбекова",
    sport: "Вольная борьба",
    image: "https://images.unsplash.com/photo-1606335544053-c43609e6155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQ3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    coverImage: "https://images.unsplash.com/photo-1771909713995-d793a0c93660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0b3VybmFtZW50JTIwc3RhZGl1bXxlbnwxfHx8fDE3NzM4MDczNzJ8MA&ixlib=rb-4.1.0&q=80&w=1920",
    birthDate: "4 мая 1992",
    region: "Майлуу-Суу, Джалал-Абадская область",
    height: "170 см",
    weight: "62 кг",
    bio: "Кыргызская спортсменка, борец вольного стиля. Трехкратная чемпионка мира, пятикратная чемпионка Азии, серебряный призер Олимпийских игр в Токио. Первая чемпионка мира по борьбе в истории Кыргызстана.",
    achievements: [
      { year: "2020", event: "Олимпийские игры, Токио", result: "Серебро", type: "silver" },
      { year: "2023", event: "Чемпионат Мира, Белград", result: "Золото", type: "gold" },
      { year: "2021", event: "Чемпионат Мира, Осло", result: "Золото", type: "gold" },
      { year: "2019", event: "Чемпионат Мира, Нур-Султан", result: "Золото", type: "gold" },
      { year: "2024", event: "Чемпионат Азии, Бишкек", result: "Золото", type: "gold" }
    ],
    stats: {
      matches: 142,
      wins: 118,
      winRate: "83%",
      worldRank: 1
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Cover */}
      <div className="relative h-[400px] lg:h-[500px] w-full bg-neutral-950">
        <img 
          src={athlete.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-transparent"></div>
        
        <div className="absolute top-8 left-4 sm:left-6 lg:left-12 z-20">
          <Link to="/athletes" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Назад к списку
          </Link>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 -mt-40 relative z-20 pb-24">
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column - Portrait & Basic Info */}
          <div className="lg:w-1/3 bg-neutral-900 text-white p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D50000]/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-[#D50000] overflow-hidden mb-8 shadow-2xl mx-auto lg:mx-0">
                <img 
                  src={athlete.image} 
                  alt={athlete.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#FFD700] text-neutral-900 text-xs font-black uppercase tracking-widest rounded shadow-sm mb-3">
                  {athlete.sport}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight mb-2">
                  {athlete.name}
                </h1>
                <p className="text-[#D50000] font-bold uppercase tracking-wider text-sm">
                  Национальная сборная КР
                </p>
              </div>

              <div className="space-y-4 mt-8 pt-8 border-t border-neutral-800">
                <div className="flex items-center gap-4 text-neutral-300">
                  <Calendar className="w-5 h-5 text-neutral-500" />
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Дата рождения</div>
                    <div className="text-sm font-medium">{athlete.birthDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-neutral-300">
                  <MapPin className="w-5 h-5 text-neutral-500" />
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Регион</div>
                    <div className="text-sm font-medium">{athlete.region}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-neutral-300">
                  <TrendingUp className="w-5 h-5 text-neutral-500" />
                  <div className="flex gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Рост</div>
                      <div className="text-sm font-medium">{athlete.height}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Вес</div>
                      <div className="text-sm font-medium">{athlete.weight}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details & Stats */}
          <div className="lg:w-2/3 p-8 sm:p-12 bg-white">
            <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#D50000] inline-block"></span> Биография
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-12 font-medium">
              {athlete.bio}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 text-center">
                <div className="text-4xl font-black text-[#D50000] mb-2">{athlete.stats.worldRank}</div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Мировой рейтинг</div>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 text-center">
                <div className="text-4xl font-black text-neutral-900 mb-2">{athlete.stats.matches}</div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Схватки</div>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 text-center">
                <div className="text-4xl font-black text-neutral-900 mb-2">{athlete.stats.wins}</div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Победы</div>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 text-center">
                <div className="text-4xl font-black text-emerald-600 mb-2">{athlete.stats.winRate}</div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Винрейт</div>
              </div>
            </div>

            <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#FFD700] inline-block"></span> Главные достижения
            </h2>
            
            <div className="space-y-4">
              {athlete.achievements.map((ach, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-lg border border-neutral-100 hover:bg-neutral-50 transition-colors group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    ach.type === 'gold' ? 'bg-[#FFD700]/20 text-yellow-600' : 
                    ach.type === 'silver' ? 'bg-gray-200 text-gray-600' : 
                    'bg-amber-100 text-amber-700'
                  }`}>
                    <Medal className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[#D50000] transition-colors">{ach.event}</h4>
                    <p className="text-sm font-medium text-neutral-500">{ach.year}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-bold uppercase tracking-wider text-neutral-900 shadow-sm">
                      {ach.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
