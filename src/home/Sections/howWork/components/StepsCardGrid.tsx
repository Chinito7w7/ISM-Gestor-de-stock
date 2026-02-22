import type { LucideIcon } from "lucide-react";

interface StepCardInterface {
    icon:LucideIcon;
    title:string;
    description:string
}

export const StepsCardGrid = ({icon:Icon,title,description}:StepCardInterface) => {
  return (
      <article className="group relative rounded-2xl border border-glass-border bg-glass p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </article>
    );
}
