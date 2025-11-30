import Profile from "@/components/Profile";
import LiveStats from "@/components/LiveStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Events from "@/components/Events";
import ActivityFeed from "@/components/ActivityFeed";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Space Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-primary/5 -z-10"></div>
      
      {/* Nebula Effect */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>
      
      {/* Stars Layer 1 - Small stars */}
      <div className="fixed inset-0 -z-10">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-small-${i}`}
            className="absolute w-0.5 h-0.5 bg-foreground rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Stars Layer 2 - Medium stars */}
      <div className="fixed inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-medium-${i}`}
            className="absolute w-1 h-1 bg-primary/70 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.4,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              boxShadow: '0 0 4px hsl(var(--primary))'
            }}
          />
        ))}
      </div>
      
      {/* Stars Layer 3 - Large twinkling stars */}
      <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-large-${i}`}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 2 + 1.5}s`,
              boxShadow: '0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary) / 0.5)'
            }}
          />
        ))}
      </div>
      
      {/* Shooting Stars */}
      <div className="fixed inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
              animation: `shooting-star ${Math.random() * 3 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              boxShadow: '0 0 4px hsl(var(--primary)), 0 0 8px hsl(var(--primary) / 0.5)'
            }}
          />
        ))}
      </div>
      
      <Profile />
      <LiveStats />
      <Projects />
      <Skills />
      <Certifications />
      <Events />
      <ActivityFeed />
      <Contact />
    </main>
  );
};

export default Index;