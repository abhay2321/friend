import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Send, Code, Palette, User, Briefcase, FolderOpen, MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';
import profileImage from '@/assets/ayushi-profile.jpg';
import profile from '@/assets/ayushiv.png';
import Contact from './Contact'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'ReactJS', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'C', level: 65 },
    { name: 'Java', level: 60 },
    { name: 'DSA', level: 70 }
  ];

  const projects = [
    {
      title: 'Collaborative Text Editor',
      description: 'A real-time collaborative text editor built with Firebase for seamless team collaboration and document sharing.',
      technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Custom Dropdown Component',
      description: 'A reusable and customizable dropdown component showcasing advanced UI development skills and attention to detail.',
      technologies: ['React', 'CSS', 'JavaScript', 'HTML'],
      image: '/api/placeholder/400/250'
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using modern technologies like React, HTML5, CSS3, and JavaScript.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Creating beautiful and user-friendly interfaces with focus on UI/UX principles and modern design trends.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">
              <img className="h-14" src={profile} ></img>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-smooth hover:text-primary ${
                    activeSection === item ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="ml-4"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-3">
                {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-left py-2 transition-smooth hover:text-primary ${
                      activeSection === item ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-1 bg-background/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1 text-center md:text-left">

              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-white">Hi, I'm</span>
                  <br />
                  <span className="text-gradient">Ayushi Verma</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-3 leading-relaxed">
                  Frontend Developer & Web Designer
                </p>
                
                <p className="text-lg text-white/80 mb-10 max-w-2xl">
                  Passionate about creating beautiful, interactive web experiences with modern technologies. 
                  Currently pursuing B.E. in 4th year at Institute of Engineering and Technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 hover-lift"
                    onClick={() => scrollToSection('projects')}
                  >
                    <FolderOpen className="w-5 h-5 mr-2" />
                    View My Work
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-black bg-white hover:text-primary hover-lift"
                    onClick={() => scrollToSection('contact')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>

             <div className="flex justify-center animate-scale-in mt-20 -mb-4">
              <div className="relative">
                <div className="w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow animate-float">
                  <img 
                    src={profileImage} 
                    alt="Ayushi Verma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-8 card-gradient rounded-2xl shadow-card hover-lift">
                  <User className="w-8 h-18 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate frontend developer currently in my 4th year of B.E. at the Institute of Engineering and Technology. 
                    I love creating beautiful, functional web applications that provide exceptional user experiences.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-8 card-gradient rounded-2xl shadow-card hover-lift">
                  <Code className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in frontend development with expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. 
                    I also have a strong foundation in UI/UX design and programming languages like C and Java.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="p-6 hover-lift transition-smooth">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="p-8 hover-lift transition-smooth text-center">
                  <div className="mb-6 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="overflow-hidden hover-lift transition-smooth">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <Contact />

      {/* Footer */}
      <footer className="py-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-1">
              © 2026 Ayushi Verma. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, Tailwind CSS, and lots of ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;