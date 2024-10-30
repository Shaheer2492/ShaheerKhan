import React, { useState } from 'react'; 
import { Menu , Github, Mail, Linkedin} from 'lucide-react'
//useState hook is for managing the menu state and icons from lucide-react

const Portfolio = () => {

    //Creates state for mobile menu toggle
    const [ isMenuOpen , setIsMenuOpen] = useState(false);
    
    //Array of project objects
    const projects = [
        {
            title: "Pehla Project",
            description: "Crashed Out",
            techstack: ["React, Node.js, MongoDB"]
        }, 
        {
            title: "Project 2", 
            description: "Mobile app development",
            tech: ["React Native", "Firebase"]
        },
        {
            title: "Project 3",
            description: "Machine learning project",
            tech: ["Python", "TensorFlow"]
        }
    ];
    /*using tailwind prefixes and patterns, we create the classNames for the divs */
    return (
        <div className = "min-h-screen bg-gray-50">
            {/*Navigation */}
            <nav className = "bg-white shadow-lg">
                <div className = "max-w-6xl mx-auto px4">
                    <div className = "flex justify-between items-center h-16">
                        <span className = "text-2xl font-bold"> Shaheer Khan</span>
                        
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className = "p-2">
                                {isMenuOpen ? <X size={24} /> : <Menu size = {24} />}
                            </button>
                        </div>
         {/* Desktop menu */}
         <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-100">About</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-100">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I'm Your Name
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Computer Science Student & Software Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100">
              Contact Me
            </a>
            <a href="#projects" className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="hover:text-blue-600">
              <GitHub size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;