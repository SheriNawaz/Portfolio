import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: 1,
        company: "POW Design",
        position: "Junior Software Developer",
        period: "NOV 2022 - JAN 2025",
        location: "London, UK",
        description: [
            "This has been a part-time position working on projects from static landing pages in HTML, CSS, JavaScript and React to backend systems in PHP and SQL for various clients",
            "Worked on social media posts to assist clients in promoting their company."
        ],
        isActive: true
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">Experience</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Company Navigation */}
                    <div className="lg:col-span-1">
                        <div className="space-y-2 ">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all duration-300 ${
                                        exp.isActive
                                            ? 'border-l-primary bg-primary/10 text-primary'
                                            : 'border-l-muted-foreground/30 bg-card hover:bg-primary/5 hover:border-l-primary/50'
                                    }`}
                                >
                                    <div className="text-sm font-medium">
                                        {exp.company.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-3">
                        {experiences.map((exp) => (
                            exp.isActive && (
                                <div key={exp.id} className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2 text-left">
                                            {exp.position} @ <span className="text-primary">{exp.company}</span>
                                        </h3>
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span className="text-sm">{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                <span className="text-sm">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {exp.description.map((desc, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-muted-foreground leading-relaxed text-left">
                                                    {desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* All Experiences Timeline (Optional - for mobile/smaller screens) */}
                <div className="mt-16 lg:hidden">
                    <h3 className="text-xl font-semibold mb-8 text-left">Complete Experience Timeline</h3>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative">
                                {/* Timeline line */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-6 top-12 w-0.5 h-20 bg-border"></div>
                                )}
                                
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Briefcase className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 gradient-border p-6 card-hover">
                                        <h4 className="font-semibold text-lg mb-1 text-left">{exp.position}</h4>
                                        <p className="text-primary font-medium mb-2 text-left">{exp.company}</p>
                                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-4">
                                            <span>{exp.period}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="space-y-2">
                                            {exp.description.map((desc, descIndex) => (
                                                <p key={descIndex} className="text-sm text-muted-foreground text-left">
                                                    • {desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;