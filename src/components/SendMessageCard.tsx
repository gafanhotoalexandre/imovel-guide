import { useState } from 'react'
import { Button } from './ui/button'
import { PhoneInput } from './PhoneInput'
import { CpfInput } from './CpfInput'
import { CardTemplate } from './CardTemplate'
import { toast } from 'sonner'

export function SendMessageCard() {
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [subject, setSubject] = useState('')

  const handleSubmit = () => {
    if (!phone || !cpf || !subject) {
      toast.error('Por favor, preencha todos os campos.', {
        description:
          'Certifique-se de que todos os campos estão preenchidos antes de enviar a mensagem.',
      })
    } else {
      toast.success('Mensagem enviada com sucesso!', {
        description: 'Sua mensagem foi enviada e recebida.',
      })
    }
  }

  return (
    <CardTemplate
      title={<span className="text-primary-darkblue">Mande uma mensagem:</span>}
      content={
        <form>
          <div className="grid w-full items-center gap-4">
            <PhoneInput
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <CpfInput value={cpf} onChange={(e) => setCpf(e.target.value)} />

            <div>
              <label htmlFor="subject" className="sr-only">
                Assunto
              </label>

              <textarea
                id="Subject"
                className="p-3 w-full rounded-lg border border-gray-200 align-top shadow-sm resize-none sm:text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                rows={4}
                placeholder="Digite o assunto..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></textarea>
            </div>
          </div>
        </form>
      }
      footer={
        <Button
          onClick={handleSubmit}
          className="bg-primary-orange hover:bg-primary-orange/85"
          type="submit"
        >
          Enviar Mensagem
        </Button>
      }
    />
  )
}
