const {
  Pokemon,
  PokemonMoves,
  PokemonAbilities,
  PokemonTypes
} = require("../../db");




const postPokemonHandler = async (req, res) => {
try {
    const  {pokemon_name, pokemon_image, pokemon_basexp, pokemon_evolitions, pokemon_isLocal} = req.body; //POKEMON
    const  {abilitie_name, abilitie_base_level, abilitie_slot} = req.body;  //ABILITIES
    const  {bstat_life, bstat_attack, bstat_defense, bstat_speed, bstat_height, bstat_weight } = req.body;  //BASE STATUS
    const  {effort_life, effort_attack, effort_defense, effort_speed, effort_height, effort_weight } = req.body;  //EFFORT STATUS
    const  {move_name, move_type, move_power, move_accuarcy} = req.body;  //MOVES
    const  {pokemon_type} = req.body;  //MOVES
  
    const newPokemon = await Pokemon.create({
        pokemon_name, 
        pokemon_image, 
        pokemon_basexp, 
        pokemon_evolitions, 
        pokemon_isLocal
    });

    const newPokemonBaseStatus = await newPokemon.createPokemonBaseStatus({
        bstat_life, 
        bstat_attack, 
        bstat_defense, 
        bstat_speed, 
        bstat_height, 
        bstat_weight
      });

    const newPokemonEffortStatus = await newPokemon.createPokemonEffortStatus({
        effort_life, 
        effort_attack, 
        effort_defense, 
        effort_speed, 
        effort_height, 
        effort_weight
      });

      const newPokemonMoves = await PokemonMoves.create({
        move_name, 
        move_type, 
        move_power, 
        move_accuarcy
      });
      const newPokemonAbilities = await PokemonAbilities.create({
        abilitie_name, 
        abilitie_base_level, 
        abilitie_slot, 
      });
      
      const newPokemonTypes = await PokemonTypes.findOne({
       where : {nombre_type: pokemon_type}
      });
    
     


      
      
      newPokemon.addPokemonMoves([newPokemonMoves]);
      newPokemon.addPokemonAbilities([newPokemonAbilities]);
      newPokemon.addPokemonType(newPokemonTypes)
  
      
      newPokemonBaseStatus.bstat_id = newPokemon.id;
      newPokemonEffortStatus.effort_id = newPokemon.id;
      await newPokemonBaseStatus.save();
      await newPokemonEffortStatus.save();

    res.status(200).json(newPokemon)
} catch (error) {
    res.status(500).json(error.message);
}

}




module.exports = {postPokemonHandler}