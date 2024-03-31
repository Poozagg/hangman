import { useState } from 'react'
import words from './wordList.json'
import './App.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  }
    )

    // guessed letters to be stored in an array which is empty to
    // begin with.
    // --! note this array will be an array of strings !--
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log(wordToGuess)
  return (
    <main>
      <h1> hi </h1>
    </main>
  )
}

export default App
