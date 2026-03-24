# aАрхитектура проекта

## Обзор

Официальный веб-сайт Центра подготовки молодежных сборных команд Кыргызской Республики - это modern React-приложение, построенное с использованием лучших практик разработки и профессионального дизайна.

## Технологический стек

### Frontend

- **React 18.3.1** - библиотека для построения UI
- **TypeScript** - статическая типизация
- **React Router 7** - маршрутизация (Data API mode)
- **Tailwind CSS v4** - утилитарный CSS-фреймворк
- **Vite 6** - сборщик и dev-сервер

### Вспомогательные библиотеки

- **lucide-react** - современные SVG-иконки
- **clsx** + **tailwind-merge** - условная компоновка классов
- **date-fns** - работа с датами

## Структура директорий

/src
/app
/components # Переиспользуемые React-компонент
/ui # UI-компоненты (shadcn/ui) - Header.tsx - Footer.tsx - Layout.tsx - Button.tsx - Card.tsx - NationalColorBar.tsx - PageHero.tsx - SectionHeader.tsx - StatCard.tsx - Loader.tsx - ScrollToTop.tsx - index.ts # Централизованный экспорт

    /pages           # Страницы приложения
      - Home.tsx
      - About.tsx
      - Sports.tsx
      - Achievements.tsx
      - News.tsx
      - Contact.tsx
      - NotFound.tsx

    /constants       # Константы и конфигурация
      - theme.ts     # Цвета, breakpoints, анимации
      - siteConfig.ts # Глобальная конфигурация сайта

    /utils           # Утилиты
      - cn.ts        # Объединение Tailwind-классов
      - formatDate.ts # Форматирование дат
      - validation.ts # Валидация форм

    /hooks           # Custom React hooks
      - useForm.ts
      - useIntersectionObserver.ts

    /data            # Mock-данные для разработки
      - mockData.ts

    /types           # TypeScript определения типов
      - index.ts

    - App.tsx        # Главный компонент
    - routes.tsx     # Конфигурация маршрутов

/styles # Глобальные стили - index.css # Точка входа стилей - theme.css # CSS-переменные и кастомизация - tailwind.css # Tailwind конфигурация - fonts.css # Импорты шрифтов

## Архитектурные решения

### 1. Компонентная архитектура

**Принцип разделения ответственности:**

- **Layout компоненты** (`Header`, `Footer`, `Layout`) - структура приложения
- **UI компоненты** (`Button`, `Card`, `Loader`) - переиспользуемые элементы
- **Секционные компоненты** (`PageHero`, `SectionHeader`, `StatCard`) - сложные блоки
- **Страницы** - композиция компонентов для конкретных роутов

### 2. Маршрутизация

Используется React Router 7 в режиме **Data API**:

```typescript
createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      // ... остальные роуты
      { path: "*", Component: NotFound },
    ],
  },
]);
```

**Преимущества:**

- Декларативное определение роутов
- Вложенные роуты с общим Layout
- Автоматический 404 fallback

### 3. Управление состоянием

**Локальное состояние (useState):**

- Состояние UI (открытие/закрытие меню)
- Состояние форм
- Локальная интерактивность

**Custom hooks:**

- `useForm` - управление формами
- `useIntersectionObserver` - определение видимости элементов

**Нет глобального store** - проект не требует сложного state management

### 4. Стилизация

**Tailwind CSS v4 + CSS Variables:**

```css
:root {
  --national-red: #e31837;
  --national-yellow: #ffcd00;
}
```

**Стратегия:**

- Utility-first approach
- Адаптивный дизайн (mobile-first)
- Кастомные CSS-переменные для цветов
- Консистентный spacing через константы

### 5. Типизация

**Строгая TypeScript типизация:**

- Все компоненты типизированы
- Props интерфейсы
- Типы данных в `/types/index.ts`
- Использование `as const` для констант

### 6. Конфигурация

**Централизованная конфигурация:**

```typescript
// siteConfig.ts
export const siteConfig = {
  name: 'ЦПМСК КР',
  contact: { ... },
  navigation: [ ... ],
  // ...
} as const;
```

**Преимущества:**

- Единая точка правды для данных
- Легкость изменений
- Переиспользование данных

## Паттерны и практики

### 1. Композиция компонентов

```tsx
<PageHero
  category="О Центре"
  title={
    <>
      ИСТОРИЯ <br /> И МИССИЯ
    </>
  }
  subtitle="..."
/>
```

### 2. Conditional rendering

```tsx
{
  isActive && <ActiveIndicator />;
}
{
  variant === "primary" ? <PrimaryButton /> : <SecondaryButton />;
}
```

### 3. Render props

```tsx
const content = (
  <>
    {icon && iconPosition === "left" && icon}
    <span>{children}</span>
    {icon && iconPosition === "right" && icon}
  </>
);
```

### 4. Custom utilities

```tsx
import { cn } from "../utils/cn";

<div
  className={cn(
    "base-class",
    variant === "primary" && "primary-variant",
    className,
  )}
/>;
```

## Оптимизация производительности

### 1. Ленивая загрузка изображений

- Использование `ImageWithFallback` компонента
- Unsplash CDN с параметрами оптимизации
- Grayscale фильтры для уменьшения визуальной нагрузки

### 2. Code splitting

- Автоматический code splitting через Vite
- Роуты загружаются отдельными бандлами

### 3. CSS оптимизация

- Tailwind purge неиспользуемых классов
- Минимизация кастомного CSS

### 4. Эффективные анимации

- CSS transitions вместо JavaScript
- GPU-ускоренные transform/opacity
- `will-change` где необходимо

## Accessibility (a11y)

### 1. Семантический HTML

```tsx
<header>, <nav>, <main>, <footer>, <article>, <section>
```

### 2. ARIA атрибуты

- `aria-label` для иконок
- `aria-current` для активных ссылок

### 3. Keyboard navigation

- Фокусируемые интерактивные элементы
- Tab-порядок

### 4. Контрастность

- WCAG AA compliant цветовые пары
- Красный #E31837 на белом: контраст 6.8:1 ✓

## Безопасность

### 1. XSS защита

- React автоматически экранирует данные
- Нет использования `dangerouslySetInnerHTML`

### 2. Валидация форм

- Client-side валидация через `validation.ts`
- Очистка пользовательского ввода

### 3. HTTPS

- Все внешние ресурсы через HTTPS
- Unsplash CDN - secure

## Тестирование (рекомендации)

### Unit тесты

```bash
# Пример с Vitest
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

### Integration тесты

- Тестирование форм
- Тестирование навигации

### E2E тесты

- Playwright для критических user flows

## Deployment

### Build

```bash
npm run build
# Генерирует /dist с оптимизированным бандлом
```

### Hosting опции

- **Vercel** (рекомендуется для React SPA)
- **Netlify**
- **GitHub Pages**
- **Nginx** (для self-hosting)

### Environment Variables

```env
VITE_SITE_NAME=ЦПМСК КР
VITE_API_URL=https://api.example.com
```

## Масштабирование

### Добавление новых страниц

1. Создать компонент в `/pages/`
2. Добавить роут в `routes.tsx`
3. Добавить ссылку в `siteConfig.navigation`

### Добавление новых компонентов

1. Создать компонент в `/components/`
2. Экспортировать из `index.ts`
3. Добавить TypeScript типы

### Интеграция с CMS

Для динамического контента рекомендуется:

- **Strapi** - headless CMS
- **Contentful** - cloud CMS
- **Sanity** - structured content

## Мониторинг и аналитика

### Web Vitals

```tsx
// Пример интеграции
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Analytics

- Google Analytics
- Яндекс.Метрика
- Plausible (privacy-friendly)

## Поддержка браузеров

| Браузер | Версия |
| ------- | ------ |
| Chrome  | Last 2 |
| Firefox | Last 2 |
| Safari  | Last 2 |
| Edge    | Last 2 |

## Документация кода

Все компоненты документированы с помощью JSDoc:

```tsx
/**
 * Button Component
 * Consistent button styles across the platform
 *
 * @param variant - Button style variant
 * @param size - Button size
 * @param href - Optional link destination
 */
```

## Contribution Guidelines

### Code Style

- **Formatting**: Prettier
- **Linting**: ESLint
- **Naming**: PascalCase для компонентов, camelCase для функций

### Git Workflow

```bash
main (production)
  └── develop (staging)
       └── feature/new-page
```

### Commit Convention

```
feat: добавлена страница достижений
fix: исправлена навигация на мобильных
docs: обновлена документация компонентов
style: форматирование кода
refactor: рефакторинг Header компонента
```

## Заключение

Архитектура проекта построена с учетом:

- ✅ Масштабируемости
- ✅ Поддерживаемости
- ✅ Производительности
- ✅ Доступности
- ✅ Безопасности
- ✅ Лучших практик React/TypeScript

Проект готов к production deployment и дальнейшему развитию.
