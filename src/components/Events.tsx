import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      name: "React Conf 2024",
      type: "Conference",
      role: "Speaker",
      location: "San Francisco, CA",
      date: "October 2024",
      attendees: "2000+",
      description: "Presented on modern React patterns and server components"
    },
    {
      name: "AWS re:Invent 2023",
      type: "Conference",
      role: "Attendee",
      location: "Las Vegas, NV",
      date: "November 2023",
      attendees: "50000+",
      description: "Explored latest cloud infrastructure and serverless technologies"
    },
    {
      name: "Local Tech Meetup",
      type: "Meetup",
      role: "Organizer",
      location: "Online",
      date: "Monthly",
      attendees: "100+",
      description: "Leading monthly discussions on full-stack development best practices"
    },
    {
      name: "GitHub Universe 2023",
      type: "Conference",
      role: "Participant",
      location: "San Francisco, CA",
      date: "November 2023",
      attendees: "5000+",
      description: "Participated in workshops on GitHub Actions and CI/CD pipelines"
    },
    {
      name: "Hackathon: Code for Good",
      type: "Hackathon",
      role: "Team Lead",
      location: "New York, NY",
      date: "June 2023",
      attendees: "500+",
      description: "Led team to build accessibility tools for non-profit organizations"
    },
    {
      name: "DevOps Days",
      type: "Conference",
      role: "Workshop Leader",
      location: "Austin, TX",
      date: "May 2023",
      attendees: "1000+",
      description: "Conducted hands-on workshop on Kubernetes deployment strategies"
    }
  ];

  const typeColors: Record<string, "default" | "secondary" | "outline"> = {
    Conference: "default",
    Meetup: "secondary",
    Hackathon: "outline"
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Participated Events</h2>
          <p className="text-muted-foreground">Community engagement and professional development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                    <div className="flex gap-2 mb-3">
                      <Badge variant={typeColors[event.type] || "default"}>
                        {event.type}
                      </Badge>
                      <Badge variant="secondary">
                        {event.role}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
