import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: '123 Serenity Lane, Peaceful Valley, CA 94102',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@serenityyoga.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Daily 6am - 9pm',
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
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <span className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Begin Your Journey
              <span className="text-primary block">Today</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Ready to transform your practice? We'd love to hear from you. 
              Stop by the studio, give us a call, or send us a message.
            </p>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex items-start gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-sans text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-sans text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-serif text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-sans text-muted-foreground mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans"
                      placeholder="Maya"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-sans text-muted-foreground mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans"
                      placeholder="Chen"
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
                    placeholder="maya@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-sans text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans resize-none"
                    placeholder="I'm interested in..."
                  />
                </div>
                <Button variant="hero" size="xl" className="w-full">
                  Send Message
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
