import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import meditationImage from '@/assets/meditation.jpg';

const About = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  const values = [
    {
      title: 'Mindfulness',
      description: 'Cultivate awareness and presence in every breath and movement.',
    },
    {
      title: 'Community',
      description: 'Join a supportive space where everyone belongs and grows together.',
    },
    {
      title: 'Balance',
      description: 'Harmonize body, mind, and spirit through holistic practice.',
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
          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={meditationImage}
                alt="Meditation and tranquility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-background rounded-xl p-6 shadow-lg animate-float">
              <p className="text-3xl font-serif text-primary mb-1">15+</p>
              <p className="text-sm font-sans text-muted-foreground">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Where Tranquility
              <span className="text-primary block">Meets Movement</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              At Serenity Yoga, we believe that yoga is more than just physical exercise—it's a journey 
              inward. Our studio provides a sanctuary where you can disconnect from the chaos of daily 
              life and reconnect with your true self.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Whether you're taking your first downward dog or you've been practicing for decades, 
              our experienced instructors meet you exactly where you are, guiding you with patience, 
              wisdom, and compassion.
            </p>

            {/* Values */}
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{value.description}</p>
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
