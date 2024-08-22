import React, { CSSProperties } from 'react'
// import { CSSProperties } from 'styled-components'

const Button = ({
  title,
  onClick,
  backButton,
  btnStyle
}: {
  title: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    backButton?: boolean
  btnStyle?:CSSProperties
}) => {
  return (
    <>
      {backButton ?( <button className="buttonBack" onClick={onClick} style={btnStyle}><span>Back to home</span></button>) :
   (  <button className="button" onClick={onClick}><span>{title}</span></button>) }

</>
  )
}

export default Button
