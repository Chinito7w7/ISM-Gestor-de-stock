import { StepsCardGrid } from "./components/StepsCardGrid.tsx"
import {STEPS} from "./constants/steps.ts"
export const HowWorkSectionHome = () => {
  return (
    <section id="howWork" className="relative py-24 lg:py-32">
        
        <div className="relative mx-auto max-w-7xl px-6 border-t border-border pt-8">
        {/* Section Header */}
            <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-10 font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                ¿Como funciona?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                Simplemente sigue estos pasos para ya adminitrar tu inventario de una forma mas sencilla
            </p>
            </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {STEPS.map((step) => (
            <StepsCardGrid key={step.title} {...step} />
        ))}
        </div>
    </section>
  )
}
