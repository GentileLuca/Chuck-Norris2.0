import { useState } from 'react'
import '../styles/button.css'

function Button({content, variant, clkb}) {
  return (
    <button className={variant} onClick={clkb} >
      {content}
    </button>
  )
}

export default Button
