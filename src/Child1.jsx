// // import { useContext } from 'react'
// // // import Child1 from './Child1'
// // import { MsgContext } from './Child1'

// // const Child2 = () => {
// //   const msg= useContext(MsgContext)

// //   return (
// //     <>
// //       <div>MSG:{msg}</div>
// //     </>
// //   )
// // }
// // export default Child2

// import { useContext, createContext } from 'react'
// const PreferencesContext = createContext()
// function Component1() {
//   const userPreferences = useContext(PreferencesContext)
//   return (
//     <>
//       <div>component1{userPreferences.name} </div>
//     </>
//   )
//   // ...
// }
// function Component2() {
//   const userPreferences = useContext(PreferencesContext)
//   return (
//     <>
//       <div>component2:{userPreferences.name} </div>
//     </>
//   )
//   // ...
// }

// function Child2() {
//   const userPreferences = { name: 'John', age: 30 }
//   return (
//     <PreferencesContext.Provider value={userPreferences}>
//       <Component1 />
//       <Component2 />
//     </PreferencesContext.Provider>
//   )
// }

// export default Child2

import { createContext, useContext, useState } from 'react'
import Child2 from './Child2.jsx'
import Child3 from './Child3.jsx'
export const ThemeContext = createContext({
  name: 'Tom'
})

export const CountContext = createContext(0)


export default function MyApp() {
  const userPreferences = { name: 'John', age: 30 }
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      
      <ThemeContext.Provider value={userPreferences}>
        <Child2 />
      </ThemeContext.Provider>
      <CountContext.Provider value={count}>
        <Child3></Child3>
        <button onClick={handleClick}>provider动态</button>
      </CountContext.Provider>
    </>
  )
}

// function Form() {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }
