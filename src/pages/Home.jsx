import { ThemeToggle } from "@/components/ThemeToggle.jsx";
// import { Background } from "@/components/Background.jsx";
import { AboutSection } from "@/components/AboutSection.jsx";
import { Navbar } from "@/components/Navbar.jsx";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";
import { useTheme, ThemeProvider } from "@/components/ThemeProvider";
import glitch from "../assets/glitch.jpg"

function shouldShowGrain(currentTheme) {
    if (currentTheme == 'literary') {
        return true;
    } else {
        return false;
    }
}

export const Home = () => {
    const { currentTheme, setCurrentTheme } = useTheme();
    return (
        <div className ="min-h-screen bg-base-100 text-primary overflow-x-hidden">
            <div className="relative">
                <div
                    className="fixed top-0 left-0 w-[300%] h-[300%] opacity-5 pointer-events-none z-50"
                    style={{
                    backgroundImage: `url(${shouldShowGrain(currentTheme)
                        ? 'https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png'
                        : glitch
                    })`,
                        backgroundRepeat: 'no-repeat',       // prevent tiling
                        backgroundSize: 'cover',              // stretch & crop to cover container
                        backgroundPosition: 'center center', // center the image nicely
                    }}
                />
            </div>
            {/* navbar */}
            <Navbar />
            {/* main bar */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <SkillsSection />
            </main>
            {/* footer */}
        </div>  
    );
};