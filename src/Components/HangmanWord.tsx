export default function HangmanWord() {
  const wordToGuess = "account"
  const guessedLetters = ["a", "c", "o"]
  const letters = wordToGuess.split('').map((letter, index) => {
    return <span className="letters" key={index}>
      {/* if the letters in wordToGuess Array is guessedLetter */}
      <span
        style={(guessedLetters.includes(letter)) ? {visibility: "visible"} : {visibility: "hidden"}}
      >
        {letter}
      </span>
    </span>
  })

  return (
    <div>
      <span
        className="letters--of--word--to--guess"
      >
        {letters}
      </span>
    </div>
  )
}
