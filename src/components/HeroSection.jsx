import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    
    const fullText = "Hi I'm Sheri Nawaz";
    const typeSpeed = 50;
    
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, typeSpeed);
            
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);
    
    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        
        return () => clearInterval(cursorInterval);
    }, []);
    
    const renderText = () => {
        const words = displayedText.split(' ');
        return words.map((word, index) => {
            if (word === "Sheri") {
                return <span key={index} className="text-primary"> {word}</span>;
            } else if (word === "Nawaz") {
                return <span key={index} className="text-gradient ml-2"> {word}</span>;
            } else {
                return <span key={index}> {word}</span>;
            }
        }).filter(Boolean);
    };
    
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight min-h-[1.2em]">
                        {renderText()}
                        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a graduate in Computer Science from London and I specialise in Software Engineering with a keen interest for developing large scale, high-impact products.
                    </p>
                    
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-small text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
};