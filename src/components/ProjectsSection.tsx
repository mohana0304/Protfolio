import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const projects = [
  {
    title: 'FarmGuide-AI',
    description: 'AI-powered agricultural assistant helping farmers with crop prediction, disease detection, and farming recommendations using machine learning.',
    tags: ['TypeScript', 'Machine Learning', 'AI', 'Agriculture', 'React'],
    github: 'https://github.com/mohana0304/FarmGuide-AI',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
  },
  {
    title: 'Kids Passion Analyzer',
    description: 'Personalized interactive games platform creating fun, engaging, and educational experiences for children aged 5-16.',
    tags: ['TypeScript', 'Education', 'Games', 'Interactive', 'UI/UX'],
    github: 'https://github.com/mohana0304/kids_passion_Analyser',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
  },
  {
    title: 'Multifunctional Finance Tracker',
    description: 'Comprehensive financial tracking system with budgeting, expense analysis, and financial planning features.',
    tags: ['Dart', 'Flutter', 'Finance', 'Mobile App', 'Firebase'],
    github: 'https://github.com/mohana0304/Mutifunctional_finance_tracking_system',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
  },
  {
    title: 'StudyMate',
    description: 'Intelligent study assistant that helps students organize materials, track progress, and optimize learning schedules.',
    tags: ['Python', 'Education', 'Productivity', 'Learning', 'AI'],
    github: 'https://github.com/mohana0304/StudyMate',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
  },
  {
    title: 'Travel Chatbot',
    description: 'AI-powered travel assistant chatbot providing destination recommendations, itinerary planning, and travel information.',
    tags: ['Dart', 'Chatbot', 'AI', 'Travel', 'Flutter'],
    github: 'https://github.com/mohana0304/Travel_chatbot',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
  },
  {
    title: 'Pantry-Chef',
    description: 'Recipe recommendation system that suggests meals based on ingredients available in your pantry.',
    tags: ['JavaScript', 'React', 'Cooking', 'Recipes', 'Node.js'],
    github: 'https://github.com/mohana0304/Pantry-Chef',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 heading-bold">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development, AI/ML applications, and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="glass-card rounded-2xl overflow-hidden group relative h-[320px] cursor-pointer"
            >
              {/* Background Image - darker when hovered */}
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-105 brightness-50' : ''
                }`}
              />
              
              {/* Main content - always visible */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                  {project.title}
                </h3>
                
                {/* Tags - always visible */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* White details overlay on hover */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl p-6 flex flex-col shadow-2xl"
                  >
                    {/* Close indicator (optional) */}
                    <div className="flex justify-end mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <X size={12} className="text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Project title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Project description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    
                    {/* All tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action button */}
                    <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button asChild variant="outline" className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary/10">
            <a href="https://github.com/mohana0304?tab=repositories" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            Explore more repositories and contributions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;