import { cn } from "@/lib/utils";
import { BookOpen, Heart, Home, LayoutDashboard, FileText, Activity, ClipboardList, FileCheck } from "lucide-react";
import { Link, useLocation } from "wouter";

const menuItems = [
  { icon: Home, label: "首頁", href: "/" },
  { icon: BookOpen, label: "第一章：開始使用", href: "/chapter-1" },
  { icon: LayoutDashboard, label: "第二章：認識主畫面", href: "/chapter-2" },
  { icon: FileText, label: "第三章：管理個案", href: "/chapter-3" },
  { icon: ClipboardList, label: "第四章：訪視記錄", href: "/chapter-4" },
  { icon: Activity, label: "第五章：照護評估", href: "/chapter-5" },
  { icon: FileCheck, label: "第六章：報告生成", href: "/chapter-6" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-border bg-sidebar text-sidebar-foreground p-6 overflow-y-auto">
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
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-muted-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "text-primary")} />
                {item.label}
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-border">
        <div className="bg-secondary/20 rounded-lg p-4">
          <h4 className="font-bold text-secondary-foreground mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4" /> 溫馨小提醒
          </h4>
          <p className="text-sm text-muted-foreground">
            操作上有任何問題，隨時可以詢問您的單位主管喔！
          </p>
        </div>
      </div>
    </aside>
  );
}
