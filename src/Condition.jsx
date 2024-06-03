import './style/condition.css'
const condition = true

const Condition = () => {
  return (
    <>
      <div style={{ color: condition ? 'green' : 'red' }}>
        条件渲染样式style
      </div>
      <div className={[condition ? 'green-class' : 'red-class','a']}>
        条件渲染样式class
      </div>
      {condition ? <div>1111</div> : <div>2222</div>}
    </>
  )
}

export default Condition
