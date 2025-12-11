import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Activity, BookOpen, ClipboardList, FileCheck, FileText, Heart, Home, LayoutDashboard, Menu, Camera } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const menuItems = [
  { icon: Home, label: "首頁", href: "/" },
  { icon: BookOpen, label: "第一章：開始使用", href: "/chapter-1" },
  { icon: LayoutDashboard, label: "第二章：認識主畫面", href: "/chapter-2" },
  { icon: FileText, label: "第三章：管理個案", href: "/chapter-3" },
  { icon: ClipboardList, label: "第四章：訪視記錄", href: "/chapter-4" },
  { icon: Activity, label: "第五章：照護評估", href: "/chapter-5" },
  { icon: FileCheck, label: "第六章：報告生成", href: "/chapter-6" },
  { icon: Camera, label: "附錄：Body Cam", href: "/body-cam" },
];

export function MobileNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <span className="font-bold text-lg text-primary">TaiOne Care</span>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground p-6">
            <div className="flex items-center gap-3 mb-10 px-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary leading-tight">TaiOne Care</h1>
                <p className="text-sm text-muted-foreground">操作手冊</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-muted-foreground"
                  )}>
                    <item.icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "text-primary")} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
