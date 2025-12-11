import { cn } from "@/lib/utils";
import { ArrowDown, Check, X } from "lucide-react";

interface FlowNodeProps {
  title: string;
  subtitle?: string;
  role: "Cam" | "App/Cam";
  type?: "process" | "start" | "end" | "decision";
  className?: string;
}

function FlowNode({ title, subtitle, role, type = "process", className }: FlowNodeProps) {
  const isStartEnd = type === "start" || type === "end";
  const isDecision = type === "decision";

  return (
    <div className={cn("relative flex items-center gap-4 group", className)}>
      {/* Role Label */}
      <div className="w-20 text-right font-bold text-muted-foreground text-sm shrink-0">
        {role}
      </div>

      {/* Node Shape */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center text-center border-2 transition-all duration-300 hover:shadow-md bg-card",
          isStartEnd && "w-40 h-16 rounded-full border-primary/50 bg-primary/5",
          !isStartEnd && !isDecision && "w-48 h-20 rounded-xl border-border",
          isDecision && "w-40 h-40 rotate-45 border-orange-300 bg-orange-50/50"
        )}
      >
        <div className={cn("flex flex-col items-center justify-center p-2", isDecision && "-rotate-45")}>
          <span className="font-bold text-foreground text-sm">{title}</span>
          {subtitle && <span className="text-xs text-muted-foreground mt-1">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
}

function Arrow({ label, type = "vertical" }: { label?: string; type?: "vertical" | "horizontal" }) {
  return (
    <div className={cn("flex items-center justify-center", type === "vertical" ? "h-12 ml-24" : "w-12")}>
      <div className="relative h-full w-px bg-border">
        <ArrowDown className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-border" />
        {label && (
          <span className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-muted-foreground bg-background px-1">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export function FlowChart() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-card/50 rounded-2xl border border-border/50">
      <div className="flex flex-col items-start relative">
        
        {/* Step 1 */}
        <FlowNode role="Cam" type="start" title="按下 Power 鍵" />
        <Arrow />

        {/* Step 2 */}
        <FlowNode role="Cam" title="停止錄音/錄影" subtitle="開啟 Wi-Fi" />
        <Arrow />

        {/* Step 3 */}
        <FlowNode role="Cam" title="等待 App 連接" />
        <Arrow />

        {/* Decision */}
        <div className="relative">
            <FlowNode role="Cam" type="decision" title="1分鐘內" subtitle="連線是否成功?" />
            
            {/* No Path (Right) */}
            <div className="absolute top-1/2 left-[calc(100%+1rem)] w-24 h-px bg-border -translate-y-1/2 flex items-center">
                <span className="absolute -top-5 left-2 text-xs text-muted-foreground">否</span>
                <div className="w-full h-px bg-border" />
                <div className="absolute right-0 top-0 h-[460px] w-px bg-border" /> {/* Long vertical line down */}
            </div>
        </div>

        {/* Yes Path (Down) */}
        <Arrow label="是" />

        {/* Step 4 */}
        <FlowNode role="App/Cam" title="Firmware 更新" />
        <Arrow />

        {/* Step 5 */}
        <FlowNode role="App/Cam" title="SD List 拋轉" subtitle="Mobile" />
        <Arrow />

        {/* Step 6 */}
        <FlowNode role="App/Cam" title="刪除 SD 上" subtitle="已拋轉完成的檔案" />
        <Arrow />

        {/* End */}
        <div className="relative w-full">
            <FlowNode role="Cam" type="end" title="實際關機" />
            {/* Connection from No path */}
            <div className="absolute left-[280px] top-1/2 w-8 h-px bg-border -translate-y-1/2">
                <ArrowDown className="absolute -bottom-1.5 -left-1 w-3 h-3 text-border -rotate-90" />
            </div>
        </div>

      </div>
    </div>
  );
}
