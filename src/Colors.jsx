import Options from "./Options"

export default function Colors(props) {
  const {color, setColor} = props
  const colorOptions = ['blue', 'green', 'purple']

  const options = colorOptions.map((col, index) => {
    return <div key={index}><Options color={col} setColor={setColor}/></div>
  })
  return(<div className='options-container'>{options}<h2>Current Color: <Options color={color} /></h2></div>)
}