import { FEATURES_DATA } from "./constants/features";
import { FeatureCardGrid } from "./components/FeatureCardGrid";
export function FeaturesSectionHome() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/3 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 border-t border-border pt-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Caracteristicas
          </p>
          <h2 className="mt-3 text-3xl font-normal tracking-tight text-foreground sm:text-4xl text-balance">
            Todo lo que necesitas para manejar tu inventario
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Una plataforma completa diseñada para eliminar la falta de stock, reducir el desperdicio y dotar de superpoderes a tu equipo de operaciones.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES_DATA.map((feature) => (
            <FeatureCardGrid key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
