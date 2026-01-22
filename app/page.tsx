import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Team } from "@/components/team"
import { Treatments } from "@/components/treatments"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Team />
      <Treatments />
      <Contact />
      <Footer />
    </main>
  )
}
