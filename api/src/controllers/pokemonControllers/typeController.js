const { PokemonTypes } = require("../../db");
const { getTypesFromApi } = require("../api_controllers/apiCallController");

const populatePokemonTypeListDb = async (data) => {
  // USE FOR OF YA QUE DE ESTA FORMA PUEDO ESPERAR DE FORMA SECUENCIAL QUE TODOS
  // LOS TIPOS SE VAYAN AGREGANDO ANTES DE CONTINUAR CON LA EJECUCION
  // DE ESTA MANERA AL AGREGAR UN NUEVO POKEMON Y ESTAR LA LISTA VACIA
  // ESTA SE COMPLETARA ANTES DE TENER QUE HACER LA REFERENCIA Y FUNCIONARA
  for (const type of data) {
    await PokemonTypes.create({
      nombre_type: type,
    });
  }
};

const getPokemonTypeList = async () => {
  let response = await PokemonTypes.findAll();

  if (response.length < 1) {
    const completeTypelist = await getTypesFromApi();
    await populatePokemonTypeListDb(completeTypelist);
    response = await PokemonTypes.findAll();
  }

  return response;
};

module.exports = {
  getPokemonTypeList,
};
