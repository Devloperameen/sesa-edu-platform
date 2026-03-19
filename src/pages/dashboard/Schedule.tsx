import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Plus, Video, Home } from 'lucide-react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const mockEvents = [
  { id: 1, day: 19, title: 'Math - Sarah J.', time: '10:00 AM', type: 'online' as const },
  { id: 2, day: 19, title: 'Physics - Dr. Khan', time: '2:00 PM', type: 'home' as const },
  { id: 3, day: 21, title: 'English - Emma W.', time: '11:00 AM', type: 'online' as const },
  { id: 4, day: 23, title: 'Chemistry - Prof. Lee', time: '9:00 AM', type: 'home' as const },
  { id: 5, day: 25, title: 'Biology - Dr. Patel', time: '3:00 PM', type: 'online' as const },
];

const Schedule = () => {
  const [currentMonth] = useState(new Date(2026, 2)); // March 2026
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = 19;

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Schedule</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your tutoring sessions</p>
        </div>
        <Button className="gradient-primary text-primary-foreground border-0 gap-2">
          <Plus className="h-4 w-4" /> Book Session
        </Button>
      </div>

      <Card className="p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-semibold text-lg text-foreground">
            March {year}
          </h2>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((d) => (
            <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">{d}</div>
          ))}
          {days.map((day, i) => {
            const events = day ? mockEvents.filter((e) => e.day === day) : [];
            const isToday = day === today;
            return (
              <div
                key={i}
                className={`min-h-[80px] p-1.5 rounded-lg border transition-colors ${
                  day ? 'border-border hover:border-primary/30 cursor-pointer' : 'border-transparent'
                } ${isToday ? 'bg-accent' : ''}`}
              >
                {day && (
                  <>
                    <span className={`text-xs font-medium ${isToday ? 'text-primary font-bold' : 'text-foreground'}`}>
                      {day}
                    </span>
                    <div className="space-y-1 mt-1">
                      {events.map((ev) => (
                        <div
                          key={ev.id}
                          className={`text-xs px-1.5 py-1 rounded flex items-center gap-1 ${
                            ev.type === 'online' ? 'bg-info/10 text-info' : 'bg-secondary/10 text-secondary'
                          }`}
                        >
                          {ev.type === 'online' ? <Video className="h-3 w-3 flex-shrink-0" /> : <Home className="h-3 w-3 flex-shrink-0" />}
                          <span className="truncate">{ev.time}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Today's schedule */}
      <Card className="p-6 border border-border shadow-soft">
        <h3 className="font-heading font-semibold text-foreground mb-4">Today's Sessions</h3>
        <div className="space-y-3">
          {mockEvents.filter((e) => e.day === today).map((ev) => (
            <div key={ev.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  ev.type === 'online' ? 'bg-info/10' : 'bg-secondary/10'
                }`}>
                  {ev.type === 'online' ? <Video className="h-5 w-5 text-info" /> : <Home className="h-5 w-5 text-secondary" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{ev.title}</p>
                  <p className="text-xs text-muted-foreground">{ev.time} · {ev.type === 'online' ? 'Online' : 'Home Visit'}</p>
                </div>
              </div>
              <Button size="sm" variant={ev.type === 'online' ? 'default' : 'outline'}>
                {ev.type === 'online' ? 'Join' : 'View'}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Schedule;
