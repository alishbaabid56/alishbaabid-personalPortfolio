
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactPage from "@/components/ContactPage";
import Skills from "@/components/Skills";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col bg-[#121212] ">
  <Header/>
   <div className="container mx-auto px-12 py-4">
  <HeroSection/> 
  <AboutSection/>
  <Skills/>
  <ProjectsSection/>
  <ContactPage/>
  </div>
</main>
  )
}