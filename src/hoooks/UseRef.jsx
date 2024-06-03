import { useRef } from 'react'

const UseRef = () => {
  const divRef = useRef(null)
  const handleGetDom = () => {
    console.log(divRef)
    console.log(divRef.current)
  }

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={handleGetDom}>获取dom</button>
    </>
  )
}

export default UseRef
