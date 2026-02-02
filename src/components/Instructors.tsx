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
      name: 'Maya Chen',
      specialty: 'Vinyasa & Meditation',
      bio: 'With a background in dance and 12 years of yoga practice, Maya brings fluidity and mindfulness to every class.',
      years: 12,
    },
    {
      name: 'James Rivera',
      specialty: 'Power Yoga & Ashtanga',
      bio: 'A former athlete, James discovered yoga for recovery and now helps others build strength with intention.',
      years: 8,
    },
    {
      name: 'Leila Patel',
      specialty: 'Yin & Restorative',
      bio: 'Leila specializes in therapeutic practices, creating space for deep healing and relaxation.',
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
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Guided by Expertise
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Our certified instructors bring decades of combined experience, each with their unique gifts and specialties.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className={`group text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Avatar Placeholder */}
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
              <p className="text-sm font-sans text-accent mb-3">{instructor.specialty}</p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 max-w-xs mx-auto">
                {instructor.bio}
              </p>
              <span className="inline-block text-xs font-sans bg-background px-4 py-2 rounded-full text-muted-foreground">
                {instructor.years}+ years experience
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
