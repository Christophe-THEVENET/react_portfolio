import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Services } from "@/sections/Services"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"

function App() {

    return (
        <div className="min-h-screen overflow-x-hidden">
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
