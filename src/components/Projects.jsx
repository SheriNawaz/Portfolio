const projects = [
    {
        id: 1,
        title: "Genetic Algorithm Project",
        description: "A self-driving car simulation created using a genetic algorithm and self-made neural network in Unity3D",
        image: "/projects/project1.png",
        tags: ["C#", "Unity"],
        demoUrl: "#",
        githubUrl: "#"
    }, 
    {
        id: 2,
        title: "Dungeon Souls 3D",
        description: "A procedurally generated dungeon crawler game created in Unity3D filled with complex enemy and boss behaviour.",
        image: "/projects/project2.png",
        tags: ["C#", "Unity"],
        demoUrl: "#",
        githubUrl: "#"
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
       <section id="projects" className="py-24"></section>
    );
};