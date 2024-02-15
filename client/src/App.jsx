import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllPokemonTypes,
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

import { PATH_ROUTES } from "./helpers/pathRoutes";
import { season1 } from "./utils/Seasons";
import pikachu from "./assets/gif/pikachu.gif";

import "./App.css";
function App() {
  const { limit = 9999, offset = 0 } = season1;

  const dispatch = useDispatch();
  let location = useLocation();
  const navigate = useNavigate();

  const allTypes = useSelector((state) => state.allTypes);
  const allPokemonsToShow = useSelector((state) => state.allPokemonsToShow);
  const allPokemons = useSelector((state) => state.allPokemonList);

  const [loading, setLoadiong] = useState(true);

  const detailHandler = (id) => {
    navigate(`/detail/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const deleteHandler = (id) => {
    dispatch(deletePokemonById(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadiong(true);

        if (allTypes.length < 1) {
          dispatch(fetchAllPokemonTypes());
        }
        if (!allPokemons.length) {
          dispatch(fetchAllPokemonbySeason(limit, offset));
        }

        if (allPokemons.length > 0) {
          setLoadiong(false);
        }
      } catch (error) {
        console.log("Error occurred:", error);
      }
    };
    fetchData();
  }, [allPokemons, allTypes]);

 

  return (
    loading
    ?
      <>
        <AnimatedBackground />
        <div className="loadingState">
          <img style={{ width: "100px" }} src={pikachu} alt="Loading" />
          <h2>LOADING</h2>
        </div>
      </>

    :
    <main className="mainLayout">
      {location.pathname !== "/" ? <NavBar /> : <></>}

      <Routes>
        <Route path={PATH_ROUTES.LANDING} element={<LandingPage />} />
        <Route
          path={PATH_ROUTES.HOME}
          element={
            <HomePage
              detailHandler={detailHandler}
              deleteHandler={deleteHandler}
              allPokemons={allPokemonsToShow}
            />
          }
        />
        <Route path={`${PATH_ROUTES.DETAIL}/:id`} element={<DetailPage />} />
        <Route path={PATH_ROUTES.CREATE_POKEMON} element={<CreatePage />} />
        <Route path={PATH_ROUTES.ERROR} element={<Error404 />} />
      </Routes>

      {location.pathname !== PATH_ROUTES.LANDING ? <Footer /> : <></>}
    </main>
  );
}

export default App;
