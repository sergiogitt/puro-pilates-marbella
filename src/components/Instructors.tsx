import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

interface Instructor {
  name: string;
  specialty: string;
  bio: string;
  years: number;
}

const Instructors = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  const instructors: Instructor[] = [
    {
      name: 'Maria Gomez',
      specialty: 'Vinyasa y Meditación',
      bio: 'Con formación en danza y 12 años de práctica de yoga, Maria aporta fluidez y atención plena a cada clase.',
      years: 12,
    },
    {
      name: 'Juan Rivera',
      specialty: 'Power Yoga y Ashtanga',
      bio: 'Exatleta, Juan descubrió el yoga como método de recuperación y ahora ayuda a otros a desarrollar fuerza con intención.',
      years: 8,
    },
    {
      name: 'Laura Mesa',
      specialty: 'Yin y Restaurativo',
      bio: 'Laura se especializa en prácticas terapéuticas, creando un espacio para la sanación profunda y la relajación.',
      years: 15,
    },
  ];

  return (
    <section
      id="instructors"
      ref={sectionRef}
      className="py-24 md:py-32 bg-sage-light"
    >
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
            Conoce a nuestro equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Guiados por la experiencia
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Nuestros instructores certificados aportan décadas de experiencia combinada,
            cada uno con sus dones y especialidades únicas.
          </p>
        </div>

        {/* Grid de instructores */}
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className={`group text-center ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Avatar */}
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif text-primary/30">
                    {instructor.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                {instructor.name}
              </h3>
              <p className="text-sm font-sans text-accent mb-3">
                {instructor.specialty}
              </p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 max-w-xs mx-auto">
                {instructor.bio}
              </p>
              <span className="inline-block text-xs font-sans bg-background px-4 py-2 rounded-full text-muted-foreground">
                {instructor.years}+ años de experiencia
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
