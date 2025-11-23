import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Progress } from "@/components/ui/progress";
=======
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3

const CV = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
<<<<<<< HEAD
            <Link to="/" className="text-xl font-semibold text-black">Georgia Morrison</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link to="/cv" className="text-gray-600 hover:text-black transition-colors">CV</Link>
              <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</Link>
              <Link to="/certifications" className="text-gray-600 hover:text-black transition-colors">Certifications</Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
=======
            <Link to="/" className="text-xl font-semibold text-black">Alex Morgan</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link to="/cv" className="text-black font-medium">CV</Link>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
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
<<<<<<< HEAD
            <p className="text-xl text-green-600">
              Georgia Morrison - Full-Stack Engineer
            </p>
          </div>

          {/* Personal Info */}
=======
            <p className="text-xl text-gray-600">
              Alex Morgan — Creative Designer & Developer
            </p>
          </div>

>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Experience Timeline */}
            <div className="lg:col-span-2">
<<<<<<< HEAD
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
=======
              <h2 className="text-3xl font-light text-black mb-12">Experience</h2>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
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
<<<<<<< HEAD
                        <h3 className="text-xl font-semibold text-black">BSc Hons Statistics</h3>
                        <span className="text-sm text-gray-500">Sep 2019 - Jun 2024</span>
                      </div>
                      <p className="text-gray-600 mb-2">University of Glasgow - Classification 2:1</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Thesis title: An Evaluation of Object Detection for Autonomous Race Cars from Camera Data Using Deep Learning Methods</li>
                        <li>• Thesis received an A</li>
                        <li>• Honours classes of interest: Environmental Statistics (A), Biostatistics(A), Advanced Data Analysis (A), Linear Mixed Models (A)</li>
=======
                        <h3 className="text-xl font-semibold text-black">Senior Designer & Developer</h3>
                        <span className="text-sm text-gray-500">2020 - Present</span>
                      </div>
                      <p className="text-gray-600 mb-2">Design Studio Inc.</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Leading design and development for 15+ digital products</li>
                        <li>• Collaborated with cross-functional teams to deliver user-centered solutions</li>
                        <li>• Mentored junior designers and established design system standards</li>
                        <li>• Increased user engagement by 40% through redesigned interfaces</li>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center justify-between mb-2">
<<<<<<< HEAD
                        <h3 className="text-xl font-semibold text-black">Secondary School</h3>
                        <span className="text-sm text-gray-500">2013 - 2019</span>
                      </div>
                      <p className="text-gray-600 mb-2">Fraserburgh Academy</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Advanced Higher - Graphic Communication (A), Mathematics (B)</li>
                        <li>• Scottish Higher - Accounting & Finance(B), Art & Design (B), English (A), French (A), Graphic Communication (A), History (A), Mathematics (A), Physics (A)</li>
=======
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
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills, Contact, Education, Awards */}
            <div className="space-y-12">
<<<<<<< HEAD
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
=======
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Contact Information</h2>
                <div className="space-y-2 text-gray-600">
                  <p>alex.morgan@email.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>New York, NY</p>
                  <p>linkedin.com/in/alexmorgan</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Skills</h2>
                <div className="space-y-1 text-gray-600">
                  <p>UI/UX Design, Visual Design</p>
                  <p>React, TypeScript, JavaScript</p>
                  <p>Figma, Adobe Creative Suite</p>
                  <p>Product Strategy & Planning</p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-light text-black mb-6">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-black">Bachelor of Fine Arts in Graphic Design</h3>
                    <p className="text-gray-600 text-sm">New York University • 2012 - 2016</p>
                    <p className="text-gray-600 text-sm">Magna Cum Laude, Dean's List</p>
                  </div>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
                </div>
              </div>

              {/* Awards */}
              <div>
<<<<<<< HEAD
                <h2 className="text-2xl font-light text-black mb-6">Events</h2>
                 <div className="space-y-1 text-gray-600">
                  <li>Amex Data & AI Summit 2025</li>
                  <li>Women of Silicon Roundabout 2024</li>
                  <li>MLH Rookie Hacks - Won best new language</li>
                  <li>Data Lab - Data Fest 2022</li>
                  <li>Spotify: Raising the Volume for Women & Non-Binary Professionals in Audio & Tech</li>
=======
                <h2 className="text-2xl font-light text-black mb-6">Awards & Recognition</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black text-sm">Best Digital Design Award</h3>
                    <p className="text-gray-600 text-sm">Design Excellence Awards</p>
                    <span className="text-xs text-gray-500">2023</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm">Innovation in UX Design</h3>
                    <p className="text-gray-600 text-sm">UX Design Conference</p>
                    <span className="text-xs text-gray-500">2022</span>
                  </div>
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
                </div>
              </div>
            </div>
          </div>

          {/* Download CV */}
<<<<<<< HEAD
          <div className="text-center mt-12">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
              Download Coming Soon
=======
          <div className="text-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300">
              Download PDF Version
>>>>>>> 85fec01571f6a06235eb46147f3e1376b3f5cbe3
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;