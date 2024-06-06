import { useEffect, useState } from 'react'
const App = () => {
  const [show, setShow] = useState(true)
  const [status, setStatus] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  useEffect(() => {
    setStatus(show)
    console.log(status);
  }, [show])

  return (
    <>
      <button onClick={handleClick}>点击</button>
      <div>状态：{status?'显示':'隐藏'} </div>
      <div>useEffect</div>
    </>
  )
}

export default App
