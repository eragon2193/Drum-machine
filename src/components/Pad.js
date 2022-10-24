export function Pad(props){

  const x  = document.getElementById(props.letter);
  const playAudio = () => {
    x.volume = props.volume
    x.play();
  }
  return (
    <div tabIndex={0} className="drum-pad" onClick={playAudio}>
      <audio id={props.letter} src={props.link} className="clip"></audio>
      {props.letter}
    </div>
  )
}