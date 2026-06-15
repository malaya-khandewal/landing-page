import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Why from '@/components/Why';
import Stack from '@/components/Stack';
import Vision from '@/components/Vision';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import ScrollReveals from '@/components/ScrollReveals';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <About />
        <Solutions />
        <Why />
        <Stack />
        <Vision />
        <Cta />
      </main>
      <Footer />
      <ScrollReveals />
    </>
  );
}
