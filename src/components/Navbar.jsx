import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lógica para cambiar el tema
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-solid 
      ${scrolled
        ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-gray-200 dark:border-white/10 py-3'
        : 'bg-white dark:bg-background-dark border-transparent py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between">

        <div className="flex items-center gap-3 text-text-main dark:text-white">
          <div className="text-primary flex items-center">
            <span className="material-symbols-outlined text-3xl">kayaking</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">Rafting Bolivia</h2>
        </div>

        {/* Barra de Navegacion para escritorio */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6 lg:gap-9">
            {['Paquetes', 'Sobre Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium hover:text-primary transition-colors text-text-main dark:text-gray-300 dark:hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-8">
            {/* Botón Dark Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-text-main dark:text-white transition-colors"
              aria-label="Cambiar tema"
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Botón Reservar */}
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-all text-text-main text-sm font-bold shadow-sm active:scale-95">
              Reservar Ahora
            </button>
          </div>
        </div>

        {/* Navbar para mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-text-main dark:text-white">
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text-main dark:text-white">
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-background-dark ${isOpen ? 'max-h-60 border-t border-gray-100 dark:border-white/5' : 'max-h-0'}`}>
        <div className="p-6 flex flex-col gap-4">
          <a href="#" className="text-base font-medium text-text-main dark:text-white">Paquetes</a>
          <a href="#" className="text-base font-medium text-text-main dark:text-white">Sobre Nosotros</a>
          <a href="#" className="text-base font-medium text-text-main dark:text-white">Contacto</a>
          <button className="w-full bg-primary text-text-main font-bold py-3 rounded-lg mt-2">
            Reservar Ahora
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar