import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { house } from '@/constants'
import { Separator } from './ui/separator'

export function HouseModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-orange hover:bg-primary-orange/85 uppercase w-full">
          Abrir imagem no modal
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="mb-4"></DialogTitle>
          <Separator className="w-full" />
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img src={house} alt="Imóvel" />
          {/* rounded na img */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
