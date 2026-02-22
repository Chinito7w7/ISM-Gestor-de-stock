
import { useState } from "react"
import { Package, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export function NavbarHome() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="ISM Home">
          <div className="flex h-15 w-15 items-center justify-center rounded-lg bg-secondary">
            <Package className="h-10 w-10 text-secondary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            ISM
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="#"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Inicio
          </Link>
          <Link
            to="#"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Caracteristicas
          </Link>
          <Link
            to="#"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ¿Como funciona?
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground cursor-pointer">
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
              href="#caracteristicas"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Caracteristicas
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="sm" className="w-full justify-center text-muted-foreground">
                Iniciar sesión
              </Button>
              <Button
                size="sm"
                className="w-full bg-primary text-primary-foreground hover:bg-accent"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
