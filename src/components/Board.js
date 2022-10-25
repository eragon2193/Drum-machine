import { Pad } from "./Pad"

export function Board(props) {

const padData = [
  {'key':'Q',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'name': 'Heater-1'},
  {'key':'W',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'name': 'Heater-2'},
  {'key':'E',
   'link': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'name': 'Heater-3'},
  {'key':'A',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
   'name': 'Heater-4'},
  {'key':'S',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
   'name': 'Clap'},
  {'key':'D',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
   'name': 'Open-HH'},
  {'key':'Z',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
   'name': 'Kick-n`-Hat'},
  {'key':'X',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
   'name': 'Kick'},
  {'key':'C',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
   'name': 'Closed-HH'}
]
const pads = padData.map(x => 
  <Pad key={x.key} letter={x.key} id={x.name} link={x.link} volume={props.volume}></Pad>
)
  return(
    <div id="display">
      
      <div id="display-pads">{pads}</div>
    </div>
  )
}