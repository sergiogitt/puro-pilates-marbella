import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerLinks = [
    {
      title: 'Studio',
      links: ['Classes', 'Schedule', 'Pricing', 'Private Sessions'],
    },
    {
      title: 'About',
      links: ['Our Story', 'Instructors', 'Philosophy', 'Careers'],
    },
    {
      title: 'Support',
      links: ['FAQ', 'Contact', 'Gift Cards', 'Terms of Service'],
    },
  ];

  return (
    <footer className="bg-forest text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif font-semibold">Serenity</span>
              <span className="text-sm font-sans tracking-widest uppercase opacity-70">
                Yoga
              </span>
            </div>
            <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed mb-6 max-w-sm">
              A sanctuary for mindful movement and inner peace. 
              Join our community and discover the transformative power of yoga.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-sans text-primary-foreground/50">
              © {currentYear} Serenity Yoga Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-sans text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-sans text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
