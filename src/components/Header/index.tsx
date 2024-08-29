import MobileMenu from './MobileMenu'
import { logo, navLinks, secondaryLinks } from '@/constants'

export function Header() {
  return (
    <header className="bg-primary-darkblue">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img src={logo} alt="Logo Imóvel Guide" />
        </a>

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(({ label, href }) => (
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

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-2 sm:items-center">
              <nav aria-label="Global" className="hidden lg:block">
                <ul className="flex items-center gap-6 text-sm">
                  {secondaryLinks.map(({ label, href }) => (
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

              <a
                className="hidden rounded-full border border-white hover:border-primary-darkblue bg-transparent hover:bg-gray-100 px-5 py-2.5 text-sm font-medium text-white hover:text-primary-darkblue transition sm:block sm:ml-2"
                href="#"
              >
                Cadastre-se
              </a>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
