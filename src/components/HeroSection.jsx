import { IoDownload, IoLogoGithub, IoLogoLinkedin, IoMail, IoLocationSharp } from 'react-icons/io5'

export const HeroSection = () => {
    return <section id="home" className="min-h-relative flex flex-col items-center justify-center px-4 py-7 mt-10 ">
        {/* "justin lee" div */}
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl p-2 py-5 md:text-6xl font-bold tracking-tight">
                    <span> justin hisung lee </span>
                </h1>
        </div>
        {/* download resume <div> */}
        <div className="inline-flex hover border-2 border-gray-300 rounded p-1">
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

        <div className="flex gap-2 text-base items-center justify-center py-5">

            <a href="https://github.com/jjstn-lee"
                className="inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoGithub />
                github
            </a>

            <a href="https://github.com/jjstn-lee"
                className="inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoLinkedin />
                linkedin
            </a>

            <a href="https://github.com/jjstn-lee"
                className="inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer">
                <IoMail />
                email
            </a>

        </div>
        </div>
    </section>
}