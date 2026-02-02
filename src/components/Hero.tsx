import { Button } from './ui/button';
import heroImage from '@/assets/hero-yoga.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Serene yoga studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Breathing Circle Animation */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 animate-breathing blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-accent/10 animate-breathing animation-delay-300 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block opacity-0 animate-fade-up text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Welcome to Serenity
          </span>
          
          <h1 className="opacity-0 animate-fade-up animation-delay-200 text-5xl md:text-7xl font-serif font-light text-foreground leading-tight mb-6">
            Find Your Inner
            <span className="block text-primary font-medium">Balance</span>
          </h1>
          
          <p className="opacity-0 animate-fade-up animation-delay-400 text-lg md:text-xl font-sans text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Discover peace, strength, and harmony through mindful yoga practice 
            in our tranquil studio space.
          </p>
          
          <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Journey
            </Button>
            <Button variant="heroOutline" size="xl">
              View Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-800">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent animate-gentle-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
