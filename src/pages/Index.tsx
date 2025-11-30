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
      {/* Animated Black Gradient Background */}
      <div className="fixed inset-0 bg-background -z-10"></div>
      
      {/* Gradient Orbs */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30 rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
            animation: 'float-1 20s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] opacity-25 rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            animation: 'float-2 25s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/3 w-[700px] h-[700px] opacity-20 rounded-full blur-[110px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)',
            animation: 'float-3 30s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      {/* Animated Gradient Waves */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, hsl(var(--primary) / 0.1) 0%, transparent 50%, hsl(var(--primary) / 0.1) 100%)',
            animation: 'gradient-shift 15s ease infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, transparent 0%, hsl(var(--primary) / 0.15) 50%, transparent 100%)',
            animation: 'gradient-shift 20s ease infinite reverse'
          }}
        ></div>
      </div>
      
      {/* Floating Grid Pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          animation: 'grid-move 30s linear infinite'
        }}
      ></div>
      
      {/* Animated Geometric Shapes */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/30 rounded-full"
          style={{ animation: 'spin 40s linear infinite' }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/40 rotate-45"
          style={{ animation: 'spin 35s linear infinite reverse' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-56 h-56 border-2 border-primary/20 rounded-lg"
          style={{ animation: 'pulse 8s ease-in-out infinite' }}
        ></div>
      </div>
      
      {/* Particle Effects */}
      <div className="fixed inset-0 -z-10 opacity-40">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
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