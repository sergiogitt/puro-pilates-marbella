import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Classes from '@/components/Classes';
import Instructors from '@/components/Instructors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Instructors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
