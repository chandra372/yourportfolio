import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mail, Phone, Linkedin, Github, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Profile = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center relative overflow-hidden">
      {/* Multi-layer Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-gradient-shift"></div>
      
      {/* Floating Orbs with different animations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary/25 rounded-lg animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto border-border/50 backdrop-blur-sm bg-card/95 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar Section */}
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20">
                  <AvatarImage src={profilePhoto} alt="Profile" />
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
