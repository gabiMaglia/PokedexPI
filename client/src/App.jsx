import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  fetchAllPokemonTypes,
  fetchAllPokemon,
  fetchAllPokemonbySeason,
  setLoading,
} from "./Redux/Actions/actions";

import { useDispatch, useSelector } from "react-redux";

import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";
import HomePage from "./views/home/HomePage";
import CreatePage from "./views/create/CreatePage";
import DetailPage from "./views/detail/DetailPage";
import LandingPage from "./views/landingPage/LandingPage";

import { season1 } from "./utils/Seasons";

import "./App.css";
import Error404 from "./views/404/Error404";

function App() {
  const { limit, offset } = season1;
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemonsToShow);
  const entireListBackup = useSelector((state) => state.AllPokemonBackupList);
  const allTypes = useSelector((state) => state.allTypes);
  const isLoading = useSelector((state) => state.isLoading);

  let location = useLocation();
  const navigate = useNavigate();

  const detailHandler = (id) => {
    navigate(`/detail/${id}`);
  };
  const handleLoading = (state) => {
    dispatch(setLoading(state));
  };

  useEffect(() => {
    handleLoading(true);
    try {
      if (allTypes.length < 1) dispatch(fetchAllPokemonTypes());
      if (allPokemons.length < 1 && entireListBackup.length < 1)
        dispatch(fetchAllPokemonbySeason(limit, offset));
    } catch (error) {
      throw new Error(error);
    }
    handleLoading(false);
  }, [dispatch, allPokemons, isLoading]);

  return (
    <main className="mainLayout">
      {location.pathname !== "/" ? <NavBar /> : <></>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <HomePage detailHandler={detailHandler} allPokemons={allPokemons} />
          }
        />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/createnewpokemon" element={<CreatePage />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
      {location.pathname !== "/" ? <Footer /> : <></>}
    </main>
  );
}

export default App;
