import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const CV = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-black">Georgia Morrison</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link to="/cv" className="text-gray-600 hover:text-black transition-colors">CV</Link>
              <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</Link>
              <Link to="/certifications" className="text-gray-600 hover:text-black transition-colors">Certifications</Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
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
            <p className="text-xl text-green-600">
              Georgia Morrison - Full-Stack Engineer
            </p>
          </div>

          {/* Personal Info */}
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Experience Timeline */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-light text-black mb-12"> Tech Experience</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-black">Technology Graduate Engineer</h3>
                        <span className="text-sm text-gray-500">Sep 2024 - Present</span>
                      </div>
                      <p className="text-green-600 mb-2">American Express - Mission Control Tools Engineering</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Full-stack engineer on an Agile scrum team</li>
                        <li>• Developing solutions, mainly AI-based, for engineers in our incident management teams</li>
                        <li>• Developed dashboards and databases to improve insights</li>
                        <li>• Mentored early careers members and involved in many extra-curricular initiatives</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-black">Mapping/Path-Planning Team Member</h3>
                        <span className="text-sm text-gray-500">2022 - 2024</span>
                      </div>
                      <p className="text-gray-600 mb-2">University of Glasgow Racing - Driverless Team</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Worked on SLAM and statistical analysis for loop closure</li>
                        <li>• Performance analysis of mapping approaches</li>
                        <li>• Worked on Extended Kalman Filter</li>
                        <li>• Worked on static presentations such as Real World AI and Business Plan Presentation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-black">Technology Summer Intern</h3>
                        <span className="text-sm text-gray-500">2023</span>
                      </div>
                      <p className="text-gray-600 mb-2">American Express</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Built a full-stack web application that allows for data inspection and making requests</li>
                        <li>• Used Java and Springboot for the backend, and React for the frontend</li>
                        <li>• Presented to stakeholders and senior management</li>
                        <li>• Resulted in graduate position offer</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-black">Volunteer</h3>
                        <span className="text-sm text-gray-500">2022 - 2023</span>
                      </div>
                      <p className="text-gray-600 mb-2">Scottish Tech Army</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Volunteered on the Project Closure team, where my main responsibility was gathering data through volunteer feedback</li>
                        <li>• Began working on creating a data plan for streamlining impact reports</li>
                        <li>• Took a step back to focus on university/work but hope to rejoin</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-black">Technology Insight Weeks</h3>
                        <span className="text-sm text-gray-500">2022</span>
                      </div>
                      <p className="text-gray-600 mb-2">American Express, EY & Morgan Stanley</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 2-3 days with each company to learn about the culture and their early career options</li>
                        <li>• All resulted in internship offers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-light text-black mt-12 mb-12"> Education</h2>
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
                        <h3 className="text-xl font-semibold text-black">BSc Hons Statistics</h3>
                        <span className="text-sm text-gray-500">Sep 2019 - Jun 2024</span>
                      </div>
                      <p className="text-gray-600 mb-2">University of Glasgow - Classification 2:1</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Thesis title: An Evaluation of Object Detection for Autonomous Race Cars from Camera Data Using Deep Learning Methods</li>
                        <li>• Thesis received an A</li>
                        <li>• Honours classes of interest: Environmental Statistics (A), Biostatistics(A), Advanced Data Analysis (A), Linear Mixed Models (A)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-black">Secondary School</h3>
                        <span className="text-sm text-gray-500">2013 - 2019</span>
                      </div>
                      <p className="text-gray-600 mb-2">Fraserburgh Academy</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Advanced Higher - Graphic Communication (A), Mathematics (B)</li>
                        <li>• Scottish Higher - Accounting & Finance(B), Art & Design (B), English (A), French (A), Graphic Communication (A), History (A), Mathematics (A), Physics (A)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills, Contact, Education, Awards */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-black mb-6"> Technical Skills, Tools & Frameworks</h2>
                <div className="space-y-1 text-gray-600">
                  <p>UI/UX Design, Data Visualisation, Git, Agile</p>
                  <div className="left-0 right-0 z-40">
                      <Progress value={25} className="h-1 rounded-none bg-gray-100 [&>div]:bg-green-600" />
                  </div>
                  <p>Beginner - Java, GoLang, React</p>
                   <div className="left-0 right-0 z-40">
                      <Progress value={50} className="h-1 rounded-none bg-gray-100 [&>div]:bg-green-600" />
                  </div>
                  <p>Intermediate - SQL, Python</p>
                   <div className="left-0 right-0 z-40">
                      <Progress value={75} className="h-1 rounded-none bg-gray-100 [&>div]:bg-green-600" />
                  </div>
                  <p>Strong - R, Latex</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Languages & Soft Skills</h2>
                <div className="space-y-1 text-gray-600">
                  <p>Fluent - English, Scots Beginner - French</p>
                  <p>Organisation, Project Management, Leadership</p>
                  <p>Jira, Confluence, Microsoft Suite</p>
                  <p>Problem-Solving, Attention to Detail, Communication, Creativity</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Awards & Qualifications</h2>
                 <div className="space-y-1 text-gray-600">
                  <p>See Certifications section of site</p>
                  <li>Anne Frank Award</li>
                  <li>PMI Project Management Award</li>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Events</h2>
                 <div className="space-y-1 text-gray-600">
                  <li>Amex Data & AI Summit 2025</li>
                  <li>Women of Silicon Roundabout 2024</li>
                  <li>MLH Rookie Hacks - Won best new language</li>
                  <li>Data Lab - Data Fest 2022</li>
                  <li>Spotify: Raising the Volume for Women & Non-Binary Professionals in Audio & Tech</li>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV */}
          <div className="text-center mt-12">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
              Download Coming Soon
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;