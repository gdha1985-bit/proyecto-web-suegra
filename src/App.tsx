import React, { useState, useRef, useEffect } from "react";
import { 
  Star, 
  Moon, 
  Sun, 
  Sparkles, 
  Users, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Award,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Clock
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import marthaHeroWebp from "./assets/martha-astrologa.webp";
import marthaHeroMobileWebp from "./assets/martha-astrologa-mobile.webp";
import marthaHeroImg from "./assets/martha-astrologa.png";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Trayectoria", href: "#trayectoria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-semibold tracking-wider text-accent flex items-center"
        >
          MARTHA <span className="text-gold ml-2">ASTROLOGA</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-lavender overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-texture">
      {/* Decorative Orbs - Optimized blur for mobile GPUs */}
      <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-lavender/40 rounded-full blur-[40px] md:blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-[-5%] w-[30%] h-[30%] bg-gold/10 rounded-full blur-[35px] md:blur-[80px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center md:text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-lavender text-accent text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Guía Espiritual & Emocional
          </motion.span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-[1.2] mb-6 max-w-2xl mx-auto md:mx-0">
            Estoy aquí para acompañarte a encontrar tu <span className="italic gold-text-gradient font-medium">equilibrio interior.</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Entiendo que la vida a veces se siente como un laberinto. Mi trabajo no es solamente decirte qué va a pasar, sino acompañarte a entender por qué está pasando y cómo y cuándo puedes usar esa energía a tu favor.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
            <motion.a 
              href="https://wa.me/34722377094?text=Hola%20Martha,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-accent/20 hover:bg-neutral-800 transition-colors inline-block text-center tracking-wide"
            >
              AGENDAR CONSULTA AHORA
            </motion.a>
            <motion.a 
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold-dark px-8 py-4 rounded-full font-medium hover:bg-gold/5 transition-colors inline-block text-center"
            >
              Mis Servicios
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[500px]">
            {/* Elegant Frame & Glow */}
            <div className="absolute inset-0 border-[1px] border-gold transform translate-x-4 translate-y-4 rounded-2xl -z-10 shadow-[0_0_40px_rgba(212,175,55,0.1)]" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20 bg-lavender/5 min-h-[380px] sm:min-h-[500px] flex items-center justify-center">
              <picture className="w-full h-full block">
                <source srcSet={marthaHeroMobileWebp} media="(max-width: 640px)" type="image/webp" />
                <source srcSet={marthaHeroWebp} type="image/webp" />
                <img 
                  src={marthaHeroWebp}
                  alt="Martha Astrologa - Foto de frente para confianza"
                  className="w-full h-full object-cover aspect-[4/5] object-center"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={500}
                  height={625}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('/martha-astrologa.png')) {
                      target.src = marthaHeroImg;
                    }
                  }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-3 sm:-left-8 bg-white/98 p-5 sm:p-6 rounded-2xl shadow-2xl border border-gold/30 max-w-[340px] sm:max-w-[390px] backdrop-blur-md z-20"
            >
              <div className="flex items-center space-x-2 text-gold mb-2.5">
                <Sparkles size={20} className="text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gold-dark">Confianza & Claridad</span>
              </div>
              <p className="text-base sm:text-lg font-serif italic text-accent leading-snug">
                "Un espacio seguro para entender tu presente, tu pasado, liberar cargas y tomar decisiones con paz interior."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tagline?: string;
  fullDescription?: string;
  introParagraphs?: string[];
  benefitsTitle?: string;
  benefits?: { title: string; desc: string }[];
  stepsTitle?: string;
  steps?: { title: string; desc: string }[];
  modalidad?: string;
  duracion?: string;
  idealPara?: string;
  buttonText?: string;
  whatsappMessage: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<null | ServiceItem>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const services: ServiceItem[] = [
    {
      title: "Consulta Astrológica (Carta Natal y Revolución Solar)",
      description: "Mapas natales, tránsitos para comprender tu propósito en diferentes áreas.",
      icon: <Moon className="text-gold" />,
      tagline: "Entiende tus ciclos vitales y el momento exacto que estás atravesando.",
      fullDescription: "Analizo tu mapa astral y los tránsitos planetarios actuales para identificar tus fortalezas innatas, comprender los patrones que se repiten y prever los momentos más favorables para tu desarrollo personal, laboral y afectivo.",
      modalidad: "Presencial en Fuenlabrada y Madrid u Online desde cualquier parte del mundo.",
      idealPara: "Superar la incertidumbre laboral, tomar decisiones importantes o entender momentos de crisis.",
      buttonText: "AGENDAR CONSULTA AHORA",
      whatsappMessage: "Hola Martha, me gustaría agendar una Consulta Astrológica (Carta Natal y Revolución Solar)"
    },
    {
      title: "Tarot Terapéutico",
      description: "Lecturas enfocadas en el crecimiento personal y claridad mental.",
      icon: <Star className="text-gold" />,
      introParagraphs: [
        "Cuando atravesamos etapas de confusión, bloqueo o dilemas en nuestras relaciones y trabajo, el mayor problema no es solo la falta de respuestas, sino el exceso de ruido mental.",
        "El Tarot Terapéutico y Evolutivo es una potente herramienta de introspección y orientación psicológica que funciona como un espejo de tu momento actual.",
        "Te permite ver con claridad la raíz inconsciente de lo que estás viviendo, identificar qué te está frenando y descubrir las opciones reales que tienes para avanzar."
      ],
      benefitsTitle: "¿En qué te ayuda esta consulta?",
      benefits: [
        {
          title: "Claridad en momentos de duda",
          desc: "Aporta luz frente a decisiones complejas en la pareja, la familia o tu carrera profesional."
        },
        {
          title: "Identificación de patrones",
          desc: "Descubre por qué se repiten ciertas situaciones en tu vida y cómo romper esos ciclos."
        },
        {
          title: "Toma de decisiones con serenidad",
          desc: "Pasa de la parálisis y la ansiedad a la acción consciente y enfocada."
        }
      ],
      stepsTitle: "¿Cómo es la sesión?",
      steps: [
        {
          title: "Escucha y enfoque inicial",
          desc: "Definimos las áreas o preguntas concretas que necesitas abordar en tu presente."
        },
        {
          title: "Lectura e interpretación",
          desc: "Analizamos la arquitectura de las cartas para traducir el mensaje inconsciente de tu situación actual."
        },
        {
          title: "Plan de acción y perspectiva",
          desc: "Salir de la consulta no con miedos, sino con respuestas claras, calma interior y un mapa práctico para tu día a día."
        }
      ],
      modalidad: "Presencial en Fuenlabrada, Madrid u Online desde cualquier parte del mundo.",
      duracion: "1 hora",
      buttonText: "AGENDA AHORA TU CONSULTA",
      whatsappMessage: "Hola Martha, me gustaría agendar una consulta de Tarot Terapéutico"
    },
    {
      title: "Reiki & Energía",
      description: "Canalización de energía para sanación física y espiritual",
      icon: <Sun className="text-gold" />,
      introParagraphs: [
        "Libera la tensión acumulada, reduce el estrés y recupera tu paz interior desde la comodidad de tu hogar.",
        "El Reiki Usui a Distancia es una técnica de canalización de energía vital que no requiere presencia física, ya que la energía traspasa las barreras del tiempo y del espacio.",
        "Es la solución ideal si buscas restablecer tu equilibrio, liberar sobrecargas emocionales y calma mental sin necesidad de desplazarte.",
        "Como Maestra de Reiki Usui, canalizo la energía para trabajar sobre tus centros energéticos, ayudándote a soltar bloqueos profundos, calmar el sistema nervioso y restaurar tu vitalidad de forma suave, profunda y totalmente segura."
      ],
      benefitsTitle: "¿En qué te ayuda esta sesión?",
      benefits: [
        {
          title: "Reducción del estrés y la ansiedad",
          desc: "Calma la tensión acumulada y promueve un estado de relajación profunda."
        },
        {
          title: "Desbloqueo y equilibrio emocional",
          desc: "Libera cargas, sobrepensamiento y bloqueos que afectan tu día a día."
        },
        {
          title: "Descanso y recuperación",
          desc: "Mejora la calidad del sueño y ayuda a combatir el agotamiento físico y mental."
        },
        {
          title: "Bienestar desde casa",
          desc: "Recibe todo el beneficio del tratamiento en tu propio espacio de paz y sin desplazamientos."
        }
      ],
      stepsTitle: "¿Cómo funciona la sesión a distancia?",
      steps: [
        {
          title: "Conexión previa",
          desc: "Coordinamos la cita por WhatsApp y fijamos la hora de la sesión. Conversamos brevemente para conocer tus necesidades o lo que deseas trabajar."
        },
        {
          title: "Canalización energética",
          desc: "A la hora acordada, te recuestas cómodamente en un lugar tranquilo de tu hogar mientras realizo la canalización de Reiki a distancia enfocada en tu armonización."
        },
        {
          title: "Cierre y sensaciones",
          desc: "Al finalizar, nos conectamos nuevamente por mensaje o nota de voz para compartir impresiones, sensaciones y recomendaciones para tu integración."
        }
      ],
      modalidad: "100% Online",
      duracion: "Sesión individual personalizada",
      buttonText: "AGENDA AHORA TU CONSULTA",
      whatsappMessage: "Hola Martha, me gustaría agendar una sesión de Reiki a Distancia"
    },
    {
      title: "Constelación familiar y movimiento sistémico",
      description: "Sana vínculos ancestrales y libera patrones generacionales.",
      icon: <Users className="text-gold" />,
      tagline: "Libera lealtades invisibles, sana vínculos y recupera tu lugar en la vida",
      introParagraphs: [
        "Las Constelaciones Familiares y el Movimiento Sistémico en sesión individual permiten observar, comprender y reordenar las dinámicas inconscientes que heredamos de nuestro sistema familiar.",
        "En muchas ocasiones, los bloqueos repetitivos en el dinero, las parejas, la salud o la vocación no empiezan en ti, sino en historias no resueltas de tu linaje.",
        "A través de esta mirada sistémica y sin necesidad de exposiciones grupales, identificamos con sensibilidad y rigor qué cargas emocionales estás sosteniendo por lealtad a tu familia para que puedas soltarlas, sanar tus relaciones y tomar la fuerza necesaria para avanzar hacia tus propios objetivos."
      ],
      benefitsTitle: "¿En qué te ayuda esta consulta?",
      benefits: [
        {
          title: "Identificación de patrones repetitivos",
          desc: "Comprende la raíz de conflictos recurrentes en tu vida (relaciones de pareja, estancamiento económico o laboral)."
        },
        {
          title: "Sanación de vínculos",
          desc: "Restablece el orden y la armonía en tus relaciones familiares y personales sin necesidad de confrontaciones directas."
        },
        {
          title: "Liberación de cargas ajenas",
          desc: "Deja de cargar con duelos no procesados, culpas o responsabilidades que pertenecen a tus antepasados."
        },
        {
          title: "Toma de fuerza personal",
          desc: "Ocupa tu lugar legítimo en la vida para tomar tus decisiones desde la madurez, el respeto y la libertad."
        }
      ],
      stepsTitle: "¿Cómo es la sesión individual?",
      steps: [
        {
          title: "Entrevista y enfoque",
          desc: "Identificamos el asunto concreto o el bloqueo actual sobre el que necesitas poner claridad."
        },
        {
          title: "Despliegue y movimiento sistémico",
          desc: "Utilizando anclajes de trabajo o representación simbólica, visibilizamos las dinámicas ocultas y el origen del desequilibrio en tu sistema."
        },
        {
          title: "Frases reparadoras e integración",
          desc: "Aplicamos movimientos de ordenamiento para devolver a cada miembro su lugar y responsabilidad, permitiéndote cerrar la sesión con una sensación real de alivio y dirección."
        }
      ],
      modalidad: "Presencial en Fuenlabrada y Madrid u Online desde cualquier parte del mundo.",
      duracion: "Sesión individual personalizada",
      buttonText: "AGENDA AHORA TU CONSULTA",
      whatsappMessage: "Hola Martha, me gustaría agendar una sesión de Constelación Familiar y Movimiento Sistémico"
    },
    {
      title: "Ayuda Psicoemocional",
      description: "Sesiones de apoyo para transitar procesos de cambio y crisis.",
      icon: <Heart className="text-gold" />,
      introParagraphs: [
        "El Acompañamiento Psicoemocional es un espacio de contención, escucha activa y apoyo terapéutico libre de juicios.",
        "A lo largo de la vida atravesamos etapas de reestructuración, duelos, rupturas o momentos de alta exigencia donde la carga emocional resulta difícil de gestionar en soledad.",
        "A través de esta atención directa y personalizada, te ofrezco un refugio seguro para procesar lo que estás sintiendo, disipar la sobrecarga mental y desarrollar herramientas prácticas que te permitan afrontar las crisis vitales con serenidad, resiliencia y claridad."
      ],
      benefitsTitle: "¿En qué te ayuda esta consulta?",
      benefits: [
        {
          title: "Gestión de momentos de crisis",
          desc: "Encuentra calma y perspectiva en etapas de incertidumbre, rupturas sentimentales o transiciones laborales."
        },
        {
          title: "Procesamiento de duelos y pérdidas",
          desc: "Transita los procesos de dolor emocional con contención humana, respeto y el tiempo que necesitas."
        },
        {
          title: "Desahogo y claridad mental",
          desc: "Suelta la sobrecarga emocional en un entorno 100% confidencial donde expresarte con total libertad."
        },
        {
          title: "Fortalecimiento de recursos propios",
          desc: "Aprende a gestionar la ansiedad, poner límites saludables y reconstruir tu confianza personal."
        }
      ],
      stepsTitle: "¿Cómo es el proceso de acompañamiento?",
      steps: [
        {
          title: "Escucha y valoración",
          desc: "Identifico la situación actual que está generando malestar o desequilibrio en tu día a día."
        },
        {
          title: "Espacio de procesamiento",
          desc: "Trabajo en la comprensión de tus emociones, identificando los detonantes del estrés o la tristeza."
        },
        {
          title: "Pautas e integración",
          desc: "Elaborare estrategias realistas para que apliques en tu rutina, recuperando paulatinamente el control y el bienestar."
        }
      ],
      modalidad: "Online desde cualquier parte del mundo.",
      duracion: "Sesiones individuales continuadas",
      buttonText: "AGENDA AHORA TU CONSULTA",
      whatsappMessage: "Hola Martha, me gustaría agendar una sesión de Acompañamiento Psicoemocional"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Servicios y Consultas</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Herramientas y sesiones personalizadas diseñadas para brindarte las respuestas, la claridad y el equilibrio que buscas hoy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(service)}
              className="p-8 rounded-2xl bg-cream border border-lavender hover:shadow-xl hover:shadow-lavender/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-accent leading-snug">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
                className="inline-flex items-center text-sm font-semibold text-gold-dark hover:text-accent transition-colors pt-2 text-left"
              >
                Saber más <ChevronRight size={16} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-3xl shadow-2xl border border-gold/30 max-w-xl w-full p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-gold/30 flex items-center justify-center">
                  {selectedService.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                  Información del Servicio
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-accent mb-3 leading-snug">
                {selectedService.title}
              </h3>

              {selectedService.tagline && (
                <p className="text-base sm:text-lg font-serif italic text-gold-dark mb-4 leading-snug">
                  {selectedService.tagline}
                </p>
              )}

              {selectedService.introParagraphs ? (
                <div className="space-y-3 mb-6">
                  {selectedService.introParagraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : selectedService.fullDescription ? (
                <p className="text-neutral-600 leading-relaxed mb-6 text-sm sm:text-base">
                  {selectedService.fullDescription}
                </p>
              ) : null}

              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div className="my-6">
                  <h4 className="font-serif text-lg font-bold text-accent mb-3 flex items-center">
                    <Sparkles size={18} className="text-gold mr-2 flex-shrink-0" />
                    {selectedService.benefitsTitle || "¿En qué te ayuda esta consulta?"}
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.benefits.map((b, i) => (
                      <div key={i} className="bg-cream/60 p-3.5 rounded-xl border border-lavender/60 text-sm leading-relaxed">
                        <strong className="text-accent font-semibold block sm:inline">{b.title}: </strong>
                        <span className="text-neutral-600">{b.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.steps && selectedService.steps.length > 0 && (
                <div className="my-6">
                  <h4 className="font-serif text-lg font-bold text-accent mb-3 flex items-center">
                    <Star size={18} className="text-gold mr-2 flex-shrink-0" />
                    {selectedService.stepsTitle || "¿Cómo es la sesión?"}
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.steps.map((s, i) => (
                      <div key={i} className="flex items-start bg-cream/60 p-3.5 rounded-xl border border-lavender/60 text-sm leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark font-bold text-xs flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <strong className="text-accent font-semibold">{s.title}: </strong>
                          <span className="text-neutral-600">{s.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 my-6 bg-cream/70 border border-lavender p-4 rounded-2xl">
                {selectedService.modalidad && (
                  <div className="flex items-start space-x-3 text-sm">
                    <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-accent">Modalidad:</strong>{" "}
                      <span className="text-neutral-600">{selectedService.modalidad}</span>
                    </div>
                  </div>
                )}
                {selectedService.duracion && (
                  <div className="flex items-start space-x-3 text-sm">
                    <Clock size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-accent">Duración:</strong>{" "}
                      <span className="text-neutral-600">{selectedService.duracion}</span>
                    </div>
                  </div>
                )}
                {selectedService.idealPara && (
                  <div className="flex items-start space-x-3 text-sm">
                    <Sparkles size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-accent">Ideal para:</strong>{" "}
                      <span className="text-neutral-600">{selectedService.idealPara}</span>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/34722377094?text=${encodeURIComponent(selectedService.whatsappMessage || "Hola Martha, me gustaría agendar una consulta")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-center block shadow-lg shadow-[#25D366]/25 transition-all uppercase tracking-wide text-sm sm:text-base mt-6"
              >
                {selectedService.buttonText || "AGENDAR CONSULTA AHORA"}
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Trajectory = () => {
  const certifications = [
    { year: "2000", title: "Estudio del Tarot y Simbología Evolutiva" },
    { year: "2009", title: "Curso Superior de Astrología" },
    { year: "2010", title: "Máster en Reiki Usui" },
    { year: "2011", title: "Formación en Constelaciones Familiares" },
    { year: "2015", title: "Acompañamiento Psicoemocional y Desarrollo Personal" }
  ];

  return (
    <section id="trayectoria" className="py-24 bg-cream bg-texture border-y border-lavender">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-block py-1.5 px-4 rounded-full bg-lavender text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              30 años acompañando procesos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6" id="sobre-mi">Quién Soy & Trayectoria</h2>
            
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>
                Hay una vocación que nació en mi infancia y que, con el paso de los años, se convirtió en mi profesión y en mi compromiso de vida.
              </p>
              <p>
                Cuento con más de 30 años de experiencia real acompañando a personas que llegan a mi consulta en momentos de incertidumbre, buscando comprender qué está fallando en su presente y cómo recuperar su equilibrio interior.
              </p>
              <p>
                Si te sientes en un laberinto, atravesando una crisis personal, con dudas en tu carrera o atrapada en patrones que se repiten una y otra vez, quiero que sepas que no tienes que transitar este proceso a ciegas.
              </p>
              <p>
                Mi trabajo consiste en poner a tu disposición tres décadas de estudio para ofrecerte un espacio seguro, una escucha sin juicios y un mapa claro de acción.
              </p>
            </div>
          </div>

          <div className="relative pt-2 md:pt-4">
            <div className="space-y-0 relative border-l-2 border-gold/30 pl-8 ml-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={cert.year + cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="mb-8 last:mb-0 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gold border-4 border-cream shadow-sm" />
                  <span className="text-xs font-bold text-gold-dark tracking-widest uppercase mb-1 block">
                    {cert.year}
                  </span>
                  <h3 className="text-xl font-serif text-accent">{cert.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Cuadro de Compromiso, Ética y Confidencialidad Centrado al Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 bg-white/95 rounded-2xl shadow-lg border border-gold/30 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 backdrop-blur-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center border border-gold/30 shadow-sm flex-shrink-0 mt-1">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl mb-2 text-accent font-semibold">
              Compromiso, ética y confidencialidad
            </h4>
            <div className="space-y-3 text-neutral-700 leading-relaxed text-base sm:text-lg italic font-serif">
              <p>
                Cada consulta es un espacio seguro, confidencial y libre de juicios, donde puedes expresarte con total libertad. Mi compromiso es acompañarte desde el respeto absoluto, sin dogmas ni condicionamientos, aportándote claridad realista para que tomes tus propias decisiones.
              </p>
              <p>
                Esta misma discreción y rigor profesional es lo que ha llevado a que mi consulta se sostenga, durante más de 30 años, gracias a la recomendación directa. A lo largo de estas tres décadas, he tenido el honor de guiar a personas de muy diversos ámbitos desde quienes buscan respuestas en su vida cotidiana hasta ejecutivos, profesionales de alta responsabilidad y personalidades públicas, que eligen este espacio por su privacidad, madurez y precisión.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 uppercase tracking-wide">Toma el control de tu vida</h2>
            <p className="text-neutral-600 text-lg mb-12 max-w-lg leading-relaxed">
              ¿Sientes que tu relación se estancó o que tu carrera no avanza por más que lo intentas? A través de la astrología identificaremos tus bloqueos y trazaremos la ruta hacia el éxito que mereces.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, text: "astrologamarthaarnone@gmail.com", label: "Email", href: "mailto:astrologamarthaarnone@gmail.com" },
                { icon: <Phone />, text: "+34 722 37 70 94", label: "WhatsApp", href: "https://wa.me/34722377094" },
                { icon: <MapPin />, text: "Fuenlabrada, Madrid y Online", label: "Ubicación", href: "#" }
              ].map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center text-accent group-hover:bg-gold transition-colors duration-300 group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase font-bold tracking-widest">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-gold transition-colors">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream border border-lavender p-8 md:p-12 rounded-3xl shadow-xl shadow-lavender/20 flex flex-col items-center text-center justify-center relative overflow-hidden"
          >
            <div className="w-20 h-20 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-6 shadow-sm">
              <MessageSquare size={38} className="fill-[#25D366]/20" />
            </div>

            <h3 className="text-3xl font-serif text-accent mb-4">
              Atención Directa por WhatsApp
            </h3>

            <p className="text-neutral-600 leading-relaxed mb-8 max-w-lg text-left bg-white/75 p-5 rounded-2xl border border-lavender/70 shadow-sm">
              <span className="block font-semibold text-accent text-base mb-3 text-center sm:text-left">
                ¿Cómo funciona el proceso?
              </span>
              <span className="block space-y-2.5 text-sm text-neutral-600">
                <span className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark font-bold text-xs flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0">1</span>
                  <span>Pulsas el botón de WhatsApp.</span>
                </span>
                <span className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark font-bold text-xs flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0">2</span>
                  <span>Me indicas brevemente qué consulta necesitas (Carta Natal, Revolución Solar, Tarot o Reiki).</span>
                </span>
                <span className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark font-bold text-xs flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0">3</span>
                  <span>Elegimos juntos el día y la hora que mejor se adapte a tu agenda.</span>
                </span>
              </span>
            </p>

            <motion.a 
              href="https://wa.me/34722377094?text=Hola%20Martha,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-lg shadow-xl shadow-[#25D366]/25 flex items-center justify-center space-x-3 transition-colors tracking-wide"
            >
              <MessageSquare size={22} className="flex-shrink-0" />
              <span>AGENDA AHORA TU CONSULTA</span>
            </motion.a>

            <div className="mt-8 pt-8 border-t border-lavender/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-500 font-medium w-full">
              <div className="flex items-center justify-center space-x-1.5">
                <Sparkles size={15} className="text-gold flex-shrink-0" />
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center justify-center space-x-1.5">
                <Heart size={15} className="text-gold flex-shrink-0" />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center justify-center space-x-1.5">
                <Star size={15} className="text-gold flex-shrink-0" />
                <span>Citas flexibles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-3xl font-serif font-bold tracking-wider mb-8 md:mb-0">
            MARTHA <span className="text-gold">ASTROLOGA</span>
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="https://www.instagram.com/martha_astrologa/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
            <a href="https://www.facebook.com/marthaastrologa" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
            <a href="https://www.youtube.com/channel/UCtnPXihxA99LCBTH8UWx_-Q" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Youtube</a>
          </div>
        </div>
        
        <div className="h-[1px] bg-white/10 w-full mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/50 text-xs tracking-widest uppercase font-semibold">
          <p>© 2026 Martha Guía Espiritual. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/34722377094"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    >
      <MessageSquare size={28} />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-gold"></span>
      </span>
    </motion.a>
  );
};

interface StarParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  alpha: number;
  decay: number;
  color: string;
  isDiamond: boolean;
}

const CELESTIAL_COLORS = [
  "#D4AF37", // Gold
  "#F5DF88", // Soft luminous gold
  "#FFF9E6", // Starlight cream
  "#FFFFFF", // Cosmic pure white
  "#E6D5F7", // Celestial lavender
  "#E8C15A"  // Warm stardust
];

const CelestialStarSparkles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let particles: StarParticle[] = [];
    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const spawnStar = (x: number, y: number, isButton: boolean) => {
      if (particles.length > 55) return;
      const color = CELESTIAL_COLORS[Math.floor(Math.random() * CELESTIAL_COLORS.length)];
      const size = isButton ? Math.random() * 5 + 3.5 : Math.random() * 3.5 + 2;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.1 + 0.3;

      particles.push({
        x: x + (Math.random() - 0.5) * 14,
        y: y + (Math.random() - 0.5) * 14,
        vx: Math.cos(angle) * speed * (isButton ? 1.3 : 0.7),
        vy: Math.sin(angle) * speed * (isButton ? 1.3 : 0.7) - 0.55, // Gentle upward cosmic drift
        size,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        alpha: 1,
        decay: Math.random() * 0.02 + (isButton ? 0.016 : 0.024),
        color,
        isDiamond: Math.random() > 0.32
      });

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      
      // Throttle movement slightly for silky smooth performance
      if (now - lastTime < 28 && dist < 10) return;
      lastTime = now;
      lastX = e.clientX;
      lastY = e.clientY;

      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!target) return;

      const isButton = !!target.closest("button, a, [role='button'], input, select, .cursor-pointer");
      const isText = !!target.closest("h1, h2, h3, h4, p, span, li, blockquote, label");

      if (isButton) {
        // Sparkle stardust burst when moving over buttons/interactive items
        const count = Math.random() > 0.35 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          spawnStar(e.clientX, e.clientY, true);
        }
      } else if (isText) {
        // Subtle stars when skimming over text
        if (Math.random() > 0.3) {
          spawnStar(e.clientX, e.clientY, false);
        }
      }
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isButton = !!target.closest("button, a, [role='button']");
      if (isButton) {
        // Burst of cosmic stars upon entering a button
        for (let i = 0; i < 4; i++) {
          spawnStar(e.clientX, e.clientY, true);
        }
      }
    };

    const drawDiamondStar = (p: StarParticle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, p.alpha);

      // Celestial halo glow
      ctx.shadowColor = p.color;
      ctx.shadowBlur = p.size * 2.2;
      ctx.fillStyle = p.color;

      if (p.isDiamond) {
        // 4-pointed starlight sparkle (✦)
        const outer = p.size;
        const inner = p.size * 0.22;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const r = i % 2 === 0 ? outer : inner;
          const a = (i * Math.PI) / 4;
          const px = Math.cos(a) * r;
          const py = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();

        // Radiant white core
        ctx.beginPath();
        ctx.arc(0, 0, inner * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
      } else {
        // Soft glowing celestial starlight sphere
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          drawDiamondStar(p);
        }
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = null;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[99999]"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold/30">
      <CelestialStarSparkles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
