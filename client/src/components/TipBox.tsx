import { Lightbulb } from "lucide-react";

interface TipBoxProps {
  title?: string;
  children: React.ReactNode;
}

export function TipBox({ title = "小提示", children }: TipBoxProps) {
  return (
    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 my-6 flex gap-4">
      <div className="shrink-0">
        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
          <Lightbulb className="w-5 h-5" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-secondary-foreground mb-1">{title}</h4>
        <div className="text-muted-foreground text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
