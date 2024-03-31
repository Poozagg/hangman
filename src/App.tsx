import { useState } from 'react'
import words from './wordList.json'
import './App.css'
import HangmanDrawing from './Components/HangmanDrawing'
import HangmanWord from './Components/HangmanWord'
import Keyboard from './Components/Keyboard'

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
    <div className='container'>
      <div className='displayWonOrLost'>
        <h6> 🎉🏆 🏆 You won!!!🏆 🏆 🎉</h6>
        <h6> You Lost! 👎🏽 👎🏽 👎🏽  </h6>
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
