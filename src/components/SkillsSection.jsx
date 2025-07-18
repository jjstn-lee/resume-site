export const SkillsSection = () => {
    const skills = [
        'java',
        'python',
        'c',
        'git',
        'linux',
        'react',
        'html',
        'css',
        'javascript',
        'flask',
        'tailwind',
        'azure',
    ]
    return <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary"> skills </span>
        </h2>

        <div className="justify-left px-50">
            <div className='flex flex-wrap gap-2 justify-left'>
                {skills.map((skill) => (
                <SkillPill key={skill} name={skill} />
                ))}
            </div>
            
            
        </div>

        </div>
    </section>
}

// <div className="inline-flex border-2 border-foreground hover:border-primary rounded p-1 hover:text-primary transition-colors text-foreground duration-300"></div>
const SkillPill = (props) => {
  return (
    <p className='text-foreground rounded-full border border-foreground px-4 py-1 pb-1 transition-transform duration-300 transition-colors text-foreground hover:bg-primary hover:scale-105 hover:text-secondary transition-background'>
      {props.name}
    </p>
  )
}