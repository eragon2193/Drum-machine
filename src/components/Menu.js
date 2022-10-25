

export function Menu(props){
  return(
    <div id="menu">
      <input type="range" id='volume-bar' onInput={props.func}></input>
    </div>
    )
}