const Features = ({ items }) => {
  return (
    <section className="bg-white dark:bg-background-dark py-16 px-6 border-b border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center group">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-3">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-base">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features