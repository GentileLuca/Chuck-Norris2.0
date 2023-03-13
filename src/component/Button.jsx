import { useState } from 'react'
import '../styles/button.css'

function Button({content, variant/*, clbk*/}) {
/*
  function componentClickHandler(e){
    console.log("Ho cliccato il componente")

    if(clbk !== undefined && variant !== "disabled"){
      clbk()
    }
  }*/
  return (
    <button className={variant}>
      {content}
    </button>
  )
}

export default Button
