import Dot from './Dot'

export default function LightGrid(props) {

  const dotArray = []

  for (let i = 0; i < 2520; i++) {
    dotArray.push(<Dot color={props.color}/>)
  }

  const dotGrid = dotArray.map((dot, index) => {
   return  <div key={index}>{dot}</div>
  })
  return(<div className='grid-container'><div className='dot-grid'>{dotGrid}</div></div>)
}