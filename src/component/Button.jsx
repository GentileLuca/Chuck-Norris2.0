import { useState } from 'react'
import '../styles/button.css'

function Button({content, variant, clbk}) {

  function renderClasses() {
    let classes = ['Button', 'text-centre', 'd-flex', variant]
    return classes.join(" ")
  }

  function componentClickHandler(e){
    console.log("Ho cliccato il componente")

    if(clbk !== undefined && variant !== "disabled"){
      clbk()
    }
  }
  return (
    <div onClick={componentClickHandler()} className={renderClasses()}>
        {content}
    </div>
  )
}

export default Button
