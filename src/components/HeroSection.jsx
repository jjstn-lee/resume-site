import { IoDownload, IoLogoGithub, IoLogoLinkedin, IoMail, IoLocationSharp } from 'react-icons/io5'
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-10 mt-10 ">
        {/* "justin lee" div */}
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl p-2 py-5 md:text-6xl font-bold tracking-tight inline-flex gap-3 justify-center">
                    <span className="hover:text-primary transition-colors text-foreground duratrion-300"> justin </span>
                    <span className="hover:text-primary transition-colors text-foreground duratrion-300"> hisung </span>
                    <span className="hover:text-primary transition-colors text-foreground duratrion-300"> lee </span>
                </h1>
        </div>
        {/* download resume <div> */}
        <div className="inline-flex border-2 border-foreground hover:border-primary rounded p-1 hover:text-primary transition-transform hover:scale-105 duration-300 transition-colors text-foreground duration-300">
            <a
                href="/resume.pdf"
                download="Justin_Lee_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded transition-colors"
                style={{ textDecoration: 'none' }}
            >
                <div className='flex gap-2 rounded-lg px-2 py-1'>
                    <IoDownload className='text-xl'/>
                    <p> download resume </p>
                </div>
            </a>
        </div>

        {/* github | linkedin | email bar */}
        <div className="flex gap-6 text-base items-center justify-center py-5">

            <a href="https://github.com/jjstn-lee"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors text-foreground duratrion-300"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoGithub />
                github
            </a>

            <a href="https://github.com/jjstn-lee"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors text-foreground duratrion-300"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoLinkedin />
                linkedin
            </a>

            <a href="https://github.com/jjstn-lee"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors text-foreground duratrion-300"
                target="_blank"
                rel="noopener noreferrer">
                <IoMail />
                email
            </a>
        </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>


    </section>
}