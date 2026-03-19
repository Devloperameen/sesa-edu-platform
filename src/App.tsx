import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import DashboardLayout from "./components/dashboard/DashboardLayout.tsx";
import DashboardHome from "./pages/dashboard/DashboardHome.tsx";
import Schedule from "./pages/dashboard/Schedule.tsx";
import Assignments from "./pages/dashboard/Assignments.tsx";
import ProgressPage from "./pages/dashboard/Progress.tsx";
import Payments from "./pages/dashboard/Payments.tsx";
import Messages from "./pages/dashboard/Messages.tsx";
import Settings from "./pages/dashboard/Settings.tsx";
import UsersPage from "./pages/dashboard/UsersPage.tsx";

const queryClient = new QueryClient();

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => (
  <DashboardLayout>{children}</DashboardLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardWrapper><DashboardHome /></DashboardWrapper>} />
          <Route path="/dashboard/schedule" element={<DashboardWrapper><Schedule /></DashboardWrapper>} />
          <Route path="/dashboard/assignments" element={<DashboardWrapper><Assignments /></DashboardWrapper>} />
          <Route path="/dashboard/progress" element={<DashboardWrapper><ProgressPage /></DashboardWrapper>} />
          <Route path="/dashboard/payments" element={<DashboardWrapper><Payments /></DashboardWrapper>} />
          <Route path="/dashboard/messages" element={<DashboardWrapper><Messages /></DashboardWrapper>} />
          <Route path="/dashboard/settings" element={<DashboardWrapper><Settings /></DashboardWrapper>} />
          <Route path="/dashboard/users" element={<DashboardWrapper><UsersPage /></DashboardWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
