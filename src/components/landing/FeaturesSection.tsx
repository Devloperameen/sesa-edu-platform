import { Calendar, Video, BookOpen, CreditCard, BarChart3, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Book home visits or online sessions with intelligent calendar management and reminders.',
  },
  {
    icon: Video,
    title: 'Live Classes',
    description: 'HD video sessions with screen sharing, whiteboard, and real-time chat built in.',
  },
  {
    icon: BookOpen,
    title: 'Assignments & Quizzes',
    description: 'Create, submit, and grade assignments with file uploads and automated scoring.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Secure payment processing with invoicing, receipts, and subscription management.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Detailed dashboards tracking grades, attendance, and learning milestones.',
  },
  {
    icon: MessageSquare,
    title: 'Real-time Chat',
    description: 'Instant messaging between tutors, students, and parents with notifications.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need for <span className="text-gradient-primary">effective learning</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete platform connecting tutors, students, and parents with powerful tools for education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:gradient-primary transition-all duration-300">
                <feature.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
