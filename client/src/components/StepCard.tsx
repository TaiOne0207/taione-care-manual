import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function StepCard({ stepNumber, title, children, className }: StepCardProps) {
  return (
    <div className={cn("step-card relative pl-16", className)}>
      <div className="absolute left-6 top-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">
        {stepNumber}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 mt-0">{title}</h3>
      <div className="text-muted-foreground space-y-2">
        {children}
      </div>
    </div>
  );
}
