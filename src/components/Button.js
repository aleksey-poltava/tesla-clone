import React from 'react'
import '../styles/button.scss'

function Button({style, children}) {
  return (
    <div className={style}>{children}</div>
  )
}

export default Button;