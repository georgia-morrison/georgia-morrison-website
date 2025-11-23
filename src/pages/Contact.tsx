import { Link } from "react-router-dom";

const Contact = () => (
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
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light font-medium text-black leading-tight mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            I'd love to hear from you! Feel free to reach out via email or connect with me on LinkedIn.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:georgia.morrison25@icloud.com"
            className="text-green-700 hover:underline font-mono text-lg"
          >
            georgia.morrison25@icloud.com
          </a>
          <a
            href="https://www.linkedin.com/in/georgia-morrison-3302131ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline font-mono text-lg"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;