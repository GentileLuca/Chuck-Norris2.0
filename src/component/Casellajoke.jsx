import { useState } from 'react'
import '../styles/casellajoke.css'

function Casellajoke({content}){
  return (
    <div className="casella">
            <p>
              {content}
            </p>
    </div>
  )
}

export default Casellajoke


