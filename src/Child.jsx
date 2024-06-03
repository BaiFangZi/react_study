const Child = (props) => {
  const handleClick = () => {
    props.onAddCount()
  }
  return (
    <>
      <div>child count:{props.count}</div>
      <div>{props.children}</div>
      <button onClick={handleClick}>子传父</button>
    </>
  )
}

export default Child
