import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mail, Phone, Linkedin, Github, Globe } from "lucide-react";

const Profile = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-border/50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar Section */}
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32 md:w-40 md:h-40">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-4xl">JD</AvatarFallback>
                </Avatar>
              </div>

              {/* Info Section */}
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">John Doe</h1>
                  <p className="text-xl text-primary mb-3">Full Stack Developer</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Passionate full-stack developer with 5+ years of experience building scalable web applications. 
                  Specialized in modern JavaScript frameworks, cloud architecture, and creating exceptional user experiences. 
                  Always eager to learn new technologies and solve complex problems.
                </p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:john.doe@example.com" className="hover:text-primary transition-colors">
                      john.doe@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="w-4 h-4" />
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
