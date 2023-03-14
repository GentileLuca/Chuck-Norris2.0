import { useState } from 'react'
import '../styles/casellajoke.css'

function Casellajoke({content}){
  content = "Clicca il bottone per caricare il joke"
  return (
    <div className="casella">
            <p>
              {content}
            </p>
    </div>
  )
}

export default Casellajoke


