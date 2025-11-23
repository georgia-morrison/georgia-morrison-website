import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Code In Place",
      issuer: "Stanford University",
      date: "2025",
      skills: ["Python", "Problem Solving", "Coding Fundamentals"],
      status: "Active",
      image: "/cert-images/stanford.png"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      skills: ["Cloud Architecture", "AWS Services", "Cloud Fundamentals"],
      status: "Active",
      image: "/cert-images/aws-cloud-practitioner.png"
    },
    {
      title: "Bug Fixing in Python",
      issuer: "Code First Girls",
      date: "2022",
      skills: ["Python", "Problem Solving", "Bug Fixing"],
      status: "Active",
      image: "/cert-images/code-first-girls.png"
    },
    {
      title: "UX/UI & Accessibility Design",
      issuer: "Code First Girls",
      date: "2022",
      skills: ["Front-End", "App Accessibility", "UX/UI Design"],
      status: "Active",
      image: "/cert-images/code-first-girls.png"
    },
    {
      title: "Introduction to Data & SQL",
      issuer: "Code First Girls",
      date: "2022",
      skills: ["Data Analysis", "SQL", "Databases"],
      status: "Active",
      image: "/cert-images/code-first-girls.png"
    },
    {
      title: "Introduction to Python & Apps",
      issuer: "Code First Girls",
      date: "2021",
      skills: ["Python", "App Development"],
      status: "Active",
      image: "/cert-images/code-first-girls.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-black font-mono">Georgia Morrison</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors font-mono">About</Link>
              <Link to="/cv" className="text-gray-600 hover:text-black transition-colors font-mono">CV</Link>
              <Link to="/projects" className="text-gray-600 hover:text-black transition-colors font-mono">Projects</Link>
              <Link to="/certifications" className="text-gray-600 hover:text-black transition-colors font-mono">Certifications</Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors font-mono">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light font-medium text-black leading-tight mb-4">
              Professional Certifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
              A showcase of my professional achievements and technical expertise across various platforms and technologies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 font-mono">
                {cert.image && (
                    <img
                    src={cert.image}
                    alt={cert.title + " logo"}
                    className="absolute top-4 right-4 w-20 h-20 object-contain"
                    style={{ zIndex: 1 }}
                    />
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors font-mono">
                        {cert.title}
                      </CardTitle>
                      <Badge variant="secondary" className="ml-2 font-mono">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary font-medium font-mono">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground font-mono">Issued: {cert.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground font-mono">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs font-mono">
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
            <p className="text-muted-foreground font-mono">
              Want to verify any of these certifications? Feel free to reach out for verification details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;