/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom'
import MainPage from './MainPage'
import Registration from './Registration'
import Login from './Login'
import NFEPage from './NFEPage'
import Profile from './Profile'
import SearchFilms from './SearchFilms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Routes>
        <Route
          path='/'
          element={<MainPage />} />
        <Route
          path='/sign-up'
          element={
            <Registration 
            name={'sign-up'} />} />
        <Route
          path='/profile'
          element={<Profile />} />
        <Route
          path='/films'
          element={<SearchFilms  films={true}/>} />
          <Route
          path='/saved-films'
          element={<SearchFilms  films={false}/>} />
        <Route
          path='/sign-in'
          element={
            <Login name={'sign-in'} />} />
        <Route path="*" element={<NFEPage />} />
      </Routes>

    </div >
  )
}
export default App