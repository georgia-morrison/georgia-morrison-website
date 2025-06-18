import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CV = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-black">Alex Morgan</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link to="/cv" className="text-black font-medium">CV</Link>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* CV Content */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-4">
              Curriculum Vitae
            </h1>
            <p className="text-xl text-gray-600">
              Alex Morgan — Creative Designer & Developer
            </p>
          </div>

          {/* Personal Info */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Contact Information</h2>
                <div className="space-y-2 text-gray-600">
                  <p>alex.morgan@email.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>New York, NY</p>
                  <p>linkedin.com/in/alexmorgan</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Skills</h2>
                <div className="space-y-1 text-gray-600">
                  <p>UI/UX Design, Visual Design</p>
                  <p>React, TypeScript, JavaScript</p>
                  <p>Figma, Adobe Creative Suite</p>
                  <p>Product Strategy & Planning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black mb-12">Experience</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-black">Senior Designer & Developer</h3>
                      <span className="text-sm text-gray-500">2020 - Present</span>
                    </div>
                    <p className="text-gray-600 mb-2">Design Studio Inc.</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Leading design and development for 15+ digital products</li>
                      <li>• Collaborated with cross-functional teams to deliver user-centered solutions</li>
                      <li>• Mentored junior designers and established design system standards</li>
                      <li>• Increased user engagement by 40% through redesigned interfaces</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-black">UI/UX Designer</h3>
                      <span className="text-sm text-gray-500">2018 - 2020</span>
                    </div>
                    <p className="text-gray-600 mb-2">Tech Solutions Ltd.</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Designed user interfaces for web and mobile applications</li>
                      <li>• Conducted user research and usability testing</li>
                      <li>• Created wireframes, prototypes, and design specifications</li>
                      <li>• Worked closely with developers to ensure design implementation</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-black">Junior Designer</h3>
                      <span className="text-sm text-gray-500">2016 - 2018</span>
                    </div>
                    <p className="text-gray-600 mb-2">Creative Agency Co.</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Assisted in creating visual designs for various client projects</li>
                      <li>• Developed brand identities and marketing materials</li>
                      <li>• Supported senior designers in project execution</li>
                      <li>• Learned foundational design principles and industry best practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black mb-8">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black">Bachelor of Fine Arts in Graphic Design</h3>
                <p className="text-gray-600">New York University • 2012 - 2016</p>
                <p className="text-gray-600 text-sm mt-1">Magna Cum Laude, Dean's List</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black mb-8">Awards & Recognition</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-black">Best Digital Design Award</h3>
                  <p className="text-gray-600">Design Excellence Awards</p>
                </div>
                <span className="text-sm text-gray-500">2023</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-black">Innovation in UX Design</h3>
                  <p className="text-gray-600">UX Design Conference</p>
                </div>
                <span className="text-sm text-gray-500">2022</span>
              </div>
            </div>
          </div>

          {/* Download CV */}
          <div className="text-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
              Download PDF Version
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;