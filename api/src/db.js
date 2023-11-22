require("dotenv").config();
const { Sequelize } = require("sequelize");


const UserModel = require("./models/UserModels/User");
const UserCredentialModel = require("./models/UserModels/UserCredential");
const PersonalDexModel = require("./models/UserModels/PersonalDex");
const PokemonModel = require("./models/PokemonModels/Pokemon");
const PokemonStatsModel = require("./models/PokemonModels/PokemonStatPoints");
const PokemonAbilitiesModel = require("./models/PokemonModels/PokemonAbilities");
const PokemonTypesModel = require("./models/PokemonModels/PokemonTypes");

const { DB_USER, DB_PASSWORD, DB_HOST, BDD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`,
  {
    logging: true,
    native: false,
  }
);
postgres://pokedex_pi_user:60cJrvGhf0JGc1ypJIiGgzuzNgnwT1mR@dpg-cldojkngsrdc73flg8q0-a/pokedex_pi
// INICIALISAMOS LOS MODELOS

UserModel(sequelize);
UserCredentialModel(sequelize);
PersonalDexModel(sequelize);

PokemonModel(sequelize);
PokemonStatsModel(sequelize);
PokemonAbilitiesModel(sequelize);
PokemonTypesModel(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  User,
  UserCredentials,
  PersonalDex,
  Pokemon,
  PokemonStatPoints,
  PokemonTypes,
  PokemonAbilities,
} = sequelize.models;

//
// Aca vendrian las relaciones

// UN USUARIO TIENE UNA UN SOLO JUEGO DE CREDENCIALES
// EL JUEGO DE CREDENCIALES PERTENECE A UN SOLO USUARIO

User.hasOne(UserCredentials, {
  onDelete: "CASCADE",
});
UserCredentials.belongsTo(User);

// UN USUARIO PUEDE TENER MUCHOS POKEDEX
// EL DECK PERTENECE A UN SOLO USUARIO

User.hasOne(PersonalDex);
PersonalDex.belongsTo(User);

//LOS DECKS TIENEN MUCHOS POKEMONS
//UN POKEMOSN PUEDE APARECER EN MUCHOS DECKS

PersonalDex.belongsToMany(Pokemon, {
  through: "dex_pokemon",
  timestamps: false,
});
Pokemon.belongsToMany(PersonalDex, {
  through: "dex_pokemon",
  timestamps: false,
});

// POKEMONS TIENEN UN SET DE STATS
// EL SET DE STATS PERTENECE A UN SOLO POKEMON

Pokemon.hasOne(PokemonStatPoints);
PokemonStatPoints.belongsTo(Pokemon);

// POKEMON PUEDE SER DE VARIOS TIPOS
// EL TIPO REPRESENTA A VARIOS POKEMONS
Pokemon.belongsToMany(PokemonTypes, {
  through: "pokemon_types",
  timestamps: false,
});
PokemonTypes.belongsToMany(Pokemon, {
  through: "pokemon_types",
  timestamps: false,
});

//POKEMON PUEDE TENER HASTA 2 HABILIDADES
//LA HABILIDAD PUEDE PERTENECER A MUCHOS POKEMNO
Pokemon.belongsToMany(PokemonAbilities, {
  through: "pokemon_abilities",
  timestamps: false,
});
PokemonAbilities.belongsToMany(Pokemon, {
  through: "pokemon_abilities",
  timestamps: false,
});

//
// Fin de las Relaciones

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
