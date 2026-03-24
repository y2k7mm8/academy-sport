export const athletesProfiles = [
  {
    id: 1,
    name: "Айсулуу Тыныбекова",
    sport: "Вольная борьба",
    image:
      "https://cdn-0.aki.kg/cdn-st-0/qdW/M/2145830.ad4556d23e622a3c0f99eba32eafa5e3.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1771909713995-d793a0c93660?q=80&w=1920&auto=format&fit=crop",
    birthDate: "4 мая 1992",
    region: "Майлуу-Суу, Джалал-Абадская область",
    height: "170 см",
    weight: "62 кг",
    bio: "Одна из ведущих спортсменок Кыргызстана в вольной борьбе. Обладательница многочисленных медалей на международных соревнованиях, известна своим техничным стилем и устойчивостью в решающие моменты поединков.",
    achievements: [
      {
        year: 2020,
        event: "Олимпийские игры, Токио",
        result: "Серебро",
        type: "silver",
      },
      {
        year: 2023,
        event: "Чемпионат мира, Белград",
        result: "Золото",
        type: "gold",
      },
      {
        year: 2021,
        event: "Чемпионат мира, Осло",
        result: "Золото",
        type: "gold",
      },
    ],
    stats: { matches: 142, wins: 118, winRate: "83%", worldRank: 1 },
  },
  {
    id: 2,
    name: "Акжол Махмудов",
    sport: "Греко-римская борьба",
    image:
      "https://cdn-0.aki.kg/cdn-st-0/qf2/7/2774006.2554b20a9ec30488d12cbab0ec50e8e2.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1920&auto=format&fit=crop",
    birthDate: "12 сентября 1998",
    region: "Ошская область",
    height: "178 см",
    weight: "77 кг",
    bio: "Перспективный борец греко-римского стиля, отличающийся силовой подготовкой и грамотной тактикой. Активно участвует в международных турнирах, стабильно попадает в призовые места континентальных стартов.",
    achievements: [
      {
        year: 2023,
        event: "Молодежный чемпионат Азии",
        result: "Золото",
        type: "gold",
      },
      {
        year: 2022,
        event: "Этап Кубка мира",
        result: "Бронза",
        type: "bronze",
      },
    ],
    stats: { matches: 88, wins: 62, winRate: "70%", worldRank: 18 },
  },
  {
    id: 3,
    name: "Мээрим Жуманазарова",
    sport: "Вольная борьба",
    image:
      "https://cdn-0.aki.kg/st_gallery/25/1316425.dcc6d900e34f0224cdd4835c923f8441.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1520975922237-6c7f0f8c0d6c?q=80&w=1920&auto=format&fit=crop",
    birthDate: "2 февраля 2000",
    region: "Бишкек",
    height: "165 см",
    weight: "57 кг",
    bio: "Молодая и амбициозная спортсменка, быстрая на ковре и с отличной тактической выучкой. Регулярно попадает в финалы международных турниров и продолжает прогрессировать под руководством национальных тренеров.",
    achievements: [
      { year: 2024, event: "Чемпионат Азии", result: "Золото", type: "gold" },
      {
        year: 2021,
        event: "Международный турнир",
        result: "Серебро",
        type: "silver",
      },
    ],
    stats: { matches: 96, wins: 73, winRate: "76%", worldRank: 7 },
  },
  {
    id: 4,
    name: "Эрлан Шеров",
    sport: "Легкая атлетика",
    image:
      "https://cdn-0.aki.kg/cdn-st-0/qer/N/2622382.6a2391db0d97827406d42d3ff9e0bbcb.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1520975922237-6c7f0f8c0d6c?q=80&w=1920&auto=format&fit=crop",
    birthDate: "30 июня 1997",
    region: "Нарынская область",
    height: "172 см",
    weight: "60 кг",
    bio: "Специалистка по средним дистанциям и прыжковым дисциплинам, обладает отличной скоростной и силовой подготовкой. Многократный призёр национальных чемпионатов и рекордсменка в молодых возрастных группах.",
    achievements: [
      {
        year: 2024,
        event: "Национальный чемпионат",
        result: "Рекорд страны U-23",
        type: "gold",
      },
      {
        year: 2022,
        event: "Континентальный этап",
        result: "Бронза",
        type: "bronze",
      },
    ],
    stats: { matches: 0, wins: 0, winRate: "—", worldRank: 0 },
  },
  {
    id: 5,
    name: "Жоламан Шаршенбеков",
    sport: "Греко-римская борьба",
    image:
      "https://cdn-1.aki.kg/cdn-st-0/qdY/4/2155202.f3679687b98b08fcc8ce5c86305105dc.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1560085429-07b1d6f46a2a?q=80&w=1920&auto=format&fit=crop",
    birthDate: "14 ноября 1999",
    region: "Таласская область",
    height: "185 см",
    weight: "80 кг",
    bio: "Один из сильнейших плавцов страны в спринтерских дисциплинах. Сильный старт и техника позволяют ему стабильно улучшать личные рекорды и занимать призовые места на международных этапах.",
    achievements: [
      {
        year: 2023,
        event: "Открытый международный турнир",
        result: "Золото",
        type: "gold",
      },
      { year: 2022, event: "Чемпионат страны", result: "Золото", type: "gold" },
    ],
    stats: { matches: 0, wins: 0, winRate: "—", worldRank: 0 },
  },
  {
    id: 6,
    name: "Эрназар Акматалиев",
    sport: "Вольная борьба",
    image: "https://24.kg/thumbnails/7ff3f/e7577/426740_w750_h_r.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop",
    birthDate: "1 января 2001",
    region: "Чуйская область",
    height: "175 см",
    weight: "74 кг",
    bio: "Сильный молодой борец с акцентом на физическую мощь и технику в партере. Быстро набирает опыт на международной арене и считается одним из главных претендентов на медали в своей весовой категории.",
    achievements: [
      {
        year: 2024,
        event: "Турнир международного уровня",
        result: "Серебро",
        type: "silver",
      },
      {
        year: 2022,
        event: "Молодежный чемпионат",
        result: "Золото",
        type: "gold",
      },
    ],
    stats: { matches: 64, wins: 46, winRate: "72%", worldRank: 12 },
  },
  {
    id: 7,
    name: "Денис Петрашов",
    sport: "Греко-римская борьба",
    image:
      "https://24.kg/thumbnails/9fea3/af89c/419385_w_h500_1768453770_r.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop",
    birthDate: "27 декабрь 2008",
    region: "Чуйская область",
    height: "178 см",
    weight: "53 кг",
    bio: "Сильный молодой борец с акцентом на физическую мощь и технику в партере. Быстро набирает опыт на международной арене и считается одним из главных претендентов на медали в своей весовой категории.",
    achievements: [
      {
        year: 2025,
        event: "КМС",
        result: " ",
        type: "gold",
      },
    ],
    stats: { matches: 64, wins: 46, winRate: "72%", worldRank: 12 },
  },
  {
    id: 8,
    name: "Мунарбек Сейитбек уулу",
    sport: "Боксер",
    image:
      "https://cdn-0.aki.kg/cdn-st-0/qfK/9/2790204.6dc71d05f5f6e720269434479f613416.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop",
    birthDate: "27 декабрь 2008",
    region: "Чуйская область",
    height: "178 см",
    weight: "53 кг",
    bio: "Сильный молодой борец с акцентом на физическую мощь и технику в партере. Быстро набирает опыт на международной арене и считается одним из главных претендентов на медали в своей весовой категории.",
    achievements: [
      {
        year: 2025,
        event: "КМС",
        result: " ",
        type: "gold",
      },
    ],
    stats: { matches: 64, wins: 46, winRate: "72%", worldRank: 12 },
  },
  {
    id: 9,
    name: "Узур Джузупбеков",
    sport: "Боксер",
    image:
      "https://cdn-0.aki.kg/cdn-st-0/qep/9/2560106.8ebf2d9fe2d74bfb23357a9be836e0e8.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop",
    birthDate: "27 декабрь 2008",
    region: "Чуйская область",
    height: "178 см",
    weight: "53 кг",
    bio: "Сильный молодой борец с акцентом на физическую мощь и технику в партере. Быстро набирает опыт на международной арене и считается одним из главных претендентов на медали в своей весовой категории.",
    achievements: [
      {
        year: 2025,
        event: "КМС",
        result: " ",
        type: "gold",
      },
    ],
    stats: { matches: 64, wins: 46, winRate: "72%", worldRank: 12 },
  },
];

export default athletesProfiles;
