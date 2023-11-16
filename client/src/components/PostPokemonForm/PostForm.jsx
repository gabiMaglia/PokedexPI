import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postNewPokemon } from "../../Redux/Actions/actions";

import TypeIcons from "../TypeIcons/TypeIcons";

import styles from "./postForm.module.css";
import { capitalize } from "../../utils/capitalize";

const PostForm = () => {
  const pokemonTypes = useSelector((store) => store.allTypes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      console.log(nuevasHabilidades)
      return {
        ...prevData,
        PokemonAbilities: nuevasHabilidades,
      };
    });
  };

  const handleTypeChecks = (e) => {
    const { value, checked } = e.target;
    console.log( value, checked )
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
    console.log("postform", pokemonData);
    dispatch(postNewPokemon(pokemonData));
    navigate("/home");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Create New Pokemon</h2>
        <article className={styles.formulario}>
          <p>
            <input
              type="text"
              id="nombre"
              name="pokemon_name"
              value={pokemonData.pokemon_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="nombre">Nombre:</label>
          </p>
          <p>
            <input
              type="url"
              id="imagen"
              name="pokemon_image"
              value={pokemonData.pokemon_image}
              onChange={handleChange}
              required
            />
            <label htmlFor="imagenMain">Imagen (url) :</label>
          </p>
          <div className={styles.statBox}>
            <p>
              <input
                type="number"
                id="vida"
                name="hp"
                value={pokemonData.PokemonStatPoint.hp}
                onChange={handleStatPointChange}
                required
              />
              <label htmlFor="vida">Vida:</label>
            </p>
            <p>
              <input
                type="number"
                id="ataque"
                name="attack"
                value={pokemonData.PokemonStatPoint.attack}
                onChange={handleStatPointChange}
                required
              />
              <label htmlFor="ataque">Ataque:</label>
            </p>
            <p>
              <input
                type="number"
                id="ataque"
                name="special_attack"
                value={pokemonData.PokemonStatPoint.special_attack}
                onChange={handleStatPointChange}
                required
              />
              <label htmlFor="ataque">Ataque Critico:</label>
            </p>
            <p>
              <input
                type="number"
                id="defensa"
                name="defense"
                value={pokemonData.PokemonStatPoint.defense}
                onChange={handleStatPointChange}
                required
              />
              <label htmlFor="defensa">Defensa:</label>
            </p>
            <p>
              <input
                type="number"
                id="defensa"
                name="special_defense"
                value={pokemonData.PokemonStatPoint.special_defense}
                onChange={handleStatPointChange}
                required
              />
              <label htmlFor="defensa">Defensa Critica:</label>
            </p>
            <p>
              <input
                type="number"
                id="velocidad"
                name="speed"
                value={pokemonData.PokemonStatPoint.speed}
                onChange={handleStatPointChange}
              />
              <label htmlFor="velocidad">Velocidad:</label>
            </p>
            
          </div>
          <div>
  
            <p>
              <input
                type="number"
                id="altura"
                name="pokemon_height"
                value={pokemonData.pokemon_height}
                onChange={handleChange}
              />
              <label htmlFor="altura">Altura:</label>
            </p>
  
            <p>
              <input
                type="number"
                id="peso"
                name="pokemon_weight"
                value={pokemonData.pokemon_weight}
                onChange={handleChange}
              />
              <label htmlFor="peso">Peso:</label>
            </p>
  
          </div>


        </article>

        <article className={styles.abilitieForm}>
          <h3>Habilidades:</h3>
          <label>
            Cantidad de habilidades:
            <select
              value={cantidadHabilidades}
              onChange={handleCantidadHabilidadesChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>

          {Array.from({ length: cantidadHabilidades }, (_, index) => (
            <div className={styles.abilitieBox} key={index}>
              <p>
                Nombre de la habilidad:
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
                Número de slots:
                <input
                  type="number"
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
            </div>
          ))}
        </article>

        <article className={styles.typeBox} htmlFor="tipos">
          <h3>Tipos:</h3>
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
                <TypeIcons type={e.nombre_type}></TypeIcons>
                <span>{capitalize(e.nombre_type)}</span>
              </label>
            ))}
          </div>
        </article>

        <button type="submit">Crear Pokemon</button>
      </form>
    </>
  );
};

export default PostForm;
