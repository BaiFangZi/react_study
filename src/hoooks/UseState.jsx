import { useState } from 'react'

const UseState = () => {
  let [count, setCount] = useState(1)
  const handleAddCount = () => {
    count++ //简单的修改数据不触发更新
    setCount(count) // 使用`setData`来重新赋值才能触发更新
  }
  const [form, setForm] = useState({
    name: 'Tom'
  })
  const handleChangeName = () => {
    form.name = 'Jerry' //简单的修改数据不触发更新
    setForm({
      ...form,
      name: 'Jerry' // 使用`setData`来重新赋值才能触发更新
    })
  }
  return (
    <>
      <div>使用useState来改变count</div>
      <button onClick={handleAddCount}>Add Count！</button>
      <div>Count值{count}</div>
      <div>使用useState来改变复杂对象t</div>
      <button onClick={handleChangeName}>Change Name！</button>
      <div>Name{form.name}</div>
    </>
  )
}

export default UseState
