import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GitCommit, CheckCircle, Code, Zap } from "lucide-react";

interface Activity {
  id: string;
  type: "commit" | "deploy" | "code" | "update";
  message: string;
  timestamp: Date;
}

const ActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      type: "deploy",
      message: "Deployed Analytics Dashboard v2.1.0 to production",
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    },
    {
      id: "2",
      type: "commit",
      message: "Added real-time WebSocket connection for live updates",
      timestamp: new Date(Date.now() - 1000 * 60 * 15)
    },
    {
      id: "3",
      type: "code",
      message: "Refactored authentication flow with improved security",
      timestamp: new Date(Date.now() - 1000 * 60 * 30)
    },
    {
      id: "4",
      type: "update",
      message: "Updated project dependencies and fixed vulnerabilities",
      timestamp: new Date(Date.now() - 1000 * 60 * 45)
    }
  ]);

  useEffect(() => {
    // Simulate new activity every 10 seconds
    const interval = setInterval(() => {
      const newActivities: Omit<Activity, 'id'>[] = [
        {
          type: "commit",
          message: "Pushed new feature: Enhanced data visualization",
          timestamp: new Date()
        },
        {
          type: "update",
          message: "Performance optimization: Reduced bundle size by 15%",
          timestamp: new Date()
        },
        {
          type: "code",
          message: "Implemented new API endpoint for user analytics",
          timestamp: new Date()
        }
      ];

      const randomActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
      
      setActivities(prev => [
        { ...randomActivity, id: Date.now().toString() },
        ...prev.slice(0, 9)
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "commit":
        return <GitCommit className="w-4 h-4" />;
      case "deploy":
        return <CheckCircle className="w-4 h-4" />;
      case "code":
        return <Code className="w-4 h-4" />;
      case "update":
        return <Zap className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "commit":
        return "bg-chart-1/20 text-chart-1 border-chart-1/30";
      case "deploy":
        return "bg-chart-2/20 text-chart-2 border-chart-2/30";
      case "code":
        return "bg-chart-3/20 text-chart-3 border-chart-3/30";
      case "update":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30";
      default:
        return "";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
    
    if (diff < 1) return "Just now";
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return `${Math.floor(diff / 1440)}d ago`;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Live updates from my development workflow</CardDescription>
                </div>
                <Badge variant="outline" className="bg-chart-1/20 text-chart-1 border-chart-1/30">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-1 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-1"></span>
                  </span>
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div 
                      key={activity.id}
                      className="flex gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors border border-border/30"
                    >
                      <Badge 
                        variant="outline" 
                        className={`h-fit ${getActivityColor(activity.type)}`}
                      >
                        {getActivityIcon(activity.type)}
                      </Badge>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm leading-relaxed">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatTime(activity.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActivityFeed;