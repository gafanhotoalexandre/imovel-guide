import { Button } from './ui/button'
import { PhoneInput } from './PhoneInput'
import { CpfInput } from './CpfInput'
import { CardTemplate } from './CardTemplate'

export function SendMessageCard() {
  return (
    <CardTemplate
      title={<span className="text-primary-darkblue">Mande uma mensagem:</span>}
      content={
        <form>
          <div className="grid w-full items-center gap-4">
            <PhoneInput />
            <CpfInput />

            <div>
              <label htmlFor="subject" className="sr-only">
                Assunto
              </label>

              <textarea
                id="Subject"
                className="p-3 w-full rounded-lg border border-gray-200 align-top shadow-sm resize-none sm:text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                rows={4}
                placeholder="Enter any additional order notes..."
              ></textarea>
            </div>
          </div>
        </form>
      }
      footer={
        <Button className="bg-primary-orange hover:bg-primary-orange/85">
          Enviar Mensagem
        </Button>
      }
      className="max-w-[350px]"
    />
  )
}
