
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Alex Morgan</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#work" className="text-slate-600 hover:text-slate-900 transition-colors">Work</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-light text-slate-800 leading-tight">
                  Creative
                  <span className="block text-indigo-600 font-medium">Designer</span>
                  <span className="block text-slate-600">& Developer</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  I craft digital experiences that blend beautiful design with seamless functionality. 
                  Passionate about creating meaningful connections through thoughtful design.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  View My Work
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-full transition-all duration-300">
                  Get In Touch
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-bold text-slate-800">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">50+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">20+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl transform rotate-3 opacity-20"></div>
                <Card className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&crop=face"
                    alt="Alex Morgan - Creative Designer & Developer"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </Card>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-bounce">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-xs text-slate-600 mt-1">Available</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-sm font-medium text-slate-800">Based in</div>
                <div className="text-xs text-slate-600">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light text-slate-800 mb-8">About Me</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            With over 5 years of experience in design and development, I specialize in creating 
            digital experiences that are not only visually stunning but also highly functional. 
            My approach combines user-centered design principles with cutting-edge technology 
            to deliver solutions that truly make a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-800 mb-2">Design</h4>
              <p className="text-slate-600 text-sm">Creating intuitive and beautiful user interfaces that enhance user experience.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-800 mb-2">Development</h4>
              <p className="text-slate-600 text-sm">Building robust and scalable applications using modern technologies.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-800 mb-2">Strategy</h4>
              <p className="text-slate-600 text-sm">Aligning design and development decisions with business objectives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-2xl font-light text-white mb-4">Let's work together</h4>
          <p className="text-slate-400 mb-8">Ready to bring your ideas to life?</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full">
            Start a Project
          </Button>
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">© 2024 Alex Morgan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
