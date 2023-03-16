import { useState } from 'react'
import './styles/App.css'


import Button from './component/Button'
import EditorialContent from './component/EditorialContent'
import Dropdown from './component/Dropdown'
import Casellajoke from './component/Casellajoke'



function App() {
  const [joke, setJoke] = useState("Clicca il bottone per caricare il joke")
  

  function getJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      setJoke(data.value)
      console.log(data.value)
    })
  }

  //funzione copia
  function copyToClipboard(text) {
    // Crea un'area di testo nascosta per copiare il testo all'interno
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
  
    // Seleziona il testo nell'area di testo
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
  
    // Copia il testo negli Appunti
    document.execCommand('copy');
  
    // Rimuove l'area di testo nascosta
    document.body.removeChild(textarea);
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
        clkb={() => copyToClipboard(joke)}
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
