import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Delivery from './components/Delivery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-[#090909] text-white min-h-screen">
      <Loader />
      <Cursor />
      <ScrollProgress />
      <div className="noise-overlay noise-animated" />
      <AmbientBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Philosophy />
        <Menu />
        <Experience />
        <Stats />
        <Gallery />
        <Delivery />
        <Reviews />
        <FAQ />
        <Reservation />
      </main>

      <Footer />
    </div>
  );
}
