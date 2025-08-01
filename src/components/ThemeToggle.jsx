import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "./lib/utils.js"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "max-sm:hidden z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
        )}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};