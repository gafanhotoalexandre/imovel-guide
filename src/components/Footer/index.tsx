import { footerLinks, logo } from '@/constants'

export function Footer() {
  return (
    <footer className="bg-primary-darkblue">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-row justify-center sm:gap-8 md:justify-normal">
          <nav aria-label="Global" className="hidden md:block md:flex-1">
            <ul className="flex items-center gap-6 text-sm">
              {footerLinks.map(({ label, href }) => (
                <li key={`${label}-${href}`}>
                  <a
                    className="text-white transition hover:text-gray-100/75"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-center text-xs sm:text-sm text-white lg:text-right">
            &copy; Copyright 2022. Todos os direitos reservados.
          </p>
          {/* Logo */}
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <img src={logo} alt="Logo Imóvel Guide" />
          </div>
        </div>
      </div>
    </footer>
  )
}
