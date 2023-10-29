const createNewPokemonAbilities = async (model, data) => {
    const {
        abilitie_name, 
        abilitie_base_level,
        abilitie_slot
    } = data; //BASE STATUS
    const newPokemonAbilities = await model.create({
        abilitie_name, 
        abilitie_base_level,
        abilitie_slot
    });
  
    return newPokemonAbilities;
  };
  
  module.exports = createNewPokemonAbilities;
  