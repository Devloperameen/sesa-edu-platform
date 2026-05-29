import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium">
              <img src="/logo.png" alt="SESA™" className="h-4 w-4 rounded-sm object-cover" />
              Safe Educational & Skill Academy
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Quality Education,{' '}
              <span className="text-gradient-primary">Right at Home</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              SESA™ connects you with expert tutors for personalized home visits or live online sessions. Schedule, learn, and track progress — all in one platform.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/signup">
                <Button size="lg" className="gap-2 gradient-primary text-primary-foreground border-0 shadow-elevated hover:opacity-90 transition-opacity">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-success" />
                Free 7-day trial
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-success" />
                No credit card required
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={heroImage} alt="Tutor and student learning together" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-warm flex items-center justify-center text-secondary-foreground font-bold text-sm">98</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Avg. Score</p>
                  <p className="text-xs text-muted-foreground">+12% this month</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
