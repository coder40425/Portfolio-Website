import { motion, useInView } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'BudgetTracker AI',
      description: 'An intelligent personal finance tracker that analyzes, visualizes, and manages expenses with AI integration. Features AI-powered insights using OpenRouter API, automating ~90% of manual expense categorization with smart analytics dashboards.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Clerk Auth', 'Chart.js', 'OpenRouter AI'],
      liveUrl: 'https://budget-tracker-ai-ys.vercel.app/',
      githubUrl: 'https://github.com/coder40425/Budget-Tracker-AI'
    },
    {
      title: 'Expense Splitter App',
      description: 'A full-stack expense manager that automated splitting and balance tracking, reducing manual calculation effort by ~80%. Features real-time group chat using Socket.io with <100ms latency and instant notifications for expenses and updates.',
      image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80',
      tags: ['React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://expense-splitter-app-ys.vercel.app/login',
      githubUrl: 'https://github.com/coder40425/Expense-Splitter-App'
    },
    {
      title: 'LRU Cache Implementation',
      description: 'Implemented memory-efficient LRU Cache with O(1) get/put operations using hash maps and custom doubly linked lists. Designed automatic eviction policy reflecting real-world cache systems used in browsers and databases with OOP principles and efficient memory management.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
      tags: ['C++', 'STL', 'Hash Maps', 'Doubly Linked Lists', 'OOP', 'DSA'],
      liveUrl: null,
      githubUrl: 'https://github.com/coder40425/30-DAYS-CPP-OOPS-STL-PRACTICE/blob/main/day29.cpp'
    },
    {
      title: 'Secure Notes App',
      description: 'A secure notes management platform enabling users to create, edit, and delete personal notes with user-specific access control. Implements robust JWT authentication and bcrypt password hashing to ensure privacy and protect user credentials.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: null, // Not deployed
      githubUrl: 'https://github.com/coder40425/Secure-Notes-App'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-transparent text-white" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 neon-text text-white font-bold">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work in full-stack development, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="glass-effect overflow-hidden hover:neon-glow transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl mb-3 text-white group-hover:text-[#9D4EDD] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="glass-effect text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Buttons with equal 50-50 spacing */}
                  {project.liveUrl ? (
                    <div className="flex gap-3 mt-auto">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="gradient-purple-blue flex-1 hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="glass-effect border-primary hover:bg-primary/10 hover:scale-105 transition-transform flex-1"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-center mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="glass-effect border-primary hover:bg-primary/10 hover:scale-105 transition-transform px-8"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
