import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-neutral-600" />
      <div className="flex items-center bg-neutral-100 rounded overflow-hidden">
        <button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
            language === 'ru'
              ? 'bg-[#E31837] text-white'
              : 'text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          RU
        </button>
        <button
          onClick={() => setLanguage('ky')}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
            language === 'ky'
              ? 'bg-[#E31837] text-white'
              : 'text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          KG
        </button>
      </div>
    </div>
  );
}
