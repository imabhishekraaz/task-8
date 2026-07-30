import { useState } from 'react'
import NewUser from './pages/NewUser/NewUser'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import MobileOnlyNotice from './pages/HandleMobileOnly/MobileOnlyNotice'



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <MobileOnlyNotice/>
      {/* <Navbar /> */}
      <NewUser/>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Dashboard /> */}

    </>
  )
}

export default App
