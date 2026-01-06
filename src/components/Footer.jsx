const Footer = ({ company }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl">kayaking</span>
              <span className="text-2xl font-black tracking-tighter uppercase">{company.name}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La empresa líder en turismo de aventura en Bolivia. Comprometidos con la seguridad, la diversión y la preservación de nuestros ríos.
            </p>
            <div className="flex gap-4">
              {['public', 'alternate_email', 'share'].map((icon) => (
                <a key={icon} href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary w-fit pr-4">Explorar</h4>
            <ul className="space-y-4 text-gray-400">
              {['Paquetes', 'Destinos', 'Blog', 'Galería'].map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary w-fit pr-4">Compañía</h4>
            <ul className="space-y-4 text-gray-400">
              {['Sobre Nosotros', 'Equipo', 'Contacto', 'Carreras'].map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary w-fit pr-4">Contacto</h4>
            <p className="text-gray-400 mb-4 text-sm">Suscríbete para recibir ofertas exclusivas.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-background-dark font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Unirme
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {currentYear} {company.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer