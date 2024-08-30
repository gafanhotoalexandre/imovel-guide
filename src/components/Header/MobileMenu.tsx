import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Separator } from '../ui/separator'

import { navLinks, secondaryLinks } from '@/constants'

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="block rounded p-2.5 text-white transition hover:text-gray-200/75 lg:hidden">
          <span className="sr-only">Toggle menu</span>
          <Menu size={32} />
        </button>
      </SheetTrigger>

      <SheetContent className="pt-8" side="right">
        <SheetHeader>
          <SheetTitle>
            <span className="sr-only">Menu de navegação</span>
          </SheetTitle>
          <SheetDescription>
            <span className="sr-only">Menu de navegação da app</span>
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map(({ label, href }) => (
              <li
                className="border border-primary-darkblue/95 p-4 rounded-md"
                key={`${label}-${href}`}
              >
                <a
                  className="text-primary-darkblue transition hover:text-primary-darkblue/75"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}

            <Separator />

            <li>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {secondaryLinks.map(({ label, href }) => (
                  <li
                    className="border border-primary-darkblue/95 p-4 rounded-md"
                    key={`${label}-${href}`}
                  >
                    <a
                      className="text-primary-darkblue transition hover:text-primary-darkblue/75"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <SheetFooter className="sm:hidden">
          <a
            className="rounded-full w-full mt-4 border border-white hover:border-primary-darkblue bg-primary-darkblue hover:bg-gray-100 px-5 py-2.5 text-sm font-medium text-white hover:text-primary-darkblue transition"
            href="#"
          >
            Cadastre-se
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
