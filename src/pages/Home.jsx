import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { Projects } from "../components/Projects"

export const Home = () => {
    return <div className="min-h-screen ">
        <ThemeToggle />
        <StarBackground />
        <Navbar />

        <main>
            <HeroSection />
            <AboutMe />
            <Projects />
        </main>
    </div>
}