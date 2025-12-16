import { motion } from 'motion/react';
import { Code2, ExternalLink, Trophy, Target, Award, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function CodingProfilesSection() {
  const platforms = [
    {
      name: 'LeetCode',
      mainStat: '180+',
      mainLabel: 'Problems Solved',
      link: 'https://leetcode.com/u/coderx404/',
      gradient: 'from-orange-500 to-yellow-500',
      icon: Code2,
      stats: [
        { label: 'Questions Solved', value: '180+' },
        { label: 'Days Active', value: '100+' }
      ]
    },
    // {
    //   name: 'CodeChef',
    //   mainStat: '3★',
    //   mainLabel: 'Current Rating',
    //   link: 'https://www.codechef.com/users/yourusername',
    //   gradient: 'from-amber-700 to-orange-600',
    //   icon: Trophy,
    //   stats: [
    //     { label: 'Rating', value: '1600+' },
    //     { label: 'Stars', value: '3 Star' }
    //   ]
    // }
  ];

  return (
    <section id="coding-profiles" className="py-20 px-6 bg-transparent text-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Competitive Programming</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Consistent problem-solving and algorithmic thinking across multiple platforms
          </p>
        </motion.div>

        {/* Platforms Grid - Centered single card */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Decorative background */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${platform.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                
                {/* Card content */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg`}>
                        <platform.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-1">{platform.name}</h3>
                        <p className="text-gray-400 text-sm">{platform.mainLabel}</p>
                      </div>
                    </div>
                    <div className={`text-3xl bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent`}>
                      {platform.mainStat}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {platform.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center bg-white/5 rounded-lg p-3">
                        <div className="text-xl text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <a href={platform.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-white group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl text-white mb-2">Problem Solving</h4>
              <p className="text-gray-400 text-sm">Strong foundation in Data Structures & Algorithms</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl text-white mb-2">Multiple Languages</h4>
              <p className="text-gray-400 text-sm">Proficient in C++, JavaScript, and TypeScript for competitive programming</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl text-white mb-2">Consistent Practice</h4>
              <p className="text-gray-400 text-sm">Regular participation in coding contests and daily problem solving</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
