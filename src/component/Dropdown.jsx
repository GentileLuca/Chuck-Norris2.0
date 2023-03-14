import { useEffect, useState } from 'react'
import '../styles/dropdown.css'

function Dropdown(){
  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState()
  const [open, setOpen] = useState(false)

function getCategoriJoke(){
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
      })
  }

  function myFunction(category){
    setCategorySelected(category.category)
    console.log("cazzpme")
  }

  useEffect (() => getCategoriJoke(), [])


  return (
    <div className="category">
      <div onClick={}>
        <p className='selector'>Select a category</p>
        <p className='freccia'>↓</p>
      </div>

    </div>

  )
  
  
}

export default Dropdown
