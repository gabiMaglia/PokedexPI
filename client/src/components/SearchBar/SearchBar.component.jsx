import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {searchPokemonByName, searchPokemonById} from '../../Redux/Actions/actions'

const SearchBar = () => {
  const dispatch = useDispatch()  
  
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    
    dispatch(searchPokemonByName(input))
  }
  const handleRandomSearch = (e) => {
    e.preventDefault()
    console.log(Math.random())
  }
  return (
    <form onSubmit={handleSubmit}>
        <button onClick={handleRandomSearch}>addRandom</button>
        <label htmlFor="searchinput"></label>
        <input onChange={handleChange} id='searchinput' type="text" />
        <button type='submit'> Buscar </button>
    </form>
  )
}

export default SearchBar