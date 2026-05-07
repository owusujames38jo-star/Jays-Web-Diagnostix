import Navbar from "../features/navigation/components/Navbar";
import HeroSection from '../features/hero/components/HeroSection';
import Footer from "../features/footer/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}