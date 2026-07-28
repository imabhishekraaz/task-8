import { useState } from 'react'
import NewUser from './pages/NewUser/NewUser'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <NewUser/>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Dashboard/> */}
      {/* <Navbar/> */}
    </>
  )
}

export default App
