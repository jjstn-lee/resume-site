import { cn } from "./lib/utils.js"
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { ThemeSwitcher } from "./ThemeSwitcher.jsx";

const navItems = [
    {name: "home", href: "#home"},
    {name: "about", href: "#about"},
    {name: "projects", href: "#projects"},
    {name: "skills", href: "#skills"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpened] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])
    return <nav className={cn(
        "fixed w-full z-40 transition-all duration-300 border-0 shadow-none",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md" : "py-5"
        )}>

        <div className="container flex items-center justify-end">
            {/* */}
            {/* <a
                className="text-xl font-bold text-primary flex items-center"
                href="#hero"
            >
                    <span className="relative z-10">
                        {" "}
                        <span className="text-glow text-foreground"> Justin Lee </span> Portfolio
                    </span>
            </a> */}

            {/* desktop navbar */}
    
            {/* Right: nav links + theme toggle */}
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                    {item.name}
                </a>
                ))}
                {/* <ThemeToggle /> */}
                <div className="w-[150px]">
                    <ThemeSwitcher />  
                </div>

            </div>

            {/* mobile navbar
            <button 
                onClick={() => setIsMenuOpened((prev) => (!prev))}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>  
                    ))}
                </div>
            </div> */} 
        </div>
        
    </nav>;
}