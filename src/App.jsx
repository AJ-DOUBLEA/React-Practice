import { useState } from 'react'
import './App.css'

function EasyMode() {
  const [randomNumber] = useState(Math.floor(Math.random() * 31))
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("")
  const [tries, setTries] = useState(10);
  function handleClick() {
    const guess = Number(inputValue)

    if (guess === randomNumber) {
      setMessage("Correct! 🎉")
    
    } 
    else if (guess != randomNumber && tries == 0){
      
      setMessage("Game Over! The correct number was " + randomNumber);
      randomNumber = Math.floor(Math.random() * 101);
      setTries(10);
    }
    else if (guess < randomNumber) {
      setTries(tries - 1);
      setMessage("Too low! 📉, tries = " + (tries - 1))
    } else {
      setTries(tries - 1);
      setMessage("Too high! 📈, tries = " + (tries - 1))
    }
  }

  return (
    <div className="App">
      <h1>Guess The Number Game</h1>
      <h2>Guess a number between 0–30 (Easy Mode)</h2>

      <input
        className="input"
        type="number"
        min="0"
        max="30"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br/><br/><br/>
      <button onClick={handleClick}>Guess</button>

      <p>{message}</p>
    </div>
  )
}
function MediumMode() {
 
  const [randomNumber] = useState(Math.floor(Math.random() * 101))
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("")
  const [tries, setTries] = useState(10);

  function handleClick() {
    const guess = Number(inputValue)

    if (guess === randomNumber) {
      setMessage("Correct! 🎉")
    } else if (guess != randomNumber && tries == 0){
      
      setMessage("Game Over! The correct number was " + randomNumber);
      randomNumber = Math.floor(Math.random() * 101);
      setTries(10);
    } else if (guess < randomNumber) {
      setTries(tries - 1);
      setMessage("Too low! 📉, tries = " + (tries - 1))
      
    } else {
      setTries(tries - 1);
      setMessage("Too high! 📈, tries = " + (tries - 1))
    }
  }

  return (
    <div className="App">
      <h1>Guess The Number Game</h1>
      <h2>Guess a number between 0–100 (Medium Mode)</h2>

      <input
        className="input"
        type="number"
        min="0"
        max="30"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br/><br/><br/>
      <button onClick={handleClick}>Guess</button>

      <p>{message}</p>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState("easy")

  return (
    <div className="App">
      {mode === "easy" ? <EasyMode /> : <MediumMode />}
      <button className="switchButton" onClick={() => setMode(mode === "easy" ? "medium" : "easy")}>
        Switch Mode
      </button>
    </div>
  )
}

export default App
