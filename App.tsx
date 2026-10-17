--- src/App.tsx (原始)
export default function App() {
  return (
    <div/>
  );
}


+++ src/App.tsx (修改后)
import { useState } from 'react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* 1. Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-blue-600">WebMaster</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#works" className="hover:text-blue-600 transition">Работы</a>
            <a href="#prices" className="hover:text-blue-600 transition">Цены</a>
            <a href="#about" className="hover:text-blue-600 transition">Обо мне</a>
            <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          </nav>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition shadow-md shadow-blue-600/20">
            Написать
          </a>
        </div>
      </header>

      {/* 2. Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Сделаю вам сайт <span className="text-blue-600">за два дня.</span><br />
                Черновик покажу бесплатно
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Создаю современные сайты для мастеров и специалистов. Быстро, красиво, с адаптивной вёрсткой. Вы платите только за результат.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#" className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25 flex items-center gap-2">
                  <i className="fa-brands fa-telegram"></i> Написать в Telegram
                </a>
                <a href="#works" className="border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition">
                  Посмотреть работы
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  Готово за 2 дня
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  Бесплатный черновик
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  Адаптив под мобильные
                </div>
              </div>
              <div className="inline-flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl">
                <span className="text-3xl font-bold text-blue-600">150+</span>
                <span className="text-sm text-gray-600">работ в<br />портфолио</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -z-10"></div>
              <img
                src="https://placehold.co/600x500/e0e7ff/2563eb?text=Мастер+за+работой"
                alt="Мастер за работой"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Зачем мастеру сайт */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Зачем мастеру сайт?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                <i className="fa-solid fa-xmark"></i> Без сайта
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-400 mt-1">•</span>
                  Клиенты ищут вас в Instagram — но не находят
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-400 mt-1">•</span>
                  Запись через личные сообщения — хаос и потеря клиентов
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-400 mt-1">•</span>
                  Нет доверия — выглядит несерьёзно
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-400 mt-1">•</span>
                  Зависите от алгоритмов соцсетей
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-400 mt-1">•</span>
                  Сложно показать портфолио удобно
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-100">
              <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
                <i className="fa-solid fa-check"></i> С сайтом
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  Вас находят через Google и Яндекс
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  Онлайн-запись 24/7 — клиенты записываются сами
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  Выглядите профессионально и вызываете доверие
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  Работает на вас даже когда вы спите
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  Красивое портфолио с фильтрами и галереей
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Кому делаю сайты */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Кому делаю сайты</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Работаю с мастерами бьюти-сферы, сферы услуг и фрилансерами</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Мастера маникюра', 'Парикмахеры', 'Кондитеры', 'Косметологи', 'Массажисты', 'Фотографы', 'Флористы', 'Репетиторы', 'Фитнес-тренеры', 'Стилисты', 'Визажисты', 'Мастера ресниц', 'Тату-мастера', 'Барберы', 'Педагоги', 'Дизайнеры'].map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-100 transition cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Работы */}
      <section id="works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Работы</h2>
          <p className="text-gray-600 text-center mb-12">Последние проекты, которыми горжусь</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Nail Studio Anna', desc: 'Сайт для студии маникюра с онлайн-записью', price: '15 000 ₽', img: 'https://placehold.co/400x300/dbeafe/2563eb?text=Nail+Studio' },
              { title: 'Sweet Bakery', desc: 'Лендинг для домашней кондитерской', price: '12 000 ₽', img: 'https://placehold.co/400x300/fce7f3/be185d?text=Sweet+Bakery' },
              { title: 'Barber Kings', desc: 'Сайт барбершопа с прайсом и картой', price: '18 000 ₽', img: 'https://placehold.co/400x300/e0e7ff/1e40af?text=Barber+Kings' },
              { title: 'Yoga Flow', desc: 'Сайт для студии йоги с расписанием', price: '14 000 ₽', img: 'https://placehold.co/400x300/d1fae5/065f46?text=Yoga+Flow' },
              { title: 'PhotoArt', desc: 'Портфолио фотографа с галереей', price: '16 000 ₽', img: 'https://placehold.co/400x300/fef3c7/92400e?text=PhotoArt' },
              { title: 'Massage Pro', desc: 'Сайт массажного салона с акциями', price: '13 000 ₽', img: 'https://placehold.co/400x300/ede9fe/5b21b6?text=Massage+Pro' },
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">{project.price}</span>
                    <a href="#" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                      Открыть <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Что входит */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Что входит в каждый сайт</h2>
          <p className="text-gray-600 text-center mb-12">Полный набор — ничего доплачивать не нужно</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Дизайн', desc: 'Уникальный макет под ваш стиль' },
              { num: '02', title: 'Адаптив', desc: 'Идеально на телефонах и планшетах' },
              { num: '03', title: 'SEO', desc: 'Базовая оптимизация для поиска' },
              { num: '04', title: 'Скорость', desc: 'Загрузка менее 2 секунд' },
              { num: '05', title: 'Анимации', desc: 'Плавные переходы и эффекты' },
              { num: '06', title: 'SSL', desc: 'Безопасное HTTPS-соединение' },
              { num: '07', title: 'Поддержка', desc: '30 дней бесплатных правок' },
              { num: '08', title: 'Аналитика', desc: 'Подключение Яндекс.Метрики' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-100 transition">
                <span className="text-3xl font-bold text-blue-600 mb-3 block">{item.num}</span>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Цены */}
      <section id="prices" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Цены</h2>
          <p className="text-gray-600 text-center mb-12">Выберите подходящий тариф</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Тариф 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-2">Стартовый</h3>
              <p className="text-gray-500 text-sm mb-4">Для тех, кто только начинает</p>
              <div className="text-4xl font-bold mb-6">8 000 <span className="text-lg text-gray-400">₽</span></div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Одностраничный сайт</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Адаптивная вёрстка</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Форма обратной связи</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Срок: 1 день</li>
              </ul>
              <a href="#contact" className="block text-center border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition">
                Заказать
              </a>
            </div>
            {/* Тариф 2 - Популярный */}
            <div className="bg-blue-600 rounded-2xl p-8 shadow-xl shadow-blue-600/20 text-white relative transform md:scale-105">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">ПОПУЛЯРНЫЙ</span>
              <h3 className="text-lg font-bold mb-2">Бизнес</h3>
              <p className="text-blue-100 text-sm mb-4">Оптимальный выбор для мастера</p>
              <div className="text-4xl font-bold mb-6">15 000 <span className="text-lg text-blue-200">₽</span></div>
              <ul className="space-y-3 mb-8 text-sm text-blue-50">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-yellow-400"></i> Многостраничный сайт</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-yellow-400"></i> Онлайн-запись</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-yellow-400"></i> Галерея работ</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-yellow-400"></i> SEO-оптимизация</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-yellow-400"></i> Срок: 2-3 дня</li>
              </ul>
              <a href="#contact" className="block text-center bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition">
                Заказать
              </a>
            </div>
            {/* Тариф 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-2">Премиум</h3>
              <p className="text-gray-500 text-sm mb-4">Максимум возможностей</p>
              <div className="text-4xl font-bold mb-6">25 000 <span className="text-lg text-gray-400">₽</span></div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Всё из «Бизнес»</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Интеграция с CRM</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Личный кабинет</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Анимации и эффекты</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Срок: 5-7 дней</li>
              </ul>
              <a href="#contact" className="block text-center border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Что заказывают потом */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Что заказывают потом</h2>
          <p className="text-gray-600 text-center mb-12">Дополнительные услуги для развития вашего бизнеса</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl mb-4">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Продвижение в поиске</h3>
              <p className="text-gray-500 text-sm mb-4">Выведу ваш сайт в топ Google и Яндекс. Настрою ключевые слова и мета-теги.</p>
              <span className="text-blue-600 font-bold">от 5 000 ₽/мес</span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-xl mb-4">
                <i className="fa-solid fa-paintbrush"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Редизайн</h3>
              <p className="text-gray-500 text-sm mb-4">Обновлю дизайн вашего текущего сайта. Сделаю его современным и удобным.</p>
              <span className="text-purple-600 font-bold">от 7 000 ₽</span>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl mb-4">
                <i className="fa-solid fa-gear"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Техподдержка</h3>
              <p className="text-gray-500 text-sm mb-4">Буду следить за работоспособностью сайта, обновлять контент и делать правки.</p>
              <span className="text-green-600 font-bold">от 3 000 ₽/мес</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Четыре шага */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Четыре шага к вашему сайту</h2>
          <p className="text-gray-600 text-center mb-12">Простой и понятный процесс работы</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Заявка', desc: 'Вы пишете мне в Telegram. Обсуждаем задачи и пожелания.' },
              { step: '02', title: 'Черновик', desc: 'В течение дня делаю бесплатный черновик для согласования.' },
              { step: '03', title: 'Разработка', desc: 'После утверждения создаю полноценный сайт за 1-3 дня.' },
              { step: '04', title: 'Запуск', desc: 'Размещаю сайт в интернете, подключаю домен и аналитику.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <span className="text-5xl font-bold text-blue-100 block mb-3">{item.step}</span>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Обо мне */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10"></div>
              <img
                src="https://placehold.co/500x600/e0e7ff/2563eb?text=Фото+мастера"
                alt="Обо мне"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Обо мне</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Привет! Меня зовут Алексей, я веб-разработчик с 5-летним опытом. Специализируюсь на создании сайтов для мастеров и малого бизнеса.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Понимаю специфику бьюти-сферы и сферы услуг. Знаю, что важно для ваших клиентов — удобная запись, красивое портфолио, быстрый сайт на мобильном. Делаю всё под ключ: от дизайна до запуска.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-2xl p-5 text-center">
                  <span className="text-3xl font-bold text-blue-600 block">150+</span>
                  <span className="text-sm text-gray-600">проектов</span>
                </div>
                <div className="bg-blue-50 rounded-2xl p-5 text-center">
                  <span className="text-3xl font-bold text-blue-600 block">5 лет</span>
                  <span className="text-sm text-gray-600">опыта</span>
                </div>
                <div className="bg-blue-50 rounded-2xl p-5 text-center">
                  <span className="text-3xl font-bold text-blue-600 block">98%</span>
                  <span className="text-sm text-gray-600">довольных</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Отзывы */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600 text-center mb-12">Что говорят те, кто уже заказал сайт</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна К.', role: 'Мастер маникюра', text: 'Алексей сделал мне сайт за один день! Клиенты стали записываться через форму, и я перестала тратить время на переписки. Очень рекомендую!', avatar: 'https://placehold.co/80x80/dbeafe/2563eb?text=АК' },
              { name: 'Мария С.', role: 'Кондитер', text: 'Сайт получился красивым и вкусным — прямо как мои торты! 😊 Заказы через сайт составляют уже 60% от всех. Окупилось за первую неделю.', avatar: 'https://placehold.co/80x80/fce7f3/be185d?text=МС' },
              { name: 'Дмитрий В.', role: 'Барбер', text: 'Долго откладывал создание сайта, но Алексей убедил бесплатным черновиком. Результат превзошёл ожидания — клиенты говорят, что удобно!', avatar: 'https://placehold.co/80x80/e0e7ff/1e40af?text=ДВ' },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.role}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
                <div className="flex gap-1 mt-4 text-yellow-400">
                  {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star text-sm"></i>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 sm:p-14 text-center text-white shadow-2xl shadow-blue-600/30">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Напишите мне прямо сейчас — покажу бесплатный черновик вашего будущего сайта уже завтра
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg flex items-center gap-2">
              <i className="fa-brands fa-telegram text-xl"></i> Написать в Telegram
            </a>
            <a href="tel:+79001234567" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition flex items-center gap-2">
              <i className="fa-solid fa-phone"></i> +7 (900) 123-45-67
            </a>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-gray-600 text-center mb-12">Ответы на популярные вопросы</p>
          <div className="space-y-3">
            {[
              { q: 'Сколько времени занимает создание сайта?', a: 'Стандартный сайт готов за 2-3 рабочих дня. Сложные проекты с личным кабинетом — 5-7 дней. Черновик показываю в день обращения.' },
              { q: 'Что нужно от меня для начала работы?', a: 'Достаточно фотографий ваших работ, прайс-лист, контактные данные и общее описание услуг. Если нет фото — помогу подобрать.' },
              { q: 'Можно ли вносить правки после запуска?', a: 'Конечно! Первые 30 дней правки бесплатные. После — по договорённости или на тарифе техподдержки.' },
              { q: 'Домен и хостинг — это отдельно?', a: 'Да, домен и хостинг оплачиваются отдельно (~1500₽/год). Но я помогу выбрать оптимальный вариант и всё настрою.' },
              { q: 'А если мне не понравится результат?', a: 'Я показываю черновик до оплаты. Если не устроит — вы ничего не платите. Но за 150+ проектов такого ещё не было :)' },
              { q: 'Работаете по договору?', a: 'Да, работаю официально. Могу оформить договор и предоставить все закрывающие документы.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition"
                >
                  <span className="font-medium">{item.q}</span>
                  <i className={`fa-solid fa-chevron-down text-blue-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Свяжитесь со мной</h2>
              <p className="text-gray-400 mb-8">Выберите удобный способ связи — отвечаю в течение 30 минут</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2 transition font-medium">
                  <i className="fa-brands fa-telegram"></i> Telegram
                </a>
                <a href="#" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl flex items-center gap-2 transition font-medium">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
                <a href="#" className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl flex items-center gap-2 transition font-medium">
                  <i className="fa-brands fa-vk"></i> ВКонтакте
                </a>
              </div>
              <a href="tel:+79001234567" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition flex items-center gap-2">
                <i className="fa-solid fa-phone"></i> +7 (900) 123-45-67
              </a>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-4">Быстрая заявка</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                />
                <input
                  type="text"
                  placeholder="Ваша профессия"
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                />
                <textarea
                  placeholder="Расскажите о проекте"
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition resize-none"
                ></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-600/20">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <span>© 2024 WebMaster. Все права защищены.</span>
            <span>Сделано с <span className="text-red-500">♥</span> для мастеров</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
