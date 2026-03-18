# Система многоязычности / Language System

## Описание / Description

Сайт поддерживает два языка:
- **Русский (RU)** - язык по умолчанию
- **Кыргызский (KG)** - государственный язык Кыргызской Республики

The site supports two languages:
- **Russian (RU)** - default language
- **Kyrgyz (KG)** - state language of the Kyrgyz Republic

## Компоненты / Components

### 1. Language Context (`/src/app/contexts/LanguageContext.tsx`)
Основной контекст для управления языком приложения с использованием localStorage для сохранения выбора пользователя.

### 2. Language Switcher (`/src/app/components/LanguageSwitcher.tsx`)
Переключатель языков в виде компактной кнопки, расположенной в шапке сайта.

### 3. Translation Files
- `/src/app/locales/ru.ts` - русские переводы
- `/src/app/locales/ky.ts` - кыргызские переводы

## Использование / Usage

### В компонентах:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('home.hero.title')}</p>
    </div>
  );
}
```

### Переключение языка:

```tsx
const { setLanguage } = useLanguage();

// Переключить на кыргызский
setLanguage('ky');

// Переключить на русский
setLanguage('ru');
```

## Структура переводов / Translation Structure

Переводы организованы по разделам:
- `nav` - навигация
- `site` - информация о сайте
- `common` - общие фразы
- `home` - главная страница
- `about` - о центре
- `sports` - виды спорта
- `achievements` - достижения
- `news` - новости
- `contact` - контакты
- `footer` - подвал
- `notFound` - страница 404

## Добавление новых переводов / Adding New Translations

1. Добавьте ключ в `/src/app/locales/ru.ts`:
```typescript
export const translations = {
  // ... existing translations
  mySection: {
    myKey: 'Мой текст',
  },
};
```

2. Добавьте соответствующий перевод в `/src/app/locales/ky.ts`:
```typescript
export const translations = {
  // ... existing translations
  mySection: {
    myKey: 'Менин текстим',
  },
};
```

3. Используйте в компонентах:
```tsx
const { t } = useLanguage();
<p>{t('mySection.myKey')}</p>
```

## Особенности реализации / Implementation Features

- ✅ Автоматическое сохранение выбора языка в localStorage
- ✅ Переключатель языков в шапке сайта (десктоп и мобильная версии)
- ✅ Поддержка вложенных ключей переводов
- ✅ TypeScript поддержка для безопасности типов
- ✅ Национальные цвета Кыргызстана в дизайне переключателя

## Текущий статус / Current Status

Основные компоненты переведены:
- ✅ Header (навигация)
- ✅ Footer
- ✅ Home page (частично)
- ✅ NotFound page
- ⏳ About page (требуется обновление)
- ⏳ Sports page (требуется обновление)
- ⏳ Achievements page (требуется обновление)
- ⏳ News page (требуется обновление)
- ⏳ Contact page (требуется обновление)
