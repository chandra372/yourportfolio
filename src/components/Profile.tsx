import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Linkedin, Github, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Profile = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 animate-gradient-shift"></div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-primary rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary rounded-lg animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border-2 border-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
            style={{
              top: `${10 + (i * 7)}%`,
              left: `${5 + (i * 8)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'pulse 4s ease-in-out infinite'
      }}></div>
      
      <div className="w-full max-w-5xl bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-8 ring-background shadow-xl">
              <img src={profilePhoto} alt="John Doe" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">John Doe</h1>
              <p className="text-2xl text-primary font-medium mb-4">Full Stack Developer</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-4 py-1.5 text-sm">React</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm">Node.js</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm">TypeScript</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm">AWS</Badge>
              </div>
            </div>

            <p className="text-foreground leading-relaxed text-base">
              Passionate full-stack developer with 5+ years of experience building scalable web applications. 
              Specialized in modern JavaScript frameworks, cloud architecture, and creating exceptional user experiences. 
              Always eager to learn new technologies and solve complex problems.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:john.doe@example.com" className="text-foreground hover:text-primary transition-colors">
                  john.doe@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 flex-shrink-0" />
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 flex-shrink-0" />
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
