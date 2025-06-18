import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-black">Alex Morgan</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-black font-medium">About</Link>
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Creative Designer & Developer with a passion for crafting meaningful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-black mb-6">My Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in design and development, I specialize in creating 
                digital experiences that are not only visually stunning but also highly functional. 
                My journey began with a curiosity for how things work and evolved into a passion 
                for creating solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that great design is not just about aesthetics—it's about solving problems, 
                telling stories, and creating connections. Every project I work on is an opportunity 
                to push boundaries and explore new possibilities.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-gray-600">
                    <div className="font-medium">Design</div>
                    <div className="text-sm">UI/UX, Visual Design</div>
                  </div>
                  <div className="text-gray-600">
                    <div className="font-medium">Development</div>
                    <div className="text-sm">React, TypeScript</div>
                  </div>
                  <div className="text-gray-600">
                    <div className="font-medium">Tools</div>
                    <div className="text-sm">Figma, Adobe Suite</div>
                  </div>
                  <div className="text-gray-600">
                    <div className="font-medium">Strategy</div>
                    <div className="text-sm">Product Planning</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <div className="font-medium text-black">Senior Designer & Developer</div>
                    <div className="text-sm text-gray-600">2020 - Present</div>
                    <div className="text-sm text-gray-600 mt-1">Leading design and development for digital products</div>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <div className="font-medium text-black">UI/UX Designer</div>
                    <div className="text-sm text-gray-600">2018 - 2020</div>
                    <div className="text-sm text-gray-600 mt-1">Creating user-centered design solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-light text-black mb-8">Let's Work Together</h3>
            <p className="text-lg text-gray-600 mb-8">
              Ready to bring your ideas to life? I'd love to hear about your project.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;