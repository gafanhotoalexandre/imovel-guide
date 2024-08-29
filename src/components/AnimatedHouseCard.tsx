import { CardTemplate } from './CardTemplate'
import { house } from '@/constants'

export function AnimatedHouseCard() {
  return (
    <CardTemplate
      content={
        <div className="mt-6 relative overflow-hidden">
          <img
            src={house}
            alt="Imóvel"
            className="h-96 object-cover rounded-lg transform scale-110 transition-transform duration-1000 ease-out"
            style={{ animation: 'zoomOut 10s ease forwards' }}
          />
        </div>
      }
    />
  )
}
