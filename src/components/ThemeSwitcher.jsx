import { useTheme, ThemeProvider } from '@/components/ThemeProvider.jsx';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/lightswind/dropdown-menu";

export const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme, themes } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="btn btn-outline font-normal">
          theme selector
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 absolute z-50" align="end">
        <DropdownMenuLabel className="font-normal">choose a style</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setCurrentTheme(theme)}
            className={`${theme === currentTheme ? "font-bold" : ""}
            hover:bg-primary hover:text-secondary
            `}
      
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

