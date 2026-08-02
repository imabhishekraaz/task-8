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
import AllTasks from './pages/AllTasks/AllTasks'
import TaskDetails from './pages/TaskDetails/TaskDetails'
import Profile from './pages/Profile/Profile'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'



function App() {

  return (

    <>
      <MobileOnlyNotice />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/welcome' element={<NewUser />} />
          <Route path='/not-found' element={<NotFound />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add-task' element={<CreateTask />} />
            <Route path='/all-tasks' element={<AllTasks />} />
            <Route path='/task-details' element={<TaskDetails />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/edit-task' element={<EditTask />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
