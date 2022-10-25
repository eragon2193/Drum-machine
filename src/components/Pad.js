export function Pad(props){

  const playAudio = () => {
    const x  = document.getElementById(props.letter);
    x.volume = props.volume
    x.play();
  }
  return (
    <div id={props.id} ref={props.letter} tabIndex={0} className="drum-pad" onClick={playAudio}>
      <audio id={props.letter} src={props.link} className="clip"></audio>
      {props.letter}
    </div>
  )
}