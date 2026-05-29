import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore, UserRole } from '@/stores/authStore';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const roles: { value: UserRole; label: string; emoji: string }[] = [
    { value: 'student', label: 'Student', emoji: '🎓' },
    { value: 'tutor', label: 'Tutor', emoji: '👩‍🏫' },
    { value: 'parent', label: 'Parent', emoji: '👨‍👩‍👧' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, selectedRole);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="SESA™ Logo" className="h-10 w-10 rounded-lg object-cover" />
            <span className="font-heading font-bold text-2xl text-foreground">SESA<sup className="text-xs">™</sup></span>
          </Link>
          <h1 className="font-heading text-2xl font-bold text-foreground">Create your account</h1>
          <p className="text-muted-foreground text-sm mt-1">Start your learning journey today</p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label className="text-sm font-medium mb-2 block">I am a...</Label>
              <div className="grid grid-cols-3 gap-2">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setSelectedRole(role.value)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-lg border text-sm transition-all ${
                      selectedRole === role.value
                        ? 'border-primary bg-accent text-accent-foreground'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <span className="text-lg">{role.emoji}</span>
                    <span className="text-xs font-medium">{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Min 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
