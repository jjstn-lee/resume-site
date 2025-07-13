import { IoLogoGithub, IoLogoLinkedin, IoMail, IoLocationSharp } from 'react-icons/io5';
import val_logo from '../assets/fantasy-valorant.jpg';
import salendar from '@/assets/salendar.png';
import pcn from '../assets/predictive-coding.png';

const projects = [
  {
    id: 1,
    title: "fantasy valorant",
    description: "webscraper to track pros' statistics and matches",
    image: val_logo,
    tags: ["react", "tailwindCSS", "supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "salendar",
    description:
      "a full-stack app to parse important due dates from a syllabus and put them on your google calendar",
    image: salendar,
    tags: ["next.js", "node.js", "OCR", "flask"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "discriminative PCN",
    description:
      "a PCN that classifies handwritten digits (and the final project in my computational neuroscience course!)",
    image: pcn,
    tags: ["AI/ML", "python", "ngc-learn"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
    return <section id="projects" className="min-h-relative flex flex-col items-center justify-center px-4 py-10 mt-10 ">
        <div className="flex gap-2 px-150 justify-center">
            <div className="flex flex-col gap-2 text-base inline-flex">
        
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary"> projects </span>
                </h2>


                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-8">
                  {projects.map((project, key) => (
                    <div
                      key={key}
                      className="w-full group bg-base-100 border-2 border-foreground rounded-lg overflow-hidden"
                    >
                    <div className="h-48 overflow-hidden text-foreground">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-xs font-medium border border-base-content rounded-full bg-base-100 text-secondary-foreground">
                            {tag}
                            </span>
                        ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                <a href="https://github.com/jjstn-lee"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors text-foreground duratrion-300 justify-center py-4"
                    target="_blank"
                    rel="noopener noreferrer">
                    <IoLogoGithub />
                    more on my github!
                </a>
            </div>
        </div>
    </section>
}

