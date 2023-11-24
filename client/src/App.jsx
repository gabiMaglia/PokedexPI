import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllPokemonTypes,
  fetchAllPokemon,
  fetchAllPokemonbySeason,
  deletePokemonById,
} from "./Redux/Actions/actions";


import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";
import HomePage from "./views/home/HomePage";
import CreatePage from "./views/create/CreatePage";
import DetailPage from "./views/detail/DetailPage";
import LandingPage from "./views/landingPage/LandingPage";
import Error404 from "./views/404/Error404";
import AnimatedBackground from "./components/common/AnimatedBackground";

import { season1 } from "./utils/Seasons";
import { PATH_ROUTES } from "./helpers/pathRoutes";

import "./App.css";
function App() {
  const { limit = 9999, offset = 0 } = season1;
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemonsToShow);
  const allTypes = useSelector((state) => state.allTypes);


  const [loading, setLoadiong] = useState(true);

  let location = useLocation();
  const navigate = useNavigate();

  const detailHandler = (id) => {
    navigate(`/detail/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const deleteHandler = (id) => {
    dispatch(deletePokemonById(id));
  };

  useEffect(() => {
   const fetchData = async () => {
      try {
        if (allTypes.length < 1) {
          setLoadiong(true);
          dispatch(fetchAllPokemonTypes());
          setLoadiong(false);
     
          
        }
  
          setLoadiong(true);
          dispatch(fetchAllPokemonbySeason(limit, offset));
          setLoadiong(false);
       
        return
      } catch (error) {
        console.log("entreAlError")
        setLoadiong(false);
        throw new Error(error);
      }
    };
    
   
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
      <AnimatedBackground />
      <h2>LOADING</h2>
      </>
    )
  }

  return (
    <main className="mainLayout">
      {location.pathname !== "/" ? <NavBar /> : <></>}
      
        <div>
          <Routes>
            <Route path={PATH_ROUTES.LANDING} element={<LandingPage />} />
            <Route
              path={PATH_ROUTES.HOME}
              element={
                <HomePage
                  detailHandler={detailHandler}
                  deleteHandler={deleteHandler}
                  allPokemons={allPokemons}
                />
              }
            />
            <Route
              path={`${PATH_ROUTES.DETAIL}/:id`}
              element={<DetailPage />}
            />
            <Route path={PATH_ROUTES.CREATE_POKEMON} element={<CreatePage />} />
            <Route path={PATH_ROUTES.ERROR} element={<Error404 />} />
          </Routes>
        </div>
      
      {location.pathname !== PATH_ROUTES.LANDING ? <Footer /> : <></>}
    </main>
  );
}

export default App;
