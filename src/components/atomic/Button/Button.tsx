import { ReactNode } from 'react'
import { CardButton } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <CardButton onClick={onClick}>{children}</CardButton>
}
