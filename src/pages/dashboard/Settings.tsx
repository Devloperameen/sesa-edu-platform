import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/stores/authStore';
import ThemeToggle from '@/components/ThemeToggle';
import { useThemeStore } from '@/stores/themeStore';

const Settings = () => {
  const user = useAuthStore((s) => s.user);
  const { isDark } = useThemeStore();

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account preferences</p>
      </div>

      <Card className="p-6 border border-border shadow-soft space-y-5">
        <h3 className="font-heading font-semibold text-foreground">Profile</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input defaultValue={user?.name || ''} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue={user?.email || ''} type="email" />
          </div>
          <Button className="gradient-primary text-primary-foreground border-0">Save Changes</Button>
        </div>
      </Card>

      <Card className="p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-semibold text-foreground">Appearance</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Currently using {isDark ? 'dark' : 'light'} mode
            </p>
          </div>
          <ThemeToggle />
        </div>
      </Card>

      <Card className="p-6 border border-border shadow-soft space-y-4">
        <h3 className="font-heading font-semibold text-foreground">Notifications</h3>
        <div className="space-y-3">
          {['Email notifications', 'Push notifications', 'Session reminders'].map((label) => (
            <label key={label} className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-foreground">{label}</span>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border text-primary" />
            </label>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Settings;
