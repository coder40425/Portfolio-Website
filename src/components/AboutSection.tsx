import { motion, useInView } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Rocket, Code } from 'lucide-react';
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
            Currently diving deep into Web Development & Data Structures and Algorithms 🚀
          </p>
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