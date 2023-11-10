import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { fetchAllPokemonTypes, fetchAllPokemon, fetchAllPokemonbySeason } from "./Redux/Actions/actions";

import { useDispatch, useSelector } from "react-redux";

import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";
import HomePage from "./views/home/HomePage";
import CreatePage from "./views/create/CreatePage";
import DetailPage from "./views/detail/DetailPage";
import LandingPage from "./views/landingPage/LandingPage";

import { season1 } from "./utils/Seasons";
import "./App.css";

function App() {
  const {limit, offset} = season1
  
  const dispatch = useDispatch();
  const alltypes = useSelector((state) => state.alltypes);
  let location = useLocation();
  const navigate = useNavigate();
  const detailHandler = (id) => {
    navigate(`/detail/${id}`);
  };

  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    try {
      dispatch(fetchAllPokemonTypes())
      if (allPokemons.length < 1) dispatch(fetchAllPokemonbySeason(limit, offset));
    } catch (error) {
      throw new Error(error);
    }
  }, [dispatch, allPokemons]);

  return (
    <div className="App">
      <main className="mainLayout">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <HomePage
                detailHandler={detailHandler}
              />
            }
          />
          <Route path="/detail/:id" element={<DetailPage/>}  />
          <Route path="/createnewpokemon" element={<CreatePage />} />
          {/* <Route path="" element='' />*/}
        </Routes>
        {location.pathname === "/home" ? <Footer /> : <></>}
      </main>

      {/*
       */}
    </div>
  );
}

export default App;
