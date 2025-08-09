import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Photography from '@/components/Photography';
import Videography from '@/components/Videography';
import Contact from '@/components/Contact';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Photography />
      <Videography />
      <Contact />
      <FloatingButtons />
    </main>
  );
}
