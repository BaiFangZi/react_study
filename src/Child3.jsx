import { useContext } from 'react'
import { CountContext } from './Child1'

const Child3 = (props) => {
  const count = useContext(CountContext)
  return (
    <>
      <div>Child3:{count}</div>
    </>
  )
}

export default Child3
