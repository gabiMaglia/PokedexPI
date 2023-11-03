import {useState} from 'react'

const SearchBar = () => {
  
  const [input, setintput] = useState("")
  
  const handleInput = (e) => {
    const inputValue = e.target.value
    setintput(inputValue)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(input)
  }
  const handleRandomSearch = (e) => {
    e.preventDefault()
    console.log(Math.random())
  }
  return (
    <form action="">
        <button onClick={handleRandomSearch}>addRandom</button>
        <label htmlFor="searchinput"></label>
        <input name='searchinput' type="text" onChange={handleInput} />
        <button onClick={handleSearch}> Buscar </button>
    </form>
  )
}

export default SearchBar