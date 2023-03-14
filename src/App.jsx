import { useState } from 'react'
import './styles/App.css'


import Button from './component/Button'
import EditorialContent from './component/EditorialContent'
import Dropdown from './component/Dropdown'
import Casellajoke from './component/Casellajoke'



function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState(0)
  

  function ue(){
    console.log("Hello World")
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
      />
      <Button
        content="Carica il joke"
        variant="primary"
      />

      <Button
        content="Copia il testo"
        variant="copy"
      />
{
  /*{ joke !== "" &&
        <div id="joke">{joke}</div>

      }
      <Button 
      content="Carica il joke"
      variant="dark"
      clbk = {loadJoke}    
      />

      <Button 
      content="Copia il testo"
      variant={joke === "" ? "disabled" : ""}
      clbk = {copyText}
      />

       <Button 
      content="Copia il testo"
      variant="disabled"
      clbk = {copyText}
      />*/
} 
    
    </div>
  )
}

export default App
