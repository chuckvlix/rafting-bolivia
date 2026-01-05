const DestinationCard = ({ item }) => (
  <article className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#1a2c20] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 hover:-translate-y-2">
    <div className="relative w-full h-72 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <span className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-black uppercase backdrop-blur-md shadow-lg
          ${item.intensity === 'Experto'
            ? 'bg-black/70 text-primary border border-primary/30'
            : 'bg-primary text-text-main'}`}>
          <span className="material-symbols-outlined text-sm">{item.intensityIcon}</span>
          {item.intensity}
        </span>
      </div>
    </div>

    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-xs font-medium uppercase tracking-wider">Bolivia</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500 dark:text-gray-400 block uppercase font-bold">Desde</span>
          <span className="text-xl font-black text-primary">
            {item.currency} {item.price}
          </span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8 line-clamp-3">
        {item.description}
      </p>

      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-lg">schedule</span>
            <span className="text-sm font-semibold">{item.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-lg">bar_chart</span>
            <span className="text-sm font-semibold">{item.difficulty}</span>
          </div>
        </div>

        <button className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-text-main transition-all duration-300 active:scale-90">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  </article>
)

export default DestinationCard