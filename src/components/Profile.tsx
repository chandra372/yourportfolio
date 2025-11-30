import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Linkedin, Github, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Profile = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-5xl bg-card rounded-3xl shadow-lg p-8 md:p-12">
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
