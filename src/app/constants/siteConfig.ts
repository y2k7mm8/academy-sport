/**
 * Site Configuration
 * Global configuration and metadata for the website
 */

export const siteConfig = {
  name: 'ЦПМСК КР',
  fullName: 'Центр подготовки молодежных сборных команд Кыргызской Республики',
  description: 'Официальный сайт Центра подготовки молодежных сборных команд при Государственном агентстве физической культуры и спорта при Кабинете Министров Кыргызской Республики',
  
  contact: {
    address: {
      full: 'Кыргызская Республика, г. Бишкек, 720001, пр. Чуй, 280 (Дворец Спорта)',
      short: '720001, г. Бишкек, пр. Чуй, 280',
      city: 'Бишкек',
      country: 'Кыргызская Республика',
    },
    phone: {
      main: '+996 (312) 55-55-55',
      fax: '+996 (312) 55-55-56',
    },
    email: {
      general: 'info@cpmsk.kg',
      press: 'press@cpmsk.kg',
    },
    workingHours: {
      weekdays: 'ПН - ПТ: 09:00 - 18:00',
      lunch: 'Обед: 12:30 - 13:30',
    },
  },

  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#',
  },

  stats: {
    athletes: '500+',
    medals: '150+',
    sports: '12',
    facilities: '15',
  },

  navigation: [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О Центре' },
    { path: '/sports', label: 'Виды Спорта' },
    { path: '/achievements', label: 'Достижения' },
    { path: '/news', label: 'Новости' },
    { path: '/contact', label: 'Контакты' },
  ],

  partners: [
    'Государственное агентство ФКиС',
    'Национальный Олимпийский комитет КР',
    'Министерство культуры, информации, спорта',
    'Спортивные федерации',
  ],

  legalLinks: [
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Для прессы', href: '#' },
  ],
} as const;
