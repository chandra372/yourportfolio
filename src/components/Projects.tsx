import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform with advanced charts and live updates",
      image: project1,
      status: "live",
      statusText: "Live in Production",
      tags: ["React", "TypeScript", "Chart.js", "WebSockets"],
      link: "#",
      github: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with real-time inventory tracking and cart sync",
      image: project2,
      status: "progress",
      statusText: "In Development",
      tags: ["Next.js", "Stripe", "Prisma", "TailwindCSS"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Analytics Suite",
      description: "Machine learning powered insights dashboard with predictive analytics",
      image: project3,
      status: "planning",
      statusText: "Planning Phase",
      tags: ["Python", "TensorFlow", "FastAPI", "React"],
      link: "#",
      github: "#"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "live":
        return <CheckCircle2 className="w-4 h-4" />;
      case "progress":
        return <Clock className="w-4 h-4" />;
      case "planning":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-chart-1/20 text-chart-1 border-chart-1/30";
      case "progress":
        return "bg-chart-2/20 text-chart-2 border-chart-2/30";
      case "planning":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30";
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Real-time tracking and status updates for all projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge 
                  variant="outline" 
                  className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}
                >
                  {getStatusIcon(project.status)}
                  <span className="ml-1">{project.statusText}</span>
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="default" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;