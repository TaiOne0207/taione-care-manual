import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />
        <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full animate-in fade-in duration-500">
          {children}
        </main>
        <footer className="p-6 text-center text-sm text-muted-foreground border-t border-border mt-auto">
          <p>© 2025 本一科技 TaiOne Tech. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for Nurses</p>
        </footer>
      </div>
    </div>
  );
}
