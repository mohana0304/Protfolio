import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Kongu Engineering College',
    location: 'Perundurai',
    period: '2024 - 2026',
    status: 'Pursuing',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Yadava College',
    location: 'Madurai',
    period: '2021 - 2024',
    status: 'Completed',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Allwin Matriculation Higher Secondary School',
    location: 'Ramanathapuram',
    period: '2019 - 2021',
    status: 'Completed',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground italic">
            "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think."
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary-foreground" size={28} />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-mint text-foreground' 
                        : 'bg-lavender text-foreground'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
