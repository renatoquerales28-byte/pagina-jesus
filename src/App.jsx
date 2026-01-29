import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  Gavel,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  Globe,
  Car,
  PenTool,
  Home,
  FileCheck,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Inyectamos la fuente Open Sans
const FontStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
      body, .font-sans { font-family: 'Open Sans', sans-serif; }
      h1, h2, h3, h4, h5, h6 { font-family: 'Open Sans', sans-serif; }
    `}
  </style>
);

// Animación de aparición (Fade Up)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Animación staggered para listas
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Componente de Navegación
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Trámites', href: '#tramites' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/70 backdrop-blur-md py-4 shadow-lg'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-widest uppercase leading-none">
                Díaz Henrique
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1">
                Escritorio Jurídico
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-950 px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-gray-200 transition-all"
            >
              Consulta Gratuita
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute w-full bg-slate-950 border-t border-white/10 shadow-2xl"
        >
          <div className="px-4 pt-8 pb-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-lg font-medium text-gray-300 hover:text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-white text-slate-950 px-8 py-3 rounded-sm font-bold uppercase tracking-wide"
            >
              Consulta Gratuita
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Componente Hero (Oscuro - Mantenemos impacto)
const Hero = () => {
  return (
    <div id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Image Darkened - Parallax sutil */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 opacity-10"
      >
        <img
          src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Firma Legal"
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      {/* Overlay Sólido */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <div className="h-1 w-20 bg-white opacity-50"></div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">
            Abogado Jesús Díaz
          </motion.h2>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white tracking-tight">
            TRÁMITES LEGALES <br />
            <span className="text-gray-400 font-light">RÁPIDOS Y EFECTIVOS</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Especialistas en documentación y asesoría jurídica integral. Gestionamos sus documentos con la seriedad y elegancia que usted merece.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="bg-white text-slate-950 hover:bg-gray-200 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#tramites"
              className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-slate-950 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all"
            >
              Ver Servicios
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Componente de Estadísticas (Transición - Fondo Oscuro)
const Stats = () => {
  const stats = [
    { number: "10+", label: "Años de Experiencia" },
    { number: "500+", label: "Trámites Exitosos" },
    { number: "24/7", label: "Disponibilidad" }
  ];

  return (
    <div className="bg-slate-950 py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {stats.map((stat, index) => (
            <motion.div variants={staggerItem} key={index} className="text-center pt-8 md:pt-0">
              <p className="text-4xl md:text-5xl font-light text-white mb-2">{stat.number}</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Componente de Trámites Legales (FONDO BLANCO - Variación)
const LegalServices = () => {
  const [selectedId, setSelectedId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Carta Consular",
      icon: <Globe className="w-8 h-8" />,
      description: "Gestión integral para la legalización y apostilla de documentos ante el Ministerio de Relaciones Exteriores. Facilitamos sus trámites migratorios y de extranjería asegurando la validez internacional de su documentación."
    },
    {
      id: 2,
      title: "Poderes",
      icon: <PenTool className="w-8 h-8" />,
      description: "Redacción y notariado de poderes generales y especiales. Brindamos asesoría experta para el otorgamiento de mandatos, garantizando la seguridad jurídica en la representación de sus intereses personales o comerciales."
    },
    {
      id: 3,
      title: "Contratos",
      icon: <Gavel className="w-8 h-8" />,
      description: "Elaboración profesional y blindaje de todo tipo de contratos civiles y mercantiles (compraventas, arrendamientos, sociedades). Protegemos su patrimonio con cláusulas claras que previenen futuros litigios."
    },
    {
      id: 4,
      title: "Registro de Marcas",
      icon: <Shield className="w-8 h-8" />,
      description: "Protección total de su propiedad intelectual. Realizamos búsqueda de antecedentes y gestionamos el registro de sus marcas, lemas y patentes ante el SAPI, garantizando la exclusividad de su activo más valioso."
    },
  ];

  return (
    <section id="tramites" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase">Trámites Legales</h3>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layoutId={service.id}
              onClick={() => setSelectedId(service.id)}
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card blanca con borde sutil */}
              <div className="absolute inset-0 border border-slate-200 rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:border-slate-300 bg-white"></div>
              <div className="relative p-8 flex flex-col items-center text-center h-full hover:bg-slate-50 rounded-xl transition-all">
                <motion.div className="mb-4 text-slate-600 group-hover:text-slate-900 transition-colors">
                  {service.icon}
                </motion.div>
                <motion.h4 className="text-lg font-semibold text-slate-800 tracking-wide mb-2">{service.title}</motion.h4>
                <motion.div className="w-8 h-px bg-slate-200 group-hover:w-16 group-hover:bg-slate-900 transition-all duration-500 mb-4"></motion.div>
                <motion.p className="text-sm text-slate-500 font-light line-clamp-2">
                  Click para ver detalles
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              onClick={() => setSelectedId(null)}
            >
              {services.map(service => (
                service.id === selectedId && (
                  <motion.div
                    key={service.id}
                    layoutId={service.id}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.button
                      className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                      onClick={() => setSelectedId(null)}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>

                    <div className="flex flex-col items-center text-center mb-6">
                      <motion.div className="p-4 bg-slate-50 rounded-full mb-4 text-slate-900">
                        {service.icon}
                      </motion.div>
                      <motion.h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-2">
                        {service.title}
                      </motion.h2>
                      <div className="w-16 h-1 bg-slate-900 rounded-full"></div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-slate-600 text-lg leading-relaxed font-light mb-8"
                    >
                      {service.description}
                    </motion.p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedId(null);
                        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-colors"
                    >
                      Solicitar Servicio
                    </motion.button>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Componente "Por Qué Elegirnos" (FONDO OSCURO - Contraste)
const WhyUs = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative p-4 border border-white/10 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
                alt="Abogado"
                className="relative z-10 w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-white"
          >
            <h2 className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs mb-2">Perfil Profesional</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight uppercase">
              Jesús Díaz Henrique
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
              Dedicación exclusiva y gestión personal. Entendemos la importancia de cada documento. Sin intermediarios innecesarios, sin demoras injustificadas.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Gestión 100% Confidencial",
                "Actualización en Tiempo Real",
                "Transparencia en Honorarios",
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-4"></div>
                  <span className="text-gray-200 font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center pt-6 border-t border-white/10">
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center mr-4 rounded-full">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Abg. Jesús Díaz</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Contacto (Wizard Form - Mejorada UX)
const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const wizardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* Info Column */}
          <motion.div variants={fadeInUp} className="text-slate-900 order-2 lg:order-1">
            <h2 className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">Contacto</h2>
            <h3 className="text-4xl font-bold mb-6 text-slate-900 uppercase">Inicie su Trámite</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">
              Hemos simplificado el proceso para usted. Complete los pasos y nos pondremos en contacto a la brevedad posible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-slate-900 mr-4 mt-1" />
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Correo Electrónico</p>
                  <p className="text-xl font-medium text-slate-900 break-all">abg.jesusadiaz@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-slate-900 mr-4 mt-1" />
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-xl font-medium text-slate-900">Valencia, Carabobo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wizard Form Column */}
          <motion.div variants={fadeInUp} className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-100 order-1 lg:order-2 h-[550px] flex flex-col justify-center relative overflow-hidden">

            {!isSuccess ? (
              <>
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                  <motion.div
                    className="h-full bg-slate-900"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="mb-8 flex justify-between items-end">
                  <span className="text-4xl font-bold text-slate-200">0{step}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {step === 1 ? 'Servicio' : step === 2 ? 'Datos' : 'Mensaje'}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" variants={wizardVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-900 mb-6">¿Qué trámite necesita realizar?</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {['Carta Consular', 'Poderes', 'Contratos', 'Registro de Marcas', 'Otro'].map((item) => (
                          <button
                            key={item}
                            onClick={() => { updateData('service', item); nextStep(); }}
                            className="w-full text-left px-6 py-4 rounded-xl border border-slate-200 text-slate-600 transition-all text-sm font-medium flex justify-between items-center group hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg"
                          >
                            {item}
                            <ChevronRight className="w-4 h-4 transition-transform opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" variants={wizardVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-6">Sus datos de contacto</h4>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nombre Completo</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateData('name', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-900"
                          placeholder="Ej: Juan Pérez"
                          autoFocus
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Teléfono / WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateData('phone', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-900"
                          placeholder="+58 414 1234567"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Correo Electrónico</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateData('email', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-900"
                          placeholder="juan@ejemplo.com"
                        />
                      </div>
                      <div className="flex justify-between pt-4">
                        <button onClick={prevStep} className="text-slate-500 hover:text-slate-900 font-bold text-sm flex items-center px-4 py-2"><ChevronLeft className="w-4 h-4 mr-1" /> Atrás</button>
                        <button
                          onClick={nextStep}
                          disabled={!formData.name || !formData.phone}
                          className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-all"
                        >
                          Siguiente <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" variants={wizardVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-6">Detalles finales</h4>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mensaje o Consulta (Opcional)</label>
                        <textarea
                          rows="4"
                          value={formData.message}
                          onChange={(e) => updateData('message', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all resize-none text-slate-900"
                          placeholder="Describa brevemente su caso..."
                          autoFocus
                        ></textarea>
                      </div>
                      <div className="flex justify-between pt-4 items-center">
                        <button onClick={prevStep} className="text-slate-500 hover:text-slate-900 font-bold text-sm flex items-center px-4 py-2"><ChevronLeft className="w-4 h-4 mr-1" /> Atrás</button>
                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold text-sm shadow-xl hover:bg-slate-800 disabled:opacity-70 flex items-center min-w-[140px] justify-center transition-all"
                        >
                          {isSubmitting ? <span className="animate-pulse">Enviando...</span> : 'ENVIAR SOLICITUD'}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-slate-600 mb-8 max-w-xs mx-auto">Hemos recibido sus datos correctamente. El Abogado Jesús Díaz le contactará en breve.</p>
                <button
                  onClick={() => { setIsSuccess(false); setStep(1); setFormData({ service: '', name: '', phone: '', email: '', message: '' }); }}
                  className="text-slate-500 hover:text-slate-900 font-bold text-sm border-b border-transparent hover:border-slate-900 transition-all pb-1"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer (Oscuro para cerrar)
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-widest uppercase block">
              Díaz Henrique
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-1 block">
              Escritorio Jurídico
            </span>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#tramites" className="hover:text-white transition-colors">Trámites</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; 2024 Abogado Jesús Díaz.</p>
          <p className="mt-2 md:mt-0">Valencia, Venezuela</p>
        </div>
      </div>
    </footer>
  );
};

// Sticky Button WhatsApp (Ancho completo en Móvil)
const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/584144275777"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-0 left-0 w-full z-[9999] md:hidden bg-green-600 text-white py-4 px-6 shadow-2xl flex items-center justify-center gap-3 active:bg-green-700 transition-colors"
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
  >
    <MessageCircle className="w-6 h-6" />
    <span className="font-bold text-base uppercase tracking-widest">Chat en Vivo</span>
  </motion.a>
);

function App() {
  return (
    <>
      <FontStyles />
      <div className="font-sans text-slate-200 antialiased selection:bg-slate-900 selection:text-white scroll-smooth bg-slate-950">
        <Navbar />
        <Hero />
        <Stats />
        <LegalServices />
        <WhyUs />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
