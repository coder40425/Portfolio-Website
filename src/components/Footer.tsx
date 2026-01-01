import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-4 w-4 text-destructive fill-current" />
            </motion.div>
            <span className="text-muted-foreground">by Yash Kumar Singh</span>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>© 2025 Yash Kumar Singh. All rights reserved.</p>
            <p>2nd-year Student at NIT Durgapur</p>
            <p className="text-xs opacity-75">
              Designed with glassmorphism effects and futuristic aesthetics
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
