import './App.css'
import JaxGrammar from './JsxGrammar.jsx'
import ListMap from './ListMap.jsx'
import Condition from './Condition'
import Event from './Event.jsx'
import UseState from './hoooks/UseState.jsx'
import UseRef from './hoooks/UseRef'

import Child from './Child.jsx'
import Child1 from './Child1.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const addCount = (msg) => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        <JaxGrammar></JaxGrammar>
        <ListMap></ListMap>
        <Condition></Condition>
        <Event></Event>
      </div>
      <div style={{ marginTop: '200px' }}>
        <UseState></UseState>
        <UseRef></UseRef>
      </div>
      <div style={{ margin: '200px 0' }}>
        <Child onAddCount={addCount} count={count}>
          <span>这是插槽</span>
        </Child>
        <Child1 count={count}></Child1>
      </div>
    </div>
  )
}

export default App
