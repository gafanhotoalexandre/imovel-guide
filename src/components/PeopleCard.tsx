import { peopleInfo } from '@/constants'
import { CardTemplate } from './CardTemplate'

export function PeopleCard() {
  function formatNumber(num: number) {
    return new Intl.NumberFormat('pt-br').format(num)
  }

  return (
    <CardTemplate
      content={
        <div className="flex flex-col gap-4 pt-6">
          {peopleInfo.map(({ img, name, phone, points }) => (
            <div className="flex items-stretch gap-4">
              <div className="relative w-40 flex justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square h-40 w-28 rounded-lg object-cover relative z-10"
                />

                <div className="absolute rounded-lg inset-0 z-0 blur-xs opacity-85">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl/tight font-bold text-primary-darkblue">
                  {name}
                </h3>

                <p className="mt-0.5 text-gray-700">
                  {formatNumber(points)} pontos
                </p>

                <p>
                  <a
                    href={phone}
                    className="text-sm text-primary-orange underline lowercase"
                  >
                    Ver telefone
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    />
  )
}
