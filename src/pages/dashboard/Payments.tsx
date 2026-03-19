import { Card } from '@/components/ui/card';
import { CreditCard, DollarSign, Receipt, TrendingUp } from 'lucide-react';

const payments = [
  { id: 1, description: 'Math Tutoring - Sarah J.', date: 'Mar 15, 2026', amount: '$45.00', status: 'Paid' },
  { id: 2, description: 'Physics Session - Dr. Khan', date: 'Mar 12, 2026', amount: '$60.00', status: 'Paid' },
  { id: 3, description: 'English Package (4 sessions)', date: 'Mar 10, 2026', amount: '$150.00', status: 'Paid' },
  { id: 4, description: 'Chemistry - Prof. Lee', date: 'Mar 25, 2026', amount: '$55.00', status: 'Upcoming' },
];

const Payments = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground">Payments</h1>
      <p className="text-muted-foreground text-sm mt-1">Manage billing and payment history</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: DollarSign, label: 'Total Spent', value: '$1,240', color: 'bg-primary/10 text-primary' },
        { icon: Receipt, label: 'This Month', value: '$255', color: 'bg-info/10 text-info' },
        { icon: CreditCard, label: 'Next Payment', value: '$55', color: 'bg-warning/10 text-warning' },
        { icon: TrendingUp, label: 'Sessions', value: '28', color: 'bg-success/10 text-success' },
      ].map((s) => (
        <Card key={s.label} className="p-5 border border-border shadow-soft">
          <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-3 ${s.color}`}>
            <s.icon className="h-5 w-5" />
          </div>
          <p className="text-2xl font-heading font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
        </Card>
      ))}
    </div>

    <Card className="border border-border shadow-soft overflow-hidden">
      <div className="p-5 border-b border-border">
        <h3 className="font-heading font-semibold text-foreground">Payment History</h3>
      </div>
      <div className="divide-y divide-border">
        {payments.map((p) => (
          <div key={p.id} className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm font-medium text-foreground">{p.description}</p>
              <p className="text-xs text-muted-foreground">{p.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-heading font-semibold text-foreground">{p.amount}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                p.status === 'Paid' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
              }`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default Payments;
