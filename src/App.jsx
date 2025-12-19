import { useState } from 'react'
import './App.css'

function App() {
  const [randomNumber] = useState(Math.floor(Math.random() * 31))
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("")

  function handleClick() {
    const guess = Number(inputValue)

    if (guess === randomNumber) {
      setMessage("Correct! 🎉")
    } else {
      if (guess < randomNumber) {
        setMessage("Too low! 📉")
      } else {
        setMessage("Too high! 📈")
      }
      
    }
  }

  return (
    <div className="App">
      <h1>Guess The Number Game</h1>
      <h2>Guess a number between 0-30</h2>
      <input
        className='input'
        type="number"
        min="0"
        max="30"
        placeholder="Enter a number between 0-30"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleClick}>Guess</button>

      <p>{message}</p>
    </div>
  )
}

export default App
