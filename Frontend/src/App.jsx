import NewUser from './pages/NewUser/NewUser'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import MobileOnlyNotice from './pages/HandleMobileOnly/MobileOnlyNotice'
import CreateTask from './pages/CreateTask/CreateTask'
import NotFound from './pages/NotFound/NotFound'
import FloatingMenu from './components/FloatingMenu/FloatingMenu'
import EditTask from './components/EditTask/EditTask'



function App() {

  return (

    <>
      <MobileOnlyNotice/>
      {/* <Navbar /> */}
      <FloatingMenu/>
      {/* <NewUser/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Dashboard /> */}
      {/* <CreateTask/> */}
      {/* <NotFound/> */}
      <EditTask/>

    </>
  )
}

export default App
