import { CardTemplate } from './CardTemplate'
import { HouseModal } from './HouseModal'
import { house } from '@/constants'

export function HouseCard() {
  return (
    <CardTemplate
      content={
        <div className="pt-6">
          <img
            src={house}
            alt="Imóvel"
            className="h-80 object-cover rounded-lg"
          />
        </div>
      }
      footer={<HouseModal />}
    />
  )
}
