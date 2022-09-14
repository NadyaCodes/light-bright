import { useState } from "react";
export default function Dot(props) {
  const {color} = props
  // let selectedColor = 'blue'
  const [lightColor, setLightColor] = useState('white')
  // const makeColor = (color) => {
  //   setLightColor(color)
  //   selectedColor = color;
  // }

  const toggleLightColor = (color) => {
    if (color === lightColor) {
      setLightColor('white')
    } else {
      setLightColor(color)
    }
  }
  return(<div className={`dot ${lightColor}`} onClick={() => toggleLightColor(color)}></div>)
}