import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { Background } from "@/components/Background.jsx";
import { Navbar } from "@/components/Navbar.jsx";
import { HeroSection } from "@/components/HeroSection";

export const Home = () => {
    return <div className ="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
        <ThemeToggle /> 
        {/* background effects */}
        
        {/* navbar */}
        <Navbar />
        {/* main bar */}
        <main>
            <HeroSection />

        </main>
        {/* footer */}
    </div>
};