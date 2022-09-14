
export default function Options(props) {
  const {color, setColor} = props
  return(<div className={`big-dot ${color}`} onClick={() => setColor(color)}></div>)
}