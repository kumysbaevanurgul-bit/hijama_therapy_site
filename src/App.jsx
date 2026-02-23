import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showContactForm, setShowContactForm] = useState(false)

  const services = [
    {
      id: 1,
      name: 'Хиджама (Банки)',
      description: 'Древний метод лечения, используемый в исламской медицине. Помогает при болях в спине, мигренях и улучшает кровообращение.',
      benefits: ['Улучшение кровообращения', 'Снятие боли и напряжения', 'Вывод токсинов', 'Укрепление иммунитета']
    },
    {
      id: 2,
      name: 'Гирудотерапия',
      description: 'Лечение с помощью медицинских пиявок. Пиявки вводят в кровь более 100 биоактивных веществ, способствующих исцелению.',
      benefits: ['Улучшение микроциркуляции', 'Противовоспалительный эффект', 'Обезболивающее действие', 'Нормализация давления']
    },
    {
      id: 3,
      name: 'Лечебный массаж',
      description: 'Профессиональный массаж для лечения и профилактики различных заболеваний. Помогает при остеохондрозе, радикулите и мышечном напряжении.',
      benefits: ['Релаксация мышц', 'Улучшение подвижности', 'Снятие стресса', 'Ускорение восстановления']
    }
  ]

  const testimonials = [
    {
      name: 'Айнур К.',
      text: 'Спасибо за профессиональный подход! После нескольких сеансов хиджамы боль в спине полностью прошла.',
      rating: 5
    },
    {
      name: 'Марат Т.',
      text: 'Отличный специалист! Рекомендую всем, кто хочет избавиться от хронических болей.',
      rating: 5
    },
    {
      name: 'Гульнара М.',
      text: 'Гирудотерапия действительно работает! Чувствую себя намного лучше.',
      rating: 5
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <img src="/logo.png" alt="NS|ReVita Logo" className="logo-img" />
            <div className="brand-info">
              <h1>NS|ReVita</h1>
              <p className="tagline">Хиджама • Гирудотерапия • Лечебный массаж</p>
            </div>
          </div>
          <nav className="nav">
            <button 
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Главная
            </button>
            <button 
              className={`nav-btn ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => setActiveSection('services')}
            >
              Услуги
            </button>
            <button 
              className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              О нас
            </button>
            <button 
              className={`nav-btn ${activeSection === 'contacts' ? 'active' : ''}`}
              onClick={() => setActiveSection('contacts')}
            >
              Контакты
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="section hero">
            <div className="container">
              <div className="hero-content">
                <h2>Добро пожаловать в NS|ReVita</h2>
                <p className="hero-text">
                  Профессиональные услуги традиционной и альтернативной медицины в городе Семей. 
                  Мы предлагаем хиджаму, гирудотерапию и лечебный массаж для вашего здоровья и благополучия.
                </p>
                <button 
                  className="cta-btn"
                  onClick={() => setActiveSection('services')}
                >
                  Узнать об услугах
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <section className="section services">
            <div className="container">
              <h2>Наши услуги</h2>
              <div className="services-grid">
                {services.map(service => (
                  <div key={service.id} className="service-card">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <div className="benefits">
                      <h4>Преимущества:</h4>
                      <ul>
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx}>✓ {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section about">
            <div className="container">
              <h2>О нас</h2>
              <div className="about-content">
                <div className="about-text">
                  <h3>Профессиональный подход к вашему здоровью</h3>
                  <p>
                    NS|ReVita - это центр традиционной и альтернативной медицины, 
                    специализирующийся на хиджаме, гирудотерапии и лечебном массаже.
                  </p>
                  <p>
                    Наш специалист имеет многолетний опыт работы и глубокие знания 
                    в области восточной медицины и современных методов лечения.
                  </p>
                  <p>
                    Мы используем только проверенные и безопасные методики, 
                    соблюдая все санитарно-гигиенические нормы.
                  </p>
                  <h4>Почему выбирают нас:</h4>
                  <ul className="about-list">
                    <li>✓ Профессиональный опыт и квалификация</li>
                    <li>✓ Индивидуальный подход к каждому клиенту</li>
                    <li>✓ Современное оборудование и материалы</li>
                    <li>✓ Соблюдение всех норм гигиены и безопасности</li>
                    <li>✓ Доступные цены</li>
                    <li>✓ Удобное расписание (8:00 - 21:00)</li>
                  </ul>
                </div>
                <div className="testimonials">
                  <h3>Отзывы клиентов</h3>
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="testimonial">
                      <div className="stars">
                        {'★'.repeat(testimonial.rating)}
                      </div>
                      <p>"{testimonial.text}"</p>
                      <p className="author">— {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contacts Section */}
        {activeSection === 'contacts' && (
          <section className="section contacts">
            <div className="container">
              <h2>Контакты</h2>
              <div className="contacts-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <h3>📍 Адрес</h3>
                    <p>г. Семей, ул. Валиханова, 167</p>
                  </div>
                  <div className="contact-item">
                    <h3>⏰ Время работы</h3>
                    <p>Пн-Вс: 8:00 - 21:00</p>
                    <p className="note">Приём по записи</p>
                  </div>
                  <div className="contact-item">
                    <h3>📱 Связь с нами</h3>
                    <div className="social-links">
                      <a href="https://wa.me/message/RDFXW2ARSFTAA1" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                        💬 WhatsApp
                      </a>
                      <a href="https://wa.me/message/FTVBBDXRWYJGC1" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                        💬 WhatsApp 2
                      </a>
                      <a href="https://www.instagram.com/massage_courses_semey_ns" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                        📸 Instagram
                      </a>
                    </div>
                  </div>
                </div>
                <div className="booking-section">
                  <h3>Запись на приём</h3>
                  <p>Свяжитесь с нами через WhatsApp или Instagram для записи на удобное вам время.</p>
                  <button 
                    className="cta-btn"
                    onClick={() => window.open('https://wa.me/message/RDFXW2ARSFTAA1', '_blank')}
                  >
                    Записаться через WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 NS|ReVita. Все права защищены.</p>
          <p className="footer-note">г. Семей, ул. Валиханова, 167 | Приём: 8:00 - 21:00</p>
        </div>
      </footer>
    </div>
  )
}

export default App
