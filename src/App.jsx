import { useState } from 'react'
import './styles/App.css'


import Button from './component/Button'
import EditorialContent from './component/EditorialContent'
import Dropdown from './component/Dropdown'
import Casellajoke from './component/Casellajoke'



function App() {
  const [joke, setJoke] = useState("")

  function getJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      setJoke(data.value)
      console.log(data.value)
    })
  }


  return (
    <div className="App">

      <EditorialContent
        title="Webapp API Chuck Norris"
        content="Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto."
      />

      <img src="../public/img/chuck.png" alt="immagine di Chuck"  className='chuck'/>

      <Dropdown

      />

      <Casellajoke
        content={joke}
      />
      <Button
        content="Carica il joke"
        variant="primary"
        clkb={() => getJoke()}
      />

      <Button
        content="Copia il testo"
        variant="copy"
      />
{
  /*{ joke !== "" &&
        <div id="joke">{joke}</div>

      }*/
} 
    
    </div>
  )
}

export default App
