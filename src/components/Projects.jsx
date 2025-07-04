import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
    {
        id: 1,
        title: "Genetic Algorithm Project",
        description: "A self-driving car simulation created using a genetic algorithm and self-made neural network in Unity3D",
        image: "/projects/project1.png",
        tags: ["C#", "Unity"],
        demoUrl: "https://sherinawaz.itch.io/ai-car",
        githubUrl: "https://github.com/SheriNawaz/GeneticAlgorithmTeachesCarToDrive"
    }, 
    {
        id: 2,
        title: "Dungeon Souls 3D",
        description: "A procedurally generated dungeon crawler game created in Unity3D filled with complex enemy and boss behaviour.",
        image: "/projects/project2.png",
        tags: ["C#", "Unity"],
        demoUrl: "https://sherinawaz.itch.io/dungeon-souls-3d",
        githubUrl: "https://github.com/SheriNawaz/DungeonSouls3D"
    }, 
    {
        id: 3,
        title: "Blank",
        description: "blank",
        image: "/projects/project3.png",
        tags: ["blank"],
        demoUrl: "#",
        githubUrl: "#"
    }, 
]

export const Projects = () => {
    return (
       <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects showcasing my skills and achievements</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-5">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                          {tag}  
                                        </span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 px-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/SheriNawaz" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">Check Out My GitHub For More <ArrowRight size={16} /></a>
                </div>
            </div>
       </section>
    );
};