import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Eye, Users, TrendingUp } from "lucide-react";

const LiveStats = () => {
  const [visitors, setVisitors] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    // Simulate real-time visitor count
    const startVisitors = Math.floor(Math.random() * 50) + 100;
    const startActive = Math.floor(Math.random() * 5) + 3;
    const startViews = Math.floor(Math.random() * 200) + 500;
    
    setVisitors(startVisitors);
    setActiveUsers(startActive);
    setPageViews(startViews);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => Math.max(1, prev + (Math.random() > 0.5 ? 1 : -1)));
      setPageViews(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Active Users",
      value: activeUsers,
      icon: Activity,
      description: "Online now",
      color: "text-chart-1"
    },
    {
      title: "Total Visitors",
      value: visitors,
      icon: Users,
      description: "Last 24 hours",
      color: "text-chart-2"
    },
    {
      title: "Page Views",
      value: pageViews,
      icon: Eye,
      description: "Total views",
      color: "text-chart-3"
    },
    {
      title: "Engagement",
      value: "87%",
      icon: TrendingUp,
      description: "Avg. rate",
      color: "text-chart-4"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Analytics</h2>
          <p className="text-muted-foreground">Real-time portfolio tracking and visitor insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <CardDescription className="text-xs mt-1">
                  {stat.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;