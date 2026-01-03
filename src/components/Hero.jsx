const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="flex min-h-[600px] lg:min-h-[85vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 lg:p-10 transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2000&auto=format&fit=crop")`
        }}
      >
        <div className="flex flex-col gap-6 text-center max-w-[900px] animate-fade-in-up">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.04em] drop-shadow-2xl">
            Adrenalina Pura <br />
            <span className="text-primary">en Bolivia</span>
          </h1>

          <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Vive la experiencia definitiva de rafting en los ríos Pilcomayo y Río Grande.
            Seguridad, diversión y naturaleza extrema.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="group relative flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-primary/90 transition-all hover:scale-105 text-text-main text-lg font-bold shadow-xl shadow-primary/20">
              <span className="truncate">Explorar Paquetes</span>
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-lg font-bold transition-all active:scale-95">
              <span className="truncate">Contáctanos</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
        </div>
      </div>
    </section>
  )
}

export default Hero