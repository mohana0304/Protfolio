import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart, Send } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/mohanapriyak0304', 
      label: 'LinkedIn',
      color: 'hover:bg-[#0077b5]'
    },
    { 
      icon: Github, 
      href: 'https://github.com/mohana0304', 
      label: 'GitHub',
      color: 'hover:bg-foreground'
    },
    { 
      icon: Mail, 
      href: 'mailto:kmohanapriya0304@gmail.com', 
      label: 'Email',
      color: 'hover:bg-primary'
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 space-y-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
              <Send className="text-primary-foreground" size={32} />
            </div>
            
            <h3 className="text-2xl font-display font-bold">
              Let's Be Pen Pals! 🌸
            </h3>
            
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
              I'm always excited to connect with fellow developers, designers, and anyone who loves creating magical digital experiences. 
              Feel free to reach out — let's weave something adorable together! 🧸
            </p>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center 
                    text-foreground ${social.color} hover:text-primary-foreground 
                    transition-all duration-300 shadow-sm hover:shadow-lg`}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>

            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full px-8">
              <a href="mailto:kmohanapriya0304@gmail.com">
                <Mail size={18} className="mr-2" />
                Say Hello
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-muted-foreground text-sm"
      >
        <p className="flex items-center justify-center gap-2">
          Designed with <Heart className="text-primary w-4 h-4 fill-current" /> by Mohanapriya K
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
