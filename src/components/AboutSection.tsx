import { motion } from 'framer-motion';
import { MapPin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Mohanapriya K"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-peach rounded-full opacity-60 animate-pulse-soft" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lavender rounded-full opacity-60 animate-pulse-soft" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              I'm Mohanapriya K
            </h3>
            <p className="text-primary font-medium text-lg">
              Flutter Specialist | UI Developer | Full-Stack Developer | AI Integration Developer
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Software Developer currently pursuing my Master’s in Computer Applications, with a strong interest in building efficient, user-centric web and mobile applications. 
              I have hands-on experience working with React, Flutter, Firebase, Java, C, MongoDB, and MySQL, and I enjoy transforming ideas into practical digital solutions through clean design and structured code.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I have developed projects some projects which helped me strengthen my problem-solving and development skills. 
              I am a continuous learner who enjoys exploring new technologies and collaborating with teams to build innovative applications that create real-world impact.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>kmohanapriya0304@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>India</span>
              </div>
            </div>

            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground">
              <a href="https://github.com/mohana0304" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2" size={18} />
                View GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
