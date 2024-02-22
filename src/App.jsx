import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Data from './components/main/Data'
import { Route, Router, Routes } from 'react-router-dom'
import Detail from './pages/detail/Detail'

function App() {

  return (
    <div className='w-full h-screen p-12'>
      <Navbar />


      <Routes>

        <Route path='/' element={<Data />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='main' element={<Main />} />


      </Routes>
    </div>
  )
}

export default App
