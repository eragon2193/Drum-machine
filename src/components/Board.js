import { Pad } from "./Pad"

export function Board(props) {

const padData = [
  {'key':'Q',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {'key':'W',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {'key':'E',
   'link': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',},
  {'key':'A',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',},
  {'key':'S',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',},
  {'key':'D',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  {'key':'Z',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',},
  {'key':'X',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',},
  {'key':'C',
   'link':'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',},
]
const pads = padData.map(x => 
  <Pad key={x.key} letter={x.key} link={x.link} volume={props.volume}></Pad>
)
  return(
    <div id="display">
      {pads}
    </div>
  )
}