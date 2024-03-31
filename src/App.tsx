import { useState } from 'react'
import words from './wordList.json'
import './App.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  }
    )
  console.log(wordToGuess)
  return (
    <main>
      <h1> hi </h1>
    </main>
  )
}

export default App
