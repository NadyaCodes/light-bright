import Options from "./Options"

export default function Colors(props) {
  const {color, setColor} = props
  const colorOptions = ['blue', 'green', 'purple', 'yellow', 'pink']

  const options = colorOptions.map((col, index) => {
    return <div key={index}><Options color={col} setColor={setColor}/></div>
  })
  
  return(<div className='options-container'><span className='options'>{options}</span><span className='current-container'><h2>Current Color: &nbsp;</h2><Options color={color} /></span></div>)
}