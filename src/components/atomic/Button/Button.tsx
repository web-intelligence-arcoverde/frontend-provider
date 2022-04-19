/* eslint-disable react/require-default-props */
import { ReactNode } from 'react'
import { CardButton } from './styles'

interface ButtonProps {
  background?: any
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick, background }: ButtonProps) => {
  return (
    <CardButton background={background} onClick={onClick}>
      {children}
    </CardButton>
  )
}
