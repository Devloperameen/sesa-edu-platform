import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const subjectScores = [
  { subject: 'Math', score: 92 },
  { subject: 'Physics', score: 85 },
  { subject: 'English', score: 95 },
  { subject: 'Chemistry', score: 78 },
  { subject: 'Biology', score: 88 },
];

const attendanceData = [
  { name: 'Attended', value: 42 },
  { name: 'Missed', value: 3 },
];

const COLORS = ['hsl(172, 66%, 35%)', 'hsl(0, 72%, 51%)'];

const ProgressPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Progress</h1>
        <p className="text-muted-foreground text-sm mt-1">Track your learning journey</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-5 border border-border shadow-soft text-center">
          <p className="text-3xl font-heading font-bold text-primary">88%</p>
          <p className="text-sm text-muted-foreground mt-1">Overall Average</p>
        </Card>
        <Card className="p-5 border border-border shadow-soft text-center">
          <p className="text-3xl font-heading font-bold text-success">42</p>
          <p className="text-sm text-muted-foreground mt-1">Sessions Completed</p>
        </Card>
        <Card className="p-5 border border-border shadow-soft text-center">
          <p className="text-3xl font-heading font-bold text-info">15</p>
          <p className="text-sm text-muted-foreground mt-1">Assignments Done</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 border border-border shadow-soft">
          <h3 className="font-heading font-semibold text-foreground mb-4">Scores by Subject</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectScores}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="subject" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border border-border shadow-soft">
          <h3 className="font-heading font-semibold text-foreground mb-4">Attendance</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={attendanceData} innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={4}>
                {attendanceData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {attendanceData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="h-2 w-2 rounded-full" style={{ background: COLORS[i] }} />
                {d.name}: {d.value}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 border border-border shadow-soft">
        <h3 className="font-heading font-semibold text-foreground mb-4">Subject Progress</h3>
        <div className="space-y-4">
          {subjectScores.map((s) => (
            <div key={s.subject} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">{s.subject}</span>
                <span className="text-muted-foreground">{s.score}%</span>
              </div>
              <Progress value={s.score} className="h-2" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProgressPage;
