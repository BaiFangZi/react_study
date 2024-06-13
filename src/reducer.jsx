import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrement, increment, setName, setUser } from './store/app/index';
import { useState } from 'react'
const Counter = () => {
  console.log('‘渲染了');
  const count = useSelector((state) => {
    // console.log('select被运行了');
    return state.app.count
  },shallowEqual);
  const [inputValue, setInputValue] = useState('')
  const name = useSelector(state => {

    return state.app.name
  },shallowEqual)
  const user = useSelector((state) => state.app.user,shallowEqual);

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
    dispatch(setUser( { id: 1, name: 'John', age: 30 },))
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
      {/* <div>name：{name}</div> */}
      <div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
    </>
  )
}
export default Counter