import { IoDownload, IoLogoGithub, IoLogoLinkedin, IoMail, IoLocationSharp } from 'react-icons/io5'
import { ArrowDown } from "lucide-react";
import { useTheme, ThemeProvider } from "@/components/ThemeProvider";
import clsx from 'clsx'

import resume from "../assets/resume.pdf";

function shouldShowGlitch(currentTheme) {
    if (currentTheme === 'cyberpunk') {
        return true;
    } else {
        return false;
    }
}

export const HeroSection = () => {

    const { currentTheme, setCurrentTheme } = useTheme();

    return <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-10 mt-10 ">
        {/* "justin lee" div */}
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl p-2 py-5 md:text-6xl font-bold tracking-tight inline-flex gap-3 justify-center">
                    {shouldShowGlitch(currentTheme) ? (
                        <div className="flex gap-6">
                            <span className="hover:text-secondary transition-colors text-base-content duration-300 text-glitch" data-content=" justin "> justin </span>
                            <span className="hover:text-secondary transition-colors text-base-content duration-300 text-glitch" data-content=" hisung "> hisung </span>
                            <span className="hover:text-secondary transition-colors text-base-content duration-300 text-glitch" data-content=" lee "> lee </span>
                        </div>
                    ) : (
                        <div>
                            <span className="hover:text-secondary transition-colors text-base-content duration-300"> justin </span>
                            <span className="hover:text-secondary transition-colors text-base-content duration-300"> hisung </span>
                            <span className="hover:text-secondary transition-colors text-base-content duration-300"> lee </span>
                        </div>

                    )}
                </h1>
        </div>
        {/* download resume <div> */}

        <div
            className={clsx(
                'inline-flex border-2 border-foreground hover:border-primary rounded p-1 hover:text-secondary transition-transform hover:scale-105 duration-300 transition-colors text-base-content duration-300',
                shouldShowGlitch(currentTheme) && 'glow-button'
            )}
            >
            <a
                href={resume}
                download="Justin_Lee_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded transition-colors"
                style={{ textDecoration: 'none' }}
            >
                <div className='flex gap-2 rounded-lg px-2 py-1'>
                    <IoDownload className={clsx('text-xl', shouldShowGlitch(currentTheme) && 'glow-button')} />
                    <p className='glow'> download resume </p>
                </div>
            </a>
        </div>
        
        <div className= ''>

        </div>

        {/* github | linkedin | email bar */}
        <div className="flex gap-6 text-base items-center justify-center py-5">

            <a href="https://github.com/jjstn-lee"
                className={clsx('inline-flex items-center gap-2 text-base-content', shouldShowGlitch(currentTheme) && 'glow')}
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoGithub className='inline-flex items-center gap-2transition-colors text-base-content'/>
                github
            </a>

            <a href="https://www.linkedin.com/in/jjstn-lee/"
                className={clsx('inline-flex items-center gap-2 text-base-content', shouldShowGlitch(currentTheme) && 'glow')}
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoLinkedin className='inline-flex items-center gap-2 text-base-content'/>
                linkedin
            </a>

            <a href="mailto:jlee363@u.rochester.edu"
                className={clsx('inline-flex items-center gap-2 text-base-content', shouldShowGlitch(currentTheme) && 'glow')}
                target="_blank"
                rel="noopener noreferrer">
                <IoMail className='inline-flex items-center gap-2 text-base-content'/>
                email
            </a>
        </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}