const count = 11
const getCount = () => {
  return count
}

const jsxGrammar = () => {
  return (
    <>
      <div>文本：这是文本</div>
      <div>变量： {count}</div>
      <div>方法 {getCount()}</div>
    </>
  )
}

export default jsxGrammar
