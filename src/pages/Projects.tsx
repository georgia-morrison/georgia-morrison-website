import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Projects Incoming",
    description: "Working on adding my personal projects to the site.",
    tech: [],
    status: "In the Works",
    image: null,
    link: "/notfound",
  },
  
];

const Projects = () => (
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
            Personal Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            Explore a selection of my personal projects, each showcasing my skills in software engineering, data, and design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 font-mono hover:scale-[1.03] cursor-pointer">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title + " screenshot"}
                    className="absolute top-4 right-4 w-20 h-20 object-contain"
                    style={{ zIndex: 1 }}
                  />
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors font-mono">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="ml-2 font-mono">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-green-700 hover:underline font-mono text-sm">
                    View Project
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;