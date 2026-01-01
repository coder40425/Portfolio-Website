import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

export function HeroSection() {
  // Typewriter effect for the subtitle
  const [displayedText, setDisplayedText] = useState('');
  const [welcomeText, setWelcomeText] = useState('');
  
  const fullText = "Full-Stack Developer | Building Scalable Web Solutions";
  const fullWelcome = "Welcome To My Portfolio...!";

  // Typewriter for welcome text
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullWelcome.length) {
        setWelcomeText(fullWelcome.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  // Typewriter for subtitle (starts after welcome completes)
  useEffect(() => {
    let index = 0;
    const delay = fullWelcome.length * 60 + 400; // delay subtitle start
    const startTyping = setTimeout(() => {
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
    }, delay);
    return () => clearTimeout(startTyping);
  }, []);

  // Smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Resume download
  const handleDownloadResume = () => {
    const resumeUrl = '/Yash_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Yash_SDE_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl z-10">
        {/* Welcome text at the very top center */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-purple-300 font-bold tracking-wide">
            {welcomeText}
            {welcomeText.length < fullWelcome.length && <span className="animate-pulse">|</span>}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-purple-400 mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-3 md:mb-4 leading-tight">
                Yash Kumar Singh
              </h1>
              <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-purple-500 to-blue-500 mb-4 md:mb-6"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                2nd Year Student at <span className="text-white">NIT Durgapur</span>
              </p>
              <div className="text-base md:text-lg text-gray-400 min-h-[28px]">
                {displayedText}
                {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-3 md:gap-4"
            >
              <a 
                href="https://github.com/coder40425" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yash-kumar-singh-18843232a" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
              </a>
              <a 
                href="mailto:yashsingh1610@gmail.com" 
                aria-label="Email"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20 text-sm md:text-base"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
                className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white text-sm md:text-base"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl"></div>
                <div className="absolute inset-1 bg-[#0D0D0F] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/pp.jpg"
                    alt="Yash Kumar Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg shadow-purple-500/30 text-xs md:text-sm"
              >
                <p>Available for opportunities</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-purple-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 md:h-3 bg-purple-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
