import { Route, Routes, useLocation } from "react-router-dom";

import NavBar from './components/NavBar/NavBar.component'
import Footer from './components/Footer/Footer.component'
import HomePage from  './views/home/HomePage'
import CreatePage from  './views/create/CreatePage'
import DetailPage from './views/detail/DetailPage'
import LandingPage from './views/landingPage/LandingPage'
import './App.css'


function App() {

  let location = useLocation();
 
  return (
    <div className='App'>
      <main className='mainLayout'>
       <NavBar />
       <Routes>
          <Route path="/" element={<LandingPage/>} />        
          <Route path="/home" element={<HomePage />} />        
          <Route path="/detail/:id" element={ <DetailPage/>} />        
          <Route path="/createnewpokemon" element={ <CreatePage/> } />            
          {/* <Route path="" element='' />*/}
       </Routes>
       {
       location.pathname === '/home'?  <Footer/>: <></>

       }

      </main>

      {/*
       */}
    </div>
  )
}

export default App
