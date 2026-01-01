import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Server, 
  Github, 
  Zap, 
  Palette,
  FileType,
  Globe,
  Cpu,
  BookOpen,
  Layers,
  Activity,
  Lock,
  Container,
  Terminal,
  Cloud,
  Wrench
} from 'lucide-react';

export function SkillsSection() {
  const skills = [
    { name: 'JavaScript', color: 'from-yellow-500 to-orange-500', icon: Code2 },
    { name: 'TypeScript', color: 'from-blue-600 to-indigo-600', icon: FileType },
    { name: 'C', color: 'from-blue-400 to-blue-500', icon: Code2 },
    { name: 'C++', color: 'from-blue-500 to-blue-600', icon: Code2 },
    { name: 'React.js', color: 'from-cyan-400 to-blue-500', icon: Globe },
    { name: 'Next.js', color: 'from-gray-800 to-black', icon: Zap },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500', icon: Palette },
    { name: 'Redux', color: 'from-purple-600 to-purple-700', icon: Layers },
    { name: 'Node.js', color: 'from-green-500 to-green-600', icon: Server },
    { name: 'Express.js', color: 'from-gray-600 to-gray-700', icon: Server },
    { name: 'Socket.io', color: 'from-gray-700 to-black', icon: Activity },
    { name: 'MongoDB', color: 'from-green-600 to-teal-600', icon: Database },
    { name: 'MySQL', color: 'from-blue-500 to-blue-600', icon: Database },
    { name: 'Redis', color: 'from-red-600 to-red-700', icon: Database },
    { name: 'NextAuth.js', color: 'from-indigo-600 to-purple-600', icon: Lock },
    { name: 'Clerk', color: 'from-purple-500 to-indigo-500', icon: Lock },
    { name: 'Docker', color: 'from-blue-400 to-blue-600', icon: Container },
    { name: 'Git & GitHub', color: 'from-gray-700 to-gray-800', icon: Github },
    { name: 'Linux', color: 'from-orange-500 to-yellow-500', icon: Terminal },
    { name: 'DSA', color: 'from-purple-500 to-purple-600', icon: BookOpen },
    { name: 'OOP', color: 'from-indigo-500 to-purple-500', icon: Code2 }
  ];

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'C', 'C++'],
      icon: Code2,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux'],
      icon: Palette,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.io'],
      icon: Server,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Databases & Auth',
      skills: ['MongoDB', 'MySQL', 'Redis', 'JWT', 'NextAuth.js', 'Clerk'],
      icon: Database,
      gradient: 'from-teal-500 to-green-600'
    },
    {
      title: 'Core CS',
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
      icon: BookOpen,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git & GitHub', 'CI/CD', 'Linux', 'Postman', 'Vercel', 'Figma'],
      icon: Wrench,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-transparent text-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Skills & Technologies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My technical arsenal for building modern web applications and solving complex problems
          </p>
        </motion.div>

        {/* Skill Bubbles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white group-hover:text-purple-300 transition-colors">{skill.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="flex justify-center mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skillName, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-gray-400 text-center py-1">
                    {skillName}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
