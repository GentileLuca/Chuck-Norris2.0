import { useEffect, useState } from 'react'
import '../styles/dropdown.css'

function Dropdown(){
  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState("")

function getCategoriJoke(){
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
      })
  }

  useEffect (() => getCategoriJoke(), [])

  function myFunction(e){
    //console.log("valore settat0 -- > ",e.target.value)
    setCategorySelected(e.target.value.toString())
    console.log("categorySelected= ", categorySelected); //prende il valore precedente

  }

 /* useEffect(() => {
    console.log("categorySelected= ", categorySelected);
  }, [categorySelected]);*/


  return (
      <select className='selector' onChange={(e) => myFunction(e)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    )
  
  
}

export default Dropdown
