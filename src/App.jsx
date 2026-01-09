 import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact" 

function App() {

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}

export default App
