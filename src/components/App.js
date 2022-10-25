import { useState } from "react";
import { Board } from "./Board";
import { Menu } from "./Menu";

function App() {

  const [volume, setVolume] = useState(0.5)

  document.addEventListener('keydown', (e) => {
    const currentAudio = document.getElementById(e.key.toUpperCase())
    if(currentAudio)
    {
      currentAudio.volume = volume
      currentAudio.play();
      document.getElementById('display').innerText = 0;
    }
    else{
      return;
    }
  })  
  
  const VolumeChange = () =>{
    const volumeBar = document.getElementById('volume-bar')
    const x = volumeBar.value / 100;
    setVolume(x)
  }
  return (
    <div id="drum-machine" className="App">
        <Board volume={volume} />

        <Menu func={VolumeChange}/>
    </div>
  );
}

export default App;
 