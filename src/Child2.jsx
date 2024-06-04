import { useContext } from 'react'
import { ThemeContext } from './Child1'

const Child2 = (props) => {
  const msg = useContext(ThemeContext)
  console.log(msg);
  return (
    <>
      <div>Child2:{msg.name}</div>
      {/* <div>Child2:{msg.age}</div> */}
    </>
  )
}

export default Child2
