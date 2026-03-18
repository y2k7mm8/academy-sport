# Быстрый старт

Руководство для разработчиков по работе с проектом ЦПМСК КР.

## Установка и запуск

```bash
# Клонирование репозитория
git clone <repository-url>
cd sports-center-kg

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Открыть в браузере
# http://localhost:5173
```

## Основные команды

```bash
# Development
npm run dev              # Запуск dev-сервера с hot reload

# Production
npm run build           # Сборка для продакшена (генерирует /dist)
npm run preview         # Предпросмотр production build

# Linting (если настроен)
npm run lint            # Проверка кода
npm run lint:fix        # Автоисправление
```

## Структура проекта - Быстрый обзор

```
/src/app
  /components   → Все переиспользуемые компоненты
  /pages        → Страницы сайта
  /constants    → Конфигурация и константы
  /utils        → Вспомогательные функции
  /hooks        → Custom React hooks
  /types        → TypeScript типы
  /data         → Mock данные
```

## Частые задачи

### 1. Добавить новую страницу

**Шаг 1:** Создать компонент страницы
```tsx
// /src/app/pages/MyPage.tsx
export function MyPage() {
  return (
    <div className="bg-white">
      <h1>Моя новая страница</h1>
    </div>
  );
}
```

**Шаг 2:** Добавить роут
```tsx
// /src/app/routes.tsx
import { MyPage } from "./pages/MyPage";

children: [
  // ...
  { path: "my-page", Component: MyPage },
]
```

**Шаг 3:** Добавить в навигацию (опционально)
```tsx
// /src/app/constants/siteConfig.ts
navigation: [
  // ...
  { path: '/my-page', label: 'Моя Страница' },
]
```

### 2. Создать новый компонент

```tsx
// /src/app/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="p-4 bg-white border border-neutral-200">
      <h3 className="font-bold text-neutral-900">{title}</h3>
      {children}
    </div>
  );
}
```

**Экспортировать из index:**
```tsx
// /src/app/components/index.ts
export { MyComponent } from './MyComponent';
```

### 3. Использовать национальные цвета

```tsx
// Красный (основной акцент)
className="bg-[#E31837] text-white"
className="border-[#E31837]"
className="text-[#E31837]"

// Желтый (вторичный акцент)
className="bg-[#FFCD00] text-neutral-900"
className="border-[#FFCD00]"
className="text-[#FFCD00]"
```

### 4. Добавить изображение

```tsx
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/photo-..."
  alt="Описание"
  className="w-full h-64 object-cover"
/>
```

### 5. Создать форму

```tsx
import { useForm } from '../hooks/useForm';

function ContactForm() {
  const { values, handleChange, handleSubmit, isSubmitting } = useForm(
    { name: '', email: '' },
    async (data) => {
      console.log('Отправка:', data);
      // API call здесь
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
}
```

### 6. Работа с конфигурацией

```tsx
import { siteConfig } from '../constants/siteConfig';

// Использование
<p>{siteConfig.contact.phone.main}</p>
<p>{siteConfig.contact.email.general}</p>
```

## Стилевые паттерны

### Типичная секция страницы
```tsx
<section className="py-24 bg-neutral-50">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
    {/* Контент секции */}
  </div>
</section>
```

### Hero секция
```tsx
<PageHero
  category="Категория"
  categoryColor="red"
  title={<>ГЛАВНЫЙ <br/>ЗАГОЛОВОК</>}
  subtitle="Подзаголовок секции"
  borderColor="yellow"
/>
```

### Заголовок секции
```tsx
<SectionHeader
  label="Метка"
  labelColor="red"
  title={<>ЗАГОЛОВОК <span className="text-[#E31837]">С АКЦЕНТОМ</span></>}
  subtitle="Описание секции"
/>
```

### Кнопки
```tsx
// Основная кнопка
<Button variant="primary" size="md" href="/about">
  Подробнее
</Button>

// Вторичная кнопка
<Button variant="secondary" size="md" onClick={handleClick}>
  Действие
</Button>

// Контурная кнопка
<Button variant="outline" size="sm">
  Ссылка
</Button>
```

### Карточки
```tsx
<Card variant="bordered" hover>
  <div className="p-6">
    <h3>Заголовок</h3>
    <p>Контент карточки</p>
  </div>
</Card>
```

## Адаптивный дизайн

### Breakpoints
```tsx
// Mobile-first подход
className="text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="hidden lg:block"  // Показать только на desktop
className="lg:hidden"         // Скрыть на desktop
```

### Tailwind breakpoints
- `sm:` - 640px и выше
- `md:` - 768px и выше  
- `lg:` - 1024px и выше
- `xl:` - 1280px и выше
- `2xl:` - 1440px и выше

## Типичные компоненты

### Статистика
```tsx
<StatCard 
  value="500+" 
  label="СПОРТСМЕНОВ"
  accentColor="red"
/>
```

### Национальная полоса
```tsx
<NationalColorBar height="h-2" />
```

### Loader
```tsx
{isLoading && <Loader size="md" />}
```

## Работа с данными

### Mock данные
```tsx
import { sportsData, newsData, athletesData } from '../data/mockData';

// Использование
{sportsData.map(sport => (
  <SportCard key={sport.name} {...sport} />
))}
```

### TypeScript типы
```tsx
import { Sport, NewsItem, Athlete } from '../types';

const mySport: Sport = {
  name: 'БОРЬБА',
  type: 'ЕДИНОБОРСТВА',
  // ...
};
```

## Утилиты

### Объединение классов
```tsx
import { cn } from '../utils/cn';

<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "primary" : "secondary"
)} />
```

### Форматирование дат
```tsx
import { formatDate } from '../utils/formatDate';

<p>{formatDate("2026-03-16")}</p>  // "16 марта 2026"
```

## Отладка

### React DevTools
Установить расширение для Chrome/Firefox

### Vite Hot Reload
Изменения автоматически отражаются в браузере

### Console.log
```tsx
console.log('Debug:', values);
```

## Частые проблемы

### 1. Изображение не загружается
- Проверьте URL
- Используйте `ImageWithFallback`
- Проверьте CORS

### 2. Стили не применяются
- Проверьте синтаксис Tailwind
- Убедитесь, что класс не переопределен
- Используйте `cn()` для условных классов

### 3. TypeScript ошибки
- Проверьте типы props
- Импортируйте типы из `/types/`
- Используйте `as const` для констант

## Полезные ссылки

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## Следующие шаги

1. Прочитайте `/PROJECT_INFO.md` для обзора проекта
2. Изучите `/COMPONENTS.md` для деталей компонентов
3. Посмотрите `/ARCHITECTURE.md` для глубокого понимания
4. Начните разработку! 🚀

---

**Вопросы?** Создайте issue или свяжитесь с командой.
