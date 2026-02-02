import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { Button } from './ui/button';
import yogaClassImage from '@/assets/yoga-class.jpg';

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
      name: 'Gentle Flow',
      level: 'Beginner',
      duration: '60 min',
      description: 'A calming practice focusing on breath and gentle stretches. Perfect for beginners or those seeking restoration.',
    },
    {
      name: 'Vinyasa Flow',
      level: 'All Levels',
      duration: '75 min',
      description: 'Dynamic sequences linking breath to movement. Build strength, flexibility, and endurance.',
    },
    {
      name: 'Power Yoga',
      level: 'Intermediate',
      duration: '60 min',
      description: 'A vigorous, fitness-based approach to vinyasa-style yoga. Challenge yourself physically and mentally.',
    },
    {
      name: 'Yin Yoga',
      level: 'All Levels',
      duration: '90 min',
      description: 'Deep stretching with longer holds targeting connective tissues. Cultivate stillness and patience.',
    },
    {
      name: 'Restorative',
      level: 'All Levels',
      duration: '75 min',
      description: 'Deeply relaxing practice using props for full support. Release tension and restore balance.',
    },
    {
      name: 'Meditation',
      level: 'All Levels',
      duration: '45 min',
      description: 'Guided meditation sessions to quiet the mind and cultivate inner peace and clarity.',
    },
  ];

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Find Your Practice
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            From gentle flows to powerful sequences, discover a class that resonates with your body and soul.
          </p>
        </div>

        {/* Classes Grid */}
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
                <span className="text-sm font-sans text-primary">{yogaClass.duration}</span>
                <span className="text-sm font-sans text-muted-foreground group-hover:text-accent transition-colors cursor-pointer">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className={`relative rounded-2xl overflow-hidden ${isVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0'}`}>
          <img
            src={yogaClassImage}
            alt="Yoga class in session"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-4">
                First Class Free
              </h3>
              <p className="text-primary-foreground/80 font-sans mb-6">
                Experience the Serenity difference. Your first class is on us—no commitment required.
              </p>
              <Button variant="accent" size="lg">
                Claim Your Free Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
