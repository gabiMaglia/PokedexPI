const pokemonJsonFormatter = async (data) => {
    const { id, name, base_experience, height, weight, stats } = data;
  
    const statList = {}
    stats.forEach((e) => {
      e.stat.name = e.stat.name.replace(/-/g, "_") // remplaza los guiones medios por bajos
      statList[e.stat.name] = e.base_stat
    })
  
    const abilitiesList = [];
    data.abilities.forEach((e) => {
      abilitiesList.push({
        abilitie_name: e.ability.name,
        abilitie_slot: e.slot,
      });
    });
  
    const typeList = [];
    data.types.forEach((e) => {
      typeList.push({
        nombre_type: e.type.name,
      });
    });
    
    const newPokemon = {
      pokemon_id: id,
      pokemon_name: name,
      pokemon_height: height,
      pokemon_weight: weight,
      pokemon_image: data.sprites.back_default,
      pokemon_basexp: base_experience,
      PokemonStatPoint: statList,
      PokemonAbilities: abilitiesList,
      PokemonTypes: typeList,
    };
    return newPokemon;
  };

  module.exports = {pokemonJsonFormatter}