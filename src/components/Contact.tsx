import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Avenida Juan Vargas, San Pedro de Alcántara Marbella',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '644059931',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'puropilates@hotmail.es',
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'De lunes a viernes de 10:00 a 20:00',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
              Contacta con nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Comienza tu camino
              <span className="text-primary block">hoy</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              ¿Listo para transformar tu práctica? Nos encantará saber de ti.
              Ven al estudio, llámanos o envíanos un mensaje.
            </p>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex items-start gap-4 ${
                    isVisible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-sans text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-sans text-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Enviar un mensaje
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-sans text-muted-foreground mb-2 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans"
                      placeholder="Maria"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-sans text-muted-foreground mb-2 block">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans"
                      placeholder="Lopez"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-sans text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans"
                    placeholder="maria.lopez@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-sans text-muted-foreground mb-2 block">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans resize-none"
                    placeholder="Estoy interesado en..."
                  />
                </div>
                <Button variant="hero" size="xl" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
