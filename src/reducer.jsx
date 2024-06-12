import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrement, increment, setName, setObjA } from './store/app/index';
import { useState } from 'react'
const Counter = () => {
  const count = useSelector((state) => {
    console.log('select被运行了');
    return state.app.count
  });
  const [inputValue, setInputValue] = useState('')
  const name = useSelector(state => {

    return state.app.name
  }, shallowEqual)
  const dispatch = useDispatch();
  const handleClickInc = () => {
    dispatch(increment())
  }
  const handleClickDec = () => {
    dispatch(decrement())
  }

  const handleChangeName = () => {

    dispatch(setName(inputValue))
  }
  const handleChangeObjA = () => {
    dispatch(setObjA(inputValue),shallowEqual)
  }
  const handleChangeInput = (e) => {
    setInputValue(e.target.value)

  }

  return (
    <>
      <h3>reducer</h3>
      <button onClick={handleClickInc}>Increment</button>
      <button onClick={handleClickDec}>Decrement</button>
      <div> <span>{count}</span></div>
      <h3>改变name</h3>
      <input type="text" value={inputValue} onChange={handleChangeInput} />
      <button onClick={handleChangeName}>改变name</button>
      <button onClick={handleChangeObjA}>改变ObjA</button>
      <div>name：{name}</div>
    </>
  )
}
export default Counter