import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Let's discuss your next project or collaboration opportunity</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4 mr-2" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Looking for a developer?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Let's build something amazing together!
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: string; className?: string }) => {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${variant === "secondary" ? "bg-secondary text-secondary-foreground" : ""} ${className}`}>
      {children}
    </span>
  );
};

export default Contact;