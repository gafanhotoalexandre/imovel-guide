import { ReactNode } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'

interface CardTemplateProps {
  title?: ReactNode
  content: ReactNode
  footer?: ReactNode
  className?: string
}

export function CardTemplate({
  title,
  content,
  footer,
  className = '',
}: CardTemplateProps) {
  return (
    <Card className={cn(className)}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
