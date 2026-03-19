import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Create Your Profile', description: 'Sign up as a student, parent, or tutor and set your preferences.' },
  { step: '02', title: 'Find & Book', description: 'Browse tutors by subject and availability. Book home visits or online sessions.' },
  { step: '03', title: 'Learn & Grow', description: 'Attend live sessions, complete assignments, and track your progress in real-time.' },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Getting started is <span className="text-gradient-primary">simple</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-primary text-primary-foreground font-heading font-bold text-xl mb-4">
                {s.step}
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
