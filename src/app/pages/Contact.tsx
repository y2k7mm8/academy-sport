import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const pageTranslations = {
  ru: {
    hero: {
      tag: "Связь с нами",
      title1: "КОНТАКТНАЯ",
      title2: "ИНФОРМАЦИЯ",
      desc: "Для обращений граждан, прессы и потенциальных партнеров.",
    },
    info: {
      tag: "Координаты",
      addressTag: "Адрес",
      address1: "Кыргызская Республика",
      address2: "г. Бишкек, 720001",
      address3: "пр. Чуй, 280 (Дворец Спорта)",
      phoneTag: "Телефон / Факс",
      emailTag: "Электронная почта",
      emailPress: "press@cpmsk.kg (Для СМИ)",
      hoursTag: "Режим работы канцелярии",
      hoursTime: "ПН - ПТ: 09:00 - 18:00",
      hoursLunch: "Обед: 12:30 - 13:30",
    },
    form: {
      title: "Электронное обращение",
      desc: "Заполните форму ниже, и мы свяжемся с вами в ближайшее время.",
      name: "ФИО *",
      phone: "Телефон *",
      email: "E-mail",
      topic: "Тема обращения",
      topicOptions: [
        "Запись в секцию",
        "Вопросы сотрудничества",
        "Запрос для СМИ",
        "Жалоба / Предложение",
        "Другое",
      ],
      message: "Сообщение *",
      messagePlaceholder: "Текст вашего сообщения...",
      submit: "Отправить",
    },
    mapPlaceholder: "[ Интерактивная карта ]",
  },
  ky: {
    hero: {
      tag: "Биз менен байланыш",
      title1: "БАЙЛАНЫШ",
      title2: "МААЛЫМАТЫ",
      desc: "Жарандардын, басма сөздүн жана потенциалдуу өнөктөштөрдүн кайрылуулары үчүн.",
    },
    info: {
      tag: "Координаттар",
      addressTag: "Дарек",
      address1: "Кыргыз Республикасы",
      address2: "Бишкек ш., 720001",
      address3: "Чүй пр., 280 (Спорт сарайы)",
      phoneTag: "Телефон / Факс",
      emailTag: "Электрондук почта",
      emailPress: "press@cpmsk.kg (ЖМК үчүн)",
      hoursTag: "Кеңсенин иштөө режими",
      hoursTime: "ДҮЙ - ЖУМ: 09:00 - 18:00",
      hoursLunch: "Түшкү тамак: 12:30 - 13:30",
    },
    form: {
      title: "Электрондук кайрылуу",
      desc: "Төмөндөгү форманы толтуруңуз, биз сиз менен жакынкы убакта байланышабыз.",
      name: "Аты-жөнү *",
      phone: "Телефон *",
      email: "E-mail",
      topic: "Кайрылуунун темасы",
      topicOptions: [
        "Секцияга жазылуу",
        "Кызматташуу маселелери",
        "ЖМК үчүн сурам",
        "Арыз / Сунуш",
        "Башка",
      ],
      message: "Билдирүү *",
      messagePlaceholder: "Сиздин билдирүүңүздүн тексти...",
      submit: "Жөнөтүү",
    },
    mapPlaceholder: "[ Интерактивдүү карта ]",
  },
};

export function Contact() {
  const { language } = useLanguage();
  const t = pageTranslations[language];

  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="bg-neutral-950 pt-32 pb-20 border-b-8 border-[#FFCD00]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-[#E31837]"></span>
            <span className="text-[#E31837] font-bold tracking-[0.2em] text-sm uppercase">
              {t.hero.tag}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            {t.hero.title1} <br />
            <span className="text-neutral-500">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-medium border-l-4 border-[#FFCD00] pl-6">
            {t.hero.desc}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Info Side */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#E31837] mb-12 flex items-center gap-4">
                <span className="w-4 h-4 bg-[#E31837]"></span>
                {t.info.tag}
              </h2>

              <div className="space-y-12">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31837] transition-colors">
                    <MapPin className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                      {t.info.addressTag}
                    </h3>
                    <p className="text-xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                      {t.info.address1}
                      <br />
                      {t.info.address2}
                      <br />
                      {t.info.address3}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31837] transition-colors">
                    <Phone className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                      {t.info.phoneTag}
                    </h3>
                    <p className="text-xl font-black font-mono tracking-wider text-neutral-900">
                      +996 (312) 55-55-55
                    </p>
                    <p className="text-xl font-black font-mono tracking-wider text-neutral-900 mt-1">
                      +996 (312) 55-55-56
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31837] transition-colors">
                    <Mail className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                      {t.info.emailTag}
                    </h3>
                    <p className="text-xl font-black tracking-wider text-neutral-900">
                      info@cpmsk.kg
                    </p>
                    <p className="text-sm font-bold text-neutral-500 mt-2">
                      {t.info.emailPress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31837] transition-colors">
                    <Clock className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                      {t.info.hoursTag}
                    </h3>
                    <p className="text-lg font-black uppercase tracking-tight text-neutral-900">
                      {t.info.hoursTime}
                    </p>
                    <p className="text-sm font-bold text-neutral-500 mt-1">
                      {t.info.hoursLunch}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E31837]"></div>

              <h2 className="text-3xl font-black uppercase tracking-tighter text-neutral-900 mb-2">
                {t.form.title}
              </h2>
              <p className="text-sm font-medium text-neutral-500 mb-10">
                {t.form.desc}
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm font-medium focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-shadow"
                      placeholder="Иванов Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm font-medium focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-shadow"
                      placeholder="+996 ___ __ __ __"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm font-medium focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-shadow"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2"
                  >
                    {t.form.topic}
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    aria-label={t.form.topic}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm font-medium focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-shadow appearance-none"
                  >
                    {t.form.topicOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm font-medium focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-shadow resize-none"
                    placeholder={t.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#E31837] text-white px-8 py-5 font-black uppercase tracking-widest text-sm hover:bg-neutral-900 transition-colors flex items-center justify-center gap-3 group"
                >
                  {t.form.submit}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placehodler */}
      <section className="h-[400px] bg-neutral-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-neutral-500 font-bold uppercase tracking-widest text-sm">
            {t.mapPlaceholder}
          </p>
        </div>
      </section>
    </div>
  );
}
