import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const assignments = [
  { id: 1, title: 'Quadratic Equations Worksheet', subject: 'Mathematics', due: 'Mar 20, 2026', status: 'pending' as const, grade: null },
  { id: 2, title: 'Newton\'s Laws Lab Report', subject: 'Physics', due: 'Mar 22, 2026', status: 'submitted' as const, grade: null },
  { id: 3, title: 'Essay: Romeo & Juliet Analysis', subject: 'English', due: 'Mar 18, 2026', status: 'graded' as const, grade: '95%' },
  { id: 4, title: 'Organic Chemistry Quiz', subject: 'Chemistry', due: 'Mar 25, 2026', status: 'pending' as const, grade: null },
  { id: 5, title: 'Cell Biology Diagram', subject: 'Biology', due: 'Mar 15, 2026', status: 'graded' as const, grade: '88%' },
];

const statusConfig = {
  pending: { icon: Clock, label: 'Pending', class: 'bg-warning/10 text-warning border-warning/20' },
  submitted: { icon: AlertCircle, label: 'Submitted', class: 'bg-info/10 text-info border-info/20' },
  graded: { icon: CheckCircle2, label: 'Graded', class: 'bg-success/10 text-success border-success/20' },
};

const Assignments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Assignments</h1>
          <p className="text-muted-foreground text-sm mt-1">Track and manage your coursework</p>
        </div>
        <Button className="gradient-primary text-primary-foreground border-0 gap-2">
          <Plus className="h-4 w-4" /> New Assignment
        </Button>
      </div>

      <div className="grid gap-4">
        {assignments.map((a) => {
          const config = statusConfig[a.status];
          return (
            <Card key={a.id} className="p-5 border border-border shadow-soft hover:shadow-card transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                    <FileText className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">{a.subject} · Due {a.due}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {a.grade && (
                    <span className="font-heading font-bold text-lg text-success">{a.grade}</span>
                  )}
                  <Badge variant="outline" className={config.class}>
                    <config.icon className="h-3 w-3 mr-1" />
                    {config.label}
                  </Badge>
                  <Button size="sm" variant="outline">
                    {a.status === 'pending' ? 'Submit' : 'View'}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;
