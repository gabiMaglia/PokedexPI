const app = require("../../src/app");
const session = require("supertest");
const agent = session(app);
const {Pokemon} = require("../../src/db");
const { conn } = require("../../src/db");

const pokemon = {

    pokemon_name: "gabissssssssorsdadsad",
    pokemon_height: 7,
    pokemon_weight: 69,
    pokemon_image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    PokemonStatPoint: {
      hp: 45,
      attack: 49,
      defense: 49,
      special_attack: 65,
      special_defense: 65,
      speed: 45,
    },
    PokemonAbilities: [
      {
        abilitie_name: "overgrow",
        abilitie_slot: 1,
      },
      {
        abilitie_name: "chlorophyll",
        abilitie_slot: 3,
      },
    ],
    PokemonTypes: [
      {
        nombre_type: "grass",
      },
      {
        nombre_type: "poison",
      },
    ],

};

beforeEach(async () => {
  await conn.sync({ force: true });
});
afterAll(async () => {
  await conn.close();
});
describe("Modelo Pokemon", () => {
  it("debería crear un Pokemon correctamente", async () => {
    const response = await Pokemon.create(pokemon);
    expect(response).toHaveProperty("pokemon_name");
    expect(response).toHaveProperty("pokemon_height");
    expect(response).toHaveProperty("pokemon_weight");
    expect(response).toHaveProperty("pokemon_image");

  });


});
