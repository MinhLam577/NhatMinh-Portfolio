import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Security } from "@/components/security"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import Background from "@/components/Background"
import ParticleBackground from "@/components/particle-background"
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">  
      
      {/* <Background/> */}

      {/* Background Particles - Layer sâu nhất */}
      <ParticleBackground />

      {/* All content wrapper - Đẩy lên trên background */}
      <div className="relative">
        <Navbar />

        {/* Nội dung chính */}
        <Hero />
        <TechStack />
        <Security />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}