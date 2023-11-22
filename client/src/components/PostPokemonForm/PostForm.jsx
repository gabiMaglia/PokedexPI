import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemonbySeason, postNewPokemon } from "../../Redux/Actions/actions";


import TypeIcons from "../TypeIcons/TypeIcons";

import styles from "./postForm.module.css";
import { capitalize } from "../../utils/capitalize";
import NavBtn from "../common/navBtn ";
import PageLabel from "../common/pageLabel";
import { season1 } from "../../utils/Seasons";
const PostForm = () => {
  const pokemonTypes = useSelector((store) => store.allTypes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { limit = 9999, offset = 0 } = season1
  const [pokemonData, setPokemonData] = useState({
    pokemon_name: "gabisor",
    pokemon_image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    pokemon_height: "4",
    pokemon_weight: "4",
    PokemonStatPoint: {
      hp: "2",
      attack: "3",
      special_attack: "4",
      defense: "3",
      special_defense: "3",
      speed: "3",
    },
    PokemonAbilities: [],
    PokemonTypes: [],
  });

  const [cantidadHabilidades, setCantidadHabilidades] = useState(1);

  const handleCantidadHabilidadesChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    setCantidadHabilidades(nuevaCantidad);

    setPokemonData((prevData) => {
      const nuevasHabilidades = [];

      for (let i = 0; i < nuevaCantidad; i++) {
        nuevasHabilidades.push({
          abilitie_name: "",
          abilitie_slot: 0,
        });
      }

      return {
        ...prevData,
        PokemonAbilities: nuevasHabilidades,
      };
    });
  };

  const handleAbilitiesInputChange = (index, tipo, valor) => {
    setPokemonData((prevData) => {
      const nuevasHabilidades = [...prevData.PokemonAbilities];
      nuevasHabilidades[index] = {
        ...nuevasHabilidades[index],
        [tipo]: valor,
      };

      return {
        ...prevData,
        PokemonAbilities: nuevasHabilidades,
      };
    });
  };

  const handleTypeChecks = (e) => {
    const { value, checked } = e.target;

    checked
      ? setPokemonData((prevData) => ({
          ...prevData,
          PokemonTypes: [...prevData.PokemonTypes, { nombre_type: value }],
        }))
      : setPokemonData({
          ...pokemonData,
          PokemonTypes: [
            pokemonData.PokemonTypes.filter((e) => e.nombre_type != value),
          ],
        });
  };

  const handleStatPointChange = (e) => {
    const { name, value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      PokemonStatPoint: { ...prevData.PokemonStatPoint, [name]: value },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewPokemon(pokemonData));
    
    // dispatch(fetchAllPokemonbySeason(limit, offset));

    navigate("/home");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.col1}>
          <article className={styles.statForm}>
            <PageLabel content={<h3>New Pokemon details</h3>} />

            <div className={styles.nameImg}>
              <p>
                <label htmlFor="nombre">
                  Name:
                  <input
                    type="text"
                    id="nombre"
                    name="pokemon_name"
                    value={pokemonData.pokemon_name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </p>

              <p>
                <label htmlFor="imagenMain">
                  Image (url) :
                  <input
                    type="url"
                    id="imagen"
                    name="pokemon_image"
                    value={pokemonData.pokemon_image}
                    onChange={handleChange}
                    required
                  />
                </label>
              </p>
            </div>
            <h4>Stats</h4>
            <div className={styles.statBox}>
              <div>
                <p>
                  <label htmlFor="vida">
                    Life
                    <input
                      type="number"
                      id="vida"
                      name="hp"
                      min={"1"}
                      max={"714"}
                      value={pokemonData.PokemonStatPoint.hp}
                      onChange={handleStatPointChange}
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="velocidad">
                    Speed
                    <input
                      type="number"
                      id="velocidad"
                      name="speed"
                      min={"1"}
                      max={"300"}
                      value={pokemonData.PokemonStatPoint.speed}
                      onChange={handleStatPointChange}
                    />
                  </label>
                </p>
              </div>

              <div>
                <p>
                  <label htmlFor="ataque">
                    Attaque
                    <input
                      type="number"
                      id="ataque"
                      name="attack"
                      min={"1"}
                      max={"300"}
                      value={pokemonData.PokemonStatPoint.attack}
                      onChange={handleStatPointChange}
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="special_attack">
                    Critical attack
                    <input
                      type="number"
                      id="special_attack"
                      name="special_attack"
                      min={"1"}
                      max={"380"}
                      value={pokemonData.PokemonStatPoint.special_attack}
                      onChange={handleStatPointChange}
                      required
                    />
                  </label>
                </p>
              </div>

              <div>
                <p>
                  <label htmlFor="defensa">
                    Defense
                    <input
                      type="number"
                      id="defensa"
                      name="defense"
                      value={pokemonData.PokemonStatPoint.defense}
                      onChange={handleStatPointChange}
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="special_defense">
                    Critical defense
                    <input
                      type="number"
                      id="special_defense"
                      name="special_defense"
                      value={pokemonData.PokemonStatPoint.special_defense}
                      onChange={handleStatPointChange}
                      required
                    />
                  </label>
                </p>
              </div>
            </div>

            <div className={styles.breeding}>
              <p>
                <label htmlFor="altura">
                  Height
                  <input
                    type="number"
                    id="altura"
                    name="pokemon_height"
                    value={pokemonData.pokemon_height}
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label htmlFor="peso">
                  Weigth
                  <input
                    type="number"
                    id="peso"
                    name="pokemon_weight"
                    value={pokemonData.pokemon_weight}
                    onChange={handleChange}
                  />
                </label>
              </p>
            </div>
          </article>

          <article style={{marginTop : '1rem'}}  className={styles.abilitieForm}>
            <PageLabel content={<div>Abilities:</div>} />

            <label style={{marginTop : '1rem'}}>
              How many?:
              <select
                value={cantidadHabilidades}
                onChange={handleCantidadHabilidadesChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </label>
            <div className={styles.abilitieBox}>
              {Array.from({ length: cantidadHabilidades }, (_, index) => (
                <p key={index}>
                  Habilitie:
                  <input
                    type="text"
                    value={
                      (pokemonData.PokemonAbilities[index] &&
                        pokemonData.PokemonAbilities[index].abilitie_name) ||
                      ""
                    }
                    onChange={(e) =>
                      handleAbilitiesInputChange(
                        index,
                        "abilitie_name",
                        e.target.value
                      )
                    }
                  />
                  Slots
                  <input
                    type="number"
                    min={1}
                    max={3}
                    value={
                      (pokemonData.PokemonAbilities[index] &&
                        pokemonData.PokemonAbilities[index].abilitie_slot) ||
                      0
                    }
                    onChange={(e) =>
                      handleAbilitiesInputChange(
                        index,
                        "abilitie_slot",
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                </p>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.col2}>
          <article className={styles.typeBox} htmlFor="tipos">
          <PageLabel content={<p>Types (3 max):</p>} />   
            <div className={styles.typeChart}>
              {pokemonTypes.map((e, key) => (
                <label key={key} className={styles.typeIcon}>
                  <input
                    type="checkbox"
                    name="tipos"
                    value={e.nombre_type}
                    onChange={handleTypeChecks}
                    checked={e.checked}
                    className={styles.typeInput}
                  />
                  <TypeIcons type={e.nombre_type} bg={true}></TypeIcons>
                  <span>{capitalize(e.nombre_type)}</span>
                </label>
              ))}
            </div>
          </article>
          <span className={styles.submitBtn}>
            <NavBtn content={"Create Pokemon"} type="submit" />
          </span>
        </div>
      </form>
    </>
  );
};

export default PostForm;
