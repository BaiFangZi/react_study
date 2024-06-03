const data = ['tom', 'john', 'jerry']
const list = () => {
  return data.map((item) => {
    return <li>{item}</li>
  })
}

const listMap = () => {
  return (
    <>
      {/* <ul>{list()}</ul> */}
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  )
}

export default listMap
