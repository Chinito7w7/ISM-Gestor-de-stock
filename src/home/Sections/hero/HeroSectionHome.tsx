import { ArrowRight, Hand, Pen, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSectionHome() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background decorations */}
       {/* <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>  */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex flex-col items-start">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Administra tu{" "}
              <br />
              <span className="text-green-400">Inventario</span>
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              La plataforma inteligente de gestión de inventario que le brinda visibilidad en tiempo real, información predictiva y control total sobre cada artículo de su almacén.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="default"
                className="gap-2 px-8 shadow-lg cursor-pointer bg-green-400 w-full mx-5 text-black hover:bg-green-600 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Iniciar sesión
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-12 flex items-center border-t border-border pt-8 gap-8">
              <div>
                <p className="text-2xl font-light text-foreground flex items-center gap-1">Crea {<Plus />}</p> 
              </div>
              <div className="h-10 w-px bg-border" aria-hidden="true" />
              <div>
                <p className="text-2xl font-light text-foreground flex items-center gap-1.5">Modifica {<Pen />}</p>
              </div>
              <div className="h-10 w-px bg-border" aria-hidden="true" />
              <div>
                <p className="text-2xl font-light text-foreground flex items-center gap-1.5">Organiza <Hand/></p>
              </div>
            </div>
          </div>

          {/* Right: Hero Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Glassmorphism card behind image */}
              <div className="absolute inset-0 -rotate-3 scale-95 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-3 shadow-2xl shadow-secondary/10 backdrop-blur-md">
                <img
                  src="..\src\assets\hero-illustration.jpg"
                  alt="3D isometric illustration of an organized warehouse with digital analytics dashboards"
                  width={600}
                  height={480}
                  className="rounded-xl"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-2 -left-4 rounded-xl border border-border/50 bg-card/80 px-5 py-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-0">
                  <p className="text-xs font-medium text-muted-foreground">Stock Actual</p>
                  <p className="text-xl font-bold text-primary">+300 productos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
