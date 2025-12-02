import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import VideoSection from "@/components/video-section"
import About from "@/components/about"
import Approach from "@/components/approach"
import ForWho from "@/components/for-who"
import HowItWorks from "@/components/how-it-works"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Approach />
      <ForWho />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
