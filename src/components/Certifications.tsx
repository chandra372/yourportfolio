import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SA-PRO-12345",
      status: "Active",
      link: "#"
    },
    {
      title: "Meta React Developer Professional Certificate",
      issuer: "Meta",
      date: "2024",
      credentialId: "META-REACT-67890",
      status: "Active",
      link: "#"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-DEV-98765",
      status: "Active",
      link: "#"
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "2023",
      credentialId: "MONGO-DEV-11223",
      status: "Active",
      link: "#"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CNCF-CKA-55667",
      status: "Active",
      link: "#"
    },
    {
      title: "Node.js Application Developer (JSNAD)",
      issuer: "OpenJS Foundation",
      date: "2023",
      credentialId: "OPENJS-JSNAD-44556",
      status: "Active",
      link: "#"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2022",
      credentialId: "DOCKER-DCA-33445",
      status: "Active",
      link: "#"
    },
    {
      title: "TypeScript Advanced Programming",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "MS-TS-ADV-22334",
      status: "Active",
      link: "#"
    },
    {
      title: "PostgreSQL Database Administration",
      issuer: "PostgreSQL Global Development Group",
      date: "2023",
      credentialId: "PGSQL-DBA-88990",
      status: "Active",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Professional credentials and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.status}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </p>
                </div>

                <a 
                  href={cert.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  View Credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
