import { Target, Users, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

const pageTranslations = {
  ru: {
    hero: {
      tag: "О Центре",
      title1: "ИСТОРИЯ",
      title2: "И МИССИЯ",
      desc: "Главное учреждение Кыргызской Республики по развитию спорта высших достижений и подготовке национального резерва.",
    },
    mission: {
      tag: "Миссия",
      title:
        "Выявление, отбор и профессиональная подготовка талантливых молодых спортсменов для достойного представления Кыргызской Республики на международной арене.",
      desc: "Мы создаем условия для всестороннего развития личности спортсмена, формирования высоких моральных и волевых качеств, необходимых для достижения победы.",
    },
    vision: {
      tag: "Видение",
      title:
        "Стать ведущим центром подготовки спортивных резервов в Центральной Азии.",
      desc: "Воспитывая поколение здоровых, физически развитых и успешных граждан страны. Мы стремимся к тому, чтобы каждый воспитанник центра достиг максимума своего спортивного потенциала и стал гордостью нации.",
    },
    valuesSection: {
      title1: "НАШИ",
      title2: "ЦЕННОСТИ",
      desc: "Фундаментальные принципы, на которых строится работа каждого сотрудника и спортсмена центра.",
    },
    values: [
      {
        title: "ПРОФЕССИОНАЛИЗМ",
        desc: "Высококвалифицированные тренеры и современные методики подготовки, соответствующие олимпийским стандартам.",
      },
      {
        title: "КОМАНДНЫЙ ДУХ",
        desc: "Развитие лидерских качеств, дисциплины и взаимного уважения у спортсменов.",
      },
      {
        title: "ДОСТИЖЕНИЯ",
        desc: "Бескомпромиссная ориентация на высокие результаты на международной арене.",
      },
      {
        title: "РАЗВИТИЕ",
        desc: "Постоянное совершенствование программ подготовки и спортивной инфраструктуры.",
      },
    ],
    historySection: {
      title1: "ИСТОРИЯ",
      title2: "РАЗВИТИЯ",
    },
    history: [
      {
        year: "2004",
        event: "Основание Центра подготовки и формирование первой сборной",
      },
      {
        year: "2008",
        event: "Первые медали на Азиатских играх среди молодежи",
      },
      {
        year: "2012",
        event: "Расширение инфраструктуры и запуск новых программ",
      },
      { year: "2016", event: "Открытие современного тренировочного комплекса" },
      {
        year: "2020",
        event: "Внедрение цифровых технологий в спортивную медицину",
      },
      {
        year: "2024",
        event: "Рекордное количество лицензий на международные турниры",
      },
    ],
    structureSection: {
      title: "СТРУКТУРА",
      founderTag: "Учредитель",
      founderTitle: "Государственное агентство физической культуры и спорта",
      founderDesc: "при Кабинете Министров Кыргызской Республики",
      unitTag: "Подразделение",
      unitTitle: "Центр подготовки молодежных сборных команд",
      unitDesc: "Основная база спортивного резерва",
      deps: [
        {
          title: "Отдел подготовки",
          desc: "Организация и контроль тренировочного процесса",
        },
        {
          title: "Спорт медицина",
          desc: "Комплексное медицинское обеспечение сборных",
        },
        {
          title: "Научный отдел",
          desc: "Аналитика, разработка программ и инноваций",
        },
      ],
    },
  },
  ky: {
    hero: {
      tag: "Борбор жөнүндө",
      title1: "ТАРЫХ",
      title2: "ЖАНА МИССИЯ",
      desc: "Жогорку жетишкендиктер спортун өнүктүрүү жана улуттук резервди даярдоо боюнча Кыргыз Республикасынын башкы мекемеси.",
    },
    mission: {
      tag: "Миссия",
      title:
        "Кыргыз Республикасын эл аралык аренада татыктуу көрсөтүү үчүн таланттуу жаш спортчуларды аныктоо, тандоо жана кесиптик даярдоо.",
      desc: "Биз спортчунун инсандыгын ар тараптуу өнүктүрүү, жеңишке жетүү үчүн зарыл болгон жогорку моралдык жана эрктик сапаттарды калыптандыруу үчүн шарттарды түзөбүз.",
    },
    vision: {
      tag: "Көрүнүш",
      title:
        "Борбордук Азиядагы спорттук резервдерди даярдоонун алдыңкы борбору болуу.",
      desc: "Өлкөнүн дени сак, физикалык жактан өнүккөн жана ийгиликтүү жарандарынын муунун тарбиялоо. Биз борбордун ар бир тарбиялануучусу өзүнүн спорттук потенциалынын максимумуна жетип, улуттун сыймыгына айланышына умтулабыз.",
    },
    valuesSection: {
      title1: "БИЗДИН",
      title2: "БААЛУУЛУКТАР",
      desc: "Борбордун ар бир кызматкеринин жана спортчусунун иши курулган фундаменталдык принциптер.",
    },
    values: [
      {
        title: "КЕСИПКӨЙЛҮК",
        desc: "Жогорку квалификациялуу машыктыруучулар жана олимпиадалык стандарттарга жооп берген заманбап даярдоо методикалары.",
      },
      {
        title: "КОМАНДАЛЫК РУХ",
        desc: "Спортчулардын лидерлик сапаттарын, тартипти жана өз ара урматтоону өнүктүрүү.",
      },
      {
        title: "ЖЕТИШКЕНДИКТЕР",
        desc: "Эл аралык аренада жогорку натыйжаларга бекем багытталуу.",
      },
      {
        title: "ӨНҮГҮҮ",
        desc: "Даярдоо программаларын жана спорттук инфраструктураны дайыма өркүндөтүү.",
      },
    ],
    historySection: {
      title1: "ӨНҮГҮҮ",
      title2: "ТАРЫХЫ",
    },
    history: [
      {
        year: "2004",
        event: "Даярдоо борборун негиздөө жана биринчи курама команданы түзүү",
      },
      {
        year: "2008",
        event: "Жаштар арасындагы Азия оюндарындагы биринчи медалдар",
      },
      {
        year: "2012",
        event:
          "Инфраструктураны кеңейтүү жана жаңы программаларды ишке киргизүү",
      },
      { year: "2016", event: "Заманбап машыгуу комплексинин ачылышы" },
      {
        year: "2020",
        event: "Спорттук медицинага санариптик технологияларды киргизүү",
      },
      {
        year: "2024",
        event: "Эл аралык турнирлерге лицензиялардын рекорддук саны",
      },
    ],
    structureSection: {
      title: "ТҮЗҮМҮ",
      founderTag: "Уюштуруучу",
      founderTitle: "Дене тарбия жана спорт боюнча Мамлекеттик агенттиги",
      founderDesc: "Кыргыз Республикасынын Министрлер Кабинетинин алдындагы",
      unitTag: "Бөлүм",
      unitTitle: "Жаштар курама командаларын даярдоо борбору",
      unitDesc: "Спорттук резервдин негизги базасы",
      deps: [
        {
          title: "Даярдоо бөлүмү",
          desc: "Машыгуу процессин уюштуруу жана көзөмөлдөө",
        },
        {
          title: "Спорттук медицина",
          desc: "Курама командаларды комплекстүү медициналык камсыздоо",
        },
        {
          title: "Илимий бөлүм",
          desc: "Аналитика, программаларды жана инновацияларды иштеп чыгуу",
        },
      ],
    },
  },
};

export function About() {
  const { language } = useLanguage();
  const t = pageTranslations[language];

  // Map icons to translated values
  const icons = [Target, Users, Award, TrendingUp];
  const values = t.values.map((val, idx) => ({
    ...val,
    icon: icons[idx],
  }));

  const history = t.history;

  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-neutral-950 flex flex-col justify-end pb-20 border-b-8 border-[#FFCD00]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop"
            alt="Олимпийский стадион"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
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
          <p className="text-xl text-neutral-300 max-w-2xl font-medium">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#E31837] mb-6 flex items-center gap-4">
                <span className="w-4 h-4 bg-[#E31837]"></span>
                {t.mission.tag}
              </h2>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-[1.2] mb-8">
                {t.mission.title}
              </p>
              <p className="text-neutral-600 font-medium leading-relaxed">
                {t.mission.desc}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#FFCD00] mb-6 flex items-center gap-4">
                <span className="w-4 h-4 bg-[#FFCD00]"></span>
                {t.vision.tag}
              </h2>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-[1.2] mb-8">
                {t.vision.title}
              </p>
              <p className="text-neutral-600 font-medium leading-relaxed">
                {t.vision.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-neutral-900">
                {t.valuesSection.title1}{" "}
                <span className="text-[#E31837]">{t.valuesSection.title2}</span>
              </h2>
            </div>
            <p className="max-w-md text-neutral-500 font-medium">
              {t.valuesSection.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center mb-8 group-hover:bg-[#E31837] transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
                {/* Decorative border */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200 -mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 bg-neutral-950 text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-20">
            {t.historySection.title1}{" "}
            <span className="text-neutral-600">{t.historySection.title2}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {history.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-neutral-800"
              >
                <div className="absolute top-0 left-[-4px] w-[7px] h-[7px] bg-[#FFCD00]"></div>
                <div className="text-4xl font-black text-[#E31837] mb-4 tracking-tighter">
                  {item.year}
                </div>
                <p className="text-neutral-400 font-medium leading-relaxed">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-neutral-900">
              {t.structureSection.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              <div className="border-l-4 border-neutral-900 pl-8 py-6 bg-neutral-50 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">
                  {t.structureSection.founderTag}
                </h3>
                <h4 className="text-2xl font-black uppercase tracking-tight text-neutral-900">
                  {t.structureSection.founderTitle}
                </h4>
                <p className="text-neutral-600 mt-2 font-medium">
                  {t.structureSection.founderDesc}
                </p>
              </div>

              <div className="ml-8 border-l-4 border-[#E31837] pl-8 py-6 bg-red-50 mb-8 relative">
                <div className="absolute top-1/2 -left-8 w-8 h-[2px] bg-[#E31837]"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#E31837] mb-2">
                  {t.structureSection.unitTag}
                </h3>
                <h4 className="text-2xl font-black uppercase tracking-tight text-neutral-900">
                  {t.structureSection.unitTitle}
                </h4>
                <p className="text-neutral-700 mt-2 font-medium">
                  {t.structureSection.unitDesc}
                </p>
              </div>

              <div className="ml-16 grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.structureSection.deps.map((dep, index) => (
                  <div
                    key={index}
                    className="border border-neutral-200 p-6 hover:border-neutral-900 transition-colors"
                  >
                    <h5 className="font-bold text-neutral-900 uppercase tracking-wider mb-2 text-sm">
                      {dep.title}
                    </h5>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {dep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
