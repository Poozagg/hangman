export default function HangmanDrawing() {
  const HEAD = (
    <div className="Hangman--head"></div>
  )
  const BODY = (
    <div className="Hangman--body"></div>
  )
  const LEFTARM = (
    <div className="Hangman--left--arm"></div>
  )
  const RIGHTARM = (
    <div className="Hangman--right--arm"></div>
  )
  const LEFTLEG = (
    <div className="Hangman--left--leg"></div>
  )
  const RIGHTLEG = (
    <div className="Hangman--right--leg"></div>
  )
  return (
    <div className="HangmanDrawing">
      {HEAD}
      {BODY}
      {LEFTARM}
      {RIGHTARM}
      {LEFTLEG}
      {RIGHTLEG}
      <div className="overhang--bar"></div>
      <div className="top--bar"></div>
      <div className="vertical--bar"></div>
      <div className="bottom--bar"></div>
    </div>
  )
}
