const FinalCTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Río salvaje"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background-dark/95"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-background-dark">
          ¿Listo para la aventura?
        </h2>
        <p className="text-background-dark/80 text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
          Reserva hoy tu expedición y recibe un <span className="underline decoration-2">10% de descuento</span> en grupos de más de 4 personas.
        </p>

        <button className="inline-flex items-center justify-center rounded-2xl h-16 px-10 bg-background-dark text-white text-xl font-bold hover:scale-105 transition-all shadow-2xl hover:bg-black active:scale-95 group">
          Reservar Mi Cupo
          <span className="material-symbols-outlined ml-2 group-hover:rotate-45 transition-transform">
            send
          </span>
        </button>
      </div>
    </section>
  )
}

export default FinalCTA