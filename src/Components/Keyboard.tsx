export default function Keyboard() {
  const KEY = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97).toUpperCase()
  );
  // returns ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  return (
    <div className="keyboard">
      {KEY.map((letter) => (
        <button
          key={letter}
          className="key--button"
        >
          {letter}
        </button>
      ))}
    </div>
  )
}
