
export function Menu(props){
  return(
    <div id="menu">
      <div id='onOffButton'>
        <div id='button'></div>
      </div>
      <input type="range" id="volume-bar" onInput={props.func}></input>
    </div>
  )
}