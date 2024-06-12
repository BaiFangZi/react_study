import { useSelector } from 'react-redux'


const count = 11
const getCount = () => {
  return count
}

const JsxGrammar = () => {
  // const count = useSelector(state => state.app.count)
  const count1 = useSelector((state) => {
    console.log(state);
    return state.app.count
  });
  return (
    <>
      <div>reducer的值： {count1}</div>
      <div>文本：这是文本</div>
      <div>变量： {count}</div>
      <div>方法 {getCount()}</div>
    </>
  )
}

export default JsxGrammar
