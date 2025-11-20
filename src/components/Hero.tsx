import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Activity, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Activity className="w-3 h-3 mr-2 animate-pulse" />
            Currently Available
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Building exceptional digital experiences with modern web technologies and real-time capabilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group" onClick={scrollToProjects}>
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;