import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ActivityFeed from "@/components/ActivityFeed";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <LiveStats />
      <Projects />
      <Skills />
      <ActivityFeed />
      <Contact />
    </main>
  );
};

export default Index;