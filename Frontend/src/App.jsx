import { useState } from 'react'
import NewUser from './pages/NewUser/NewUser'
import Login from './pages/LoginPage/Login'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      {/* <NewUser/> */}
      <Login/>
    </>
  )
}

export default App
