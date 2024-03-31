export default function HangmanWord() {
  const wordToGuess = "account"
  const letters = wordToGuess.split('').map((letter, index) => {
    return <span className="letters" key={index}>
      {letter}
    </span>
  })
  return (
    <div className="letters--of--word--to--guess">
      {letters}
    </div>
  )
}
