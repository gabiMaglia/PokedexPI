const createNewPokemonMoves = async (model, data) => {
    const {
        move_name, 
        move_type, 
        move_power, 
        move_accuarcy
    } = data; 
    const newPokemonMoves = await model.create({
        move_name, 
        move_type, 
        move_power, 
        move_accuarcy
    });
  
    return newPokemonMoves;
  };
  
  module.exports = createNewPokemonMoves;
  