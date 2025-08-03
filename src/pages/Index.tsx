
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Creative Designer & Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Alex Morgan</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <a href="#work" className="text-gray-600 hover:text-black transition-colors">Work</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-[73px] left-0 right-0 z-40">
        <Progress value={50} className="h-1 rounded-none" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight">
                  <span className="block text-black font-medium">{typewriterText}</span>
                  <span className={`inline-block w-0.5 h-16 bg-black ml-1 ${typewriterText.length === fullText.length ? 'animate-pulse' : ''}`}></span>
                </h2>
                <div className="flex items-start gap-8">
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg flex-1">
                    I craft digital experiences that blend beautiful design with seamless functionality. 
                    Passionate about creating meaningful connections through thoughtful design.
                  </p>
                  {/* Photo positioned to the right of subtitle */}
                  <div className="relative animate-scale-in">
                    <Card className="relative overflow-hidden rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform rotate-[35deg]">
                      <img 
                        src="/lovable-uploads/3145a330-3acc-47f7-a452-c114930fdcb5.png"
                        alt="Personal photo"
                        className="w-48 h-auto object-contain"
                      />
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
                  View My Work
                </Button>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-none transition-all duration-300">
                  Get In Touch
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-black">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">20+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Empty space for balance */}
            <div></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light text-black mb-8">About Me</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            With over 5 years of experience in design and development, I specialize in creating 
            digital experiences that are not only visually stunning but also highly functional. 
            My approach combines user-centered design principles with cutting-edge technology 
            to deliver solutions that truly make a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 rounded-none border border-gray-200">
              <h4 className="font-semibold text-black mb-2">Design</h4>
              <p className="text-gray-600 text-sm">Creating intuitive and beautiful user interfaces that enhance user experience.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 rounded-none border border-gray-200">
              <h4 className="font-semibold text-black mb-2">Development</h4>
              <p className="text-gray-600 text-sm">Building robust and scalable applications using modern technologies.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 rounded-none border border-gray-200">
              <h4 className="font-semibold text-black mb-2">Strategy</h4>
              <p className="text-gray-600 text-sm">Aligning design and development decisions with business objectives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-2xl font-light text-white mb-4">Let's work together</h4>
          <p className="text-gray-400 mb-8">Ready to bring your ideas to life?</p>
          <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-none">
            Start a Project
          </Button>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2024 Alex Morgan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
