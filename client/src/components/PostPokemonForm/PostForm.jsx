import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewPokemon } from "../../Redux/Actions/actions";
import styles from "./postForm.module.css";

const PostForm = () => {
  const pokemonTypes = useSelector((store) => store.allTypes);
  const dispatch = useDispatch();
  const [pokemonData, setPokemonData] = useState({
    pokemon_name: "gabisor",
    pokemon_image: "http://www.dsadad.com",
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
      const nuevasHabilidades = [prevData.PokemonAbilities];

      for (
        let i = nuevaCantidad + 1;
        i <= Object.keys(nuevasHabilidades).length;
        i++
      ) {
        delete nuevasHabilidades[i];
      }
      return {
        ...prevData,
        PokemonAbilities: nuevasHabilidades,
      };
    });
  };

  const handleAbilitiesInputChange = (index, tipo, valor) => {

    setPokemonData((prevData) => {
      const nuevasHabilidades = {
        ...prevData.PokemonAbilities,
        [index]: { ...prevData.PokemonAbilities[index], [tipo]: valor },
      };
      // parseo aca abajo porque no tengo ni idea de como funciona la funcion de arriba jajaja
      const nuevoArrDeHabilidades = []
      for (const nuevasHabilidad in nuevasHabilidades ){
       nuevoArrDeHabilidades.push( nuevasHabilidades[nuevasHabilidad])
      }


      return {
        ...prevData,
        PokemonAbilities: nuevoArrDeHabilidades,
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
      : 
        setPokemonData({
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
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.createPokemonForm}>
        <label htmlFor="nombre">
          Nombre:
          <input
            type="text"
            id="nombre"
            name="pokemon_name"
            value={pokemonData.pokemon_name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="imagen">
          Imagen (URL):
          <input
            type="url"
            id="imagen"
            name="pokemon_image"
            value={pokemonData.pokemon_image}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="vida">
          Vida:
          <input
            type="number"
            id="vida"
            name="hp"
            value={pokemonData.PokemonStatPoint.hp}
            onChange={handleStatPointChange}
            required
          />
        </label>
        <label htmlFor="ataque">
          Ataque:
          <input
            type="number"
            id="ataque"
            name="attack"
            value={pokemonData.PokemonStatPoint.attack}
            onChange={handleStatPointChange}
            required
          />
        </label>
        <label htmlFor="ataque">
          Ataque Critico:
          <input
            type="number"
            id="ataque"
            name="special_attack"
            value={pokemonData.PokemonStatPoint.special_attack}
            onChange={handleStatPointChange}
            required
          />
        </label>
        <label htmlFor="defensa">
          Defensa:
          <input
            type="number"
            id="defensa"
            name="defense"
            value={pokemonData.PokemonStatPoint.defense}
            onChange={handleStatPointChange}
            required
          />
        </label>
        <label htmlFor="defensa">
          Defensa Critica:
          <input
            type="number"
            id="defensa"
            name="special_defense"
            value={pokemonData.PokemonStatPoint.special_defense}
            onChange={handleStatPointChange}
            required
          />
        </label>
        <label htmlFor="velocidad">
          Velocidad:
          <input
            type="number"
            id="velocidad"
            name="speed"
            value={pokemonData.PokemonStatPoint.speed}
            onChange={handleStatPointChange}
          />
        </label>
        <label htmlFor="altura">
          Altura:
          <input
            type="number"
            id="altura"
            name="pokemon_height"
            value={pokemonData.pokemon_height}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="peso">
          Peso:
          <input
            type="number"
            id="peso"
            name="pokemon_weight"
            value={pokemonData.pokemon_weight}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="abilities">Habilidades:</label>
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

        {
        Array.from({ length: cantidadHabilidades }, (_, index) => (
          <div key={index}>
            <label>
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
            </label>

            <label>
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
            </label>
          </div>
        ))       
        }
        <label htmlFor="tipos">
          Tipos:
          {pokemonTypes.map((e, key) => (
            <label key={key} className={styles.typeLabel}>
              <input
                type="checkbox"
                name="tipos"
                value={e.nombre_type}
                onChange={handleTypeChecks}
                checked={e.checked}
                className={styles.typeInput}
              />
              {e.nombre_type}
            </label>
          ))}
        </label>
        <button type="submit">Crear Pokemon</button>
      </form>
    </section>
  );
};


export default PostForm;
