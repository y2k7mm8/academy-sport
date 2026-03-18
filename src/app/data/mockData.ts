/**
 * Mock Data
 * Sample data for development and demonstration
 */

import { Sport, NewsItem, Athlete } from '../types';

export const sportsData: Sport[] = [
  {
    name: 'БОРЬБА',
    type: 'ЕДИНОБОРСТВА',
    image: 'https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop',
    description: 'Традиционный вид спорта Кыргызстана с богатой историей побед. Обучение вольной и греко-римской борьбе.',
    programs: ['Классическая база', 'Тактика ведения боя', 'Силовая выносливость'],
    athletes: '120'
  },
  {
    name: 'ЛЕГКАЯ АТЛЕТИКА',
    type: 'ЦИКЛИЧЕСКИЕ ВИДЫ',
    image: 'https://images.unsplash.com/photo-1765261473063-ec862e10ba58?q=80&w=1080&auto=format&fit=crop',
    description: 'Королева спорта. Комплексная подготовка спринтеров, стайеров и прыгунов для международных соревнований.',
    programs: ['Спринт', 'Стайерский бег', 'Прыжковые дисциплины'],
    athletes: '90'
  },
  {
    name: 'ДЗЮДО',
    type: 'ЕДИНОБОРСТВА',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1080&auto=format&fit=crop',
    description: 'Олимпийское дзюдо. Фокус на технике бросков, борьбе в партере и психологической устойчивости.',
    programs: ['Техника бросков', 'Борьба в партере', 'Контроль и захваты'],
    athletes: '85'
  },
  {
    name: 'БОКС',
    type: 'ЕДИНОБОРСТВА',
    image: 'https://images.unsplash.com/photo-1724529808495-8b7cf64e3e3a?q=80&w=1080&auto=format&fit=crop',
    description: 'Олимпийский бокс. Развитие скорости, точности ударов и тактического мышления на ринге.',
    programs: ['Постановка удара', 'Защитные действия', 'Спарринг-практика'],
    athletes: '110'
  },
  {
    name: 'ФУТБОЛ',
    type: 'КОМАНДНЫЕ ВИДЫ',
    image: 'https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop',
    description: 'Подготовка юношеских и молодежных сборных U-17, U-19, U-21 по передовым методикам.',
    programs: ['Индивидуальная техника', 'Групповые взаимодействия', 'Физическая кондиция'],
    athletes: '150'
  },
  {
    name: 'ПЛАВАНИЕ',
    type: 'ВОДНЫЕ ВИДЫ',
    image: 'https://images.unsplash.com/photo-1572594505398-97a384b34ec8?q=80&w=1080&auto=format&fit=crop',
    description: 'Спортивное плавание. Совершенствование техники во всех стилях и развитие скоростной выносливости.',
    programs: ['Кроль и баттерфляй', 'Брасс и спина', 'Старты и повороты'],
    athletes: '60'
  },
];

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Команда по борьбе завоевала 5 медалей на чемпионате Азии',
    date: '10 марта 2026',
    category: 'Борьба',
    image: 'https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1080&auto=format&fit=crop',
    excerpt: 'Молодежная сборная Кыргызстана по вольной борьбе показала выдающиеся результаты на чемпионате Азии, завоевав 3 золотые и 2 серебряные медали в напряженных поединках.',
    featured: true
  },
  {
    id: 2,
    title: 'Открытие нового тренировочного комплекса',
    date: '5 марта 2026',
    category: 'Инфраструктура',
    image: 'https://images.unsplash.com/photo-1729048229977-fa74f7a330af?q=80&w=1080&auto=format&fit=crop',
    excerpt: 'Состоялось торжественное открытие современного тренировочного комплекса с новейшим оборудованием для подготовки олимпийского резерва.',
    featured: true
  },
  {
    id: 3,
    title: 'Молодежная сборная по футболу готовится к Кубку Азии',
    date: '28 февраля 2026',
    category: 'Футбол',
    image: 'https://images.unsplash.com/photo-1603351820248-eb5d68f64be0?q=80&w=1080&auto=format&fit=crop',
    excerpt: 'Команда проводит интенсивные тренировки и товарищеские матчи в рамках подготовки к предстоящему турниру.',
    featured: false
  },
];

export const athletesData: Athlete[] = [
  {
    name: 'Айдос Султанов',
    sport: 'Борьба вольная',
    achievement: 'Чемпион мира среди юниоров',
    year: '2023'
  },
  {
    name: 'Аида Касымова',
    sport: 'Легкая атлетика (800м)',
    achievement: 'Рекорд Кыргызстана U-20',
    year: '2024'
  },
  {
    name: 'Бектур Осмонов',
    sport: 'Бокс (75 кг)',
    achievement: 'Победитель молодежного чемпионата Азии',
    year: '2023'
  },
  {
    name: 'Жамиля Турсунова',
    sport: 'Дзюдо (63 кг)',
    achievement: 'Серебряный призер Азиатских игр',
    year: '2023'
  }
];
