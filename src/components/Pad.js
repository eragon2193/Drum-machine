export function Pad(props){

  const playAudio = () => {
    const x  = document.getElementById(props.letter);
    x.volume = props.volume
    x.play();
    props.setInstName(x.dataset.name);
  }
  return (
    <div id={props.id} tabIndex={0} className="drum-pad" onClick={playAudio}>
      <audio preload="auto" data-name={props.id} id={props.letter} src={props.link} className="clip"></audio>
      {props.letter}
    </div>
  )
}