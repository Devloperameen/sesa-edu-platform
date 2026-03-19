import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users as UsersIcon, Plus } from 'lucide-react';

const users = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Tutor', status: 'Active', subjects: ['Mathematics', 'Physics'] },
  { id: 2, name: 'Alex Chen', email: 'alex@example.com', role: 'Student', status: 'Active', subjects: ['Mathematics'] },
  { id: 3, name: 'Mark Williams', email: 'mark@example.com', role: 'Parent', status: 'Active', subjects: [] },
  { id: 4, name: 'Dr. Khan', email: 'khan@example.com', role: 'Tutor', status: 'Active', subjects: ['Physics', 'Chemistry'] },
  { id: 5, name: 'Emma Watson', email: 'emma@example.com', role: 'Student', status: 'Inactive', subjects: ['English'] },
];

const UsersPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Users</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage platform users</p>
      </div>
      <Button className="gradient-primary text-primary-foreground border-0 gap-2">
        <Plus className="h-4 w-4" /> Add User
      </Button>
    </div>

    <Card className="border border-border shadow-soft overflow-hidden">
      <div className="divide-y divide-border">
        {users.map((u) => (
          <div key={u.id} className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {u.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{u.name}</p>
                <p className="text-xs text-muted-foreground">{u.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-accent/50 text-accent-foreground border-accent">{u.role}</Badge>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                u.status === 'Active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
              }`}>{u.status}</span>
              <Button size="sm" variant="outline">View</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default UsersPage;
