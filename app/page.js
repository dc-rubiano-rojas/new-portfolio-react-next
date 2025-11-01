import HeroSection from '../app/components/HeroSection'
import NavBar from "../app/components/Navbar";
import AboutSection from "../app/components/AboutSection";
import ProjectSection from "../app/components/ProjectSection";
import EmailSection from "../app/components/EmailSection";
import Footer from "../app/components/Footer";
import AchivmentSection from "../app/components/AchivmentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-20">
        <HeroSection />
        {/*         <AchivmentSection />
 */}        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
