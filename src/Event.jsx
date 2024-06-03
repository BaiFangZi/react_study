let count = 0
const handleClickMe = (val) => {
  console.log(count++)

  // count++
}
const handleClickTom = (val) => {
  console.log(val);

  // count++
}

const Event = () => {
  return (
    <>
      <button onClick={handleClickMe}>click me！</button>
      <button onClick={()=>handleClickTom('tom')}>click tom</button>
    </>
  )
}

export default Event
