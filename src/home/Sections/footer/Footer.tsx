import { Package } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <Package className="text-secondary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">ISM</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Una plataforma completa diseñada para eliminar la falta de stock, reducir el desperdicio y dotar de superpoderes a tu equipo de operaciones.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {'© 2026 ISM. Todos los derechos reservados.'}
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Chinito7w7/ISM-Gestor-de-stock" className="text-xs text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/lautarolujan/" className="text-xs text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom */}
      </div>
    </footer>
  )
}
