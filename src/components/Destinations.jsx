import DestinationCard from "./DestinationsCard"

const Destinations = ({ items }) => {
  return (
    <section id="paquetes" className="py-24 px-6 lg:px-10 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-2 block">Aventuras Disponibles</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white leading-tight">
              Nuestros Destinos <span className="text-primary">Top</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm md:text-right leading-relaxed">
            Elige tu nivel de intensidad. Desde paseos escénicos hasta rápidos de clase IV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((dest) => (
            <DestinationCard key={dest.id} item={dest} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations