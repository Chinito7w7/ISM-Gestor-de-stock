
export const AboutSectionHome = () => {
    return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center border-t border-border pt-8">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Acerca de
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            ISM (Inventory Stock Manager) es una aplicación diseñada para ayudar a pequeños negocios y emprendedores a organizar y controlar su inventario de forma simple y eficiente. La plataforma permite gestionar productos, visualizar el estado del stock en tiempo real y obtener estadísticas útiles para tomar mejores decisiones.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Cada usuario cuenta con su propio espacio de trabajo, donde puede administrar su catálogo de productos, actualizar cantidades disponibles y analizar el rendimiento de su inventario desde un panel claro y fácil de usar.
            
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            El objetivo de ISM es ofrecer una herramienta moderna, rápida y accesible que simplifique la gestión del stock sin necesidad de sistemas complejos, permitiendo que cualquier negocio pueda tener control total sobre sus productos.
        </p>
      </div>
    </section>
    )
}   
