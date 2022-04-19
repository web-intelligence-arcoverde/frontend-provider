/* eslint-disable react/require-default-props */
import { ReactNode } from 'react'
import { CardButton } from './styles'

interface ButtonProps {
  background?: any
  children: ReactNode
  onClick: () => void
  onMouseOver: () => void
}

export const Button = ({
  children,
  onClick,
  background,
  onMouseOver,
}: ButtonProps) => {
  return (
    <CardButton
      onMouseOver={onMouseOver}
      background={background}
      onClick={onClick}
    >
      {children}
    </CardButton>
  )
}
