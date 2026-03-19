import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  { id: 1, name: 'Sarah Johnson', role: 'Tutor', lastMsg: 'See you at 10 AM tomorrow!', time: '2m ago', unread: true },
  { id: 2, name: 'Dr. Khan', role: 'Tutor', lastMsg: 'Great work on the lab report.', time: '1h ago', unread: false },
  { id: 3, name: 'Emma Williams', role: 'Tutor', lastMsg: 'Don\'t forget to review chapter 5', time: '3h ago', unread: true },
];

const chatMessages = [
  { id: 1, sender: 'Sarah Johnson', text: 'Hi! How are you doing with the quadratic equations?', time: '9:30 AM', isMe: false },
  { id: 2, sender: 'Me', text: 'Getting better! Still stuck on factoring though.', time: '9:32 AM', isMe: true },
  { id: 3, sender: 'Sarah Johnson', text: 'No worries, we\'ll cover that in detail tomorrow. See you at 10 AM!', time: '9:35 AM', isMe: false },
];

const Messages = () => {
  const [message, setMessage] = useState('');
  const [activeContact, setActiveContact] = useState(contacts[0]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground text-sm mt-1">Chat with tutors and students</p>
      </div>

      <Card className="border border-border shadow-soft overflow-hidden">
        <div className="grid md:grid-cols-3 min-h-[500px]">
          {/* Contacts */}
          <div className="border-r border-border">
            <div className="p-3 border-b border-border">
              <Input placeholder="Search conversations..." className="h-9" />
            </div>
            <div className="divide-y divide-border">
              {contacts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveContact(c)}
                  className={`w-full text-left p-4 hover:bg-muted/50 transition-colors ${activeContact.id === c.id ? 'bg-accent' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
                        <span className="text-xs text-muted-foreground">{c.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
                    </div>
                    {c.unread && <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div className="md:col-span-2 flex flex-col">
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                {activeContact.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{activeContact.name}</p>
                <p className="text-xs text-muted-foreground">{activeContact.role}</p>
              </div>
            </div>

            <div className="flex-1 p-4 space-y-4 overflow-auto">
              {chatMessages.map((m) => (
                <div key={m.id} className={`flex ${m.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                    m.isMe ? 'gradient-primary text-primary-foreground' : 'bg-muted text-foreground'
                  }`}>
                    <p>{m.text}</p>
                    <p className={`text-xs mt-1 ${m.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{m.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button size="icon" className="gradient-primary text-primary-foreground border-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Messages;
