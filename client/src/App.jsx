import { Route, Routes, useNavigate } from "react-router-dom";

import NavBar from './components/NavBar/NavBar.component'
import HomePage from  './views/home/HomePage'
import CreatePage from  './views/create/CreatePage'
import DetailPage from './views/detail/DetailPage'
import LandingPage from './views/landingPage/LandingPage'
import './App.css'


function App() {
  return (
    <div className='App'>
      <main className='mainLayout'>
       <NavBar />
       <Routes>
          <Route path="/" element={<LandingPage/>} />        
          <Route path="/home" element={<HomePage />} />        
          <Route path="/detail/:id" element={ <DetailPage/>} />        
          <Route path="/createnewpokemon" element={ <CreatePage/> } />            
          {/* <Route path="" element='' />         */}
       </Routes>

      </main>

      {/*
       */}
    </div>
  )
}

export default App
