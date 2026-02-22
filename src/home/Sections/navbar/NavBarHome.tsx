
import { useState } from "react"
import { Package, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavbarHome() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="ISM Home">
          <div className="flex h-15 w-15 items-center justify-center rounded-lg bg-secondary">
            <Package  className="h-10 w-10 text-secondary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            ISM
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#hero"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Acerca de
          </a>
          <a
            href="#features"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Caracteristicas
          </a>
          <a
            href="#howWork"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ¿Como funciona?
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="default" className="shadow-lg cursor-pointer bg-green-400 w-full mx-5 text-black hover:bg-green-600 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Iniciar sesión
          </Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#hero"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#about"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Acerca de
            </a>
            <a
              href="#features"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Caracteristicas
            </a>
            <a
              href="#howWork"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              ¿Como funciona?
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="default" className="cursor-pointer bg-green-400 w-full text-black hover:bg-green-600">
                Iniciar sesión
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
