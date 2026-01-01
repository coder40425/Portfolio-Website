import { motion, useInView } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Rocket, Code, Briefcase } from 'lucide-react';
import { useRef } from 'react';

// Timeline data - can be moved to a separate data file
const timelineData = [
  {
    year: '2024 - 2028',
    title: 'NIT Durgapur',
    institution: 'Bachelor of Technology',
   // description: 'CGPA: 7.42',
    icon: GraduationCap
  },
  {
    year: '2024',
    title: 'Started Full-Stack Development',
    //institution: 'Self-Taught',
    description: 'Diving deep into React, Node.js, and modern web technologies',
    icon: Code
  }
];

// Experience data
const experienceData = [
  {
    year: 'Nov 2025 - Present',
    title: 'Full Stack Developer Intern',
    company: 'Techxica Technology Pvt. Ltd.',
    location: 'Remote',
    icon: Briefcase,
    achievements: [
      'Built e-commerce product management for 40+ products, admin workflows, and payment gateway integration',
      'Redesigned company website using React, Tailwind CSS, and REST APIs, reducing load time by ~25%',
      'Maintained clean codebases through Git workflows, PR reviews, and collaborative development practices'
    ]
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-transparent text-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building impactful web applications and optimizing user experiences
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-4xl mb-8 text-center text-white">Experience</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experienceData.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <motion.div 
                            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent className="h-7 w-7 text-white" />
                          </motion.div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <div>
                              <h4 className="text-xl text-white font-semibold mb-1">{exp.title}</h4>
                              <p className="text-purple-400">{exp.company} · {exp.location}</p>
                            </div>
                            <span className="text-sm text-blue-400 mt-2 md:mt-0">{exp.year}</span>
                          </div>
                          
                          <ul className="space-y-3 mt-4">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                className="flex items-start space-x-3 text-gray-300"
                              >
                                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Rocket className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl text-white">My Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate 2nd-year student at NIT Durgapur with a deep love for technology and programming. My heart lies in software development and building innovative solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I spend my time building full-stack applications, solving DSA problems, and exploring the latest technologies in web development. My goal is to become a skilled Software Development Engineer and contribute to innovative projects.
                </p>
                <motion.div 
                  className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-blue-400">Fun Fact:</p>
                  <p className="text-sm text-gray-300 mt-1">
                    My friends absolutely love using my Expense Splitter App! 💯 It's made splitting bills so much easier for our group.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl mb-8 text-center md:text-left text-white">Education & Milestones</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline line */}
                    {index < timelineData.length - 1 && (
                      <motion.div 
                        className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-blue-500"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                        style={{ transformOrigin: 'top' }}
                      />
                    )}
                    
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <motion.div 
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <IconComponent className="h-6 w-6 text-white" />
                              </motion.div>
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-white">{item.title}</h4>
                                <span className="text-sm text-blue-400">{item.year}</span>
                              </div>
                              <p className="text-purple-400 mb-1">{item.institution}</p>
                              <p className="text-sm text-gray-300">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
