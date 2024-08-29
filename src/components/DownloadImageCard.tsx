import { useRef } from 'react'
import html2canvas from 'html2canvas'
import { house } from '@/constants'
import { CardTemplate } from './CardTemplate'
import { Button } from './ui/button'

export function DownloadImageCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current)
      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = 'imovel.png'
      link.click()
    }
  }

  return (
    <CardTemplate
      content={
        <div className="pt-6 relative">
          <div ref={cardRef}>
            <img
              src={house}
              alt="Imóvel"
              className="h-80 object-cover rounded-lg"
            />

            <Button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-primary-orange/85 hover:bg-primary-orange/85 w-3/4 cursor-auto">
              Imóvel Guide
            </Button>
          </div>
        </div>
      }
      footer={
        <Button
          onClick={handleDownload}
          className="bg-primary-orange hover:bg-primary-orange/85 w-full"
        >
          Download
        </Button>
      }
    />
  )
}
