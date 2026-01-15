import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Элегантная прихожая",
      image: "https://cdn.poehali.dev/files/IMG_2317.jpeg",
      category: "Жилые интерьеры"
    },
    {
      id: 2,
      title: "Элегантная прихожая",
      image: "https://cdn.poehali.dev/files/IMG_2317.jpeg",
      category: "Жилые интерьеры"
    },
    {
      id: 3,
      title: "Элегантная прихожая",
      image: "https://cdn.poehali.dev/files/IMG_2317.jpeg",
      category: "Жилые интерьеры"
    }
  ];

  const services = [
    {
      icon: "Home",
      title: "Дизайн интерьера",
      description: "Полный цикл разработки интерьера от концепции до реализации. Создаю уникальные пространства, отражающие вашу индивидуальность."
    },
    {
      icon: "MessageCircle",
      title: "Индивидуальные консультации",
      description: "Профессиональная помощь в планировании и выборе стиля интерьера. Подберу решения, идеально подходящие для вашего пространства."
    }
  ];

  const testimonials = [
    {
      name: "Елена Соколова",
      text: "Невероятный профессионализм! Моя квартира преобразилась до неузнаваемости. Каждая деталь продумана до мелочей.",
      rating: 5
    },
    {
      name: "Дмитрий Петров",
      text: "Работа выполнена безупречно. Современный стиль, качественные материалы, точное соблюдение сроков.",
      rating: 5
    },
    {
      name: "Анна Михайлова",
      text: "Консультация помогла определиться с концепцией. Получила множество ценных советов и идей для реализации.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">INTERIOR</h1>
            <div className="hidden md:flex items-center gap-8">
              {["Главная", "Портфолио", "Услуги", "Обо мне", "Отзывы", "Контакты"].map((item) => {
                const id = item === "Главная" ? "home" : item.toLowerCase();
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Создаю пространства,
            <br />
            <span className="text-[#ffffff]">которые вдохновляют</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Профессиональный дизайн интерьера с индивидуальным подходом к каждому проекту
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("контакты")}
            className="text-lg px-8 py-6 hover-lift"
          >
            Начать проект
          </Button>
        </div>
      </section>

      <section id="портфолио" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Портфолио</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Избранные проекты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-border hover-lift cursor-pointer group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Eye" size={32} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Услуги</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Профессиональный подход к созданию интерьеров
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="обо мне" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-12 text-center">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Приветствую! Я — профессиональный дизайнер интерьеров с многолетним опытом создания
              уникальных пространств, которые отражают индивидуальность каждого клиента.
            </p>
            <p>
              Моя философия основана на балансе между эстетикой и функциональностью. Я создаю
              интерьеры, которые не только красивы, но и комфортны для повседневной жизни.
            </p>
            <p>
              Работаю с проектами любой сложности — от небольших квартир до просторных домов и
              коммерческих помещений. Каждый проект для меня — это возможность воплотить вашу мечту
              в реальность.
            </p>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Отзывы</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Что говорят мои клиенты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover-lift">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-6">Контакты</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Готовы начать создание вашего идеального интерьера?
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 text-lg">
              <Icon name="Mail" size={24} className="text-primary" />
              <a href="mailto:info@interior-design.ru" className="hover:text-primary transition-colors">
                info@interior-design.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 text-lg">
              <Icon name="Phone" size={24} className="text-primary" />
              <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 pt-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 INTERIOR. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;