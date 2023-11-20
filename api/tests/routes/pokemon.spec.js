/* eslint-disable import/no-extraneous-dependencies */
const { default: axios } = require("axios");
const app = require("../../src/app");
const session = require("supertest");
const agent = session(app);

const pokemon = {
  data: {
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
  },
};

describe("Test de RUTAS", () => {
  describe("GET /poke", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/poke").expect(200);
    });

    it("Responde un objeto con la propiedad response y dentro tiene otra propiedad que se llama allPokemons que contiene un array", async () => {
      const response = await agent.get("/poke");
      expect(response.body).toHaveProperty("response");
      expect(Array.isArray(response.body.response.allPokemons)).toBe(true);
    });
  });
  describe("GET /poke/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/poke/1").expect(200);
      await agent.get("/poke/12").expect(200);
      await agent.get("/poke/123").expect(200);
    });

    it('Responde un objeto con las propiedades: "pokemon_name", "pokemon_height", "pokemon_weight", "pokemon_image", PokemonStatPoint, PokemonAbilities, PokemonTypes ', async () => {
      const response = await agent.get("/poke/12");
      expect(response.body.response).toHaveProperty("pokemon_name");
      expect(response.body.response).toHaveProperty("pokemon_height");
      expect(response.body.response).toHaveProperty("pokemon_weight");
      expect(response.body.response).toHaveProperty("pokemon_image");
      expect(response.body.response).toHaveProperty("PokemonStatPoint");
      expect(response.body.response).toHaveProperty("PokemonAbilities");
      expect(response.body.response).toHaveProperty("PokemonTypes");
    });

    it("Si recibe dato erroneo, no numerico o fuera del rango responde con status: 404", async () => {
      await agent.get("/poke/99999999").expect(404);
      await agent.get("/poke/-23").expect(404);
      await agent.get("/poke/sad").expect(404);
      await agent.get("/poke/Dsadsadada").expect(404);
    });
  });

  describe("GET /poke/name", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/poke/name/?name=pikachu").expect(200);
      await agent.get("/poke/name/?name=raichu").expect(200);
    });

    it('Responde un objeto con las propiedades: "pokemon_name", "pokemon_height", "pokemon_weight", "pokemon_image", PokemonStatPoint, PokemonAbilities, PokemonTypes ', async () => {
      const response = await agent.get("/poke/name/?name=pikachu");
      expect(response.body.response).toHaveProperty("pokemon_name");
      expect(response.body.response).toHaveProperty("pokemon_height");
      expect(response.body.response).toHaveProperty("pokemon_weight");
      expect(response.body.response).toHaveProperty("pokemon_image");
      expect(response.body.response).toHaveProperty("PokemonStatPoint");
      expect(response.body.response).toHaveProperty("PokemonAbilities");
      expect(response.body.response).toHaveProperty("PokemonTypes");
    });

    it("Si recibe un numero donde va el name, busca por id y me devuelve status: 200", async () => {
      await agent.get("/poke/name/?name=133").expect(200);
    });

    it("Si recibe dato erroneo, no numerico o fuera del rango responde con status: 404", async () => {
      await agent.get("/poke/name/?name=pikasdadadasdsadchu").expect(404);
    });
  });

  describe("GET /poke/get-types", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/poke/get-types").expect(200);
    });

    it('Responde un objeto con las propiedad "response" y dentro un array', async () => {
      const response = await agent.get("/poke/get-types");
      expect(response.body).toHaveProperty("response");
      expect(Array.isArray(response.body.response)).toBe(true);
    });
  });

  describe("POST /poke", () => {
    it("Should return an Object whit a property call taskIsCompleted whit the value of true  ", async () => {
      const response = await agent.post("/poke").send(pokemon);
      expect(response.body.taskIsCompleted).toBe(true);
    });

    it('Responde un objeto con las propiedades: "pokemon_name", "pokemon_height", "pokemon_weight", "pokemon_image", PokemonStatPoint, PokemonAbilities, PokemonTypes ', async () => {
      const response = await agent.post("/poke").send(pokemon);
      console.log(response.body)
      expect(response.body.response).toHaveProperty("pokemon_name");
      expect(response.body.response).toHaveProperty("pokemon_height");
      expect(response.body.response).toHaveProperty("pokemon_weight");
      expect(response.body.response).toHaveProperty("pokemon_image");
      expect(response.body.response).toHaveProperty("PokemonStatPoint");
      expect(response.body.response).toHaveProperty("PokemonAbilities");
      expect(response.body.response).toHaveProperty("PokemonTypes");
    });

  });
});
