import { StarBackground } from "../components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { Projects } from "../components/Projects"
import { Experience } from "../components/Experience"

export const Home = () => {
    return <div className="min-h-screen ">
        <StarBackground />
        <Navbar />

        <main>
            <HeroSection />
            <AboutMe />
            <Experience/>
            <Projects />
        </main>
    </div>
}