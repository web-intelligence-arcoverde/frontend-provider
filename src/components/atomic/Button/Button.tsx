import { ReactNode } from 'react'
import { CardButton } from './styles'

interface ButtonProps {
  title: ReactNode
  onClick: () => void
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <CardButton onClick={onClick}>{title}</CardButton>
}
