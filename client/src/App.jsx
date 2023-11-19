import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  fetchAllPokemonTypes,
  fetchAllPokemon,
  fetchAllPokemonbySeason,
  setLoading,
  deletePokemonById,
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
import { PATH_ROUTES } from "./helpers/pathRoutes";
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
  const deleteHandler = (id) => {
    dispatch(deletePokemonById(id));
  };
  const handleLoading = (id) => {
    dispatch(setLoading(id));
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
        <Route path={PATH_ROUTES.LANDING} element={<LandingPage />} />
        <Route
          path={PATH_ROUTES.HOME}
          element={
            <HomePage detailHandler={detailHandler} deleteHandler={deleteHandler} allPokemons={allPokemons} />
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
