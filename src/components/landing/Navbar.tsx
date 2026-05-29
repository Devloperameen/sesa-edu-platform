import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="SESA™ Logo" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-heading font-bold text-xl text-foreground">SESA<sup className="text-xs">™</sup></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#features" className="block text-sm text-muted-foreground py-2">Features</a>
          <a href="#how-it-works" className="block text-sm text-muted-foreground py-2">How it Works</a>
          <a href="#pricing" className="block text-sm text-muted-foreground py-2">Pricing</a>
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1"><Button variant="outline" className="w-full" size="sm">Log in</Button></Link>
            <Link to="/signup" className="flex-1"><Button className="w-full" size="sm">Get Started</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
