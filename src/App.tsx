import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Database, Server, Globe, Briefcase, User } from 'lucide-react';
import Hero3D from './components/Hero3D';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: 'WanderLust - Hotel Booking System',
      description: 'A comprehensive hotel booking platform built with modern web technologies. Features include user authentication, detailed room listings, booking management, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/krishna100204/WanderLust.git',
      liveLink: 'https://wanderlust-tycy.onrender.com/signup',
    },
    {
      title: 'Spotify Clone',
      description: 'A feature-rich music streaming application that replicates core Spotify functionality. Includes playlist management, music player with controls, and personalized user profiles.',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=1000',
      technologies: ['MongoDB', 'JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/krishna100204/Spotify-Clone.git',
    },
    {
      title: 'Simon Says Game',
      description: 'A modern take on the classic memory game, built with clean code principles. Features increasing difficulty levels, sound effects, and high score tracking.',
      image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1000',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/krishna100204/Simon-Says-Game.git',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-blue-600">KS</span>
            <div className="flex gap-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen pt-16 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Full Stack Developer</span>
              </div>
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm <span className="text-blue-600">Krishna Solankey</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A passionate software developer specializing in full-stack development,
                with a focus on creating elegant solutions to complex problems.
                I transform ideas into powerful, user-friendly applications.
              </p>
              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  <User className="w-5 h-5" />
                  Contact Me
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <Hero3D />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With expertise in both frontend and backend technologies, I bring a comprehensive
              approach to software development.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-600">Proficient in HTML, CSS, React and JavaScript, creating responsive and intuitive user interfaces.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-600">Proficient in Node.js, Express.js, building robust and scalable server-side applications.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Database Management</h3>
              <p className="text-gray-600">Skilled in SQL and MongoDB, designing efficient database architectures.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my notable projects that demonstrate my technical skills
              and problem-solving abilities.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/krishna100204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krishna1002?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:krishnasolankey@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;