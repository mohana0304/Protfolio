import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', category: 'frontend' },
  { name: 'Flutter', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'Docker', category: 'devops' },
  { name: 'Git', category: 'tools' },
  { name: 'Figma', category: 'design' },
  { name: 'UI/UX', category: 'design' },
  { name: 'Machine Learning', category: 'ai' },
];

const categoryColors: Record<string, string> = {
  frontend: 'bg-peach',
  backend: 'bg-mint',
  language: 'bg-lavender',
  devops: 'bg-blush',
  tools: 'bg-secondary',
  design: 'bg-coral/40',
  ai: 'bg-accent',
};

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="section-padding bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & Abilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`px-6 py-3 rounded-full ${categoryColors[skill.category]} 
                text-foreground font-medium shadow-sm hover:shadow-md transition-shadow cursor-default`}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-peach" />
            <span>Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-mint" />
            <span>Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-lavender" />
            <span>Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-coral/40" />
            <span>Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
