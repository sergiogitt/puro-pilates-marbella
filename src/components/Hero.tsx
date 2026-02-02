import { Button } from './ui/button';
import heroImage from '@/assets/hero-yoga.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estudio de yoga sereno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Animación de círculos respirando */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 animate-breathing blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-accent/10 animate-breathing animation-delay-300 blur-2xl" />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block opacity-0 animate-fade-up text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Bienvenido a Puro Pilates
          </span>
          
          <h1 className="opacity-0 animate-fade-up animation-delay-200 text-5xl md:text-7xl font-serif font-light text-foreground leading-tight mb-6">
            Encuentra tu equilibrio
            <span className="block text-primary font-medium">interior</span>
          </h1>
          
          <p className="opacity-0 animate-fade-up animation-delay-400 text-lg md:text-xl font-sans text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Descubre paz, fuerza y armonía a través de una práctica de yoga consciente
            en nuestro tranquilo espacio.
          </p>
          
          <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Comienza tu camino
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver horarios
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-800">
        <div className="flex flex-col items-center gap-2">
        </div>
      </div>
    </section>
  );
};

export default Hero;
