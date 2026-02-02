import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { Button } from './ui/button';
import yogaClassImage from '@/assets/yoga-class.webp';

interface YogaClass {
  name: string;
  level: string;
  duration: string;
  description: string;
}

const Classes = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.15 });

  const classes: YogaClass[] = [
    {
      name: 'Flujo Suave',
      level: 'Principiante',
      duration: '60 min',
      description:
        'Una práctica calmada centrada en la respiración y estiramientos suaves. Perfecta para principiantes o para quienes buscan restauración.',
    },
    {
      name: 'Flujo Vinyasa',
      level: 'Todos los niveles',
      duration: '75 min',
      description:
        'Secuencias dinámicas que conectan respiración y movimiento. Desarrolla fuerza, flexibilidad y resistencia.',
    },
    {
      name: 'Yoga Power',
      level: 'Intermedio',
      duration: '60 min',
      description:
        'Un enfoque vigoroso y orientado al fitness del yoga estilo vinyasa. Desafíate física y mentalmente.',
    },
    {
      name: 'Yoga Yin',
      level: 'Todos los niveles',
      duration: '90 min',
      description:
        'Estiramientos profundos con posturas mantenidas durante más tiempo, dirigidas a los tejidos conectivos. Cultiva la quietud y la paciencia.',
    },
    {
      name: 'Restaurativo',
      level: 'Todos los niveles',
      duration: '75 min',
      description:
        'Práctica profundamente relajante que utiliza soportes para un apoyo completo. Libera tensión y restaura el equilibrio.',
    },
    {
      name: 'Meditación',
      level: 'Todos los niveles',
      duration: '45 min',
      description:
        'Sesiones de meditación guiada para calmar la mente y cultivar paz interior y claridad.',
    },
  ];

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
            Nuestra oferta
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Encuentra tu práctica
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Desde flujos suaves hasta secuencias intensas, descubre una clase que conecte con tu cuerpo y tu alma.
          </p>
        </div>

        {/* Grid de clases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {classes.map((yogaClass, index) => (
            <div
              key={yogaClass.name}
              className={`group glass-card rounded-2xl p-8 hover-lift ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                  {yogaClass.name}
                </h3>
                <span className="text-xs font-sans bg-muted px-3 py-1 rounded-full text-muted-foreground">
                  {yogaClass.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-sans mb-4 leading-relaxed">
                {yogaClass.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-sans text-primary">
                  {yogaClass.duration}
                </span>
                <span className="text-sm font-sans text-muted-foreground group-hover:text-accent transition-colors cursor-pointer">
                  Saber más →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen destacada */}
        <div
          className={`relative rounded-2xl overflow-hidden ${
            isVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0'
          }`}
        >
          <img
            src={yogaClassImage}
            alt="Clase de yoga en sesión"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-4">
                Primera clase gratis
              </h3>
              <p className="text-primary-foreground/80 font-sans mb-6">
                Vive la experiencia Puro Pilates. Tu primera clase corre por nuestra cuenta, sin compromiso.
              </p>
              <Button variant="accent" size="lg">
                Reserva tu clase gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
