--- src/App.tsx (原始)
export default function App() {
  return (
    <div/>
  );
}


+++ src/App.tsx (修改后)
import { useState } from 'react';
import {
  Check,
  ChevronDown,
  Phone,
  Send,
  MessageCircle,
  Instagram,
  Mail,
  Star,
  Zap,
  Shield,
  Clock,
  Palette,
  Smartphone,
  Search,
  BarChart3,
  Code,
  Users,
  Award,
  Calendar,
  ArrowRight,
  X,
  Plus,
  Minus
} from 'lucide-react';

// ===== HEADER =====
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-blue-600">
            WebMaster<span className="text-gray-800">.pro</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#works" className="text-sm text-gray-600 hover:text-blue-600 transition">Работы</a>
            <a href="#prices" className="text-sm text-gray-600 hover:text-blue-600 transition">Цены</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-blue-600 transition">Обо мне</a>
            <a href="#reviews" className="text-sm text-gray-600 hover:text-blue-600 transition">Отзывы</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-blue-600 transition">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
          >
            <Send size={16} />
            Написать
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#works" className="block text-gray-600 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Работы</a>
          <a href="#prices" className="block text-gray-600 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Цены</a>
          <a href="#about" className="block text-gray-600 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Обо мне</a>
          <a href="#reviews" className="block text-gray-600 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Отзывы</a>
          <a href="#faq" className="block text-gray-600 hover:text-blue-600" onClick={() => setMobileOpen(false)}>FAQ</a>
          <a href="#contact" className="block bg-blue-600 text-white text-center px-5 py-2.5 rounded-full text-sm font-medium" onClick={() => setMobileOpen(false)}>
            Написать в Telegram
          </a>
        </div>
      )}
    </header>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Сделаю вам сайт{' '}
              <span className="text-blue-600">за два дня</span>.{' '}
              <span className="text-gray-400">Черновик покажу бесплатно</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Современные сайты для мастеров и специалистов. Быстро, красиво, с заботой о ваших клиентах. Без шаблонов — только индивидуальный подход.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-full font-medium hover:bg-blue-700 transition shadow-xl shadow-blue-600/25 text-base"
              >
                <Send size={18} />
                Написать в Telegram
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 bg-white text-gray-800 px-7 py-3.5 rounded-full font-medium hover:bg-gray-50 transition border border-gray-200 text-base"
              >
                Посмотреть работы
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={14} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Готов за 2 дня</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={14} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Бесплатный черновик</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={14} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Поддержка 30 дней</span>
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-100">
              <div className="flex -space-x-2">
                <img src="https://placehold.co/32x32/2563eb/white?text=1" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                <img src="https://placehold.co/32x32/3b82f6/white?text=2" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                <img src="https://placehold.co/32x32/60a5fa/white?text=3" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">150+</span> работ в портфолио
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x500/e0e7ff/2563eb?text=Web+Developer"
                alt="Веб-мастер за работой"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Свободен для заказов</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl px-4 py-2 shadow-xl">
              <span className="text-sm font-bold">⭐ 5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== WHY WEBSITE =====
function WhyWebsite() {
  const problems = [
    'Клиенты уходят к конкурентам с сайтом',
    'Нет записи онлайн — звонки отвлекают от работы',
    'Сложно показать портфолио и цены',
    'Зависимость от сарафанного радио',
    'Нет возможности принимать предоплату',
    'Клиенты не знают ваш график работы'
  ];

  const benefits = [
    'Запись 24/7 — клиенты бронируют сами',
    'Ваше портфолио всегда под рукой',
    'Автоматические напоминания клиентам',
    'Рост доверия и профессиональный имидж',
    'Приём онлайн-оплаты',
    'Новые клиенты из поиска Google и Яндекс'
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Зачем мастеру <span className="text-blue-600">сайт</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Сравните, как выглядит работа без сайта и с ним
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <X size={20} />
              Без сайта
            </h3>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="text-red-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <Check size={20} />
              С сайтом
            </h3>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TARGET AUDIENCE =====
function TargetAudience() {
  const professions = [
    '💅 Мастера маникюра',
    '✂️ Парикмахеры',
    '🎂 Кондитеры',
    '💆 Косметологи',
    '📸 Фотографы',
    '🧘 Фитнес-тренеры',
    '🎨 Художники',
    '🔧 Мастера по ремонту',
    '🧹 Клининг',
    '🎵 Музыканты',
    '👨‍🏫 Репетиторы',
    '🐕 Грумеры',
    '💎 Ювелиры',
    '🌸 Флористы',
    '🚗 Автомойки',
    '🍕 Доставка еды'
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Кому делаю <span className="text-blue-600">сайты</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Работаю с мастерами и специалистами из разных сфер
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {professions.map((prof, i) => (
            <span
              key={i}
              className="bg-white px-5 py-3 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition cursor-default"
            >
              {prof}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PORTFOLIO =====
function Portfolio() {
  const works = [
    {
      title: 'Сайт для салона красоты "Glow"',
      desc: 'Лендинг с онлайн-записью и галереей работ',
      price: 'от 15 000 ₽',
      img: 'https://placehold.co/400x300/fef3c7/d97706?text=Beauty+Salon'
    },
    {
      title: 'Портфолио фотографа',
      desc: 'Минималистичный сайт с галереей и формой заявки',
      price: 'от 12 000 ₽',
      img: 'https://placehold.co/400x300/ede9fe/7c3aed?text=Photographer'
    },
    {
      title: 'Сайт кондитерской "Sweet Dream"',
      desc: 'Каталог тортов, калькулятор и заказ онлайн',
      price: 'от 18 000 ₽',
      img: 'https://placehold.co/400x300/fce7f3/db2777?text=Bakery'
    },
    {
      title: 'Сайт фитнес-тренера',
      desc: 'Программы тренировок, отзывы и запись на консультацию',
      price: 'от 14 000 ₽',
      img: 'https://placehold.co/400x300/d1fae5/059669?text=Fitness'
    },
    {
      title: 'Сайт студии маникюра',
      desc: 'Прайс, мастера, онлайн-запись и акции',
      price: 'от 13 000 ₽',
      img: 'https://placehold.co/400x300/fce4ec/e91e63?text=Nail+Studio'
    },
    {
      title: 'Сайт клининговой компании',
      desc: 'Калькулятор стоимости, услуги и отзывы клиентов',
      price: 'от 16 000 ₽',
      img: 'https://placehold.co/400x300/e3f2fd/1976d2?text=Cleaning'
    }
  ];

  return (
    <section id="works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Мои <span className="text-blue-600">работы</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Каждый сайт — уникальный, сделан под задачи клиента
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1">{work.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{work.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-sm">{work.price}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Открыть <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== WHAT'S INCLUDED =====
function WhatsIncluded() {
  const items = [
    { num: '01', title: 'Адаптивный дизайн', desc: 'Отлично выглядит на телефонах, планшетах и компьютерах' },
    { num: '02', title: 'SEO-оптимизация', desc: 'Сайт находят в Google и Яндекс' },
    { num: '03', title: 'Быстрая загрузка', desc: 'Страницы грузятся за 1-2 секунды' },
    { num: '04', title: 'Форма обратной связи', desc: 'Клиенты пишут вам прямо с сайта' },
    { num: '05', title: 'Интеграция с соцсетями', desc: 'Кнопки Instagram, VK, Telegram' },
    { num: '06', title: 'Аналитика', desc: 'Подключу счётчик посещений и целей' },
    { num: '07', title: 'SSL-сертификат', desc: 'Безопасное соединение HTTPS' },
    { num: '08', title: 'Хостинг на год', desc: 'Размещение сайта включено в стоимость' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Что <span className="text-blue-600">входит</span> в каждый сайт
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Базовый набор, который получает каждый клиент
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl font-black text-blue-600/20 mb-3">{item.num}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PRICING =====
function Pricing() {
  const plans = [
    {
      name: 'Старт',
      price: '12 000',
      desc: 'Простой одностраничный сайт',
      features: [
        'Одностраничный лендинг',
        'Адаптивный дизайн',
        'Форма обратной связи',
        'Базовая SEO-оптимизация',
        'Хостинг на 1 год',
        'Срок: 2 дня'
      ],
      popular: false
    },
    {
      name: 'Бизнес',
      price: '25 000',
      desc: 'Полноценный сайт с доп. функциями',
      features: [
        'Многостраничный сайт',
        'Онлайн-запись / бронирование',
        'Каталог услуг с ценами',
        'Интеграция с мессенджерами',
        'Подключение аналитики',
        'SEO-продвижение',
        'Хостинг на 1 год',
        'Срок: 5 дней'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '45 000',
      desc: 'Максимум функций и индивидуальный дизайн',
      features: [
        'Всё из тарифа «Бизнес»',
        'Индивидуальный дизайн',
        'Личный кабинет клиента',
        'Онлайн-оплата',
        'Email-рассылки',
        'Приоритетная поддержка',
        'Хостинг на 2 года',
        'Срок: 10 дней'
      ],
      popular: false
    }
  ];

  return (
    <section id="prices" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-blue-600">Цены</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф или напишите — подберём индивидуально
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full">
                  Популярный
                </div>
              )}
              <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.desc}
              </p>
              <div className="mt-6 mb-6">
                <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}> ₽</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Заказать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ADDITIONAL SERVICES =====
function AdditionalServices() {
  const services = [
    {
      icon: <Search size={28} className="text-blue-600" />,
      title: 'SEO-продвижение',
      desc: 'Выведу ваш сайт в топ Google и Яндекс. Оптимизация контента, мета-теги, скорость загрузки.',
      price: 'от 8 000 ₽/мес'
    },
    {
      icon: <BarChart3 size={28} className="text-blue-600" />,
      title: 'Настройка рекламы',
      desc: 'Запущу таргетированную рекламу в VK и контекстную рекламу в Яндекс.Директ.',
      price: 'от 10 000 ₽'
    },
    {
      icon: <Palette size={28} className="text-blue-600" />,
      title: 'Логотип и брендбук',
      desc: 'Разработаю логотип, подберу цвета и шрифты для вашего бренда.',
      price: 'от 7 000 ₽'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Что заказывают <span className="text-blue-600">потом</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Дополнительные услуги для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
              <p className="text-blue-600 font-bold">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== STEPS =====
function Steps() {
  const steps = [
    {
      num: '1',
      title: 'Обсуждаем задачу',
      desc: 'Вы пишете мне, я задаю вопросы, уточняю пожелания. Это бесплатно и ни к чему не обязывает.'
    },
    {
      num: '2',
      title: 'Показываю черновик',
      desc: 'В течение дня делаю бесплатный черновик, чтобы вы увидели, как будет выглядеть ваш сайт.'
    },
    {
      num: '3',
      title: 'Дорабатываю и запускаю',
      desc: 'После утверждения делаю полноценный сайт за 2-5 дней. Вношу правки, подключаю домен.'
    },
    {
      num: '4',
      title: 'Поддерживаю',
      desc: '30 дней бесплатной поддержки после запуска. Помогу с контентом и мелкими правками.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Четыре <span className="text-blue-600">шага</span> до вашего сайта
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс работы
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight size={20} className="text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ABOUT =====
function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://placehold.co/500x600/e0e7ff/2563eb?text=About+Me"
              alt="Обо мне"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-gray-900">4.9</span>
                <span className="text-sm text-gray-500">/ 5.0</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Обо <span className="text-blue-600">мне</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Привет! Меня зовут Алексей, я веб-разработчик с 5-летним опытом. Специализируюсь на создании сайтов для мастеров и малого бизнеса.
            </p>
            <p className="text-gray-600 mb-4">
              Понимаю, как важно для мастера иметь красивый и удобный сайт, который работает как ещё один сотрудник — привлекает клиентов 24/7.
            </p>
            <p className="text-gray-600 mb-8">
              Работаю быстро, без бюрократии и лишних вопросов. Просто напишите мне — и через 2 дня у вас будет готовый сайт.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-blue-600">150+</div>
                <div className="text-xs text-gray-500 mt-1">Сайтов сделано</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-blue-600">5</div>
                <div className="text-xs text-gray-500 mt-1">Лет опыта</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-blue-600">98%</div>
                <div className="text-xs text-gray-500 mt-1">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== REVIEWS =====
function Reviews() {
  const reviews = [
    {
      name: 'Анна К.',
      role: 'Мастер маникюра',
      text: 'Алексей сделал мне сайт за 2 дня, как и обещал. Клиенты теперь записываются сами через сайт, мне не нужно отвечать на звонки во время работы. Очень довольна!',
      avatar: 'https://placehold.co/48x48/fce4ec/e91e63?text=А'
    },
    {
      name: 'Мария С.',
      role: 'Кондитер',
      text: 'Заказывала сайт для своей кондитерской. Получилось даже лучше, чем я представляла! Красивые фото тортов, удобный каталог, клиенты в восторге. Рекомендую!',
      avatar: 'https://placehold.co/48x48/ede9fe/7c3aed?text=М'
    },
    {
      name: 'Дмитрий П.',
      role: 'Фотограф',
      text: 'Долго искал того, кто сделает портфолио-сайт. Алексей понял задачу с первого раза. Сайт быстрый, красивый, новые клиенты приходят из поиска. Спасибо!',
      avatar: 'https://placehold.co/48x48/e3f2fd/1976d2?text=Д'
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-blue-600">Отзывы</span> клиентов
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Что говорят те, кто уже заказал сайт
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CTA =====
function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Напишите мне прямо сейчас — покажу бесплатный черновик вашего будущего сайта в течение дня
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl text-lg"
            >
              <Send size={20} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Сколько стоит сайт?',
      a: 'Стоимость зависит от сложности. Простой лендинг — от 12 000 ₽, многостраничный сайт — от 25 000 ₽. Напишите мне, и я рассчитаю точную стоимость под вашу задачу.'
    },
    {
      q: 'Как быстро будет готов сайт?',
      a: 'Простой лендинг делаю за 2 дня, многостраничный сайт — за 5-7 дней. Сроки зависят от сложности и скорости согласования контента.'
    },
    {
      q: 'Что нужно от меня для начала работы?',
      a: 'Достаточно рассказать о себе и своём бизнесе, прислать фото работ (если есть) и пожелания по стилю. Если фото нет — помогу подобрать или сделаю дизайн без них.'
    },
    {
      q: 'Можно ли посмотреть черновик перед оплатой?',
      a: 'Да! Я делаю бесплатный черновик, чтобы вы увидели, как будет выглядеть ваш сайт. Только после вашего одобрения переходим к оплате.'
    },
    {
      q: 'Что входит в поддержку после запуска?',
      a: '30 дней бесплатной поддержки: мелкие правки текста, замена фото, помощь с контентом. После этого — по договорённости.'
    },
    {
      q: 'А если мне не понравится результат?',
      a: 'Такого ещё не было :) Но если что-то не так — вношу правки до полного утверждения. Вы оплачиваете работу только после того, как увидите и одобрите результат.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Частые <span className="text-blue-600">вопросы</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Ответы на популярные вопросы о работе со мной
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus size={16} className="text-blue-600" />
                  ) : (
                    <Plus size={16} className="text-blue-600" />
                  )}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FOOTER / CONTACT =====
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Давайте <span className="text-blue-400">обсудим</span> ваш проект
            </h2>
            <p className="text-gray-400 mb-8">
              Напишите мне удобным способом — отвечаю в течение часа в рабочее время
            </p>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-[#2AABEE] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#229ED9] transition w-full sm:w-auto"
              >
                <Send size={20} />
                Telegram: @webmaster_pro
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#1FAD53] transition w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                WhatsApp: +7 (999) 123-45-67
              </a>
              <a
                href="tel:+79991234567"
                className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-gray-700 transition w-full sm:w-auto"
              >
                <Phone size={20} />
                +7 (999) 123-45-67
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-3">Рабочее время</h3>
              <p className="text-gray-400 text-sm">Пн-Пт: 10:00 — 20:00</p>
              <p className="text-gray-400 text-sm">Сб: 11:00 — 17:00</p>
              <p className="text-gray-400 text-sm">Вс: выходной</p>
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition">
                <Send size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="text-xl font-bold text-blue-400">
            WebMaster<span className="text-white">.pro</span>
          </a>
          <p className="text-gray-500 text-sm">
            © 2024 Все права защищены. Создание сайтов для мастеров.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== MAIN APP =====
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <Hero />
      <WhyWebsite />
      <TargetAudience />
      <Portfolio />
      <WhatsIncluded />
      <Pricing />
      <AdditionalServices />
      <Steps />
      <About />
      <Reviews />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
