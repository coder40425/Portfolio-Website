import { motion, useInView } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms integration
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e747a4f1-0632-4a8f-bb2e-c12d8ab7aa8b',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Form submitted successfully:', result);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('Form submission failed:', result);
        setSubmitStatus('error');
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-transparent text-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 neon-text text-white font-bold">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect neon-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-center text-white">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`glass-effect border-primary/30 focus:border-primary focus:ring-primary ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`glass-effect border-primary/30 focus:border-primary focus:ring-primary ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`glass-effect border-primary/30 focus:border-primary focus:ring-primary min-h-[120px] resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-purple-blue neon-glow hover:scale-105 transition-transform"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      <p>Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <p>Failed to send message. Please try again.</p>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-purple-blue flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a 
                        href="mailto:yashsingh1610@gmail.com"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        yashsingh1610@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-white">Connect with me</h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://www.linkedin.com/in/yash-kumar-singh-18843232a"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-3 rounded-lg glass-effect hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <p className="text-sm text-gray-300">Connect professionally</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/coder40425"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-3 rounded-lg glass-effect hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">GitHub</p>
                      <p className="text-sm text-gray-300">Check out my code</p>
                    </div>
                  </motion.a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg mb-2 text-white">Quick Response</h4>
              <p className="text-sm text-gray-300">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}