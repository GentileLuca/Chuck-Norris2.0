import { useEffect, useState } from 'react'
import '../styles/dropdown.css'

function Dropdown({clbk}){
  const [categories, setCategories] = useState([])


function getCategoriJoke(){
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
      })
  }

  useEffect (() => getCategoriJoke(), [])

  function myFunction(e){
    clbk(e.target.value.toString())
  }

  return (
      <select className='selector' onChange={(e) => myFunction(e)}>
         <option value="random">Random</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    )
  
  
}

export default Dropdown
