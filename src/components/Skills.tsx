import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Rocket, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Three.js / WebGL", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / FastAPI", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Rocket,
      skills: [
        { name: "Docker / Kubernetes", level: 80 },
        { name: "AWS / Vercel", level: 85 },
        { name: "CI/CD Pipelines", level: 83 },
        { name: "Monitoring & Analytics", level: 87 }
      ]
    },
    {
      title: "Mobile & Cross-Platform",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 84 },
        { name: "Progressive Web Apps", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 88 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">Comprehensive technical capabilities across the stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;