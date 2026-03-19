import { useAuthStore } from '@/stores/authStore';
import { Card } from '@/components/ui/card';
import { Calendar, BookOpen, Video, TrendingUp, Users, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const weeklyData = [
  { day: 'Mon', hours: 2 }, { day: 'Tue', hours: 3 }, { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4 }, { day: 'Fri', hours: 2.5 }, { day: 'Sat', hours: 3 }, { day: 'Sun', hours: 1 },
];

const progressData = [
  { month: 'Jan', score: 72 }, { month: 'Feb', score: 75 }, { month: 'Mar', score: 78 },
  { month: 'Apr', score: 82 }, { month: 'May', score: 88 }, { month: 'Jun', score: 92 },
];

const upcomingSessions = [
  { id: 1, subject: 'Mathematics', tutor: 'Sarah J.', time: '10:00 AM', type: 'Online', date: 'Today' },
  { id: 2, subject: 'Physics', tutor: 'Dr. Khan', time: '2:00 PM', type: 'Home Visit', date: 'Today' },
  { id: 3, subject: 'English', tutor: 'Emma W.', time: '11:00 AM', type: 'Online', date: 'Tomorrow' },
];

const DashboardHome = () => {
  const user = useAuthStore((s) => s.user);

  const stats = [
    { icon: Calendar, label: 'Upcoming Sessions', value: '5', color: 'bg-primary/10 text-primary' },
    { icon: BookOpen, label: 'Active Assignments', value: '8', color: 'bg-secondary/10 text-secondary' },
    { icon: Video, label: 'Hours This Week', value: '12.5', color: 'bg-info/10 text-info' },
    { icon: TrendingUp, label: 'Avg. Score', value: '92%', color: 'bg-success/10 text-success' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Welcome back, {user?.name?.split(' ')[0]} 👋
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Here's what's happening with your learning today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5 border border-border shadow-soft">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="lg:col-span-2 p-6 border border-border shadow-soft">
          <h3 className="font-heading font-semibold text-foreground mb-4">Study Hours This Week</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip />
              <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Upcoming sessions */}
        <Card className="p-6 border border-border shadow-soft">
          <h3 className="font-heading font-semibold text-foreground mb-4">Upcoming Sessions</h3>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{session.subject}</p>
                  <p className="text-xs text-muted-foreground">{session.tutor} · {session.time}</p>
                  <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                    session.type === 'Online' ? 'bg-info/10 text-info' : 'bg-secondary/10 text-secondary'
                  }`}>
                    {session.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Progress chart */}
      <Card className="p-6 border border-border shadow-soft">
        <h3 className="font-heading font-semibold text-foreground mb-4">Performance Trend</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} domain={[60, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default DashboardHome;
