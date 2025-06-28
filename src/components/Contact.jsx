import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out to me. I'm always open to discussing new opportunities
                </p>
                
                <div className="flex justify-center">
                    <div className="w-full max-w-md space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:sherinawaz495@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        sherinawaz495@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            {/* <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+447915265786" className="text-muted-foreground hover:text-primary transition-colors">
                                        +44 7915 265786
                                    </a>
                                </div>
                            </div> */}
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">London, United Kingdom</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a 
                                    href="https://www.linkedin.com/in/sheri-nawaz-81429a296/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                >
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </a>
                                <a 
                                    href="https://github.com/SheriNawaz" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                >
                                    <Github className="h-6 w-6 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;