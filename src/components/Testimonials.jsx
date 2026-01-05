const StarRating = ({ rating }) => {
  return (
    <div className="flex text-primary gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-xl fill-current">
          {i < Math.floor(rating) ? 'star' : 'star_half'}
        </span>
      ))}
    </div>
  )
}

const Testimonials = ({ items }) => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            Lo que dicen nuestros aventureros
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-background-light dark:bg-[#152a1d] border border-transparent dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold text-text-main dark:text-white text-base">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">
                    Viajero Verificado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials