import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SESA™ Logo" className="h-8 w-8 rounded-lg object-cover" />
            <span className="font-heading font-bold text-background">SESA<sup className="text-xs">™</sup></span>
          </div>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <Link to="/login" className="hover:text-background transition-colors">Login</Link>
            <a href="#features" className="hover:text-background transition-colors">Features</a>
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
          </div>
          <p className="text-sm text-background/40">© 2026 SESA™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
