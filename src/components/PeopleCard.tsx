import { peopleInfo } from '@/constants'
import { CardTemplate } from './CardTemplate'

export default function PeopleCard() {
  function formatNumber(num: number) {
    return new Intl.NumberFormat('pt-br').format(num)
  }

  return (
    <CardTemplate
      content={
        <div className="flex flex-col gap-4 pt-6">
          {peopleInfo.map(({ img, name, phone, points }) => (
            <div className="flex items-stretch gap-4">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square h-40 w-24 rounded-lg object-cover"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-lg/tight font-medium text-gray-900">
                  {name}
                </h3>

                <p className="mt-0.5 text-gray-700">
                  {formatNumber(points)} pontos
                </p>

                <p>
                  <a href={phone}>Ver telefone</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    />
  )
}
