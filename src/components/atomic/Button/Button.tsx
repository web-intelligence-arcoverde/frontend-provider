/* eslint-disable react/require-default-props */
import { ReactNode } from 'react'
import { CardButton } from './styles'

interface ButtonProps {
  background?: string
  color?: string
  children: ReactNode
  onClick: () => void
  onMouseOver?: () => void
}

export const Button = ({
  children,
  onClick,
  background,
  onMouseOver,
  color,
}: ButtonProps) => {
  return (
    <CardButton
      color={color}
      onMouseOver={onMouseOver}
      background={background}
      onClick={onClick}
    >
      {children}
    </CardButton>
  )
}
