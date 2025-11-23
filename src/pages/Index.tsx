
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
<<<<<<< HEAD
=======
import { Progress } from "@/components/ui/progress";
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [typewriterText, setTypewriterText] = useState("");
<<<<<<< HEAD
  const fullText = "Full-Stack Engineer, Data-Obsessed & Always Learning";
=======
  const fullText = "Creative Designer & Developer";
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
  
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
<<<<<<< HEAD
       <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Georgia Morrison</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link to="/cv" className="text-gray-600 hover:text-black transition-colors">CV</Link>
              <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</Link>
              <Link to="/certifications" className="text-gray-600 hover:text-black transition-colors">Certifications</Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
=======
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Alex Morgan</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <a href="#work" className="text-gray-600 hover:text-black transition-colors">Work</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-[73px] left-0 right-0 z-40">
        <Progress value={50} className="h-1 rounded-none" />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
<<<<<<< HEAD
                <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight relative">
                  {/* Invisible full text for layout stability */}
                  <span className="invisible block font-medium">{fullText}</span>
                  {/* Actual typewriter text absolutely positioned on top */}
                  <span className="block text-black font-medium absolute top-0 left-0 w-full">
                    {typewriterText}
                    <span className={`inline-block w-0.5 h-16 bg-black ml-1 ${typewriterText.length === fullText.length ? 'animate-blink' : ''}`}></span>
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg flex-1 pt-5">
                  Hello, I'm Georgia! I'm currently a full-stack engineer @ American Express, 
                  with a passion for data, machine learning and building strong UX designs.
                </p>
=======
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
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
<<<<<<< HEAD
                <Link to="/projects">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                    Get In Touch
                  </Button>
                </Link>
=======
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
                  View My Work
                </Button>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-none transition-all duration-300">
                  Get In Touch
                </Button>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
              </div>
              {/* Stats */}
<<<<<<< HEAD
              <div className="flex gap-8 pt-8 border-t border-slate-200"></div>
            </div>
            {/* Photo positioned to the right of the entire hero text */}
            <div className="relative animate-scale-in flex justify-center">
              <Card className="relative overflow-hidden rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform rotate-[15deg]">
                <img 
                  src="photobooth.png"
                  alt="Personal photo"
                  className="w-48 h-auto object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                />
                <img
                  src="cloud-doodle.webp"
                  alt="Floating cloud"
                  className="absolute bottom-40 left-30 size-20  pointer-events-none -rotate-12"
                  style={{ zIndex: 2 }}
                />
                 <img
                  src="doodle.webp"
                  alt="Floating doodle"
                  className="absolute -top-9 right-2 size-40  pointer-events-none -rotate-12"
                  style={{ zIndex: 2 }}
                />
                 <img
                  src="music-doodle.png"
                  alt="Floating music note"
                  className="absolute bottom-40 -right-20 size-25  pointer-events-none -rotate-12"
                  style={{ zIndex: 2 }}
                />
              </Card>
               <img
                  src="star-doodle.webp"
                  alt="Floating star"
                  className="absolute -top-0 right-10 w-12 h-12 animate-bounce-slow pointer-events-none rotate-90"
                  style={{ zIndex: 2 }}
                />
                <img
                  src="star-doodle.webp"
                  alt="Floating star"
                  className="absolute bottom-0 left-10 w-12 h-12 animate-bounce-slow pointer-events-none"
                  style={{ zIndex: 2 }}
                />
                
            </div>
=======
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
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
          </div>
        </div>
      </section>

      {/* About Section */}
<<<<<<< HEAD
      <section id="intro" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light text-slate-800 mb-8">About Me</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            With a degree in Statstics and a passion for technology, I thrive on solving complex problems and creating impactful solutions.
            I believe in the power of data to drive decisions and enhance user experiences. My journey has taken me through various experiences, from working on software for driverless race cars to designing dashboards for incident management.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-800 mb-2">Design</h4>
              <p className="text-slate-600 text-sm">Merging creative grpahic design with imactful user experiences.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-800 mb-2">Development</h4>
              <p className="text-slate-600 text-sm">Using Agile methodologies to build solutions in corporate contexts.</p>
=======
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
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
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
<<<<<<< HEAD
          <p className="text-slate-400 mb-8">Ready to bring your ideas to life?</p>
          <Link to="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
              Get In Touch
            </Button>
          </Link>
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">© 2025 Georgia Morrison. All rights reserved.</p>
=======
          <p className="text-gray-400 mb-8">Ready to bring your ideas to life?</p>
          <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-none">
            Start a Project
          </Button>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2024 Alex Morgan. All rights reserved.</p>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
