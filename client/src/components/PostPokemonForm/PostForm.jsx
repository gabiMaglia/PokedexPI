import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './postForm.module.css'

const PostForm = () => {
    const pokemonTypes = useSelector(store => store.allTypes)

    const [formData, setFormData] = useState({
      pokemon_name: '',
      pokemon_image: '',
      hp: '',
      attack: '',
      special_attack: '',
      defensa: '',
      special_defensa: '',
      speed: '',
      pokemon_height: '',
      pokemon_weight: '',
      tipos: [],
    });

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleTiposChange = (e) => {
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData((prevData) => ({
        ...prevData,
        tipos: selectedOptions,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Datos del formulario:', formData);
    };
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="pokemon_name" value={formData.nombre} onChange={handleChange} required />
  
        <label htmlFor="imagen">Imagen (URL):</label>
        <input type="url" id="imagen" name="pokemon_image" value={formData.imagen} onChange={handleChange} required />
  
        <label htmlFor="vida">Vida:</label>
        <input type="number" id="vida" name="hp" value={formData.vida} onChange={handleChange} required />
  
        <label htmlFor="ataque">Ataque:</label>
        <input type="number" id="ataque" name="attack" value={formData.ataque} onChange={handleChange} required />
  
        <label htmlFor="ataque">Ataque Critico:</label>
        <input type="number" id="ataque" name="special_attack" value={formData.ataque} onChange={handleChange} required />
  
        <label htmlFor="defensa">Defensa:</label>
        <input type="number" id="defensa" name="defense" value={formData.defensa} onChange={handleChange} required />
        
        <label htmlFor="defensa">Defensa Critica:</label>
        <input type="number" id="defensa" name="special_defense" value={formData.defensa} onChange={handleChange} required />
  
        <label htmlFor="velocidad">Velocidad:</label>
        <input type="number" id="velocidad" name="speed" value={formData.velocidad} onChange={handleChange} />
  
        <label htmlFor="altura">Altura:</label>
        <input type="number" id="altura" name="pokemon_height" value={formData.altura} onChange={handleChange} />
  
        <label htmlFor="peso">Peso:</label>
        <input type="number" id="peso" name="pokemon_weight" value={formData.peso} onChange={handleChange} />
  
        <label htmlFor="tipos">Tipos (selecciona varios manteniendo presionada la tecla Ctrl):</label>
        <select multiple id="tipos" name="tipos" value={formData.tipos} onChange={handleTiposChange}>
          {
            pokemonTypes.map((e, key) => {
              return <option key={key} value={e.nombre_type}>{e.nombre_type}</option>
            })
          }
        </select>
  
        <button type="submit">Crear Pokemon</button>

      </form>
      </>
    )
  }


export default PostForm