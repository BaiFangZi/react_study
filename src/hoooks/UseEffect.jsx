import { useEffect, useState } from 'react'
const App = () => {
  const [list, setList] = useState([])
  const [show, setShow] = useState([])

  const handleClick = () => {
    setShow(!show)
  }
  useEffect(() => {
    console.log(111)
    return ()=>{
      console.log(222)
    }
  },)

  return (
    <>
      <button onClick={handleClick}>点击</button>
      {show ? <div>渲染</div> : <></>}
      <div>useEffect</div>
    </>
  )
}

export default App
