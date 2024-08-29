import { useState } from 'react'

import { CardTemplate } from './CardTemplate'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Separator } from './ui/separator'

export function RuleOfThreeCalculator() {
  const [valueA, setValueA] = useState<number | undefined>(undefined)
  const [valueB, setValueB] = useState<number | undefined>(undefined)
  const [valueC, setValueC] = useState<number | undefined>(undefined)
  const [result, setResult] = useState<number | undefined>(undefined)

  function handleCalculate() {
    if (valueA !== undefined && valueB !== undefined && valueC !== undefined) {
      const calculatedValue = (valueC * valueB) / valueA
      setResult(calculatedValue)
    }
  }

  function handleInputChange(
    setter: React.Dispatch<React.SetStateAction<number | undefined>>,
    value: string
  ) {
    setter(parseFloat(value))
    setResult(undefined)
  }

  return (
    <CardTemplate
      className="h-full flex flex-col justify-between"
      title={<span className="text-primary-darkblue">Regra de 3</span>}
      content={
        <div className="space-y-6">
          <span className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="60"
              value={valueA !== undefined ? valueA : ''}
              onChange={(e) => handleInputChange(setValueA, e.target.value)}
            />
            <Separator className="flex-1 min-w-10 bg-black" />
            <Input
              type="number"
              placeholder="100"
              value={valueB !== undefined ? valueB : ''}
              onChange={(e) => handleInputChange(setValueB, e.target.value)}
            />
          </span>

          <span className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="30"
              value={valueC !== undefined ? valueC : ''}
              onChange={(e) => handleInputChange(setValueC, e.target.value)}
            />
            <Separator className="flex-1 min-w-10 bg-black" />
            <Input
              type="number"
              readOnly
              placeholder="50"
              value={result !== undefined ? result : ''}
            />
          </span>
        </div>
      }
      footer={
        <Button
          onClick={handleCalculate}
          className="bg-primary-orange hover:bg-primary-orange/85 w-28"
        >
          Calcular
        </Button>
      }
    />
  )
}
