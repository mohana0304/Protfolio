import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

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
              className="glass-card rounded-2xl overflow-hidden group relative h-[320px]"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
              
              {/* Dark overlay that intensifies on hover */}
              <div className="absolute inset-0 bg-background/30 transition-all duration-500 group-hover:bg-background/80" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col p-6 transition-all duration-500 group-hover:justify-start">
                {/* Title - always visible */}
                <h3 className="text-xl font-bold text-foreground mb-2 transition-all duration-500 group-hover:mb-4">
                  {project.title}
                </h3>
                
                {/* Description - expands on hover */}
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm text-muted-foreground leading-relaxed transition-all duration-500 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40">
                    {project.description}
                  </p>
                </div>
                
                {/* Tags - slide up on hover */}
                <div className="flex flex-wrap gap-2 transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button - appears on hover */}
                <div className="mt-4 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <Button asChild size="sm" variant="outline" className="rounded-full w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
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
          <Button asChild variant="outline" className="rounded-full px-8 py-6">
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