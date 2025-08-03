import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      skills: ["Cloud Architecture", "AWS Services", "Security"],
      status: "Active"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-DEV-2022-045",
      skills: ["GCP", "DevOps", "Containerization"],
      status: "Active"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-2023-078",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"],
      status: "Active"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-FE-2021-156",
      skills: ["React", "JavaScript", "UI/UX"],
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alex Morgan
            </Link>
            <div className="flex space-x-6">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/cv" className="text-muted-foreground hover:text-foreground transition-colors">
                CV
              </Link>
              <Link to="/certifications" className="text-foreground font-medium">
                Certifications
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Certifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my professional achievements and technical expertise across various platforms and technologies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {cert.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Want to verify any of these certifications? Feel free to reach out for verification details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;