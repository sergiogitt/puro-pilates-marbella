import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import meditationImage from '@/assets/meditation.jpg';

const About = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  const values = [
    {
      title: 'Mindfulness',
      description: 'Cultiva la conciencia y la presencia en cada respiración y movimiento.',
    },
    {
      title: 'Comunidad',
      description: 'Forma parte de un espacio de apoyo donde todos pertenecen y crecen juntos.',
    },
    {
      title: 'Equilibrio',
      description: 'Armoniza cuerpo, mente y espíritu a través de una práctica holística.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen */}
          <div className={`relative ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={meditationImage}
                alt="Meditación y tranquilidad"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
            </div>
            {/* Tarjeta flotante */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-background rounded-xl p-6 shadow-lg animate-float">
              <p className="text-3xl font-serif text-primary mb-1">15+</p>
              <p className="text-sm font-sans text-muted-foreground">
                Años de experiencia
              </p>
            </div>
          </div>

          {/* Contenido */}
          <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
              Nuestra filosofía
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Donde la tranquilidad
              <span className="text-primary block">se encuentra con el movimiento</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              En Puro Pilates creemos que el yoga es mucho más que ejercicio físico:
              es un viaje hacia el interior. Nuestro estudio ofrece un santuario donde
              puedes desconectar del caos de la vida diaria y reconectar con tu verdadero ser.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Tanto si estás haciendo tu primer perro boca abajo como si llevas décadas
              practicando, nuestros instructores experimentados te acompañan exactamente
              desde donde te encuentras, guiándote con paciencia, sabiduría y compasión.
            </p>

            {/* Valores */}
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
