const createNewPokemonAbilities = async (model, data) => {
  
    const newPokemonAbilities= []

    for (abilitie of data) {
        const newPokemonAbility = await model.create({
            abilitie_name: abilitie.abilitie_name, 
            abilitie_slot: abilitie.abilitie_slot
        });
        newPokemonAbilities.push(newPokemonAbility)
    }    
    
    return newPokemonAbilities;
};
   
  
  
  module.exports = createNewPokemonAbilities;
  