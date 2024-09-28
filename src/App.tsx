import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutWebsite from './pages/(website)/layout'
import HomePage from './pages/(website)/home/page'
import LayoutAdmin from './pages/(admin)/layout'
import DashBoard from './pages/(admin)/dashboard/page'
import SignupPage from './pages/(auth)/sigup/page'
import NotFoundPage from './pages/(website)/404/page'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />} >
          <Route index element={<HomePage/> } />
          <Route path='sigup' element={<SignupPage/> } />
        </Route>
        <Route path='admin' element={<LayoutAdmin />} >
          <Route index element={<Navigate to='dashboard'/> } />
          <Route path='dashboard' element={<DashBoard/> } />
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
